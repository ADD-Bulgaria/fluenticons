import fs from 'fs/promises';
import path from 'path';
import glob from 'fast-glob';
import { optimize, type Config as SvgoConfig } from 'svgo';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// --- Configuration ---
const ICON_TYPE_NAME = 'IconProps';
const ICON_VARIANT_TYPE_NAME = 'IconVariant';
const ICON_TYPE_PATH = './types'; // Relative path from generated component to types file

const DEFAULT_INPUT_DIR = './microsoft/assets/'; // Directory containing SVG source files
const DEFAULT_OUTPUT_DIR = './src/icons'; // Directory to output generated React components
const DEFAULT_TYPES_FILE = 'types.ts'; // Name of the types file within output dir

// --- Utility Functions ---

/** Convert string to PascalCase and normalize casing for known words */
function toPascalCase(str: string): string {
    // First convert to standard PascalCase
    const pascalCase = str
        .toLowerCase()
        .replace(/([-_][a-z0-9])/g, (group) =>
            group.toUpperCase().replace('-', '').replace('_', '')
        )
        .replace(/^[a-z]/, (char) => char.toUpperCase());

    // Define word mappings for consistent casing
    const wordMappings: Record<string, string> = {
        'Textbox': 'TextBox',
        'Reorder': 'ReOrder',
        'Align': 'Align',
        'Bottom': 'Bottom',
        'Center': 'Center',
        'Left': 'Left',
        'Right': 'Right',
        'Middle': 'Middle',
        'Top': 'Top',
        'Rotate': 'Rotate',
        'Settings': 'Settings',
        'More': 'More',
        'Checkmark': 'Checkmark'
    };

    // Apply word mappings to ensure consistent casing
    return pascalCase.split(/(?=[A-Z])/).map(word => {
        const normalized = wordMappings[word];
        return normalized || word;
    }).join('');
}

/** Escape backticks and ${} for template literals */
const escapeTemplateLiteral = (str: string) => str.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

/** Generate the TypeScript code for a React icon component with multiple variants */
function generateComponentCode(
  componentName: string,
  variantContents: Record<string, { innerContent: string; viewBox: string | null }>,
  availableVariants: string[],
  iconTypeName: string,
  iconVariantTypeName: string,
  iconTypePath: string,
): string {
  const defaultVariant = availableVariants.includes('regular')
    ? 'regular'
    : availableVariants.includes('filled')
    ? 'filled'
    : availableVariants[0];

  const defaultViewBox = variantContents[defaultVariant]?.viewBox || variantContents[availableVariants[0]]?.viewBox || '0 0 24 24';

  const svgContentMapEntries = availableVariants.map(variant => {
    const content = variantContents[variant]?.innerContent || '';
    return `'${variant}': \`${escapeTemplateLiteral(content)}\``;
  });

  const variantType = availableVariants.map(v => `'${v}'`).join(' | ');

  return `import type { ${ICON_TYPE_NAME} } from '${iconTypePath}';

const svgContent = {
  ${svgContentMapEntries.join(',\n  ')}
} as const;

export default function ${componentName}({ 
  variant = '${defaultVariant}',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<${ICON_TYPE_NAME}, 'variant'> & { variant?: ${variantType} }) {
  const width = typeof size === 'number' ? \`\${size}px\` : size;
  const height = typeof size === 'number' ? \`\${size}px\` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${defaultViewBox}"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['${defaultVariant}'] || '' }} />
      </svg>
    );
  }

  const gradientId = '${componentName.toLowerCase()}_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="${defaultViewBox}"
      fill={\`url(#\${gradientId})\`}
      className={className}
      style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%" y1="0%" x2="100%" y2="0%"
          gradientTransform={gradient.angle !== undefined ? \`rotate(\${gradient.angle})\` : undefined}
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['${defaultVariant}'] || '' }} />
    </svg>
  );
}`;
}


// --- SVGO Configuration ---
const svgoConfig: SvgoConfig = {
  multipass: true,
  plugins: [
    { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
    { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }, // Remove fill and stroke attributes
    { name: 'addAttributesToSVGElement', params: { attributes: [{ focusable: 'false' }] } },
    { name: 'removeDimensions' },
    { name: 'removeXMLNS' },
    { name: 'cleanupIds' },
  ],
};

// --- Type Definitions for Grouping ---
interface IconMetadata {
    name: string;
    variants: string[];
    sizes: number[];
}

interface IconsManifest {
    icons: IconMetadata[];
    totalIcons: number;
    availableVariants: string[];
}

interface IconSizeInfo {
    variants: Record<string, string>; // styleName -> svgPath (e.g., { filled: 'path', regular: 'path', color: 'path' })
}
type IconSizeMap = Map<number, IconSizeInfo>;
type IconGroupMap = Map<string, IconSizeMap>; // iconName -> size -> IconSizeInfo

// --- Main Script Logic ---

async function run() {
    // --- CLI Arguments Parsing ---
    const argv = await yargs(hideBin(process.argv))
        .option('input', { alias: 'i', type: 'string', description: 'Directory containing SVG source files', default: DEFAULT_INPUT_DIR })
        .option('output', { alias: 'o', type: 'string', description: 'Directory to output generated React components', default: DEFAULT_OUTPUT_DIR })
        .option('typesFile', { alias: 't', type: 'string', description: 'Filename for the generated types file within the output directory', default: DEFAULT_TYPES_FILE })
        .option('typeImportPath', { alias: 'p', type: 'string', description: 'Relative path from generated components to the types file', default: ICON_TYPE_PATH })
        .help().alias('help', 'h').argv;

    const inputDir = path.resolve(process.cwd(), argv.input);
    const outputDir = path.resolve(process.cwd(), argv.output);
    const typesFilePath = path.join(outputDir, argv.typesFile);
    const typeImportPath = argv.typeImportPath;

    console.log(`Scanning for Fluent SVGs in: ${inputDir}`);
    console.log(`Outputting components to: ${outputDir}`);

    try {
        // Clear the output directory
        if (await fs.access(outputDir).then(() => true).catch(() => false)) {
            console.log('Clearing existing output directory...');
            await fs.rm(outputDir, { recursive: true });
        }
        
        // Create fresh output directory
        await fs.mkdir(outputDir, { recursive: true });
        console.log('Output directory prepared.');

        // Find all SVG files
        const svgFiles = await glob('**/*.svg', { cwd: inputDir, absolute: true, ignore: ['**/node_modules/**'] });

        if (svgFiles.length === 0) {
            console.warn(`No SVG files found in ${inputDir}`);
            return;
        }

        // Group files
        const iconGroups: IconGroupMap = new Map();
        const allDiscoveredVariants = new Set<string>();
        // Updated regex to capture style and OPTIONALLY match _ltr/_rtl suffix
        const fluentIconRegex = /ic_fluent_(.+)_(\d+)_([a-z]+)(?:_(ltr|rtl))?\.svg$/i;

        console.log(`Found ${svgFiles.length} SVG files. Grouping icons...`);
        
        for (const svgPath of svgFiles) {
            const fileName = path.basename(svgPath);
            const match = fileName.match(fluentIconRegex);

            if (match) {
                const [, iconNameRaw, sizeStr, styleRaw] = match;
                const iconName = iconNameRaw.toLowerCase();
                const size = parseInt(sizeStr, 10);
                const style = styleRaw.toLowerCase(); // e.g., 'filled', 'regular', 'color', 'light'

                allDiscoveredVariants.add(style); // Track this variant name

                if (!iconGroups.has(iconName)) {
                    iconGroups.set(iconName, new Map());
                }
                const sizeMap = iconGroups.get(iconName)!;

                if (!sizeMap.has(size)) {
                    sizeMap.set(size, { variants: {} });
                }
                const sizeInfo = sizeMap.get(size)!;
                sizeInfo.variants[style] = svgPath; // Store path under its style name
            } else {
                console.warn(`⚠️ File did not match expected naming convention: ${fileName}`);
            }
        }

        // Generate and write the types file
        const typesFileContent = `
// ${argv.typesFile} - Generated by scripts/generate-icons.ts
import { SVGProps } from 'react';

// All possible icon variants
export type ${ICON_VARIANT_TYPE_NAME} = ${Array.from(allDiscoveredVariants).sort().map(v => `'${v}'`).join(' | ')};

export type ${ICON_TYPE_NAME} = {
  variant?: ${ICON_VARIANT_TYPE_NAME};
  className?: string;
  size?: number | string;
  color?: string;
  gradient?: { start: string; end: string; angle?: number; };
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, 'color' | 'className'>;`;
        await fs.writeFile(typesFilePath, typesFileContent.trim());
        console.log(`Generated types file at: ${typesFilePath} with variants: ${Array.from(allDiscoveredVariants).sort().join(', ') || 'N/A'}`);

        console.log(`Grouped into ${iconGroups.size} unique icon names. Generating components...`);

        const generatedComponents: { name: string; exportPath: string }[] = [];
        let processedCount = 0;
        let skippedCount = 0;

        // --- Process Each Icon Group ---
        for (const [iconName, sizeMap] of iconGroups.entries()) {
            const availableSizes = Array.from(sizeMap.keys());
            if (availableSizes.length === 0) continue;
            const largestSize = Math.max(...availableSizes);
            const sizeInfo = sizeMap.get(largestSize);

            if (!sizeInfo || Object.keys(sizeInfo.variants).length === 0) {
                console.warn(`⚠️ No variants found for largest size ${largestSize} of ${iconName}. Skipping.`);
                skippedCount++;
                continue;
            }

            const availableVariants = Object.keys(sizeInfo.variants).sort(); // Get available style names
            const componentName = toPascalCase(iconName) + 'Icon';
            const outputFilePath = path.join(outputDir, `${componentName}.tsx`);

            try {
                const variantContents: Record<string, { innerContent: string; viewBox: string | null }> = {};

                // Process all available variants for the largest size
                for (const variant of availableVariants) {
                    const svgPath = sizeInfo.variants[variant];
                    const svgContent = await fs.readFile(svgPath, 'utf-8');
                    const optimizedResult = optimize(svgContent, { ...svgoConfig, path: svgPath });

                    if ('error' in optimizedResult) throw new Error(`SVGO Error (${variant}): ${optimizedResult.error}`);

                    const optimizedData = optimizedResult.data;
                    const viewBoxMatch = optimizedData.match(/viewBox="([^"]+)"/);
                    const viewBox = viewBoxMatch ? viewBoxMatch[1] : null;
                    const innerContentMatch = optimizedData.match(/<svg[^>]*>(.*?)<\/svg>/s);
                    const innerContent = innerContentMatch ? innerContentMatch[1].trim() : '';

                    if (!innerContent) {
                        throw new Error(`Could not extract inner content for ${variant} variant.`);
                    }
                    variantContents[variant] = { innerContent, viewBox };
                }

                // Generate component code with all processed variants
                const componentCode = generateComponentCode(
                    componentName,
                    variantContents,
                    availableVariants,
                    ICON_TYPE_NAME,
                    ICON_VARIANT_TYPE_NAME,
                    typeImportPath
                );

                // Write component file
                await fs.writeFile(outputFilePath, componentCode);
                processedCount++;
                generatedComponents.push({ name: componentName, exportPath: `./${componentName}` });

            } catch (error: any) {
                console.error(`❌ Error processing icon ${iconName} (variants: ${availableVariants.join(', ')}): ${error.message}`);
                skippedCount++;
            }
        }

        // Generate icons manifest JSON
        const iconsManifest: IconsManifest = {
            icons: [],
            totalIcons: iconGroups.size,
            availableVariants: Array.from(allDiscoveredVariants).sort()
        };

        for (const [iconName, sizeMap] of iconGroups.entries()) {
            const sizes = Array.from(sizeMap.keys()).sort((a, b) => a - b);
            const variants = new Set<string>();
            
            // Collect all variants across all sizes
            for (const size of sizes) {
                const sizeInfo = sizeMap.get(size);
                if (sizeInfo) {
                    Object.keys(sizeInfo.variants).forEach(variant => variants.add(variant));
                }
            }

            iconsManifest.icons.push({
                name: iconName,
                variants: Array.from(variants).sort(),
                sizes: sizes
            });
        }

        // Sort icons by name for consistency
        iconsManifest.icons.sort((a, b) => a.name.localeCompare(b.name));

        // Write the manifest file
        const manifestFilePath = path.join(path.dirname(outputDir), 'icons-manifest.json');
        await fs.writeFile(
            manifestFilePath, 
            JSON.stringify(iconsManifest, null, 2)
        );
        console.log(`Generated icons manifest at: ${manifestFilePath}`);

        // Generate index.ts file with exports
        if (generatedComponents.length > 0) {
            // Create a map to track unique component names
            const uniqueComponents = new Map<string, { name: string }>();
            
            generatedComponents.forEach(comp => {
                const normalizedName = comp.name;
                if (!uniqueComponents.has(normalizedName.toLowerCase())) {
                    uniqueComponents.set(normalizedName.toLowerCase(), { 
                        name: normalizedName
                    });
                }
            });

            const indexContent = [
                '// This file is auto-generated by scripts/generate-icons.ts',
                '// Do not edit manually',
                '',
                `export type { ${ICON_TYPE_NAME}, ${ICON_VARIANT_TYPE_NAME} } from './icons/types';`,
                '',
                '// Icon Components',
                ...[...uniqueComponents.values()]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(({ name }) => `export { default as ${name} } from './icons/${name}';`),
                '' // Add trailing newline
            ].join('\n');

            const indexFilePath = path.join(path.dirname(outputDir), 'index.ts');
            await fs.writeFile(indexFilePath, indexContent);
            console.log(`Generated index file at: ${indexFilePath}`);
        }

        console.log(`\n🎉 Icon generation complete.`);
        console.log(`   Processed: ${processedCount} icons.`);
        console.log(`   Skipped:   ${skippedCount} icons (due to missing variants or errors).`);
        console.log(`   Manifest:  ${iconsManifest.totalIcons} icons with ${iconsManifest.availableVariants.length} variants`);

    } catch (error: any) {
        console.error(`\n🚨 An critical error occurred during icon generation:`);
        console.error(error.message);
        process.exit(1);
    }
}

// Execute the script
run();