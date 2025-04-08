import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 4.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM4 11.25a.75.75 0 0 1 .75-.75h9.5q.09 0 .174.02L12.944 12H4.75a.75.75 0 0 1-.75-.75m6.274 3.42.977-.978a.75.75 0 0 0-.501-.192h-8a.75.75 0 0 0 0 1.5h7.236q.132-.174.288-.33M12.5 8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M10.75 4.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm.23 10.877 4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/>`,
  'regular': `<path d="M2.5 5a.5.5 0 0 0 0 1H8a.5.5 0 0 0 0-1zm3 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM4 11.5a.5.5 0 0 1 .5-.5h9.444l-1 1H4.5a.5.5 0 0 1-.5-.5m6.274 3.17.67-.67H2.5a.5.5 0 0 0 0 1h7.486q.132-.174.288-.33M12.5 8.5A.5.5 0 0 1 13 8h3.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5m-2-3.5a.5.5 0 0 0 0 1H17a.5.5 0 0 0 0-1zm.48 10.377 4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/>`
} as const;

export default function CodeTextEditIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'codetextediticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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