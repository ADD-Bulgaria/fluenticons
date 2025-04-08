
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m11.558 13.646-.084.071-6.927 6.8a3.23 3.23 0 0 0 1.703.481h4.914l.356-1.423c.162-.648.497-1.24.97-1.712l2.11-2.11-2.075-2.036-.094-.078a.75.75 0 0 0-.873.007m4.945-5.394a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0m-.843 6.441-2.085-2.046-.128-.117a2.25 2.25 0 0 0-2.888-.006l-.136.123-6.938 6.81A3.23 3.23 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.499a3.25 3.25 0 0 1 3.25 3.25v4.762a3.28 3.28 0 0 0-2.608.95zM13.5 8.252a2.252 2.252 0 1 0 4.503 0 2.252 2.252 0 0 0-4.504 0m5.598 4.417-5.901 5.901a2.7 2.7 0 0 0-.707 1.248l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L22.33 15.9a2.286 2.286 0 0 0-3.233-3.232"/>`,
  'regular': `<path d="M20.998 6.25A3.25 3.25 0 0 0 17.748 3H6.25A3.25 3.25 0 0 0 3 6.25v11.499a3.25 3.25 0 0 0 3.25 3.25h4.914l.356-1.424.02-.076H6.25q-.308-.001-.582-.1l5.807-5.685.083-.07a.75.75 0 0 1 .966.07l2.079 2.036 1.06-1.06-2.09-2.048-.128-.116a2.25 2.25 0 0 0-3.02.116l-5.822 5.7a1.8 1.8 0 0 1-.103-.593v-11.5c0-.966.783-1.75 1.75-1.75h11.499c.966 0 1.75.784 1.75 1.75v4.983c.478-.19.993-.264 1.5-.22zm-3.495 2.502a2.252 2.252 0 1 0-4.504 0 2.252 2.252 0 0 0 4.504 0m-3.004 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0m4.6 3.917-5.902 5.901a2.7 2.7 0 0 0-.707 1.248l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L22.33 15.9a2.286 2.286 0 0 0-3.233-3.232"/>`
} as const;

export default function ImageEditIcon({ 
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

  const gradientId = 'imageediticon_gradient';
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