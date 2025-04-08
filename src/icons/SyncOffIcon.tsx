import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.938 9h-5.632l.675-2.363a.5.5 0 0 0-.962-.274l-2 7a.5.5 0 0 0 .962.274L12.02 10H18a8 8 0 0 1-16 0h5.98l-.96 3.363a.5.5 0 0 0 .96.274l2-7a.5.5 0 0 0-.96-.274L8.265 9H2.062a8.001 8.001 0 0 1 15.876 0"/>`,
  'regular': `<path d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0m8-7a7 7 0 0 0-6.93 6h5.196l.753-2.638a.5.5 0 1 1 .962.275l-2 7a.5.5 0 1 1-.962-.275L7.98 10H3a7 7 0 1 0 14 0h-4.98l-1.04 3.637a.5.5 0 1 1-.96-.275l2-7a.5.5 0 1 1 .96.275L12.307 9h4.623A7 7 0 0 0 10 3"/>`
} as const;

export default function SyncOffIcon({ 
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

  const gradientId = 'syncofficon_gradient';
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