import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.998 2a4.2 4.2 0 0 1 1 .14 3.97 3.97 0 0 0-2.96 3.46c-.018.185-.029.254-.034.29L24 5.921V27c0 1.656-1.346 3-3 3s-3-1.346-3-3v-3a2 2 0 0 0-2-2H6V7a5 5 0 0 1 5-5zM16 24v3c0 1.13.392 2.162 1.026 3h-.47c-2.51 0-3.066-.002-4.728 0H11.1c-2.652.004-4.14.012-5 0H6c-2.21 0-4-1.79-4-4v-1a1 1 0 0 1 1-1zM28 4c-.36 0-.7.1-1 .28-.6.34-1 .98-1 1.72v4h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2"/>`,
  'regular': `<path d="M30 8a2 2 0 0 1-2 2h-4v16.125h-.002a4 4 0 0 1-4.217 3.87V30H6a4 4 0 0 1-4-4v-2a2 2 0 0 1 2-2h2V7a5 5 0 0 1 5-5h15a4 4 0 0 1 4 4zm-8 18V6c0-.729.195-1.412.535-2H11a3 3 0 0 0-3 3v15h8a2 2 0 0 1 2 2v2a2 2 0 1 0 4 0m2-20v2h4V6a2 2 0 0 0-2-2h-.002A2 2 0 0 0 24 6M4 24v2a2 2 0 0 0 2 2h10.535A4 4 0 0 1 16 26v-2z"/>`
} as const;

export default function ScriptIcon({ 
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

  const gradientId = 'scripticon_gradient';
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