
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.457 31.51a2.67 2.67 0 0 0 3.08.008c.404-.288.722-.682.916-1.139l1.236-3.769a6.16 6.16 0 0 1 3.9-3.9l3.631-1.183a2.67 2.67 0 0 0 0-5.036l-3.7-1.193a6.18 6.18 0 0 1-3.895-3.888l-1.179-3.629a2.66 2.66 0 0 0-.976-1.291 2.71 2.71 0 0 0-3.085 0 2.68 2.68 0 0 0-.987 1.32l-1.193 3.667a6.17 6.17 0 0 1-3.796 3.818l-3.627 1.178a2.67 2.67 0 0 0 .03 5.047l3.587 1.165a6.19 6.19 0 0 1 3.902 3.91l1.18 3.623c.183.521.524.973.975 1.292m15.418 9.132a1.95 1.95 0 0 0 1.124.359l.005.003a1.95 1.95 0 0 0 1.844-1.328l.569-1.75a2.38 2.38 0 0 1 1.499-1.502l1.79-.582a1.946 1.946 0 0 0 .94-2.958 1.96 1.96 0 0 0-1.005-.73l-1.757-.569a2.38 2.38 0 0 1-1.5-1.5l-.582-1.789a1.944 1.944 0 0 0-3.679.03l-.572 1.757a2.38 2.38 0 0 1-1.46 1.495l-1.79.582a1.943 1.943 0 0 0 .029 3.677l1.752.57a2.37 2.37 0 0 1 1.5 1.506l.582 1.788c.134.38.382.709.71.941"/>`,
  'regular': `<path d="M17.457 31.51a2.67 2.67 0 0 0 3.08.008c.404-.288.722-.682.916-1.139l1.236-3.769a6.16 6.16 0 0 1 3.9-3.9l3.631-1.183a2.67 2.67 0 0 0 0-5.036l-3.7-1.193a6.18 6.18 0 0 1-3.895-3.888l-1.179-3.629a2.66 2.66 0 0 0-.976-1.291 2.71 2.71 0 0 0-3.085 0 2.68 2.68 0 0 0-.987 1.32l-1.193 3.667a6.17 6.17 0 0 1-3.796 3.818l-3.627 1.178a2.67 2.67 0 0 0 .03 5.047l3.587 1.165a6.19 6.19 0 0 1 3.902 3.91l1.18 3.623c.183.521.524.973.975 1.292m1.704-2.122-.062.081a.18.18 0 0 1-.199-.006.2.2 0 0 1-.052-.052l-1.17-3.6a8.6 8.6 0 0 0-2.092-3.401 8.7 8.7 0 0 0-3.405-2.1l-3.569-1.154a.2.2 0 0 1-.083-.064.16.16 0 0 1-.03-.1q.001-.055.032-.1a.2.2 0 0 1 .052-.051l3.62-1.175a8.7 8.7 0 0 0 3.344-2.109 8.7 8.7 0 0 0 2.027-3.28l1.188-3.661a.17.17 0 0 1 .163-.114.18.18 0 0 1 .153.085l1.172 3.6a8.7 8.7 0 0 0 2.093 3.385 8.7 8.7 0 0 0 3.4 2.1l3.6 1.168.066.019a.17.17 0 0 1 .09.151q0 .055-.03.1a.3.3 0 0 1-.049.05l-3.61 1.171a8.65 8.65 0 0 0-5.489 5.49zm13.714 11.254a1.95 1.95 0 0 0 1.124.359l.005.003a1.95 1.95 0 0 0 1.844-1.328l.569-1.75a2.38 2.38 0 0 1 1.499-1.502l1.79-.582a1.946 1.946 0 0 0 .94-2.958 1.96 1.96 0 0 0-1.005-.73l-1.757-.569a2.38 2.38 0 0 1-1.5-1.5l-.582-1.789a1.944 1.944 0 0 0-3.679.03l-.572 1.757a2.38 2.38 0 0 1-1.46 1.495l-1.79.582a1.943 1.943 0 0 0 .029 3.677l1.752.57a2.37 2.37 0 0 1 1.5 1.506l.582 1.788c.134.38.382.709.71.941M30.86 34.04l-.118-.039.14-.049a4.88 4.88 0 0 0 3.043-3.091l.04-.121.04.128a4.87 4.87 0 0 0 3.092 3.089l.156.05-.121.04a4.87 4.87 0 0 0-3.093 3.095l-.04.121-.04-.123a4.87 4.87 0 0 0-3.1-3.1"/>`
} as const;

export default function SparkleIcon({ 
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

  const gradientId = 'sparkleicon_gradient';
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