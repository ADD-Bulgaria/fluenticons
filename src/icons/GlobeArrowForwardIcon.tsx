
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.314 5.765c.481 1.203.881 2.636 1.171 4.235h-8.97c.29-1.6.69-3.032 1.17-4.235.516-1.288 1.104-2.263 1.706-2.9.598-.631 1.14-.863 1.604-.865h.008c.464 0 1.007.233 1.606.866.602.636 1.19 1.611 1.705 2.899M9.21 20A38 38 0 0 1 9 16c0-1.379.073-2.72.21-4H2.58A14 14 0 0 0 2 16c0 1.39.203 2.733.58 4zM11 16c0-1.393.078-2.734.222-4h9.556q.124 1.083.18 2.233A9.02 9.02 0 0 0 14.512 20h-3.29A36 36 0 0 1 11 16m12-2a8.98 8.98 0 0 1 6.943 3.273Q30 16.643 30 16c0-1.39-.203-2.733-.58-4h-6.63q.105.979.159 2zm-8.945 8a8.98 8.98 0 0 0 2.914 7.68c-.35.228-.676.32-.969.32-.465 0-1.009-.231-1.609-.866-.602-.637-1.19-1.611-1.705-2.899-.481-1.203-.881-2.636-1.171-4.235zm-4.57 0H3.347a14.04 14.04 0 0 0 8.754 7.45c-.479-.714-.903-1.55-1.272-2.472-.573-1.431-1.03-3.118-1.344-4.978m19.168-12h-6.138c-.314-1.86-.771-3.547-1.344-4.978-.369-.922-.793-1.758-1.272-2.472A14.04 14.04 0 0 1 28.653 10M3.347 10h6.138c.314-1.86.771-3.547 1.344-4.978.369-.922.793-1.758 1.272-2.472A14.04 14.04 0 0 0 3.347 10M23 30.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m1.22-10.22 1.22 1.22h-2.69a4.25 4.25 0 0 0-4.25 4.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 1 22.75 23h2.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06"/>`,
  'regular': `<path d="M16 30q.645 0 1.273-.057a9 9 0 0 1-1.812-2.026c-.91-.275-1.922-1.25-2.796-3.144a16 16 0 0 1-.96-2.773h2.35a9 9 0 0 1 .457-2h-3.211A26 26 0 0 1 11 16c0-1.407.107-2.752.3-4h9.4q.167 1.075.243 2.236.961-.226 1.989-.236a27 27 0 0 0-.21-2h4.595c.39 1.104.624 2.283.673 3.509a9 9 0 0 1 1.953 1.764Q30 16.643 30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14m0-26c1.032 0 2.283.948 3.335 3.227.373.81.698 1.743.96 2.773h-8.59c.262-1.03.587-1.964.96-2.773C13.717 4.948 14.968 4 16 4m-5.15 2.389c-.49 1.06-.896 2.278-1.201 3.611H5.605a12.04 12.04 0 0 1 6.134-5.222 12 12 0 0 0-.89 1.61M9.278 12A28 28 0 0 0 9 16c0 1.386.097 2.73.279 4H4.683A12 12 0 0 1 4 16c0-1.402.24-2.749.683-4zm.37 10c.305 1.333.711 2.551 1.2 3.611.263.57.56 1.112.89 1.61A12.04 12.04 0 0 1 5.605 22zM20.26 4.778A12.04 12.04 0 0 1 26.395 10H22.35c-.305-1.333-.711-2.551-1.2-3.611a12 12 0 0 0-.89-1.61M23 30.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m1.22-10.22 1.22 1.22h-2.69a4.25 4.25 0 0 0-4.25 4.25v.5a.75.75 0 0 0 1.5 0v-.5A2.75 2.75 0 0 1 22.75 23h2.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06"/>`
} as const;

export default function GlobeArrowForwardIcon({ 
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

  const gradientId = 'globearrowforwardicon_gradient';
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