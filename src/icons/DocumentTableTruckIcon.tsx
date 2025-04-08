
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.113 17.25V16h-2.462l.098.196c.165.33.251.693.251 1.062v.242h1.863a.25.25 0 0 0 .25-.25m0-2.75h-3.212l-.177-.354a2.4 2.4 0 0 0-.61-.768V13h3.75a.25.25 0 0 1 .25.25zM13 20.25V19h1.863a1.75 1.75 0 0 0 1.75-1.75v-4a1.75 1.75 0 0 0-1.75-1.75H9.181c-.43-.314-.961-.5-1.535-.5H3.613V4a2 2 0 0 1 2-2h6v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5.382A2.37 2.37 0 0 0 13 20.25M13.113 8V2.5l6 6h-5.5a.5.5 0 0 1-.5-.5M1 13.604C1 12.718 1.718 12 2.604 12h5.042c.886 0 1.604.718 1.604 1.604v.23h.35c.52 0 .997.294 1.23.76l1.025 2.05c.095.19.145.4.145.614v2.992c0 .76-.616 1.375-1.375 1.375h-.516a1.834 1.834 0 0 1-3.551 0H5.526a1.834 1.834 0 0 1-3.582-.142A1.6 1.6 0 0 1 1 20.021zm8.25 1.146v1.833h1.55l-.79-1.58a.46.46 0 0 0-.41-.253zm-5.5 5.5a.917.917 0 1 0 0 1.833.917.917 0 0 0 0-1.833m3.667.917a.917.917 0 1 0 1.833 0 .917.917 0 0 0-1.833 0"/>`,
  'regular': `<path d="M18 20.5h-5.013a2.37 2.37 0 0 1-.756 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v7h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v10a.5.5 0 0 1-.5.5m-.622-12H14a.5.5 0 0 1-.5-.5V4.621zM13 17.5V19h2.25A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75H9.18c.466.34.814.83.973 1.399a2.38 2.38 0 0 1 1.347.884V13h3.75a.25.25 0 0 1 .25.25v1.25h-3.599l.75 1.5H15.5v1.25a.25.25 0 0 1-.25.25zM2.604 12C1.718 12 1 12.718 1 13.604v6.417c0 .65.387 1.21.944 1.462a1.834 1.834 0 0 0 3.582.142h1.032a1.834 1.834 0 0 0 3.55 0h.517c.76 0 1.375-.616 1.375-1.375v-2.992c0-.213-.05-.424-.145-.615l-1.025-2.05a1.38 1.38 0 0 0-1.23-.76h-.35v-.229c0-.886-.718-1.604-1.604-1.604zm6.646 4.583V14.75h.35c.174 0 .332.098.41.253l.79 1.58zm-6.417 4.584a.917.917 0 1 1 1.834 0 .917.917 0 0 1-1.834 0m5.5.916a.917.917 0 1 1 0-1.833.917.917 0 0 1 0 1.833"/>`
} as const;

export default function DocumentTableTruckIcon({ 
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

  const gradientId = 'documenttabletruckicon_gradient';
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