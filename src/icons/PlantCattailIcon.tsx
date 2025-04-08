
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 5a3 3 0 1 1 6 0v4a3 3 0 0 1-2.25 2.906v2.783l3.47-3.47a.75.75 0 1 1 1.06 1.061l-4.53 4.53v1.44a.75.75 0 0 1-1.5 0v-1.44l-4.53-4.53a.75.75 0 1 1 1.06-1.06l3.47 3.47v-2.784A3 3 0 0 1 9 9zm-1.478 9.497c-.59.142-1.137.312-1.63.507-.799.314-1.495.707-2.005 1.182C3.377 16.662 3 17.274 3 18s.376 1.338.887 1.814c.51.474 1.206.867 2.004 1.182C7.492 21.626 9.652 22 12 22s4.508-.374 6.108-1.004c.799-.315 1.495-.708 2.005-1.182.51-.476.887-1.088.887-1.814s-.376-1.338-.887-1.814c-.51-.475-1.206-.868-2.005-1.182a12 12 0 0 0-1.63-.507l-1.269 1.269c.892.155 1.687.373 2.35.634.695.273 1.206.58 1.531.884.325.302.41.544.41.716s-.085.414-.41.716c-.325.303-.836.61-1.531.884-1.386.546-3.35.9-5.559.9s-4.173-.354-5.559-.9c-.695-.274-1.206-.58-1.532-.884-.324-.302-.409-.544-.409-.716s.085-.414.41-.716c.325-.303.836-.61 1.531-.884a12.2 12.2 0 0 1 2.35-.634z"/>`,
  'regular': `<path d="M12 2a3 3 0 0 0-3 3v4c0 1.398.956 2.573 2.25 2.906v2.783l-3.47-3.47a.75.75 0 0 0-1.06 1.061l4.53 4.53v1.44a.75.75 0 0 0 1.5 0v-1.44l4.53-4.53a.75.75 0 1 0-1.06-1.06l-3.47 3.47v-2.784A3 3 0 0 0 15 9V5a3 3 0 0 0-3-3m-1.5 3a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1-3 0zM5.891 15.004a12 12 0 0 1 1.631-.507l1.269 1.269a12.2 12.2 0 0 0-2.35.634c-.695.273-1.206.58-1.532.884-.324.302-.409.544-.409.716s.085.414.41.716c.325.303.836.61 1.531.884 1.386.546 3.35.9 5.559.9s4.173-.354 5.559-.9c.695-.274 1.206-.58 1.531-.884.325-.302.41-.544.41-.716s-.085-.414-.41-.716c-.325-.303-.836-.61-1.531-.884a12.2 12.2 0 0 0-2.35-.634l1.269-1.269c.59.142 1.137.312 1.63.507.799.314 1.495.707 2.005 1.182.51.476.887 1.088.887 1.814s-.376 1.338-.887 1.814c-.51.474-1.206.867-2.005 1.182-1.6.63-3.76 1.004-6.108 1.004s-4.508-.374-6.109-1.004c-.798-.315-1.494-.708-2.004-1.182C3.377 19.338 3 18.726 3 18s.376-1.338.887-1.814c.51-.475 1.206-.868 2.004-1.182"/>`
} as const;

export default function PlantCattailIcon({ 
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

  const gradientId = 'plantcattailicon_gradient';
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