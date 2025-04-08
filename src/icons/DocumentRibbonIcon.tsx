import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H19v-6.668a9.46 9.46 0 0 0 2-5.832 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-3.5.666V7a3 3 0 0 1 3-3zm-9 35.335a9.5 9.5 0 0 0 2-1.088v6.71a1.04 1.04 0 0 1-1.652.842L11.5 43l-3.848 2.8A1.04 1.04 0 0 1 6 44.958v-6.71A9.5 9.5 0 0 0 11.5 40a9.5 9.5 0 0 0 3.5-.666M11.5 38A7.5 7.5 0 0 1 4 30.5a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 1 0 15m15-33.536V15.25c0 .69.56 1.25 1.25 1.25h11.712z"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v13.416a9.4 9.4 0 0 1 2.5-.614V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75H19V44h16.75A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.177 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM10.5 23.066A7.5 7.5 0 0 0 4 30.5a7.5 7.5 0 0 0 7.5 7.5 7.5 7.5 0 1 0-1-14.934M7.652 45.8A1.04 1.04 0 0 1 6 44.958v-6.71A9.44 9.44 0 0 0 11.5 40c2.05 0 3.948-.65 5.5-1.754v6.71a1.04 1.04 0 0 1-1.652.842L11.5 43z"/>`
} as const;

export default function DocumentRibbonIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'documentribbonicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill={`url(#${gradientId})`}
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
          gradientTransform={gradient.angle !== undefined ? `rotate(${gradient.angle})` : undefined}
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}