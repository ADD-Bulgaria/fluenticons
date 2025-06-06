import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75V5h-.75q-.385 0-.75.066V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.316A4.3 4.3 0 0 0 5 9.25V10H3.75A2.75 2.75 0 0 1 1 7.25zM14 19v1.25A2.75 2.75 0 0 0 16.75 23h3.5A2.75 2.75 0 0 0 23 20.25v-3.5A2.75 2.75 0 0 0 20.25 14H19v.75q0 .385-.066.75h1.316c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.316a4.3 4.3 0 0 1-.75.066zM6 9.25A3.25 3.25 0 0 1 9.25 6h5.5A3.25 3.25 0 0 1 18 9.25v5.5A3.25 3.25 0 0 1 14.75 18h-5.5A3.25 3.25 0 0 1 6 14.75z"/>`,
  'regular': `<path d="M1 3.75A2.75 2.75 0 0 1 3.75 1h3.5A2.75 2.75 0 0 1 10 3.75V5h-.75q-.385 0-.75.066V3.75c0-.69-.56-1.25-1.25-1.25h-3.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.316A4.3 4.3 0 0 0 5 9.25V10H3.75A2.75 2.75 0 0 1 1 7.25zM14 19v1.25A2.75 2.75 0 0 0 16.75 23h3.5A2.75 2.75 0 0 0 23 20.25v-3.5A2.75 2.75 0 0 0 20.25 14H19v.75q0 .385-.066.75h1.316c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25v-1.316a4.3 4.3 0 0 1-.75.066zM9.25 6A3.25 3.25 0 0 0 6 9.25v5.5A3.25 3.25 0 0 0 9.25 18h5.5A3.25 3.25 0 0 0 18 14.75v-5.5A3.25 3.25 0 0 0 14.75 6zm2.313 1.5L7.5 11.563v-1.88L9.684 7.5zM7.5 13.684 13.684 7.5h1.066c.24 0 .469.048.677.136l-7.791 7.79a1.8 1.8 0 0 1-.136-.676zm1.255 2.745 7.674-7.674q.07.236.071.495v1.313L10.563 16.5H9.25q-.259-.001-.495-.071m5.932.071h-2.003l3.816-3.816v2.066l-.033-.033-1.781 1.781z"/>`
} as const;

export default function PositionToFrontIcon({ 
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

  const gradientId = 'positiontofronticon_gradient';
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