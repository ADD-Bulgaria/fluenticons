import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 15a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M23 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-9 9c0-2.712 1.2-5.143 3.096-6.793A3 3 0 0 0 16 17H5a3 3 0 0 0-3 3v.15S2 26 10.5 26c1.442 0 2.64-.168 3.633-.448A9 9 0 0 1 14 24m9 7.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25V23h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V24.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"/>`,
  'light': `<path d="M10.5 4a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M6 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M23 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4 6c.387 0 .757.073 1.096.207q-.436.38-.821.812A2 2 0 0 0 16 18H5a2 2 0 0 0-2 2c0 .884.333 2.12 1.406 3.137C5.476 24.151 7.34 25 10.5 25c1.418 0 2.575-.171 3.517-.451q.03.511.117 1.006c-1.013.282-2.215.445-3.634.445-3.34 0-5.476-.9-6.781-2.137C2.417 22.63 2 21.116 2 20a3 3 0 0 1 3-3zm7 14.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m1-12.25a.75.75 0 0 0-1.5 0V23h-3.75a.75.75 0 0 0 0 1.5h3.75v3.75a.75.75 0 0 0 1.5 0V24.5h3.75a.75.75 0 0 0 0-1.5H24z"/>`,
  'regular': `<path d="M7 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M10.5 4a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M21 11a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-7 10c.387 0 .757.073 1.096.207A9 9 0 0 0 15.516 19H5a1 1 0 0 0-1 1v.19q0 .026.009.094c.01.09.031.23.076.404.09.348.273.818.641 1.291C5.431 22.883 6.98 24 10.5 24c1.5 0 2.643-.203 3.514-.506a9 9 0 0 0 .12 2.057c-1.006.283-2.205.449-3.634.449-3.98 0-6.18-1.29-7.351-2.792a5.6 5.6 0 0 1-1-2.017 5 5 0 0 1-.146-.898l-.002-.067v-.023L2 20.195V20a3 3 0 0 1 3-3zm7 14.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25V23h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V24.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"/>`
} as const;

export default function PeopleAddIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'peopleaddicon_gradient';
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