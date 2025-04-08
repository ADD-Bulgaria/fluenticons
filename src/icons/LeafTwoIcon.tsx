import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26.817 11.44A12.49 12.49 0 0 0 16.5 6H8.25A4.25 4.25 0 0 0 4 10.25v8.25c0 6.62 5.145 12.037 11.655 12.472A15.5 15.5 0 0 1 15 26.5c0-2.27.488-4.427 1.366-6.37l-5-5a1.25 1.25 0 0 1 1.768-1.768l4.496 4.497a15.52 15.52 0 0 1 9.187-6.419m-4.929 21.904a11 11 0 0 0 1.768 1.768l8.982-8.982a1.25 1.25 0 0 0-1.768-1.768zm-6.522 6.522 4.745-4.745A13.45 13.45 0 0 1 17 26.5C17 19.044 23.044 13 30.5 13h9.25A4.25 4.25 0 0 1 44 17.25v9.25C44 33.956 37.956 40 30.5 40a13.45 13.45 0 0 1-8.621-3.11l-4.745 4.744a1.25 1.25 0 0 1-1.768-1.768"/>`,
  'regular': `<path d="M16.5 6c5.032 0 9.37 2.974 11.352 7.26.856-.17 1.742-.26 2.648-.26h9.25A4.25 4.25 0 0 1 44 17.25v9.25C44 33.956 37.956 40 30.5 40a13.45 13.45 0 0 1-8.621-3.11l-4.745 4.744a1.25 1.25 0 0 1-1.768-1.768l4.745-4.745a13.5 13.5 0 0 1-2.364-4.182q-.615.06-1.247.061C9.596 31 4 25.404 4 18.5v-8.25A4.25 4.25 0 0 1 8.25 6zm7.156 29.112A10.95 10.95 0 0 0 30.5 37.5c6.075 0 11-4.925 11-11v-9.25a1.75 1.75 0 0 0-1.75-1.75H30.5c-6.075 0-11 4.925-11 11 0 2.587.893 4.966 2.388 6.844l8.982-8.982a1.25 1.25 0 0 1 1.768 1.768zM16.5 28.5q.324 0 .644-.02A14 14 0 0 1 17 26.5c0-1.706.317-3.339.894-4.842l-6.528-6.528a1.25 1.25 0 0 1 1.768-1.768l5.942 5.942a13.55 13.55 0 0 1 6.35-5.318A10 10 0 0 0 16.5 8.5H8.25a1.75 1.75 0 0 0-1.75 1.75v8.25c0 5.523 4.477 10 10 10"/>`
} as const;

export default function LeafTwoIcon({ 
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

  const gradientId = 'leaftwoicon_gradient';
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