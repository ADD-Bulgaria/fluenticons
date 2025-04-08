import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 10a6 6 0 0 1 10-4.472A6 6 0 0 1 34 10v4h3.5a2.5 2.5 0 0 1 2.5 2.5v8.338l-1.079-1.079A6 6 0 0 0 34.674 22H29.5v-8h2v-4a3.5 3.5 0 0 0-6.014-2.434A6 6 0 0 1 26 10v4h1v8.084a6.01 6.01 0 0 0-5 5.923v6.667c0 1.593.633 3.121 1.76 4.247L28.837 44H14.5A6.5 6.5 0 0 1 8 37.5v-21a2.5 2.5 0 0 1 2.5-2.5H14zm9.5 4v-4a3.5 3.5 0 1 0-7 0v4zm.5 20.674v-6.667A4.007 4.007 0 0 1 28.007 24h6.667c1.063 0 2.082.422 2.833 1.174l7.32 7.319a4.006 4.006 0 0 1 0 5.666l-6.668 6.668a4.006 4.006 0 0 1-5.666 0l-7.32-7.32A4 4 0 0 1 24 34.674m4-5.174a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/>`,
  'regular': `<path d="M20 4a6 6 0 0 0-6 6v4h-3.5A2.5 2.5 0 0 0 8 16.5v21a6.5 6.5 0 0 0 6.5 6.5h14.338l-2.5-2.5H14.5a4 4 0 0 1-4-4v-21H27v5.584A6 6 0 0 1 28.007 22H29.5v-5.5h8v6.206c.519.277.998.63 1.421 1.053L40 24.838V16.5a2.5 2.5 0 0 0-2.5-2.5H34v-4a6 6 0 0 0-10-4.472A5.98 5.98 0 0 0 20 4m11.5 10H26v-4a6 6 0 0 0-.514-2.434A3.5 3.5 0 0 1 31.5 10zm-8-4v4h-7v-4a3.5 3.5 0 1 1 7 0m.5 24.674v-6.667A4.007 4.007 0 0 1 28.007 24h6.667c1.063 0 2.082.422 2.833 1.174l7.32 7.319a4.006 4.006 0 0 1 0 5.666l-6.668 6.668a4.006 4.006 0 0 1-5.666 0l-7.32-7.32A4 4 0 0 1 24 34.674m4-5.174a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/>`
} as const;

export default function ShoppingBagTagIcon({ 
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

  const gradientId = 'shoppingbagtagicon_gradient';
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