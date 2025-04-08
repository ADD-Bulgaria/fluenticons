
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.492 21.251a1 1 0 0 1-.522-.151c-.082-.051-1.97-1.274-1.97-4.228 0-1.504.498-2.313.898-2.963.35-.569.602-.979.602-1.916s-.252-1.343-.601-1.91C13.476 9.396 13 8.621 13 7.121c0-2.971 1.892-4.17 1.973-4.219a.997.997 0 0 1 1.376.319c.289.463.15 1.079-.31 1.373C16 4.619 15 5.304 15 7.121c0 .933.252 1.343.601 1.909.423.687.899 1.462.899 2.962s-.498 2.313-.898 2.963c-.35.569-.602.979-.602 1.916 0 1.824 1.002 2.513 1.045 2.541.455.303.586.921.291 1.378a1 1 0 0 1-.841.459h-.003zm-5.997 0a1 1 0 0 0 .841-.459 1.007 1.007 0 0 0-.291-1.378C10.002 19.386 9 18.697 9 16.873c0-.937.252-1.347.602-1.916.4-.65.898-1.459.898-2.963s-.477-2.275-.899-2.962C9.252 8.466 9 8.056 9 7.123c0-1.817 1-2.502 1.039-2.527A1.003 1.003 0 0 0 9.5 2.752a1 1 0 0 0-.527.152C8.892 2.953 7 4.152 7 7.123c0 1.5.477 2.275.899 2.962.349.566.601.976.601 1.91s-.252 1.347-.602 1.916c-.4.65-.898 1.459-.898 2.963 0 2.953 1.888 4.176 1.97 4.228a1 1 0 0 0 .522.151h.003z"/>`,
  'regular': `<path d="M15.245 20.999a.75.75 0 0 1-.394-.113c-.075-.047-1.852-1.192-1.852-4.015 0-1.432.457-2.176.861-2.833.356-.58.639-1.04.639-2.046 0-1.007-.282-1.463-.639-2.043-.403-.655-.861-1.398-.861-2.83 0-2.818 1.777-3.958 1.854-4.005a.75.75 0 0 1 .801 1.268c-.06.04-1.154.797-1.154 2.738 0 1.005.282 1.463.639 2.042.403.655.861 1.398.861 2.829 0 1.43-.457 2.176-.861 2.833-.356.58-.639 1.039-.639 2.046 0 1.958 1.109 2.718 1.156 2.749a.75.75 0 0 1-.411 1.379m-5.369-.345a.754.754 0 0 0-.22-1.034c-.047-.031-1.156-.791-1.156-2.75 0-1.007.282-1.465.639-2.045.404-.657.861-1.401.861-2.833s-.458-2.174-.861-2.83C8.783 8.581 8.5 8.125 8.5 7.12c0-1.941 1.095-2.7 1.154-2.738a.75.75 0 0 0-.801-1.268c-.076.047-1.854 1.188-1.854 4.006 0 1.43.458 2.173.861 2.829.356.58.639 1.037.639 2.043s-.282 1.466-.639 2.046c-.404.657-.861 1.4-.861 2.833 0 2.823 1.776 3.968 1.852 4.015a.753.753 0 0 0 1.025-.232z"/>`
} as const;

export default function HapticWeakIcon({ 
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

  const gradientId = 'hapticweakicon_gradient';
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