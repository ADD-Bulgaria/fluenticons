
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m24.981 26.395 3.312 3.312a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l7.14 7.14a9 9 0 0 0-.305.342A8.97 8.97 0 0 0 7 17.2V26a4 4 0 0 0 6.5 3.122A4 4 0 0 0 16 30a3.98 3.98 0 0 0 2.5-.878 4 4 0 0 0 6.48-2.727M22.586 24l.414.414V26a2 2 0 0 1-3.667 1.105 1 1 0 0 0-1.665 0c-.36.542-.973.895-1.668.895a2 2 0 0 1-1.667-.895 1 1 0 0 0-1.665 0A2 2 0 0 1 9 26v-2zM25 17.2v4.262L14.538 11h5.204c-1.02-1.022-2.027-2.202-2.332-3.799h-2.905c-.19.988-.648 1.82-1.214 2.553l-1.43-1.43c.348-.488.582-.975.682-1.514A2.5 2.5 0 0 1 13.5 2h5a2.5 2.5 0 0 1 .878 4.842c.199 1.015.878 1.854 1.907 2.872A8.99 8.99 0 0 1 25 17.12v.081M13.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>`,
  'regular': `<path d="m9.432 10.847-7.14-7.14a1 1 0 0 1 1.415-1.414l26 26a1 1 0 0 1-1.414 1.414l-3.312-3.312a4 4 0 0 1-6.48 2.727A4 4 0 0 1 16 30a4 4 0 0 1-2.5-.878A4 4 0 0 1 7 26v-9a8.97 8.97 0 0 1 2.431-6.153M22.586 24H9v2a2 2 0 0 0 3.668 1.105 1 1 0 0 1 1.665 0 1.998 1.998 0 0 0 3.335 0 1 1 0 0 1 1.665 0A2 2 0 0 0 23 26v-1.586zm-2-2-9-9h-1.331A6.96 6.96 0 0 0 9 17.146V22zM23 17.2v2.262l2 2V17a8.99 8.99 0 0 0-3.715-7.286c-1.029-1.018-1.708-1.857-1.907-2.872A2.501 2.501 0 0 0 18.5 2h-5a2.5 2.5 0 0 0-.957 4.81c-.1.54-.334 1.026-.682 1.514l1.43 1.43c.566-.734 1.024-1.565 1.214-2.553h2.905c.305 1.597 1.312 2.777 2.332 3.799h-5.204l2 2h5.208A6.97 6.97 0 0 1 23 17.108zM13 4.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>`
} as const;

export default function DrinkBottleOffIcon({ 
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

  const gradientId = 'drinkbottleofficon_gradient';
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