
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M30.847 24.912 30.91 24h-1.66A3.25 3.25 0 0 1 26 20.75v-5.5C26 9.037 31.037 4 37.25 4h.5c.69 0 1.25.56 1.25 1.25v17.5c0 .49.185 3.196.403 6.368l.01.13C39.684 33.206 40 37.79 40 39a5 5 0 0 1-10 0c0-1.089.255-5.21.503-8.984.125-1.903.25-3.742.344-5.104M10.614 4a1.38 1.38 0 0 0-1.367 1.176C9.107 6.124 8 13.666 8 17c0 2.196.946 4.174 2.448 5.544.695.633 1.052 1.273 1.052 1.842 0 .045-.001.082-.005.122C11.401 25.682 10.5 36.976 10.5 39a5 5 0 0 0 10 0c0-2.024-.901-13.318-.995-14.492l-.005-.122c0-.569.357-1.209 1.052-1.842A7.48 7.48 0 0 0 23 17c0-3.334-1.107-10.88-1.247-11.824A1.38 1.38 0 0 0 20.387 4h-.018c-.796 0-1.367.655-1.367 1.37v10.51a1.12 1.12 0 1 1-2.24 0V5.319a1.263 1.263 0 1 0-2.522.051v10.51a1.12 1.12 0 1 1-2.24 0V5.37A1.37 1.37 0 0 0 10.633 4z"/>`,
  'filled': `<path d="M10.614 4a1.38 1.38 0 0 0-1.367 1.176C9.107 6.124 8 13.666 8 17c0 2.196.946 4.174 2.448 5.544.695.633 1.052 1.273 1.052 1.842 0 .045-.001.082-.005.122C11.401 25.682 10.5 36.976 10.5 39a5 5 0 0 0 10 0c0-2.024-.901-13.318-.995-14.492l-.005-.122c0-.569.357-1.209 1.052-1.842A7.48 7.48 0 0 0 23 17c0-3.334-1.107-10.88-1.247-11.824A1.38 1.38 0 0 0 20.387 4h-.018c-.796 0-1.367.655-1.367 1.37v10.51a1.12 1.12 0 1 1-2.24 0V5.319a1.263 1.263 0 1 0-2.522.051v10.51a1.12 1.12 0 1 1-2.24 0V5.37A1.37 1.37 0 0 0 10.633 4zM30.91 24l-.063.912c-.094 1.362-.22 3.2-.344 5.104C30.255 33.79 30 37.911 30 39a5 5 0 0 0 10 0c0-1.209-.315-5.794-.588-9.752l-.009-.13C39.185 25.946 39 23.24 39 22.75V5.25C39 4.56 38.44 4 37.75 4h-.5C31.037 4 26 9.037 26 15.25v5.5A3.25 3.25 0 0 0 29.25 24z"/>`,
  'regular': `<path d="M7.978 6.726A3.26 3.26 0 0 1 11.203 4c.804 0 1.54.288 2.112.765A3.5 3.5 0 0 1 15.5 4c.826 0 1.586.286 2.185.765A3.28 3.28 0 0 1 19.797 4a3.26 3.26 0 0 1 3.225 2.726C23.39 8.978 24 13.128 24 16a8.49 8.49 0 0 1-3.547 6.909c-.64.46-.953 1.015-.953 1.49 0 .038.001.064.003.094.088 1.096.997 12.475.997 14.507a5 5 0 0 1-10 0c0-2.032.909-13.411.996-14.507a1 1 0 0 0 .004-.094c0-.475-.312-1.03-.953-1.49A8.49 8.49 0 0 1 7 16c0-2.872.61-7.022.978-9.274M19 16.75a1.25 1.25 0 1 1-2.5 0V7.5a1 1 0 1 0-2 0v9.25a1.25 1.25 0 1 1-2.5 0V7.297a.797.797 0 0 0-.797-.797c-.388 0-.7.273-.758.63-.37 2.267-.945 6.229-.945 8.87a5.99 5.99 0 0 0 2.505 4.878c1.02.732 1.995 1.953 1.995 3.52 0 .098-.003.19-.011.295C13.893 25.88 13 37.1 13 39a2.5 2.5 0 0 0 5 0c0-1.9-.893-13.12-.988-14.307a4 4 0 0 1-.012-.294c0-1.568.975-2.79 1.995-3.521A5.99 5.99 0 0 0 21.5 16c0-2.641-.575-6.603-.945-8.87a.76.76 0 0 0-.758-.63.797.797 0 0 0-.797.797zM36.5 6.532V22.75c0 .59.188 3.33.395 6.335l.014.204c.28 4.066.591 8.602.591 9.711a2.5 2.5 0 0 1-5 0c0-.982.245-4.986.497-8.82a1683 1683 0 0 1 .457-6.73l.043-.612A1.25 1.25 0 0 0 32.25 21.5h-3a.75.75 0 0 1-.75-.75v-5.5a8.75 8.75 0 0 1 8-8.718M30.91 24l-.063.912c-.094 1.362-.22 3.2-.344 5.104C30.255 33.79 30 37.911 30 39a5 5 0 0 0 10 0c0-1.209-.315-5.794-.588-9.752l-.009-.13C39.185 25.946 39 23.24 39 22.75V5.25C39 4.56 38.44 4 37.75 4h-.5C31.037 4 26 9.037 26 15.25v5.5A3.25 3.25 0 0 0 29.25 24z"/>`
} as const;

export default function FoodIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'foodicon_gradient';
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