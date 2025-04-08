import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-5.8q.05-.243.05-.5v-4a2.5 2.5 0 0 0-2.5-2.5H4zM18 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM7.5 7.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M8.25 11a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM2.5 15A1.5 1.5 0 0 0 1 16.5v4A1.5 1.5 0 0 0 2.5 22h8a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5zm7.5 1a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2zm-1 5a2 2 0 0 1 2-2v1a1 1 0 0 0-1 1zm-7-4a1 1 0 0 0 1-1h1a2 2 0 0 1-2 2zm0 2a2 2 0 0 1 2 2H3a1 1 0 0 0-1-1zm4.5-2.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"/>`,
  'regular': `<path d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-5.8q.05-.243.05-.5v-1h3.5V5.25a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75V14H4zM18 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM8.25 7a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75 4.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75M2.5 15A1.5 1.5 0 0 0 1 16.5v4A1.5 1.5 0 0 0 2.5 22h8a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5zm7.5 1a1 1 0 0 0 1 1v1a2 2 0 0 1-2-2zm-1 5a2 2 0 0 1 2-2v1a1 1 0 0 0-1 1zm-7-4a1 1 0 0 0 1-1h1a2 2 0 0 1-2 2zm0 2a2 2 0 0 1 2 2H3a1 1 0 0 0-1-1zm4.5-2.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5"/>`
} as const;

export default function ReceiptMoneyIcon({ 
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

  const gradientId = 'receiptmoneyicon_gradient';
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