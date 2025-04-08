
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4"/><path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316 1.22 1.537 2.678 2.829 3.655 3.622.926.75 2.228.75 3.154 0 .977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2"/><path d="M14.5 9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>`,
  'filled': `<path d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316 1.22 1.537 2.678 2.829 3.655 3.622.926.75 2.228.75 3.154 0 .977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2m2.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m3.182 6.347c-.364.432-.74.842-1.114 1.223q.535.15.99.33c.696.274 1.207.58 1.532.884.325.302.41.544.41.716s-.085.414-.41.716c-.325.303-.836.61-1.531.884-1.386.546-3.35.9-5.559.9s-4.173-.354-5.559-.9c-.695-.273-1.206-.58-1.532-.884-.324-.302-.409-.544-.409-.716s.085-.414.41-.716c.325-.303.836-.61 1.531-.884q.457-.18.99-.33a22 22 0 0 1-1.113-1.223q-.219.075-.427.157c-.798.315-1.494.707-2.004 1.182C3.377 17.662 3 18.274 3 19s.376 1.338.887 1.814c.51.475 1.206.868 2.004 1.182C7.492 22.626 9.652 23 12 23s4.508-.373 6.108-1.004c.799-.314 1.495-.707 2.005-1.182.51-.476.887-1.088.887-1.814s-.376-1.338-.887-1.814c-.51-.474-1.206-.867-2.005-1.182q-.207-.081-.426-.157"/>`,
  'regular': `<path d="M12 3.5a6 6 0 0 0-6 6c0 1.414.802 2.947 1.943 4.384 1.124 1.416 2.489 2.629 3.425 3.389a.99.99 0 0 0 1.264 0c.936-.76 2.301-1.973 3.425-3.39C17.2 12.448 18 10.915 18 9.5a6 6 0 0 0-6-6m-7.5 6a7.5 7.5 0 1 1 15 0c0 1.932-1.064 3.8-2.268 5.316-1.22 1.537-2.678 2.829-3.655 3.622-.926.75-2.228.75-3.154 0-.977-.793-2.435-2.085-3.655-3.622C5.564 13.301 4.5 11.432 4.5 9.5M12 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9 9.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m8.682 6.346c-.364.433-.74.842-1.114 1.224q.535.15.99.33c.696.273 1.207.58 1.532.884.325.302.41.544.41.716s-.085.414-.41.716c-.325.303-.836.61-1.531.884-1.386.546-3.35.9-5.559.9s-4.173-.354-5.559-.9c-.695-.274-1.206-.581-1.532-.884-.324-.302-.409-.544-.409-.716s.085-.414.41-.716c.325-.303.836-.61 1.531-.884q.457-.18.99-.33c-.373-.382-.75-.791-1.113-1.224q-.219.077-.427.158c-.798.314-1.494.707-2.004 1.182C3.377 17.662 3 18.274 3 19s.376 1.338.887 1.814c.51.474 1.206.867 2.004 1.182C7.492 22.626 9.652 23 12 23s4.508-.374 6.108-1.004c.799-.315 1.495-.708 2.005-1.182.51-.476.887-1.088.887-1.814s-.376-1.338-.887-1.814c-.51-.475-1.206-.868-2.005-1.182q-.207-.082-.426-.158"/>`
} as const;

export default function LocationRippleIcon({ 
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

  const gradientId = 'locationrippleicon_gradient';
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