
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 5.5A4.5 4.5 0 0 1 5.502 1 4.5 4.5 0 1 1 1 5.5m6.399.896-.897.897V5.75A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.967 0 1.75.784 1.75 1.75v1.543l-.896-.897a.5.5 0 0 0-.708.708L5.65 8.856a.5.5 0 0 0 .705-.002l1.751-1.75a.5.5 0 1 0-.707-.708M1.994 9.74a5.5 5.5 0 0 0 3.002 1.237v3.524a1.5 1.5 0 0 1-3.002-.001zM10.978 6a5.5 5.5 0 0 1-4.982 4.978V14h8.003V6zM16.5 4a1.5 1.5 0 0 0-1.501 1.5v9a1.5 1.5 0 0 0 3.001 0v-9A1.5 1.5 0 0 0 16.5 4"/>`,
  'regular': `<path d="M10.98 6a5.5 5.5 0 0 1-.185 1h4.203v6H4.993v-2.023a5.5 5.5 0 0 1-1-.186V14.5a.5.5 0 0 1-1 0v-4.103a5.5 5.5 0 0 1-1.001-.659V14.5a1.5 1.5 0 0 0 3.001 0V14h10.005v.5a1.5 1.5 0 0 0 3.002 0v-9a1.5 1.5 0 0 0-3.002 0V6zm5.52-1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1.001 0v-9a.5.5 0 0 1 .5-.5M5.501 1a4.501 4.501 0 1 0 0 9 4.501 4.501 0 1 0 0-9m2.605 5.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.706.002L3.898 7.104a.5.5 0 1 1 .707-.708l.897.897V5.75A1.75 1.75 0 0 0 3.752 4h-.25a.5.5 0 1 1 0-1h.25a2.75 2.75 0 0 1 2.75 2.75v1.543l.898-.897a.5.5 0 0 1 .707 0"/>`
} as const;

export default function PipelineArrowCurveDownIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'pipelinearrowcurvedownicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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