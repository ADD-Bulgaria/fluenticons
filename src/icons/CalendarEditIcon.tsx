
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m29 20-9 9H7.5A4.5 4.5 0 0 1 3 24.5V10l13-1 13 1z"/><path d="m29 20-9 9H7.5A4.5 4.5 0 0 1 3 24.5V10l13-1 13 1z"/><path fill-opacity=".3" d="m29 20-9 9H7.5A4.5 4.5 0 0 1 3 24.5V10l13-1 13 1z"/><g filter="url(#a)"><path d="M10.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/></g><path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V10H3zm17.539 21.97 7.61-7.544v-4.074h-4.073l-7.567 7.64.308 3.696z"/><path d="m20.539 29.47.223-.223s-1.726-.661-2.535-1.47c-.809-.81-1.47-2.534-1.47-2.534l-.248.249a2.66 2.66 0 0 0-.686 1.206l-.79 3.051a1 1 0 0 0 1.217 1.22l3.02-.778a2.8 2.8 0 0 0 1.269-.722m6.398-6.329 2.211-2.214a2.88 2.88 0 0 0 .072-4.017 2.88 2.88 0 0 0-4.144-.057l-2.238 2.241z"/><path d="M24.094 17.838a5.43 5.43 0 0 0 4.106 4.038l-1.55 1.551a5.43 5.43 0 0 1-4.106-4.04z"/><defs><filter id="a" width="16.667" height="10.667" x="7.667" y="14.333" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy=".667"/><feGaussianBlur stdDeviation=".667"/><feColorMatrix values="0 0 0 0 0.1242 0 0 0 0 0.323337 0 0 0 0 0.7958 0 0 0 0.32 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_72095_10112"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_72095_10112" result="shape"/></filter></defs>`,
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5V9h26V7.5A4.5 4.5 0 0 0 24.5 3zM29 11H3v13.5A4.5 4.5 0 0 0 7.5 29h7.178l.694-2.68a4.16 4.16 0 0 1 1.073-1.887l8.567-8.64A4.37 4.37 0 0 1 29 14.586zm-17 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m7-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.465 12.967 8.61-8.543a2.88 2.88 0 0 0 .071-4.017 2.88 2.88 0 0 0-4.144-.057l-8.567 8.64c-.331.334-.568.75-.686 1.205l-.79 3.052a1 1 0 0 0 1.217 1.219l3.02-.778a2.8 2.8 0 0 0 1.269-.721"/>`,
  'light': `<path d="m14.937 28-.259 1H7.5A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v7.086a4.4 4.4 0 0 0-1-.087V11H4v13.5A3.5 3.5 0 0 0 7.5 28zM4 10h24V7.5A3.5 3.5 0 0 0 24.5 4h-17A3.5 3.5 0 0 0 4 7.5zm17.535 19.467 8.61-8.543a2.88 2.88 0 0 0 .071-4.017 2.88 2.88 0 0 0-4.144-.057l-8.567 8.64c-.331.334-.568.75-.686 1.205l-.79 3.052a1 1 0 0 0 1.217 1.219l3.02-.778a2.8 2.8 0 0 0 1.269-.721M11 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M9.5 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M7.5 3h17A4.5 4.5 0 0 1 29 7.5v7.086a4.4 4.4 0 0 0-2 .057V11H5v13.5A2.5 2.5 0 0 0 7.5 27h7.696l-.518 2H7.5A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3M5 7.5V9h22V7.5A2.5 2.5 0 0 0 24.5 5h-17A2.5 2.5 0 0 0 5 7.5m16.535 21.967 8.61-8.543a2.88 2.88 0 0 0 .071-4.017 2.88 2.88 0 0 0-4.144-.057l-8.567 8.64c-.331.334-.568.75-.686 1.205l-.79 3.052a1 1 0 0 0 1.217 1.219l3.02-.778a2.8 2.8 0 0 0 1.269-.721M12 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`
} as const;

export default function CalendarEditIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'calendarediticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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