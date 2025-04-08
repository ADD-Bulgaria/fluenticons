import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M38.504 9.686a8.853 8.853 0 0 0-12.554-.154L6.55 28.571a1.5 1.5 0 0 1-2.1-2.142l19.4-19.038c4.69-4.603 12.23-4.51 16.807.205 4.528 4.666 4.452 12.11-.171 16.682L22.74 41.828a7.516 7.516 0 0 1-9.86.62c-3.65-2.8-3.952-8.19-.639-11.38L27.46 16.42a1.5 1.5 0 0 1 2.08 2.162L14.323 33.229a4.517 4.517 0 1 0 6.308 6.466l17.745-17.55a8.853 8.853 0 0 0 .128-12.46"/>`,
  'regular': `<path d="M38.937 9.487c-3.664-3.901-9.833-3.987-13.604-.189L6.137 28.63a1.25 1.25 0 0 1-1.774-1.761L23.559 7.537c4.768-4.802 12.567-4.694 17.2.239 4.434 4.72 4.303 12.114-.296 16.674L22.97 41.802a7.59 7.59 0 0 1-9.741.798c-3.885-2.762-4.293-8.379-.847-11.672l15.255-14.582a1.25 1.25 0 0 1 1.728 1.807L14.108 32.735a5.09 5.09 0 1 0 7.1 7.292l17.495-17.352a9.457 9.457 0 0 0 .234-13.188"/>`
} as const;

export default function AttachIcon({ 
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

  const gradientId = 'attachicon_gradient';
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