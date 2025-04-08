import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40H31v-3.668a9.46 9.46 0 0 1-2-5.832c0-.686.073-1.355.21-2h-2.96a1.25 1.25 0 1 1 0-2.5h3.881a9.53 9.53 0 0 1 5.32-4.5H26.25a1.25 1.25 0 1 1 0-2.5h9.5a1.25 1.25 0 0 1 .816 2.197A9.6 9.6 0 0 1 38.5 21c2.05 0 3.948.65 5.5 1.753V12.25A4.25 4.25 0 0 0 39.75 8zM19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-8 6.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v.5s0 4-5 4-5-4-5-4zM38.5 38a7.48 7.48 0 0 0 5.5-2.4 7.47 7.47 0 0 0 2-5.1c0-1.97-.759-3.76-2-5.1a7.48 7.48 0 0 0-5.5-2.4 7.49 7.49 0 0 0-6 3 7.47 7.47 0 0 0-1.5 4.5 7.5 7.5 0 0 0 7.5 7.5m3.59 1.299A9.5 9.5 0 0 0 44 38.247v6.71a1.04 1.04 0 0 1-1.652.842L38.5 43l-3.848 2.8A1.04 1.04 0 0 1 33 44.958v-6.71A9.47 9.47 0 0 0 38.442 40h.058l.058-.001a9.5 9.5 0 0 0 3.532-.701"/>`,
  'regular': `<path d="M19 20a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-8 6.5a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v.5s0 4-5 4-5-4-5-4zm14-6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 0 1 .816 2.197q-.571.119-1.115.303H26.25c-.69 0-1.25-.56-1.25-1.25m16.5-8v9.233c.9.3 1.742.73 2.5 1.27V12.25A4.25 4.25 0 0 0 39.75 8H8.25A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40H31v-2.5H8.25a1.75 1.75 0 0 1-1.75-1.75v-23.5c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75M26.25 26h3.881a9.4 9.4 0 0 0-.92 2.5H26.25a1.25 1.25 0 1 1 0-2.5m6.25 0a7.47 7.47 0 0 0-1.5 4.5 7.5 7.5 0 0 0 4.802 7 7.5 7.5 0 0 0 2.698.5 7.48 7.48 0 0 0 5.5-2.4 7.47 7.47 0 0 0 2-5.1c0-1.97-.759-3.76-2-5.1a7.47 7.47 0 0 0-5.5-2.4 7.49 7.49 0 0 0-6 3m6.058 14A9.47 9.47 0 0 0 44 38.247v6.71a1.04 1.04 0 0 1-1.652.842L38.5 43l-3.848 2.8A1.04 1.04 0 0 1 33 44.958v-6.71A9.47 9.47 0 0 0 38.442 40h.058z"/>`
} as const;

export default function ContactCardRibbonIcon({ 
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

  const gradientId = 'contactcardribbonicon_gradient';
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