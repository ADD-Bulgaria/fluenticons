import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 3.25C2 2.56 2.56 2 3.25 2H16q1.311.002 2.556.233C25.067 3.433 30 9.14 30 16c0 3.917-1.609 7.459-4.202 10h-4.115A11.5 11.5 0 0 0 27.5 16a11.45 11.45 0 0 0-1.68-5.988A11.5 11.5 0 0 0 16 4.5H3.25C2.56 4.5 2 3.94 2 3.25M2 16a13.94 13.94 0 0 0 2.045 7.289C6.504 27.314 10.938 30 16 30h11.75a1.25 1.25 0 1 0 0-2.5H16c-.793 0-1.568-.08-2.316-.233C8.443 26.195 4.5 21.557 4.5 16c0-4.285 2.343-8.022 5.817-10H6.202A13.96 13.96 0 0 0 2 16m14-6c.69 0 1.25.56 1.25 1.25v3.5h3.5a1.25 1.25 0 1 1 0 2.5h-3.5v3.5a1.25 1.25 0 1 1-2.5 0v-3.5h-3.5a1.25 1.25 0 1 1 0-2.5h3.5v-3.5c0-.69.56-1.25 1.25-1.25"/>`,
  'regular': `<path d="M2 3a1 1 0 0 1 1-1h13q1.214.001 2.37.2C24.972 3.325 30 9.075 30 16c0 4.181-1.833 7.934-4.74 10.5h-3.446A12 12 0 0 0 28 16a12 12 0 0 0-1.096-5.018C25.004 6.861 20.836 4 16 4H3a1 1 0 0 1-1-1m0 13a13.95 13.95 0 0 0 1.279 5.853C5.495 26.663 10.357 30 16 30h13a1 1 0 1 0 0-2H16q-1.126-.002-2.194-.2C8.226 26.77 4 21.878 4 16c0-4.518 2.497-8.453 6.186-10.5H6.74A13.97 13.97 0 0 0 2 16m14-6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1"/>`
} as const;

export default function RemixAddIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'remixaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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