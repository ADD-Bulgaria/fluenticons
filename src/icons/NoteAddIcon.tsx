import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11M14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6zm-1 20c7.18 0 13-5.82 13-13 0-2.577-.75-4.98-2.044-7H35.75A6.25 6.25 0 0 1 42 12.25V26h-9.75A6.25 6.25 0 0 0 26 32.25V42H12.25A6.25 6.25 0 0 1 6 35.75V23.956A12.94 12.94 0 0 0 13 26m28.447 2.5H32.25a3.75 3.75 0 0 0-3.75 3.75v9.197a6.3 6.3 0 0 0 1.848-1.278l9.821-9.82a6.3 6.3 0 0 0 1.278-1.849"/>`,
  'regular': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11M14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6zm21.75 2.5H25.2A13 13 0 0 0 23.956 6H35.75A6.25 6.25 0 0 1 42 12.25v13.679a6.25 6.25 0 0 1-1.83 4.42l-9.822 9.82A6.25 6.25 0 0 1 25.928 42H12.25A6.25 6.25 0 0 1 6 35.75V23.956c.78.5 1.618.919 2.5 1.244v10.55a3.75 3.75 0 0 0 3.75 3.75H26v-7.25A6.25 6.25 0 0 1 32.25 26h7.25V12.25a3.75 3.75 0 0 0-3.75-3.75M28.5 38.48l.08-.078 9.822-9.821.078-.081h-6.23a3.75 3.75 0 0 0-3.75 3.75z"/>`
} as const;

export default function NoteAddIcon({ 
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

  const gradientId = 'noteaddicon_gradient';
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