
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.037 5.65c.86-1.533 3.066-1.533 3.926 0l2.606 4.651-1.601-.283a1.25 1.25 0 1 0-.436 2.462l4.25.75a1.25 1.25 0 0 0 1.404-.835l1.25-3.75a1.25 1.25 0 0 0-2.372-.791l-.373 1.12-2.547-4.546c-1.814-3.237-6.474-3.237-8.288 0L9.651 8.363a1.25 1.25 0 1 0 2.18 1.222zm12.048 9.382a1.25 1.25 0 0 0-2.18 1.222l3.303 5.896c.84 1.5-.244 3.35-1.963 3.35h-6.327l.792-.95a1.25 1.25 0 0 0-1.92-1.601l-2.5 3a1.25 1.25 0 0 0 0 1.6l2.5 3a1.25 1.25 0 0 0 1.92-1.6L18.92 28h6.325c3.63 0 5.918-3.905 4.144-7.072zM11.748 25.5H6.753c-1.72 0-2.803-1.85-1.963-3.35l3.548-6.33.809 1.518a1.25 1.25 0 0 0 2.206-1.176l-2-3.75a1.25 1.25 0 0 0-1.308-.645l-4.5.75a1.25 1.25 0 1 0 .41 2.466l2.19-.365-3.536 6.31C.835 24.094 3.123 28 6.753 28h4.995a1.25 1.25 0 1 0 0-2.5"/>`,
  'regular': `<path d="M18.183 5.277c-.954-1.708-3.411-1.708-4.365 0l-2.896 5.184-1.791-.895 2.94-5.264c1.718-3.075 6.141-3.074 7.858 0l2.739 4.904.362-1.448a1 1 0 0 1 1.94.484l-1 4.001a1 1 0 0 1-1.213.728l-4-1a1 1 0 1 1 .486-1.941l1.853.464zm5.405 9.679 1.79-.896 4.047 7.245c1.675 3-.493 6.694-3.929 6.694h-7.083l1.294 1.294a1 1 0 1 1-1.414 1.414l-3-2.999a1 1 0 0 1 0-1.414l3-3.001a1 1 0 1 1 1.414 1.414l-1.292 1.292h7.081c1.909 0 3.113-2.052 2.183-3.719zM13 25.999H6.503c-1.91 0-3.114-2.053-2.183-3.719l3.869-6.926.895 2.047a1 1 0 0 0 1.832-.802l-1.75-4a1 1 0 0 0-1.145-.572l-4.25 1a1 1 0 1 0 .458 1.946l2.166-.51-3.821 6.842c-1.676 3 .493 6.694 3.929 6.694H13z"/>`
} as const;

export default function RecycleIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'recycleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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