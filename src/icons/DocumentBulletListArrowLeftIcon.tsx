
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v7.498A6.5 6.5 0 0 1 6.5 11a6.47 6.47 0 0 1 3.53 1.04.75.75 0 0 1 .72-.54h5.5a.75.75 0 0 1 0 1.5h-5.06c.427.444.79.949 1.078 1.5h3.982a.75.75 0 0 1 0 1.5h-3.424q.172.724.174 1.5h3.25a.75.75 0 0 1 0 1.5h-3.424a6.5 6.5 0 0 1-1.636 3H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-7 15a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m3-5a.5.5 0 0 0 0-1H4.707l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 18z"/>`,
  'regular': `<path d="M10.75 11.5a.75.75 0 0 0-.72.54c.423.275.813.598 1.16.96h5.06a.75.75 0 0 0 0-1.5zM5.5 4v7.076a6.5 6.5 0 0 0-1.5.422V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-6.81a6.5 6.5 0 0 0 1.078-1.5H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5m10.75 15h-3.424A6.5 6.5 0 0 0 13 17.5h3.25a.75.75 0 0 1 0 1.5m0-3h-3.424a6.5 6.5 0 0 0-.558-1.5h3.982a.75.75 0 0 1 0 1.5M13.5 4.621V8a.5.5 0 0 0 .5.5h3.378zM6.5 23a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m3-5a.5.5 0 0 0 0-1H4.707l1.647-1.646a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 18z"/>`
} as const;

export default function DocumentBulletListArrowLeftIcon({ 
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

  const gradientId = 'documentbulletlistarrowlefticon_gradient';
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