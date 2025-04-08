import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 8v4H2V8zm-3.854 8.854A.5.5 0 0 1 2 16.5V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.354-.146M2.5 3H4a2 2 0 0 1 2 2v2H2V3.5a.5.5 0 0 1 .5-.5M18 6.5V10h-4V8a2.006 2.006 0 0 1 2-2h1.5a.5.5 0 0 1 .5.5m0 8V11h-4v2a2.006 2.006 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5m-7.854-3.354a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 1 0-.708.708l.647.646H8a.5.5 0 1 0 0 1h2.793z"/>`,
  'regular': `<path d="M6 15V5a2 2 0 0 0-2-2H2.5a.5.5 0 1 0 0 1H4a1 1 0 0 1 1 1v2H2.5a.5.5 0 1 0 0 1H5v4H2.5a.5.5 0 0 0 0 1H5v2a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2-2m11.854-4.146A.5.5 0 0 1 17.5 11H15v2a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H16a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1v2h2.5a.5.5 0 0 1 .354.854m-7.855.646a.5.5 0 0 1 .147-.354l.647-.646H8a.5.5 0 0 1 0-1h2.793l-.647-.646a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.855-.354"/>`
} as const;

export default function GatherIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'gathericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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