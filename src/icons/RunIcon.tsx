
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.482 6.024a1.25 1.25 0 0 0-2.46.446q.038.207.084.411c-3.722 1.553-5.81 3.606-6.928 5.844-1.097 2.198-1.172 4.43-1.177 6.096L4.684 21.8a3.25 3.25 0 0 0 .746 4.687l19.068 12.895a15.25 15.25 0 0 0 8.543 2.617h4.585a6.373 6.373 0 0 0 6.355-6.847c-.254-3.333-3.076-5.675-5.722-6.826-.979-.425-1.806-1.008-2.333-1.787l-6.183-10.552.22-.036a1.25 1.25 0 0 0-.423-2.464q-.929.158-1.877.146c-4.343-.056-8.54-2.705-9.863-6.42a7.6 7.6 0 0 1-.318-1.189M13.26 10.69l3.402 5.892a2.5 2.5 0 0 1-.915 3.415l-3.11 1.795L9.5 19.676v-.426c0-1.742.017-3.609.915-5.408.524-1.049 1.383-2.139 2.844-3.152m1.996 12.868 7.313-4.223a2.5 2.5 0 0 1 3.415.915l1.684 2.916a2.5 2.5 0 0 1-.916 3.415l-3.78 2.183zm17.844 12.939H41.4a3.875 3.875 0 0 1-3.775 3.002H33.04a12.75 12.75 0 0 1-7.142-2.188L6.83 24.416a.75.75 0 0 1-.172-1.082l1.306-1.679 19.402 13.09a10.25 10.25 0 0 0 5.733 1.752"/>`,
  'regular': `<path d="M17.484 6.036a1.264 1.264 0 0 0-1.455-1.019A1.236 1.236 0 0 0 15.02 6.46q.04.213.086.422c-3.66 1.526-5.742 3.538-6.874 5.737-1.149 2.234-1.226 4.51-1.231 6.203L4.684 21.8a3.25 3.25 0 0 0 .746 4.687l19.068 12.895a15.25 15.25 0 0 0 8.543 2.617h4.585a6.373 6.373 0 0 0 6.373-6.373c0-3.581-2.979-6.1-5.74-7.3-.979-.425-1.806-1.008-2.333-1.787l-6.184-10.552q.117-.018.232-.038a1.236 1.236 0 0 0 1.009-1.44 1.264 1.264 0 0 0-1.455-1.02q-.582.1-1.172.131l-.048-.081-.154.09c-2.204.076-4.45-.54-6.325-1.683-2.266-1.38-3.902-3.47-4.345-5.91m9.428 10.065 6.876 11.735.037.06c.883 1.328 2.182 2.177 3.438 2.723 1.771.77 3.213 1.976 3.863 3.378h-8.027a7.75 7.75 0 0 1-4.334-1.325l-4.613-3.113 2.47-1.426a2.75 2.75 0 0 0 1.007-3.756l-2.31-4.001a2.75 2.75 0 0 0-3.756-1.007l-6.745 3.894-2.135-1.44 2.946-1.7a2.75 2.75 0 0 0 1.006-3.757l-3.305-5.724a15 15 0 0 1 2.625-1.406c1.015 2.012 2.656 3.663 4.582 4.837a14.2 14.2 0 0 0 6.375 2.028m-5.066 11.903-4.722-3.186 5.689-3.284a.25.25 0 0 1 .341.091l2.31 4.002a.25.25 0 0 1-.091.341zm-11.39-14.242a7.5 7.5 0 0 1 .963-1.432l3.051 5.286a.25.25 0 0 1-.091.341l-4.001 2.31-.878-.592v-.425c0-1.768.017-3.665.956-5.488m-3.798 9.572 1.306-1.68 19.403 13.09a10.25 10.25 0 0 0 5.732 1.753h8.302a3.875 3.875 0 0 1-3.775 3.002H33.04a12.75 12.75 0 0 1-7.142-2.188L6.83 24.416a.75.75 0 0 1-.172-1.082"/>`
} as const;

export default function RunIcon({ 
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

  const gradientId = 'runicon_gradient';
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