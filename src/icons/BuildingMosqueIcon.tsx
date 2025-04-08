import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.25 12.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m35.25-1.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m-34 4.5a1.25 1.25 0 1 0-2.5 0v24.5A2.25 2.25 0 0 0 8.25 42h9.5A2.25 2.25 0 0 0 20 39.75v-3A3.75 3.75 0 0 1 23.75 33h.5A3.75 3.75 0 0 1 28 36.75v3A2.25 2.25 0 0 0 30.25 42h9.5A2.25 2.25 0 0 0 42 39.75v-24.5a1.25 1.25 0 1 0-2.5 0V26h-4.588A12 12 0 0 0 36 21c0-1.868-.843-3.548-1.946-4.955-1.107-1.413-2.552-2.65-3.946-3.659a35 35 0 0 0-3.835-2.391 34 34 0 0 0-1.723-.868l-.027-.012-.008-.004-.004-.002a1.25 1.25 0 0 0-1.022 0h-.001l-.003.002-.008.004-.027.012-.099.046q-.129.06-.36.172c-.308.15-.743.369-1.264.65a35 35 0 0 0-3.835 2.391c-1.394 1.01-2.84 2.246-3.946 3.659C12.843 17.452 12 19.132 12 21c0 1.784.39 3.478 1.088 5H8.5zm16.015-6.14.035.017-.039-.018.012.006"/>`,
  'regular': `<path d="M8.5 15.25a1.25 1.25 0 1 0-2.5 0v24.5A2.25 2.25 0 0 0 8.25 42h31.5A2.25 2.25 0 0 0 42 39.75v-24.5a1.25 1.25 0 1 0-2.5 0V26h-4.588A12 12 0 0 0 36 21c0-1.868-.843-3.548-1.946-4.955-1.107-1.413-2.552-2.65-3.946-3.659a35 35 0 0 0-3.835-2.391 34 34 0 0 0-1.723-.868l-.027-.012-.008-.004-.004-.002a1.25 1.25 0 0 0-1.022 0h-.001l-.003.002-.008.004-.027.012-.099.046q-.129.06-.36.172c-.308.15-.743.369-1.264.65a35 35 0 0 0-3.835 2.391c-1.394 1.01-2.84 2.246-3.946 3.659C12.843 17.452 12 19.132 12 21c0 1.784.39 3.478 1.088 5H8.5zM32.08 26H15.92a9.46 9.46 0 0 1-1.42-5c0-1.1.5-2.248 1.414-3.413.908-1.16 2.15-2.24 3.444-3.176a32.5 32.5 0 0 1 3.556-2.216c.44-.237.811-.426 1.086-.561a32.7 32.7 0 0 1 4.642 2.777c1.293.936 2.536 2.016 3.444 3.176C33 18.752 33.5 19.9 33.5 21a9.46 9.46 0 0 1-1.42 5m7.42 13.5H29V36a5 5 0 0 0-10 0v3.5H8.5v-11h31zm-13 0h-5V36a2.5 2.5 0 0 1 5 0zm-19.25-27a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m35.25-1.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0M24.515 9.11l.035.017-.039-.018.012.006"/>`
} as const;

export default function BuildingMosqueIcon({ 
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

  const gradientId = 'buildingmosqueicon_gradient';
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