
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.5 3C6.701 3 2 7.701 2 13.5a10.5 10.5 0 0 0 1.102 4.688l-1.05 3.918a1.5 1.5 0 0 0 1.838 1.837l3.915-1.049A10.46 10.46 0 0 0 12.5 24C18.3 24 23 19.299 23 13.5S18.3 3 12.5 3m1.955 22.342a12 12 0 0 1-2.808.128A10.47 10.47 0 0 0 19.5 29a10.46 10.46 0 0 0 4.695-1.106l3.915 1.05a1.5 1.5 0 0 0 1.837-1.838l-1.05-3.918A10.44 10.44 0 0 0 30 18.5a10.5 10.5 0 0 0-6.451-9.69c.362.853.63 1.757.787 2.699A8.49 8.49 0 0 1 28 18.5a8.46 8.46 0 0 1-1.046 4.088 1 1 0 0 0-.09.74l.927 3.46-3.456-.927a1 1 0 0 0-.74.09 8.46 8.46 0 0 1-4.095 1.05 8.46 8.46 0 0 1-5.045-1.66M11.5 15c0-1.655.884-2.662 1.6-3.478l.02-.022c.56-.64.88-1.02.88-1.5-.01-.29-.18-1-1.5-1-1.43 0-1.5.83-1.5 1 0 .55-.45 1-1 1s-1-.45-1-1c0-1.21.93-3 3.5-3S16 8.79 16 10s-.73 2.09-1.38 2.83l-.018.02C14.01 13.523 13.5 14.1 13.5 15c0 .55-.45 1-1 1s-1-.45-1-1m2.25 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`,
  'regular': `<path d="M12.5 3C6.701 3 2 7.701 2 13.5a10.5 10.5 0 0 0 1.102 4.688l-1.05 3.918a1.5 1.5 0 0 0 1.838 1.837l3.915-1.049A10.46 10.46 0 0 0 12.5 24C18.3 24 23 19.299 23 13.5S18.3 3 12.5 3M5.046 17.588A8.46 8.46 0 0 1 4 13.5a8.5 8.5 0 1 1 8.5 8.5c-1.486 0-2.88-.38-4.094-1.049a1 1 0 0 0-.741-.09l-3.456.926.926-3.458a1 1 0 0 0-.09-.74m9.409 7.754a12 12 0 0 1-2.808.128A10.47 10.47 0 0 0 19.5 29a10.46 10.46 0 0 0 4.695-1.106l3.915 1.05a1.5 1.5 0 0 0 1.837-1.838l-1.05-3.918A10.44 10.44 0 0 0 30 18.5a10.5 10.5 0 0 0-6.451-9.69c.362.853.63 1.757.787 2.699A8.49 8.49 0 0 1 28 18.5a8.46 8.46 0 0 1-1.046 4.088 1 1 0 0 0-.09.74l.927 3.46-3.456-.927a1 1 0 0 0-.74.09 8.46 8.46 0 0 1-4.095 1.05 8.46 8.46 0 0 1-5.045-1.66M11.5 15c0 .55.45 1 1 1s1-.45 1-1c0-.9.51-1.478 1.102-2.15l.018-.02C15.27 12.09 16 11.21 16 10s-.93-3-3.5-3S9 8.79 9 10c0 .55.45 1 1 1s1-.45 1-1c0-.17.07-1 1.5-1 1.32 0 1.49.71 1.5 1 0 .48-.32.86-.88 1.5l-.02.022c-.716.816-1.6 1.823-1.6 3.478m2.25 3.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"/>`
} as const;

export default function ChatBubblesQuestionIcon({ 
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

  const gradientId = 'chatbubblesquestionicon_gradient';
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