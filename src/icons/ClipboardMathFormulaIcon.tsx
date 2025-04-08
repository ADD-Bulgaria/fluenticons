
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.83 4h1.67A3.5 3.5 0 0 1 27 7.5v8.354a2.5 2.5 0 0 0-.843-.713l-.249-.13c-2.843-1.48-6.266.403-6.559 3.575a2.501 2.501 0 0 0-.34 4.71l-.284 3.949A2.5 2.5 0 0 0 15.526 30H8.5A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6c1.306 0 2.418.835 2.83 2M19 4h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2m6.215 12.342c-1.913-.996-4.222.293-4.377 2.446L20.75 20H20a1 1 0 0 0 0 2h.606l-.436 6.066a1 1 0 0 1-1.46.815l-.248-.13a1 1 0 1 0-.924 1.774l.249.13c1.914.996 4.222-.293 4.377-2.446L22.612 22H24a1 1 0 0 0 0-2h-1.244l.077-1.069a1 1 0 0 1 1.459-.815l.248.13a1 1 0 1 0 .924-1.774zm5.488 8.365a1 1 0 1 0-1.414-1.414l-1.612 1.611-.649-1.043a1.82 1.82 0 0 0-2.613-.516 1 1 0 0 0 1.006 1.719l.804 1.293-1.932 1.932a1 1 0 0 0 1.415 1.414L27.31 28.1l.65 1.045a1.816 1.816 0 0 0 2.645.484 1 1 0 0 0-1.043-1.695l-.8-1.286z"/>`,
  'regular': `<path d="M19 2c1.306 0 2.418.835 2.83 2h1.67A3.5 3.5 0 0 1 27 7.5v8.355a2.5 2.5 0 0 0-.843-.714l-.249-.13a4.6 4.6 0 0 0-.908-.356V7.5A1.5 1.5 0 0 0 23.5 6h-1.67A3 3 0 0 1 19 8h-6a3 3 0 0 1-2.83-2H8.5A1.5 1.5 0 0 0 7 7.5v19A1.5 1.5 0 0 0 8.5 28h7.61a2.5 2.5 0 0 0-.584 2H8.5A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2zm-6 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm17.703 20.707a1 1 0 1 0-1.414-1.414l-1.612 1.611-.649-1.043a1.82 1.82 0 0 0-2.613-.516 1 1 0 0 0 1.006 1.719l.804 1.293-1.932 1.932a1 1 0 0 0 1.415 1.414L27.31 28.1l.65 1.045a1.816 1.816 0 0 0 2.645.484 1 1 0 0 0-1.043-1.695l-.8-1.286zm-9.865-5.92c.155-2.152 2.464-3.441 4.377-2.445l.249.13a1 1 0 1 1-.924 1.773l-.248-.129a1 1 0 0 0-1.46.815l-.076 1.07H24a1 1 0 0 1 0 2h-1.388l-.448 6.208c-.155 2.153-2.463 3.442-4.377 2.446l-.249-.13a1 1 0 1 1 .924-1.773l.248.129a1 1 0 0 0 1.46-.815L20.606 22H20a1 1 0 1 1 0-2h.75z"/>`
} as const;

export default function ClipboardMathFormulaIcon({ 
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

  const gradientId = 'clipboardmathformulaicon_gradient';
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