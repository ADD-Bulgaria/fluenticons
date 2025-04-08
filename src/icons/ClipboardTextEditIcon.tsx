
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v10.752c-1.54.005-3.077.6-4.243 1.784L26.685 33H16.25a1.25 1.25 0 1 0 0 2.5h7.974l-1.979 2.01a5 5 0 0 0-1.277 2.252l-.838 3.235q-.13.51-.132 1.003H12.25A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75m-3.5 12c0 .69.56 1.25 1.25 1.25h15.5a1.25 1.25 0 1 0 0-2.5h-15.5c-.69 0-1.25.56-1.25 1.25M16.25 26a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm26.584-.832a3.98 3.98 0 0 0-5.652.022L23.671 38.913a3 3 0 0 0-.767 1.351l-.838 3.234c-.383 1.477.961 2.82 2.437 2.438l3.235-.839a3 3 0 0 0 1.351-.766L42.812 30.82a3.98 3.98 0 0 0 .022-5.651"/>`,
  'regular': `<path d="M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h8.268l-.388 1.497q-.13.51-.132 1.003H12.25A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3h3.937A4.25 4.25 0 0 1 40 11.25v10.752a6 6 0 0 0-2.5.554V11.25a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M26.685 33H16.25a1.25 1.25 0 1 0 0 2.5h7.974zM18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75m-3.5 12c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5h-15.5c-.69 0-1.25-.56-1.25-1.25M16.25 26a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm26.584-.832a3.98 3.98 0 0 0-5.652.022L23.671 38.913a3 3 0 0 0-.767 1.351l-.838 3.234c-.383 1.477.961 2.82 2.437 2.438l3.235-.839a3 3 0 0 0 1.351-.766L42.812 30.82a3.98 3.98 0 0 0 .022-5.651"/>`
} as const;

export default function ClipboardTextEditIcon({ 
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

  const gradientId = 'clipboardtextediticon_gradient';
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