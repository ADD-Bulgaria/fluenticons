import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.918 18a.75.75 0 0 1 .102 1.493l-.102.007h-1.036a3 3 0 0 0 4.702-.29.75.75 0 1 1 1.232.856A4.5 4.5 0 0 1 18.118 22a4.5 4.5 0 0 1-2.95-1.101v.351a.75.75 0 0 1-1.493.102l-.007-.102v-2.5a.75.75 0 0 1 .649-.743l.101-.007zm-10.52-4.993L6.5 13a.75.75 0 0 1 .743.648l.007.102v3h3a.75.75 0 0 1 .743.648L11 17.5a.75.75 0 0 1-.648.743l-.102.007h-3v3a.75.75 0 0 1-.648.743L6.5 22a.75.75 0 0 1-.743-.648l-.007-.102v-3h-3a.75.75 0 0 1-.743-.648L2 17.5a.75.75 0 0 1 .648-.743l.102-.007h3v-3a.75.75 0 0 1 .648-.743L6.5 13zM17.5 13c1.113 0 2.151.408 2.95 1.101v-.351a.75.75 0 0 1 1.493-.102l.007.102v2.5a.75.75 0 0 1-.648.743L21.2 17h-2.5a.75.75 0 0 1-.102-1.493l.102-.007h1.037a3 3 0 0 0-4.703.29.75.75 0 1 1-1.231-.856A4.5 4.5 0 0 1 17.5 13M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m12.714 0C20.766 2 22 3.39 22 5.079c0 .862-.323 1.671-.852 2.214l-2.502 3.141a1.49 1.49 0 0 1-2.343-.006l-2.676-3.402A3.27 3.27 0 0 1 13 5.079C13 3.39 14.234 2 15.786 2c.564 0 1.1.186 1.55.52l.164.131.165-.131c.449-.334.985-.52 1.55-.52m-15.3 2.977a3 3 0 0 0 4.108 4.108zM6.5 3.5c-.556 0-1.076.151-1.523.415l4.108 4.108A3 3 0 0 0 6.5 3.5"/>`,
  'regular': `<path d="M16.918 18a.75.75 0 0 1 .102 1.493l-.102.007h-1.036a3 3 0 0 0 4.702-.29.75.75 0 1 1 1.232.856A4.5 4.5 0 0 1 18.118 22a4.5 4.5 0 0 1-2.95-1.101v.351a.75.75 0 0 1-1.493.102l-.007-.102v-2.5a.75.75 0 0 1 .649-.743l.101-.007zm-10.52-4.993L6.5 13a.75.75 0 0 1 .743.648l.007.102v3h3a.75.75 0 0 1 .743.648L11 17.5a.75.75 0 0 1-.648.743l-.102.007h-3v3a.75.75 0 0 1-.648.743L6.5 22a.75.75 0 0 1-.743-.648l-.007-.102v-3h-3a.75.75 0 0 1-.743-.648L2 17.5a.75.75 0 0 1 .648-.743l.102-.007h3v-3a.75.75 0 0 1 .648-.743L6.5 13zM17.5 13c1.113 0 2.151.408 2.95 1.101v-.351a.75.75 0 0 1 1.493-.102l.007.102v2.5a.75.75 0 0 1-.648.743L21.2 17h-2.5a.75.75 0 0 1-.102-1.493l.102-.007h1.037a3 3 0 0 0-4.703.29.75.75 0 1 1-1.231-.856A4.5 4.5 0 0 1 17.5 13M6.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m12.714 0C20.766 2 22 3.39 22 5.079c0 .862-.323 1.671-.852 2.214l-2.502 3.141a1.49 1.49 0 0 1-2.343-.006l-2.676-3.402A3.27 3.27 0 0 1 13 5.079C13 3.39 14.234 2 15.786 2c.564 0 1.1.186 1.55.52l.164.131.165-.131c.449-.334.985-.52 1.55-.52m-15.3 2.977a3 3 0 0 0 4.108 4.108zm15.3-1.462c-.35 0-.683.173-.927.487l-.784 1.007-.787-1.005c-.246-.315-.58-.489-.93-.489-.685 0-1.286.677-1.286 1.564 0 .392.12.757.315 1.023l2.662 3.383 2.567-3.215a1.7 1.7 0 0 0 .455-1.19c0-.887-.601-1.564-1.286-1.564M6.5 3.5c-.556 0-1.076.151-1.523.415l4.108 4.108A3 3 0 0 0 6.5 3.5"/>`
} as const;

export default function SymbolsIcon({ 
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

  const gradientId = 'symbolsicon_gradient';
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