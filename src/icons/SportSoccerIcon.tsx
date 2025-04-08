import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M8.244 4.373l3.008 1.8v2.193l-2.791 2.028-2.044-.707-.587-3.534a8.5 8.5 0 0 1 2.414-1.78m-4.623 9.066 2.327-2.327 2.04.705L9.07 15.15l-.97 1.575-3.293-.194a8.5 8.5 0 0 1-1.186-3.092m6.909 6.934-1.184-2.809.963-1.567h3.372l.912 1.581-1.04 2.78a8.6 8.6 0 0 1-3.023.015m8.362-3.397-3.024-.19-.938-1.624 1.087-3.345 2.013-.696 2.312 2.52a8.5 8.5 0 0 1-1.45 3.335m-.72-10.82-.589 3.533-2.04.705-2.791-2.028V6.172l3.002-1.8a8.5 8.5 0 0 1 2.418 1.784"/>`,
  'regular': `<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-1.926 1.72a8.5 8.5 0 0 1 3.852 0l-1.924 1.153zm-1.83.653 3.008 1.8v2.193l-2.791 2.028-2.044-.707-.587-3.534a8.5 8.5 0 0 1 2.414-1.78M4.59 7.835l.358 2.157L3.52 11.42a8.45 8.45 0 0 1 1.07-3.585m-.968 5.604 2.327-2.327 2.04.705L9.07 15.15l-.97 1.575-3.293-.194a8.5 8.5 0 0 1-1.186-3.092m2.47 4.67 1.904.112.675 1.602a8.5 8.5 0 0 1-2.58-1.714m4.439 2.264-1.184-2.809.963-1.567h3.372l.912 1.581-1.04 2.78a8.6 8.6 0 0 1-3.023.015m4.83-.563.567-1.517 1.67.105a8.5 8.5 0 0 1-2.238 1.412m3.532-2.834-3.024-.19-.938-1.624 1.087-3.345 2.013-.696 2.312 2.52a8.5 8.5 0 0 1-1.45 3.335m1.598-5.391-1.44-1.57.362-2.178a8.45 8.45 0 0 1 1.078 3.748m-2.318-5.43-.589 3.534-2.04.705-2.791-2.028V6.172l3.002-1.8a8.5 8.5 0 0 1 2.418 1.784m-8.705 5.362L12 9.676l2.535 1.842-.968 2.98h-3.134z"/>`
} as const;

export default function SportSoccerIcon({ 
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

  const gradientId = 'sportsoccericon_gradient';
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