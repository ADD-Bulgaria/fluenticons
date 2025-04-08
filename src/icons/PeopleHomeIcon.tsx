
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M8.25 28A4.25 4.25 0 0 0 4 32.249V33c0 3.756 1.942 6.567 4.92 8.38C11.85 43.163 15.786 44 20 44s8.15-.837 11.08-2.62C34.058 39.567 36 36.756 36 33v-.751A4.25 4.25 0 0 0 31.75 28z"/><path d="M8.25 28A4.25 4.25 0 0 0 4 32.249V33c0 3.756 1.942 6.567 4.92 8.38C11.85 43.163 15.786 44 20 44s8.15-.837 11.08-2.62C34.058 39.567 36 36.756 36 33v-.751A4.25 4.25 0 0 0 31.75 28z"/><path fill-opacity=".75" d="M8.25 28A4.25 4.25 0 0 0 4 32.249V33c0 3.756 1.942 6.567 4.92 8.38C11.85 43.163 15.786 44 20 44s8.15-.837 11.08-2.62C34.058 39.567 36 36.756 36 33v-.751A4.25 4.25 0 0 0 31.75 28z"/><path fill-opacity=".55" d="M8.25 28A4.25 4.25 0 0 0 4 32.249V33c0 3.756 1.942 6.567 4.92 8.38C11.85 43.163 15.786 44 20 44s8.15-.837 11.08-2.62C34.058 39.567 36 36.756 36 33v-.751A4.25 4.25 0 0 0 31.75 28z"/><path d="M20 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S25.523 4 20 4m11 33h8v9h-8z"/><path d="M31 37h8v9h-8z"/><path d="M33.543 27.845a2.25 2.25 0 0 1 2.914 0l6.75 5.737c.503.427.793 1.054.793 1.714v8.972a1.73 1.73 0 0 1-1.731 1.73L38 46v-6.617c0-.763-.617-1.381-1.379-1.385h-3.243a1.385 1.385 0 0 0-1.379 1.385L32 46l-4.27-.001a1.73 1.73 0 0 1-1.731-1.731v-8.972c0-.66.29-1.287.793-1.714z"/><path d="M33.543 27.845a2.25 2.25 0 0 1 2.914 0l6.75 5.737c.503.427.793 1.054.793 1.714v8.972a1.73 1.73 0 0 1-1.731 1.73L38 46v-6.617c0-.763-.617-1.381-1.379-1.385h-3.243a1.385 1.385 0 0 0-1.379 1.385L32 46l-4.27-.001a1.73 1.73 0 0 1-1.731-1.731v-8.972c0-.66.29-1.287.793-1.714z"/><path fill-rule="evenodd" d="M34.034 26.353a1.5 1.5 0 0 1 1.932 0l9.5 8a1.5 1.5 0 0 1-1.932 2.294L35 29.461l-8.534 7.186a1.5 1.5 0 1 1-1.932-2.294z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M34.034 26.353a1.5 1.5 0 0 1 1.932 0l9.5 8a1.5 1.5 0 0 1-1.932 2.294L35 29.461l-8.534 7.186a1.5 1.5 0 1 1-1.932-2.294z" clip-rule="evenodd"/>`
} as const;

export default function PeopleHomeIcon({ 
  variant = 'color',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'peoplehomeicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
    </svg>
  );
}