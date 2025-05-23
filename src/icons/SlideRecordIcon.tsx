import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h14.246A13 13 0 0 1 22 35c0-1.213.166-2.386.477-3.5H13.25a1.25 1.25 0 1 1 0-2.5h10.214a13.1 13.1 0 0 1 3.229-4H13.25a1.25 1.25 0 1 1 0-2.5h17.5q.223.001.422.073A13 13 0 0 1 35 22c3.493 0 6.664 1.378 9 3.62V12.75A4.75 4.75 0 0 0 39.25 8zM12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25M35 43.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17m0 2.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11m0-5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>`,
  'regular': `<path d="M12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m1.25 5.25a1.25 1.25 0 1 0 0 2.5h13.443a13 13 0 0 1 4.479-2.427 1.3 1.3 0 0 0-.422-.073zm0 6.5h10.214c-.411.79-.744 1.626-.987 2.5H13.25a1.25 1.25 0 1 1 0-2.5m-4.5 8.5h13.49c.17.867.424 1.704.756 2.5H8.75A4.75 4.75 0 0 1 4 35.25v-22.5A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v12.87a13 13 0 0 0-2.5-1.88V12.75a2.25 2.25 0 0 0-2.25-2.25H8.75a2.25 2.25 0 0 0-2.25 2.25v22.5a2.25 2.25 0 0 0 2.25 2.25m26.25 6a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17m0 2.5c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11m6-11a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/>`
} as const;

export default function SlideRecordIcon({ 
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

  const gradientId = 'sliderecordicon_gradient';
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