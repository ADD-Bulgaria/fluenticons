
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M41 16a5 5 0 1 0 0-10 5 5 0 0 0 0 10M10.25 9h23.002A8 8 0 0 0 33 11a7.99 7.99 0 0 0 3.331 6.497L24 24.325 5.018 13.814A5.25 5.25 0 0 1 10.25 9m14.352 18.347 15.394-8.41a8.1 8.1 0 0 0 3.004-.19V33.75c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 0 1 5 33.75V17.296l18.398 10.051.127.061a1.25 1.25 0 0 0 1.077-.06"/>`,
  'regular': `<path d="M43 15.584a5.001 5.001 0 1 0-6.607-6.53 5 5 0 0 0-.368 2.446A5.004 5.004 0 0 0 43 15.584M10.25 9h23.52a7.5 7.5 0 0 0-.254 2.5H10.25a2.75 2.75 0 0 0-2.75 2.75v1.249L24 24.573l13.066-7.186c.954.588 2.05.97 3.223 1.08l-15.687 8.628a1.25 1.25 0 0 1-1.077.061l-.127-.06L7.5 18.35v15.4a2.75 2.75 0 0 0 2.75 2.75h27.5a2.75 2.75 0 0 0 2.75-2.75V18.484a7.6 7.6 0 0 0 2.5-.254v15.52c0 2.9-2.35 5.25-5.25 5.25h-27.5A5.25 5.25 0 0 1 5 33.75v-19.5C5 11.35 7.35 9 10.25 9"/>`
} as const;

export default function MailUnreadIcon({ 
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

  const gradientId = 'mailunreadicon_gradient';
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