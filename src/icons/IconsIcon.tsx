
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.102 9.596q.336-.39.582-.846h2.318a2 2 0 0 0 2-2 1 1 0 0 0-1-1h-2.81A4.751 4.751 0 1 0 9.46 9H4.5A1.5 1.5 0 0 0 3 10.5v.75a7 7 0 0 0 7 7h.967l.056-.125A4.55 4.55 0 0 1 10.5 16c0-1.235.613-2.465 1.477-3.387a6.33 6.33 0 0 1 3.793-1.941 20 20 0 0 1 2.348-.177 4 4 0 0 0-1.016-.899m-4.862 8.358c-.738 1.109-1.174 2.286-1.233 3.251a.75.75 0 0 0 1.497.091c.032-.514.242-1.21.646-1.95.592.62 1.521 1.158 2.85 1.158 1.304 0 2.28-.457 2.999-1.19.693-.706 1.105-1.626 1.397-2.488.148-.436.27-.876.382-1.286l.057-.212c.09-.334.173-.64.261-.925.107-.344.21-.617.32-.825.11-.21.203-.302.26-.34a.75.75 0 0 0-.212-1.348c-1.024-.288-2.762-.598-5.562-.227a5.33 5.33 0 0 0-3.195 1.634c-.74.79-1.207 1.786-1.207 2.703 0 .377.058.718.148 1.02q.324-.485.726-.944a9.9 9.9 0 0 1 5.005-3.061.5.5 0 0 1 .242.97 8.9 8.9 0 0 0-4.495 2.751c-.352.4-.647.812-.886 1.218"/>`,
  'regular': `<path d="M13 3.5a3.5 3.5 0 0 0-2.669 5.764.75.75 0 0 1-.571 1.236H3.75a.25.25 0 0 0-.25.25v1c0 2.9 2.35 5.25 5.25 5.25h3.218q.226.166.504.255a9 9 0 0 0-.727 1.245H8.75A6.75 6.75 0 0 1 2 11.75v-1C2 9.784 2.784 9 3.75 9h4.666a5 5 0 1 1 9.168-4h1.666c.966 0 1.75.784 1.75 1.75a2.75 2.75 0 0 1-2.75 2.75h-.92q-.203.353-.461.667.236.206.442.44-.264.028-.54.065a7 7 0 0 0-1.323.306l-.1-.058a.75.75 0 0 1-.11-1.23A3.5 3.5 0 0 0 16.355 8h1.895c.69 0 1.25-.56 1.25-1.25a.25.25 0 0 0-.25-.25h-2.785A3.5 3.5 0 0 0 13 3.5m3.901 8.163c2.801-.37 4.539-.06 5.563.227a.75.75 0 0 1 .212 1.348c-.057.038-.15.13-.26.34a5 5 0 0 0-.32.825c-.088.284-.17.59-.261.925l-.057.212c-.112.41-.234.85-.382 1.286-.292.862-.704 1.782-1.397 2.488-.72.733-1.695 1.19-3 1.19-1.328 0-2.256-.539-2.85-1.159-.403.74-.613 1.437-.645 1.951a.75.75 0 0 1-1.497-.091c.07-1.14.665-2.574 1.662-3.844 1.009-1.284 2.48-2.467 4.381-3.04a.75.75 0 0 1 .433 1.436c-1.448.437-2.61 1.312-3.452 2.308.31.442.922.939 1.969.939.911 0 1.498-.302 1.928-.74.457-.466.78-1.13 1.047-1.92.132-.389.245-.791.355-1.197l.055-.201c.09-.335.181-.674.278-.987.09-.291.192-.583.314-.853-.893-.13-2.15-.184-3.879.044-1.998.265-3.124 1.723-3.375 2.635a.75.75 0 0 1-1.446-.398c.396-1.442 1.978-3.373 4.624-3.724"/>`
} as const;

export default function IconsIcon({ 
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

  const gradientId = 'iconsicon_gradient';
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