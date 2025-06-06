import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 4A3.75 3.75 0 0 0 2 7.75v12.5A3.75 3.75 0 0 0 5.75 24h16.5A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zm2.723 7.151C9.913 10.431 11.868 10 14 10s4.087.431 5.527 1.151c1.41.705 2.473 1.772 2.473 3.099l-.001.036-.136 1.857a2 2 0 0 1-2.228 1.84l-1.632-.192a2 2 0 0 1-1.72-1.558l-.435-1.982c-.03-.133-.095-.194-.145-.213-.306-.123-.873-.288-1.703-.288s-1.397.165-1.703.288c-.05.02-.116.08-.145.213l-.435 1.983a2 2 0 0 1-1.72 1.557l-1.632.192a2 2 0 0 1-2.228-1.84l-.136-1.857L6 14.25c0-1.327 1.063-2.394 2.473-3.099"/>`,
  'regular': `<path d="M5.754 4a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 5.754 24H22.25A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H22.25a2.25 2.25 0 0 1 2.25 2.25v12.5a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25zm4.97 3.401C9.913 10.431 11.867 10 14 10s4.087.431 5.527 1.151c1.41.705 2.473 1.772 2.473 3.099l-.001.036-.136 1.857a2 2 0 0 1-2.228 1.84l-1.632-.192a2 2 0 0 1-1.72-1.558l-.435-1.982c-.03-.133-.095-.194-.145-.213-.306-.123-.873-.288-1.703-.288s-1.397.165-1.703.288c-.05.02-.116.08-.145.213l-.435 1.983a2 2 0 0 1-1.72 1.557l-1.632.192a2 2 0 0 1-2.228-1.84l-.136-1.857L6 14.25c0-1.327 1.063-2.394 2.473-3.099"/>`
} as const;

export default function CallRectangleLandscapeIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'callrectanglelandscapeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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