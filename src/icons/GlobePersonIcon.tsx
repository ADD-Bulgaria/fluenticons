
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.095 16.5q-.06.317-.127.618A2.77 2.77 0 0 0 13 19.772v.103c0 .465.084.93.26 1.371-.404.486-.833.753-1.26.753-1.197 0-2.401-2.094-3.038-5.204l-.058-.294zm-.095-2c0-.654.18-1.266.492-1.79a26 26 0 0 0-.068-2.71H8.575l-.033.489A26 26 0 0 0 8.674 15h6.362a3.5 3.5 0 0 1-.036-.5m3.5-3.5a3.5 3.5 0 0 1 3.377 2.578A10.1 10.1 0 0 0 21.801 10h-4.87l.039.657q.015.338.024.683c.456-.218.967-.34 1.506-.34M3.065 16.501h4.306c.365 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.951-4.814zm-.867-6.5h4.87a28 28 0 0 0 .033 4.42l.058.58H2.456a10.05 10.05 0 0 1-.258-5m12.746-7.424-.108-.17A10.03 10.03 0 0 1 21.372 8.5H16.78c-.316-2.416-.957-4.492-1.837-5.923M9.04 2.444l.122-.037c-.88 1.35-1.535 3.329-1.883 5.654l-.061.44h-4.59A10.03 10.03 0 0 1 9.04 2.443M12 2.002c1.318 0 2.645 2.542 3.214 6.183l.046.315H8.74c.54-3.809 1.904-6.498 3.26-6.498M21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M22.001 12c0-5.524-4.478-10.002-10.001-10.002C6.476 1.998 1.998 6.476 1.998 12c0 5.523 4.478 10 10.002 10q.808-.001 1.583-.125a3.7 3.7 0 0 1-.576-1.773c-.326.259-.666.398-1.007.398-1.154 0-2.287-1.588-2.94-4.002h6.567a3.5 3.5 0 0 1-.591-1.5H8.738a19 19 0 0 1-.135-5h6.794a19 19 0 0 1 .091 2.716 3.5 3.5 0 0 1 1.503-1.375A21 21 0 0 0 16.906 10h3.358q.191.786.229 1.622a3.5 3.5 0 0 1 1.384 1.957q.123-.772.124-1.578M4.785 16.5h2.723l.101.395c.317 1.17.748 2.196 1.27 3.015a8.53 8.53 0 0 1-4.094-3.41m-1.05-6.501h3.358a21 21 0 0 0-.095 2 20 20 0 0 0 .218 3H4.043a8.5 8.5 0 0 1-.545-3c0-.682.08-1.347.233-1.983zm5.123-5.902.023-.008c-.723 1.132-1.27 2.658-1.583 4.41H4.25c.904-2 2.56-3.587 4.608-4.402m3.026-.594L12 3.498l.126.006c1.261.126 2.479 2.125 3.045 4.995H8.828c.568-2.878 1.79-4.88 3.056-4.996m3.342.76-.106-.174.29.121a8.53 8.53 0 0 1 4.34 4.29H16.7c-.297-1.665-.805-3.125-1.475-4.237M21 14.499a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.874v-.103c0-.979.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function GlobePersonIcon({ 
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

  const gradientId = 'globepersonicon_gradient';
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