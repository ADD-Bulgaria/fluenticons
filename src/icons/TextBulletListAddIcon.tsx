import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.999 18A1.5 1.5 0 1 0 2 18a1.5 1.5 0 0 0 2.999 0m7.02-1H7.5l-.116.007A1 1 0 0 0 7.5 19h4.674a6.5 6.5 0 0 1-.155-2m1.79-4H7.5a1 1 0 0 1-.116-1.993L7.5 11h11a6.48 6.48 0 0 0-4.69 2M5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 2.999 0m0-5.993a1.5 1.5 0 1 0-2.999 0 1.5 1.5 0 0 0 2.999 0m16.004-1.006H7.5l-.116.007A1 1 0 0 0 7.5 7h13.503l.117-.007A1 1 0 0 0 21.003 5M24 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H18v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M4.499 18.75a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m7.52-.75H6.75l-.102.007A.75.75 0 0 0 6.75 19.5h5.564a6.5 6.5 0 0 1-.295-1.5m1.79-5H6.75a.75.75 0 0 1-.102-1.493l.102-.007h9.244A6.5 6.5 0 0 0 13.81 13m-9.31-.75a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0m0-6.5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.499 0M21.25 5H6.75l-.102.007A.75.75 0 0 0 6.75 6.5h14.5l.102-.007A.75.75 0 0 0 21.25 5M24 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H18v-2.501a.5.5 0 1 1 1 0v2.5h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function TextBulletListAddIcon({ 
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

  const gradientId = 'textbulletlistaddicon_gradient';
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