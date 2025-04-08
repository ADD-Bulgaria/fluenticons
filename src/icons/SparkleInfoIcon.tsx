
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.905 13.888a6.5 6.5 0 0 0-4.025-2.741l-.014-.014a2.9 2.9 0 0 0-1.129-.7l-1.754-.57a1.45 1.45 0 0 1-.967-1.147 1.444 1.444 0 0 1 .95-1.586l1.777-.571a2.88 2.88 0 0 0 1.77-1.786l.583-1.792a1.446 1.446 0 0 1 2.732-.022l.578 1.777a2.88 2.88 0 0 0 1.822 1.823l1.755.57a1.443 1.443 0 0 1 .052 2.74l-1.778.578a2.87 2.87 0 0 0-1.817 1.812zm5.426 5.894a1.12 1.12 0 0 1-.41-.55l-.328-1.006a1.3 1.3 0 0 0-.821-.823l-.991-.323A1.15 1.15 0 0 1 14 15.997a1.14 1.14 0 0 1 .771-1.08l1.006-.326a1.3 1.3 0 0 0 .8-.82l.324-.991a1.143 1.143 0 0 1 2.157-.021l.329 1.014a1.3 1.3 0 0 0 .82.816l.992.323a1.141 1.141 0 0 1 .039 2.165l-1.014.329a1.3 1.3 0 0 0-.818.822l-.322.989c-.078.23-.226.43-.425.57a1.14 1.14 0 0 1-1.328-.005M6.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 .75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75m0 5.75a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`,
  'regular': `<path d="M10.083 12.076a6.5 6.5 0 0 0-2.203-.93l-.014-.013a2.9 2.9 0 0 0-1.129-.7l-1.754-.57a1.45 1.45 0 0 1-.967-1.147 1.444 1.444 0 0 1 .95-1.586l1.777-.571a2.88 2.88 0 0 0 1.77-1.786l.583-1.792a1.446 1.446 0 0 1 2.732-.022l.578 1.777a2.88 2.88 0 0 0 1.822 1.823l1.755.57a1.443 1.443 0 0 1 .052 2.74l-1.778.578a2.87 2.87 0 0 0-1.817 1.812l-.535 1.629a6.5 6.5 0 0 0-1.144-1.297l.26-.797a4.38 4.38 0 0 1 2.773-2.775l1.59-.515-1.62-.522a4.37 4.37 0 0 1-2.78-2.773l-.517-1.587-.515 1.582a4.45 4.45 0 0 1-1.04 1.708 4.4 4.4 0 0 1-1.69 1.065L5.61 8.5l1.6.508c.649.216 1.237.58 1.72 1.063h-.003q.196.194.363.413c.306.392.543.834.7 1.306zm7.248 7.706a1.12 1.12 0 0 1-.41-.55l-.328-1.006a1.3 1.3 0 0 0-.821-.823l-.991-.323A1.15 1.15 0 0 1 14 15.997a1.14 1.14 0 0 1 .771-1.08l1.006-.326a1.3 1.3 0 0 0 .8-.82l.324-.991a1.143 1.143 0 0 1 2.157-.021l.329 1.014a1.3 1.3 0 0 0 .82.816l.992.323a1.141 1.141 0 0 1 .039 2.165l-1.014.329a1.3 1.3 0 0 0-.818.822l-.322.989c-.078.23-.226.43-.425.57a1.14 1.14 0 0 1-1.328-.005m-1.03-3.783A2.79 2.79 0 0 1 18 17.708a2.8 2.8 0 0 1 1.7-1.7 2.81 2.81 0 0 1-1.718-1.708 2.8 2.8 0 0 1-1.682 1.699m-9.8.501a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 .75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75m0 5.75a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>`
} as const;

export default function SparkleInfoIcon({ 
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

  const gradientId = 'sparkleinfoicon_gradient';
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