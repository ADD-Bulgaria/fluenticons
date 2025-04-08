
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.057 7.43a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.535m2.475 1.061a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415m4.166-5.98a2.75 2.75 0 0 1 1.81 1.811l.207.664a6.75 6.75 0 0 1-1.673 6.777l-.998.998a3.5 3.5 0 0 1-.328 4.567l-1.242 1.243a.75.75 0 0 1-1.06 0l-1.59-1.59-.177.177a1.75 1.75 0 0 1-2.475 0l-.487-.487-.811 1.39a.75.75 0 0 1-1.178.153l-3.89-3.89a.75.75 0 0 1 .146-1.173l1.384-.829-.47-.47a1.75 1.75 0 0 1 0-2.476l.18-.18-1.592-1.59a.75.75 0 0 1 0-1.06l1.243-1.243a3.5 3.5 0 0 1 4.569-.327l.996-.996a6.75 6.75 0 0 1 6.773-1.674zm.378 2.256a1.25 1.25 0 0 0-.823-.823l-.662-.205a5.25 5.25 0 0 0-5.269 1.302l-5.396 5.396a.25.25 0 0 0 0 .354l5.307 5.306a.25.25 0 0 0 .353 0l5.396-5.395a5.25 5.25 0 0 0 1.3-5.27zM6.69 18.394a.75.75 0 0 0-1.06-1.06l-2.476 2.474a.75.75 0 0 0 1.061 1.061zM4.745 15.39a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0m3.887 4.952a.75.75 0 1 0-1.06-1.06L6.513 20.34a.75.75 0 0 0 1.06 1.06z"/>`,
  'regular': `<path d="M13.057 7.43a2.5 2.5 0 1 1 3.536 3.536 2.5 2.5 0 0 1-3.536-3.535m2.475 1.061a1 1 0 1 0-1.414 1.415 1 1 0 0 0 1.414-1.415m5.977-4.169a2.75 2.75 0 0 0-1.811-1.81l-.663-.206a6.75 6.75 0 0 0-6.773 1.674l-.996.996a3.5 3.5 0 0 0-4.57.327L5.455 6.545a.75.75 0 0 0 0 1.06l1.591 1.592-.18.18a1.75 1.75 0 0 0 0 2.474l.496.496-1.396.796a.75.75 0 0 0-.158 1.181l3.889 3.89a.75.75 0 0 0 1.181-.158l.798-1.395.497.497a1.75 1.75 0 0 0 2.475 0l.177-.177 1.59 1.59a.75.75 0 0 0 1.06 0l1.242-1.243a3.5 3.5 0 0 0 .328-4.567l.998-.998a6.75 6.75 0 0 0 1.673-6.777zm-2.256-.378c.393.122.701.43.823.823l.207.665a5.25 5.25 0 0 1-1.302 5.27l-5.395 5.395a.25.25 0 0 1-.353 0l-5.307-5.306a.25.25 0 0 1 0-.354l5.397-5.396a5.25 5.25 0 0 1 5.268-1.302zm-1.289 9.897c.453.766.35 1.769-.308 2.427l-.712.712-1.06-1.06zM7.758 6.363a2 2 0 0 1 2.428-.307l-2.08 2.08-1.06-1.06zm2.818 9.199-.514.897-2.5-2.5.898-.513zM6.69 18.394a.75.75 0 0 0-1.06-1.06l-2.476 2.474a.75.75 0 0 0 1.061 1.061zM4.745 15.39a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 0 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0m3.887 4.952a.75.75 0 1 0-1.06-1.06L6.513 20.34a.75.75 0 0 0 1.06 1.06z"/>`
} as const;

export default function RocketIcon({ 
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

  const gradientId = 'rocketicon_gradient';
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