
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.393 4.631a3.205 3.205 0 0 1 4.857-2.14v18.764a3.74 3.74 0 0 1-5.875-2.107l-.014-.003a4.106 4.106 0 0 1-1.372-7.558 3.24 3.24 0 0 1-.992-2.337v-.595a3.845 3.845 0 0 1 3.26-3.8l.098-.015zm6.357 16.624a3.74 3.74 0 0 0 5.875-2.107l.014-.003a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015-.038-.209A3.205 3.205 0 0 0 12.75 2.49z"/>`,
  'regular': `<path d="M9.547 2a3.205 3.205 0 0 0-3.153 2.63l-.037.21-.098.015A3.845 3.845 0 0 0 3 8.655v.595c0 .917.38 1.746.992 2.337a4.106 4.106 0 0 0 1.372 7.557l.014.003A3.741 3.741 0 0 0 12 20.507a3.741 3.741 0 0 0 6.624-1.36l.014-.002a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015-.038-.209A3.205 3.205 0 0 0 12 3.141 3.2 3.2 0 0 0 9.547 2m3.204 16.333.001-.074V5.204l-.002-.107a1.705 1.705 0 0 1 3.38-.197l.133.734a.75.75 0 0 0 .624.607l.626.097A2.345 2.345 0 0 1 19.5 8.655v.595A1.75 1.75 0 0 1 17.75 11h-1a.75.75 0 0 0 0 1.5h1.143a2.607 2.607 0 0 1 .474 5.17l-.503.092a.75.75 0 0 0-.597.578l-.086.397a2.241 2.241 0 0 1-4.43-.404M11.25 5.097l-.002.108V7.2q0 .035.003.069v11.064a2.241 2.241 0 0 1-4.429.403l-.086-.396a.75.75 0 0 0-.597-.578l-.503-.093a2.606 2.606 0 0 1 .473-5.17h1.144a.75.75 0 0 0 0-1.5H6.249a1.75 1.75 0 0 1-1.75-1.75v-.594c0-1.158.844-2.142 1.988-2.318l.626-.096a.75.75 0 0 0 .624-.607l.133-.735a1.705 1.705 0 0 1 3.379.198"/>`
} as const;

export default function BrainIcon({ 
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

  const gradientId = 'brainicon_gradient';
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