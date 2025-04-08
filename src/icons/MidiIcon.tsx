import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 4.004a.75.75 0 0 1 .743.648l.007.102V19.25a.75.75 0 0 1-.648.743L21.25 20H2.75a.75.75 0 0 1-.743-.649L2 19.25V4.754a.75.75 0 0 1 .648-.743l.102-.007zm-15.25 8H3.5V18.5h17v-6.496H18v4.246a.75.75 0 0 1-1.493.101l-.007-.101v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L13 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L9.5 16.25v-4.246h-2v4.246a.75.75 0 0 1-1.493.101L6 16.25zM17.25 7.5h-2.5l-.102.007a.75.75 0 0 0 0 1.487L14.75 9h2.5l.102-.006A.75.75 0 0 0 17.25 7.5m-11 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m3 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"/>`,
  'regular': `<path d="M21.25 4.002a.75.75 0 0 1 .743.648l.007.102v14.5a.75.75 0 0 1-.648.743l-.102.007H2.75a.75.75 0 0 1-.743-.648L2 19.252v-14.5a.75.75 0 0 1 .648-.743l.102-.007zM6 12.5H3.5v6h17v-6H18v3.749a.75.75 0 0 1-1.493.102l-.007-.102V12.5h-2v3.749a.75.75 0 0 1-1.493.102L13 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L9.5 16.25V12.5h-2v3.749a.75.75 0 0 1-1.493.102L6 16.25zm14.5-7h-17V11h17zm-11.25 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m8 0a.75.75 0 0 1 .102 1.493L17.25 9h-2.5a.75.75 0 0 1-.102-1.493l.102-.007zm-11-.001a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"/>`
} as const;

export default function MidiIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'midiicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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