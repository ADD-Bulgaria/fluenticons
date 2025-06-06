import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S27.523 4 22 4M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.755 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44V30c0-.729.195-1.412.535-2zM24 31a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v.79l-11 5.108-11-5.108zm11.421 7.907L46 33.995V43a3 3 0 0 1-3 3H27a3 3 0 0 1-3-3v-9.005l10.579 4.912a1 1 0 0 0 .842 0"/>`,
  'regular': `<path d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S27.523 4 22 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 6 32.249V33c0 3.755 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44v-2.5c-3.932 0-7.37-.788-9.78-2.255C9.86 37.808 8.5 35.745 8.5 33v-.751a1.75 1.75 0 0 1 1.75-1.749H22V30c0-.729.195-1.412.535-2zM24 31a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v.79l-11 5.108-11-5.108zm11.421 7.907L46 33.995V43a3 3 0 0 1-3 3H27a3 3 0 0 1-3-3v-9.005l10.579 4.912a1 1 0 0 0 .842 0"/>`
} as const;

export default function PersonMailIcon({ 
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

  const gradientId = 'personmailicon_gradient';
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