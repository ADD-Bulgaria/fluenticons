import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"/><path d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"/><path fill-opacity=".75" d="M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27s8.5-5.85 8.5-5.85V21a3 3 0 0 0-3-3z"/><path d="M23 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-12.5 0a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m4.5 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H17a2 2 0 0 1-2-2z"/><path d="M18 18a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"/>`,
  'filled': `<path d="M10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M23 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5 18a3 3 0 0 0-3 3v.15S2 27 10.5 27c1.659 0 2.993-.223 4.068-.581A2.5 2.5 0 0 1 15.5 25a2.5 2.5 0 0 1-1-2c0-.818.393-1.544 1-2a2.496 2.496 0 0 1-.792-3zm12 0a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"/>`,
  'light': `<path d="M10.5 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M6 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M23 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0M5 18a3 3 0 0 0-3 3c0 1.116.417 2.63 1.719 3.863C5.024 26.099 7.16 27 10.499 27c1.627 0 2.969-.214 4.068-.576A2.5 2.5 0 0 1 15.5 25l-.05-.039C14.333 25.572 12.744 26 10.5 26c-3.16 0-5.024-.85-6.094-1.863C3.333 23.12 3 21.884 3 21a2 2 0 0 1 2-2h9.5c0-.356.074-.694.208-1zm12 0a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M7 10.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M10.5 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M21 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M2 21a3 3 0 0 1 3-3h9.708a2.5 2.5 0 0 0-.208 1c0 .356.074.694.208 1H5a1 1 0 0 0-1 1c0 .095-.002.189.009.284.01.09.031.23.076.404.09.348.273.818.641 1.291C5.431 23.883 6.98 25 10.5 25c1.993 0 3.355-.358 4.289-.833.173.328.417.612.71.833a2.5 2.5 0 0 0-.93 1.418c-1.09.363-2.428.582-4.069.582-3.98 0-6.18-1.29-7.351-2.792a5.6 5.6 0 0 1-1-2.017 5 5 0 0 1-.128-.686A5 5 0 0 1 2 21m15-3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H17a1 1 0 0 1-1-1"/>`
} as const;

export default function PeopleListIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'peoplelisticon_gradient';
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