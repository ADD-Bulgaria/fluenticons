
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.306 2.367q-.713.2-1.38.498L11.78 6.72a.75.75 0 0 1-1.06 1.06L6.552 3.613q-.564.368-1.073.805L9.28 8.22a.75.75 0 0 1-1.06 1.06l-3.802-3.8q-.437.508-.805 1.072L7.78 10.72a.75.75 0 1 1-1.06 1.06L2.865 7.926a10 10 0 0 0-.498 1.38L6.78 13.72a.75.75 0 1 1-1.06 1.06L2.04 11.1a10 10 0 0 0 .008 1.888L6.53 17.47a.75.75 0 1 1-1.06 1.06l-2.717-2.717A10 10 0 0 0 12 22c5.523 0 10-4.477 10-10 0-4.172-2.555-7.748-6.187-9.247L18.53 5.47a.75.75 0 0 1-1.06 1.06l-4.482-4.482A10 10 0 0 0 11.1 2.04l3.68 3.68a.75.75 0 0 1-1.061 1.06z"/>`,
  'regular': `<path d="m10.559 3.622 3.159 3.158a.75.75 0 0 0 1.06-1.06l-2.2-2.2c.837.056 1.64.233 2.393.514l2.497 2.496a.75.75 0 0 0 1.049.012A8.5 8.5 0 0 1 6.543 18.516a.75.75 0 0 0-.015-1.046l-2.492-2.493a8.5 8.5 0 0 1-.516-2.395l2.198 2.198a.75.75 0 0 0 1.06-1.06l-3.157-3.158q.132-.768.395-1.484l2.702 2.702a.75.75 0 0 0 1.06-1.06L4.701 7.642q.348-.581.78-1.098L8.219 9.28a.75.75 0 0 0 1.06-1.06L6.542 5.483q.516-.434 1.098-.78l3.078 3.077a.75.75 0 0 0 1.06-1.06L9.076 4.017a8.4 8.4 0 0 1 1.484-.395M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"/>`
} as const;

export default function CircleHighlightIcon({ 
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

  const gradientId = 'circlehighlighticon_gradient';
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