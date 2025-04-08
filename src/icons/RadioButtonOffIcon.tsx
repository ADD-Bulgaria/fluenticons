import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.146 14.854A.5.5 0 0 0 14.5 15v-.001a.5.5 0 0 0 .354-.853l-13-12.999a.5.5 0 0 0-.708.707l2.28 2.279A5.9 5.9 0 0 0 2 8c0 3.31 2.69 6 6 6a5.9 5.9 0 0 0 3.867-1.425zm-2.982-2.982a5.002 5.002 0 0 1-7.035-7.035l1.428 1.427a2.996 2.996 0 0 0 4.18 4.18zM4.95 2.83A5.93 5.93 0 0 1 8 2c3.31 0 6 2.69 6 6 0 1.12-.3 2.16-.83 3.05l-.74-.74C12.8 9.62 13 8.83 13 8c0-2.76-2.24-5-5-5-.83 0-1.62.2-2.31.57zm5.94 5.94c.07-.24.11-.5.11-.77 0-1.66-1.34-3-3-3-.27 0-.53.04-.77.11z"/>`,
  'regular': `<path d="m1.853 1.147 13 13a.5.5 0 0 1-.707.707l-2.272-2.272a6 6 0 0 1-8.456-8.456L1.146 1.854a.5.5 0 0 1 .707-.707M3 8a5 5 0 0 0 5 5h-.001a4.98 4.98 0 0 0 3.164-1.129L4.128 4.836A4.98 4.98 0 0 0 3 8m10 0a5 5 0 0 0-5-5l-.002-.002a4.94 4.94 0 0 0-2.295.583l-.747-.747A5.97 5.97 0 0 1 8 2a6 6 0 0 1 6 6c0 1.112-.308 2.15-.835 3.043l-.747-.747A4.94 4.94 0 0 0 13 8"/>`
} as const;

export default function RadioButtonOffIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'radiobuttonofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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