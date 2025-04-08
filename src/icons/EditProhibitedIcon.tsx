
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.206 6.025a6.907 6.907 0 1 1 9.768 9.767L39.77 18 30 8.23zM28.233 10 8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.52l9.487-2.424a6 6 0 0 0 2.76-1.572l2.439-2.44C20.085 36.708 20 35.864 20 35c0-7.18 5.82-13 13-13 .863 0 1.707.084 2.523.244l2.478-2.477zM33 46c6.075 0 11-4.924 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11m0-2.5a8.46 8.46 0 0 1-5.062-1.67L39.83 29.938A8.5 8.5 0 0 1 33 43.5m5.062-15.329L26.17 40.061a8.5 8.5 0 0 1 11.89-11.89"/>`,
  'regular': `<path d="M41.974 6.025a6.907 6.907 0 0 0-9.768 0L8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.52l9.487-2.424a6 6 0 0 0 2.76-1.572l2.439-2.44a13 13 0 0 1-.221-3.314l-3.986 3.986a3.5 3.5 0 0 1-1.611.918l-7.443 1.902 1.904-7.441c.156-.61.473-1.166.917-1.61L30 11.766 36.232 18l-4.023 4.023a13.2 13.2 0 0 1 3.314.221l6.451-6.452a6.907 6.907 0 0 0 0-9.767m-8 1.768a4.407 4.407 0 0 1 6.233 6.232L38 16.232l-6.232-6.233zM33 46c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.924-11 11 4.925 11 11 11m0-2.5a8.46 8.46 0 0 1-5.062-1.671L39.83 29.938A8.5 8.5 0 0 1 33 43.5m5.062-15.33L26.17 40.061a8.5 8.5 0 0 1 11.89-11.89"/>`
} as const;

export default function EditProhibitedIcon({ 
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

  const gradientId = 'editprohibitedicon_gradient';
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