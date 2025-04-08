
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 3h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3M7 9.5a1.5 1.5 0 0 1-.439 1.061 1.5 1.5 0 0 1-1.635.325 1.5 1.5 0 0 1-.812-.812A1.5 1.5 0 0 1 4 9.5V9a.5.5 0 0 1 .146-.354A.52.52 0 0 1 4.5 8.5a.5.5 0 0 1 .354.146A.52.52 0 0 1 5 9v.5a.5.5 0 0 0 .146.354A.52.52 0 0 0 5.5 10a.5.5 0 0 0 .354-.146A.52.52 0 0 0 6 9.5v-3a.5.5 0 0 1 .146-.354A.52.52 0 0 1 6.5 6a.5.5 0 0 1 .354.146A.52.52 0 0 1 7 6.5zm2.875-2.373a.43.43 0 0 0-.3-.125h-.146a.42.42 0 0 0-.3.125.42.42 0 0 0 .11.681l.976.489c.286.145.515.381.65.672A1.42 1.42 0 0 1 9.58 11h-.146a1.43 1.43 0 0 1-1.009-.418A1.43 1.43 0 0 1 8 9.573a.535.535 0 0 1 .5-.537.46.46 0 0 1 .349.127A.47.47 0 0 1 9 9.5a.45.45 0 0 0 .427.5h.146a.426.426 0 0 0 .19-.806l-.976-.492a1.424 1.424 0 0 1-.744-1.601c.073-.312.249-.59.5-.789.575-.458 1.516-.415 2.039.106.267.268.418.631.418 1.009a.53.53 0 0 1-.5.537.46.46 0 0 1-.349-.127A.47.47 0 0 1 10 7.5v-.073a.43.43 0 0 0-.125-.3"/>`,
  'regular': `<path d="M12.25 3h-9.5C1.785 3 1 3.785 1 4.75v7.5c0 .965.785 1.75 1.75 1.75h9.5c.965 0 1.75-.785 1.75-1.75v-7.5C14 3.785 13.215 3 12.25 3m.75 9.25a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75v-7.5A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75zM6.962 6.308A.5.5 0 0 1 7 6.5v3a1.5 1.5 0 0 1-.439 1.061 1.5 1.5 0 0 1-1.635.325 1.5 1.5 0 0 1-.812-.812A1.5 1.5 0 0 1 4 9.5V9a.5.5 0 0 1 .146-.354A.52.52 0 0 1 4.5 8.5a.5.5 0 0 1 .354.146A.52.52 0 0 1 5 9v.5a.5.5 0 0 0 .146.354A.52.52 0 0 0 5.5 10a.5.5 0 0 0 .354-.146A.52.52 0 0 0 6 9.5v-3a.5.5 0 0 1 .146-.354A.52.52 0 0 1 6.5 6a.5.5 0 0 1 .354.146.5.5 0 0 1 .108.162M10 7.5v-.073a.427.427 0 0 0-.425-.425h-.146a.42.42 0 0 0-.3.125.42.42 0 0 0 .11.681l.976.489c.286.145.515.381.65.672A1.42 1.42 0 0 1 9.58 11h-.146a1.43 1.43 0 0 1-1.009-.418A1.43 1.43 0 0 1 8 9.573a.53.53 0 0 1 .5-.537.46.46 0 0 1 .349.127A.47.47 0 0 1 9 9.5a.47.47 0 0 0 .105.343.45.45 0 0 0 .322.157h.146a.426.426 0 0 0 .19-.806l-.976-.492a1.424 1.424 0 0 1-.744-1.601c.073-.312.249-.59.5-.789.575-.458 1.516-.415 2.039.106.267.268.418.631.418 1.009a.53.53 0 0 1-.5.537.46.46 0 0 1-.349-.127A.47.47 0 0 1 10 7.5"/>`
} as const;

export default function CodeJsRectangleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codejsrectangleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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