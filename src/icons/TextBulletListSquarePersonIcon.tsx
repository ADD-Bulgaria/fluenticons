import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h10.71a4.93 4.93 0 0 1-.71-2.562c0-2.148 1.738-3.938 3.917-3.938H15a1 1 0 1 1 0-2h5.229A5 5 0 0 1 20 19c0-.711.148-1.387.416-2H15a1 1 0 1 1 0-2h7c.835-.628 1.874-1 3-1a4.99 4.99 0 0 1 4 2V7.5A4.5 4.5 0 0 0 24.5 3zm3 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3-10a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2zM28.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.714 4.062-6 4.062s-6-2.031-6-4.062C19 25.102 20.082 24 21.417 24h7.166C29.918 24 31 25.102 31 26.438"/>`,
  'regular': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V16a5 5 0 0 0-2-1.584V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h10.031c.078.695.302 1.375.68 2H7.5A4.5 4.5 0 0 1 3 24.5zm18.43 15a5 5 0 0 1-1.201-2H15a1 1 0 1 0 0 2zM22 15a5 5 0 0 0-1.584 2H15a1 1 0 1 1 0-2zm-10-4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m2-11a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1M28.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.714 4.062-6 4.062s-6-2.031-6-4.062C19 25.102 20.082 24 21.417 24h7.166C29.918 24 31 25.102 31 26.438"/>`
} as const;

export default function TextBulletListSquarePersonIcon({ 
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

  const gradientId = 'textbulletlistsquarepersonicon_gradient';
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