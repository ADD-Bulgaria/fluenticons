
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.996 9.972V20.25a1.75 1.75 0 0 1-1.75 1.75h-7.248q-.13 0-.256-.019V11.805A6.47 6.47 0 0 0 16.5 13a6.5 6.5 0 0 0 5.496-3.028m-11.977-3.97q-.02.246-.019.498a6.47 6.47 0 0 0 1.242 3.823v11.656a2 2 0 0 1-.244.017H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.966.784-1.75 1.75-1.75zM9.243 17.5H7.74l-.102.007a.75.75 0 0 0 0 1.486L7.74 19h1.502l.102-.007a.75.75 0 0 0 0-1.486zm6.996 0h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.292 2.545-.076.044-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645L13.494 6l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.026-.083-.041-.08-.038-.05-2.53-2.533-.069-.057a.5.5 0 0 0-.492-.044"/>`,
  'regular': `<path d="M10.019 6.002a6.6 6.6 0 0 0 .058 1.5H3.75a.25.25 0 0 0-.25.25v12.494c0 .138.112.25.25.25h7.498l-.001-10.167a6.6 6.6 0 0 0 1.5 1.479v8.69h7.498a.25.25 0 0 0 .25-.25v-8.62a6.5 6.5 0 0 0 1.501-1.656V20.25a1.75 1.75 0 0 1-1.75 1.75h-8.998l-.001-.003H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.966.784-1.75 1.75-1.75zm6.22 11.498a.75.75 0 0 1 .101 1.493l-.1.007h-1.5a.75.75 0 0 1-.102-1.493l.102-.007zm-6.996 0a.75.75 0 0 1 .102 1.493L9.243 19H7.74a.75.75 0 0 1-.102-1.493l.102-.007zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.292 2.545-.076.044-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645L13.494 6l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.026-.083-.041-.08-.038-.05-2.53-2.533-.069-.057a.5.5 0 0 0-.492-.044"/>`
} as const;

export default function DualScreenArrowRightIcon({ 
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

  const gradientId = 'dualscreenarrowrighticon_gradient';
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