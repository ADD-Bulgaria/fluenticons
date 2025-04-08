
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 14.5c1.779 0 3-1.35 3-2.75S17.78 9 16 9c-1.32 0-2.375.763-2.799 1.878-.224.592-.714 1.122-1.347 1.122-1.034 0-1.92-.837-1.62-1.826C10.975 7.744 13.367 6 16 6c3.314 0 6 2.574 6 5.75 0 1.684-.755 3.198-1.959 4.25 1.204 1.052 1.96 2.566 1.96 4.25 0 3.176-2.687 5.75-6 5.75-2.635 0-5.026-1.744-5.766-4.174-.301-.99.585-1.826 1.62-1.826.632 0 1.122.53 1.346 1.122.424 1.115 1.478 1.878 2.8 1.878 1.777 0 3-1.35 3-2.75S17.777 17.5 16 17.5a1.5 1.5 0 1 1 0-3m8-2.5a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0zm3 8a3 3 0 1 0 6 0v-8a3 3 0 1 0-6 0zM9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h4.25a1.25 1.25 0 1 0 0-2.5H10.5v-3.5h5.256a1.25 1.25 0 1 0 0-2.5zm11.5 0c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h2.25a4.25 4.25 0 0 0 0-8.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 1 1 0 3.5m10.406-3.5a1.656 1.656 0 1 0 0 3.311h1.25a4.094 4.094 0 0 1 0 8.189H34.25a3.75 3.75 0 0 1-3.75-3.75 1.25 1.25 0 1 1 2.5 0c0 .69.56 1.25 1.25 1.25h1.656a1.594 1.594 0 0 0 0-3.189h-1.25a4.156 4.156 0 1 1 0-8.311h1.594A3.75 3.75 0 0 1 40 33.75a1.25 1.25 0 1 1-2.5 0c0-.69-.56-1.25-1.25-1.25z"/>`,
  'regular': `<path d="M30 6a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6m0 17.5a3.5 3.5 0 0 1-3.5-3.5v-8a3.5 3.5 0 1 1 7 0v8a3.5 3.5 0 0 1-3.5 3.5M9.25 30C8.56 30 8 30.56 8 31.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h4.25a1.25 1.25 0 1 0 0-2.5H10.5v-3.5h5.256a1.25 1.25 0 1 0 0-2.5zm11.5 0c-.69 0-1.25.56-1.25 1.25v11.54a1.25 1.25 0 1 0 2.5 0V38.5h2.25a4.25 4.25 0 0 0 0-8.5zm3.5 6H22v-3.5h2.25a1.75 1.75 0 1 1 0 3.5M33 34.156c0-.915.741-1.656 1.656-1.656h1.594c.69 0 1.25.56 1.25 1.25a1.25 1.25 0 1 0 2.5 0A3.75 3.75 0 0 0 36.25 30h-1.594a4.156 4.156 0 1 0 0 8.311h1.25a1.595 1.595 0 0 1 0 3.189H34.25c-.69 0-1.25-.56-1.25-1.25a1.25 1.25 0 1 0-2.5 0A3.75 3.75 0 0 0 34.25 44h1.656a4.094 4.094 0 1 0 0-8.189h-1.25A1.656 1.656 0 0 1 33 34.156M19.5 11.625c0 1.576-1.412 3.125-3.5 3.125a1.25 1.25 0 0 0 0 2.5c2.087 0 3.5 1.549 3.5 3.125S18.088 23.5 16 23.5c-1.668 0-2.94-.997-3.354-2.444C12.482 20.49 12.02 20 11.43 20c-.798 0-1.485.628-1.326 1.41C10.646 24.07 13.224 26 16 26c3.314 0 6-2.518 6-5.625 0-1.767-.869-3.344-2.228-4.375C21.13 14.97 22 13.392 22 11.625 22 8.518 19.314 6 16 6c-2.776 0-5.354 1.93-5.896 4.59-.159.782.528 1.41 1.326 1.41.591 0 1.052-.489 1.216-1.056C13.06 9.498 14.332 8.5 16 8.5c2.088 0 3.5 1.549 3.5 3.125"/>`
} as const;

export default function Fps30Icon({ 
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

  const gradientId = 'fps30icon_gradient';
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