import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M29.625 42v-.008q.126.008.253.008a3.88 3.88 0 0 0 3.791-3.06L34.735 34h5.015A4.25 4.25 0 0 0 44 29.75V18.155a4.155 4.155 0 0 0-4-4.152V14H28.5v-3.75A4.25 4.25 0 0 0 24.25 6h-16A4.25 4.25 0 0 0 4 10.25v25.5A6.25 6.25 0 0 0 10.25 42zM28.5 16.5h7.534a4 4 0 0 0-.25.779l-4.558 21.133a1.378 1.378 0 0 1-2.726-.29zm-15.5-1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.25 22h10.5a1.25 1.25 0 1 1 0 2.5h-10.5a1.25 1.25 0 1 1 0-2.5M10 31.25c0-.69.56-1.25 1.25-1.25h10.5a1.25 1.25 0 1 1 0 2.5h-10.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M8.25 8.5a1.75 1.75 0 0 0-1.75 1.75v25.5a3.75 3.75 0 0 0 3.75 3.75h16.002A3.9 3.9 0 0 1 26 38.122V10.25a1.75 1.75 0 0 0-1.75-1.75zm21.375 33.492V42H10.25A6.25 6.25 0 0 1 4 35.75v-25.5A4.25 4.25 0 0 1 8.25 6h16a4.25 4.25 0 0 1 4.25 4.25V14H40v.003c2.223.081 4 1.909 4 4.152V29.75A4.25 4.25 0 0 1 39.75 34h-5.015l-1.066 4.94a3.88 3.88 0 0 1-4.044 3.052m-1.125-3.87a1.378 1.378 0 0 0 2.726.29l4.558-21.133q.087-.408.25-.779H28.5zm9.728-20.316L35.274 31.5h4.476a1.75 1.75 0 0 0 1.75-1.75V18.155a1.655 1.655 0 0 0-3.273-.349M11.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M10 23.25c0-.69.56-1.25 1.25-1.25h10.5a1.25 1.25 0 1 1 0 2.5h-10.5c-.69 0-1.25-.56-1.25-1.25M11.25 30a1.25 1.25 0 1 0 0 2.5h10.5a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function FeedIcon({ 
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

  const gradientId = 'feedicon_gradient';
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