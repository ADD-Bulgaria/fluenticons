import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m31.265 37-.88 3.43a4.75 4.75 0 0 1-4.6 3.57h-3.57a4.75 4.75 0 0 1-4.6-3.57l-.88-3.43z"/><path d="m31.265 37-.88 3.43a4.75 4.75 0 0 1-4.6 3.57h-3.57a4.75 4.75 0 0 1-4.6-3.57l-.88-3.43zM24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.235 1.817 8.047 4.71 10.696.448.41.748.873.87 1.349L16.479 36H31.52l1.399-5.455c.122-.476.422-.938.87-1.35A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4"/><path d="M31.65 35.5h-15.3l.642 2.5h14.016z"/>`,
  'filled': `<path d="M24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.235 1.817 8.047 4.71 10.696.448.41.748.873.87 1.349l1.27 4.955h15.3l1.27-4.955c.122-.476.422-.938.87-1.35A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4m7.008 34H16.992l.623 2.43a4.75 4.75 0 0 0 4.6 3.57h3.57a4.75 4.75 0 0 0 4.6-3.57z"/>`,
  'regular': `<path d="M12 18.5c0-6.627 5.373-12 12-12s12 5.373 12 12c0 3.504-1.5 6.657-3.898 8.852-.715.655-1.334 1.519-1.604 2.572L29.325 34.5h-10.65l-1.173-4.576c-.27-1.053-.89-1.917-1.604-2.572A11.97 11.97 0 0 1 12 18.5M19.316 37h9.368l-.72 2.809a2.25 2.25 0 0 1-2.18 1.691h-3.568a2.25 2.25 0 0 1-2.18-1.691zM24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.235 1.817 8.047 4.71 10.696.448.41.748.873.87 1.349l2.535 9.885a4.75 4.75 0 0 0 4.6 3.57h3.57a4.75 4.75 0 0 0 4.6-3.57l2.535-9.885c.122-.476.422-.938.87-1.35A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4"/>`
} as const;

export default function LightbulbIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'lightbulbicon_gradient';
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