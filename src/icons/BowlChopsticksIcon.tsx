import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.351 2.115a.75.75 0 0 1 1.034.236l6.687 10.65H16.3l-6.186-9.852a.75.75 0 0 1 1.27-.798l6.687 10.65h7.267a.66.66 0 0 1 .661.66v.34c0 1.035-.131 2.04-.378 3H2.378A12 12 0 0 1 2 14v-.34a.66.66 0 0 1 .661-.66h8.64L5.115 3.148a.75.75 0 0 1 .236-1.034M2.872 18.5C4.652 22.898 8.964 26 14 26s9.348-3.102 11.128-7.5z"/>`,
  'regular': `<path d="M6.385 2.351a.75.75 0 0 0-1.27.798L11.3 13H2.75a.75.75 0 0 0-.75.75V14c0 6.628 5.373 12 12 12s12-5.372 12-12v-.25a.75.75 0 0 0-.75-.75h-7.178L11.385 2.351a.75.75 0 0 0-1.27.798L16.3 13h-3.228zm10.879 12.183.054-.034h7.17a10.4 10.4 0 0 1-.423 2.5H3.935a10.5 10.5 0 0 1-.423-2.5h8.73l.022.034.054-.034h4.924zM23.49 18.5a10.5 10.5 0 0 1-9.49 6 10.5 10.5 0 0 1-9.49-6z"/>`
} as const;

export default function BowlChopsticksIcon({ 
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

  const gradientId = 'bowlchopsticksicon_gradient';
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