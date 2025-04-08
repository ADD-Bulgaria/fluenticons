import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.11 4.049a1 1 0 1 0-.22-1.988C5.888 2.614 2 6.852 2 12c0 5.523 4.477 10 10 10 5.146 0 9.383-3.887 9.939-8.885a1 1 0 0 0-1.988-.221A8.001 8.001 0 0 1 4 12a8 8 0 0 1 7.11-7.951m3.657-1.658a1 1 0 0 0-.54 1.925q.432.122.842.29a1 1 0 0 0 .757-1.852 10 10 0 0 0-1.059-.363m2.582 2.3a1 1 0 0 1 1.413-.06q.318.291.609.608a1 1 0 0 1-1.474 1.352 8 8 0 0 0-.486-.486 1 1 0 0 1-.062-1.413M11 6a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m8.94 1.623a1 1 0 0 1 1.304.547 10 10 0 0 1 .365 1.063 1 1 0 1 1-1.925.54 8 8 0 0 0-.291-.846 1 1 0 0 1 .546-1.304"/>`,
  'regular': `<path d="M11.314 3.527a.75.75 0 1 0-.12-1.495C6.049 2.442 2 6.748 2 12c0 5.523 4.477 10 10 10 5.249 0 9.553-4.044 9.967-9.186a.75.75 0 1 0-1.495-.12 8.5 8.5 0 1 1-9.158-9.167m6.383 1.147a.75.75 0 0 1 1.06-.046q.322.294.616.617a.75.75 0 0 1-1.105 1.013 9 9 0 0 0-.525-.525.75.75 0 0 1-.046-1.06M11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.649l-.007-.101v-6a.75.75 0 0 1 .75-.75m2.531-3.11a.75.75 0 0 1 .925-.52 10 10 0 0 1 1.074.37.75.75 0 1 1-.567 1.388q-.444-.182-.912-.313a.75.75 0 0 1-.52-.925m7.478 5.325a.75.75 0 1 0-1.389.568 8 8 0 0 1 .315.915.75.75 0 1 0 1.444-.405 10 10 0 0 0-.37-1.078"/>`
} as const;

export default function ShiftsActivityIcon({ 
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

  const gradientId = 'shiftsactivityicon_gradient';
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