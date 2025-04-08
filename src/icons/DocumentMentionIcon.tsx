
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H20.402A6 6 0 0 0 24 37.538v-1.551l-.004-.308v-.014C23.817 29.192 18.515 24 12 24c-1.402 0-2.749.24-4 .683V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.712zM21.996 35.72C21.848 30.327 17.43 26 12 26 6.477 26 2 30.477 2 36s4.477 10 10 10c1.15 0 2.274-.194 3.337-.57a1 1 0 0 0-.668-1.886A8 8 0 1 1 20 36l.001 1.475-.006.174A2 2 0 0 1 16 37.5V32l-.007-.117a1 1 0 0 0-1.979-.04A4.2 4.2 0 0 0 11.5 31C8.985 31 7 33.25 7 35.967s1.985 4.966 4.5 4.966c1.203 0 2.285-.515 3.085-1.349A4 4 0 0 0 22 37.525V36zM11.5 33l.15.005c1.274.091 2.333 1.34 2.35 2.924l-.005.221c-.08 1.576-1.194 2.783-2.495 2.783-1.35 0-2.5-1.302-2.5-2.966S10.15 33 11.5 33"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v16.433a12 12 0 0 1 2.5-.59V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75H22.472a5.99 5.99 0 0 1-4.637 1.998q.087.25.129.502H35.75A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.177 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM21.996 35.72C21.848 30.327 17.43 26 12 26 6.477 26 2 30.477 2 36s4.477 10 10 10c1.15 0 2.274-.194 3.337-.57a1 1 0 0 0-.668-1.886A8 8 0 1 1 20 36l.001 1.475-.006.174A2 2 0 0 1 16 37.5V32l-.007-.117a1 1 0 0 0-1.979-.04A4.2 4.2 0 0 0 11.5 31C8.985 31 7 33.25 7 35.967s1.985 4.966 4.5 4.966c1.203 0 2.285-.515 3.085-1.349A4 4 0 0 0 22 37.525V36zM11.5 33l.15.005c1.274.091 2.333 1.34 2.35 2.924l-.005.221c-.08 1.576-1.194 2.783-2.495 2.783-1.35 0-2.5-1.302-2.5-2.966S10.15 33 11.5 33"/>`
} as const;

export default function DocumentMentionIcon({ 
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

  const gradientId = 'documentmentionicon_gradient';
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