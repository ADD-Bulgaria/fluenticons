import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 6a2 2 0 0 1 2-2h8v10H16zM6 16a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8V16zm20 0H16v10h8a2 2 0 0 0 2-2zM36 4h-8v10h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M10 35a2 2 0 0 1 2-2h8v10h-8a2 2 0 0 1-2-2zm22-2H22v10h10zm2 0h10v8a2 2 0 0 1-2 2h-8zm2-12a2 2 0 0 0-2 2v8h10v-8a2 2 0 0 0-2-2z"/>`,
  'regular': `<path d="M17.25 4A3.25 3.25 0 0 0 14 7.25v6a.75.75 0 0 1-.75.75h-6A3.25 3.25 0 0 0 4 17.25v6a3.25 3.25 0 0 0 3.25 3.25h16a3.25 3.25 0 0 0 3.25-3.25v-6a.75.75 0 0 1 .75-.75h6a3.25 3.25 0 0 0 3.25-3.25v-6A3.25 3.25 0 0 0 33.25 4zm16 10H26.5V6.5h6.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75M24 14h-7.5V7.25a.75.75 0 0 1 .75-.75H24zm-10 2.5V24H7.25a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75zm2.5 0H24v6.75a.75.75 0 0 1-.75.75H16.5zm18.25 5h6A3.25 3.25 0 0 1 44 24.75v16A3.25 3.25 0 0 1 40.75 44h-27.5A3.25 3.25 0 0 1 10 40.75v-6a3.25 3.25 0 0 1 3.25-3.25h17.5a.75.75 0 0 0 .75-.75v-6a3.25 3.25 0 0 1 3.25-3.25m-3.25 20V34h-8v7.5zm10-7.5H34v7.5h6.75a.75.75 0 0 0 .75-.75zM34 31.5h7.5v-6.75a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0-.75.75zM21 34h-7.75a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H21z"/>`
} as const;

export default function TetrisAppIcon({ 
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

  const gradientId = 'tetrisappicon_gradient';
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