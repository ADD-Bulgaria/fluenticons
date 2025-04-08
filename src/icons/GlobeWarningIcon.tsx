
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.906 16.5h4.303l-1.938 3.88a2.5 2.5 0 0 0-.267 1.147c-.83-.784-1.582-2.495-2.04-4.732zm-.23-1.5h5.283l1.308-2.617q.105-.209.236-.386-.001-1.029-.077-1.997H8.577l-.033.489A26 26 0 0 0 8.676 15m11.065-2.617 1.308 2.618h.496a10.05 10.05 0 0 0 .258-5h-4.87l.039.656.016.396c1.042-.215 2.203.228 2.753 1.33M3.067 16.501h4.306c.365 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.951-4.814zm-.867-6.5h4.87a28 28 0 0 0 .033 4.42l.057.58H2.458a10.05 10.05 0 0 1-.258-5m12.746-7.424-.108-.17A10.03 10.03 0 0 1 21.374 8.5h-4.591c-.316-2.416-.957-4.492-1.837-5.923m-5.903-.133.122-.037c-.88 1.35-1.535 3.329-1.883 5.654l-.061.44H2.63a10.03 10.03 0 0 1 6.413-6.057m2.959-.442c1.318 0 2.645 2.542 3.214 6.183l.046.315H8.741c.54-3.809 1.904-6.498 3.26-6.498M16.16 12.83l-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M12.002 1.999c5.523 0 10.001 4.478 10.001 10.002a10 10 0 0 1-.662 3.585l-.99-1.98a8.55 8.55 0 0 0-.085-3.607h-3.358q.05.52.074 1.055a2.45 2.45 0 0 0-1.479.943Q15.501 10.96 15.4 10H8.605a19 19 0 0 0 .135 5h5.219l-.75 1.5H9.064c.52 1.924 1.345 3.323 2.242 3.812l-.034.069c-.26.52-.32 1.068-.224 1.576C5.971 21.477 2 17.202 2 12.001 2 6.477 6.478 1.999 12.002 1.999M7.51 16.501H4.787a8.53 8.53 0 0 0 4.095 3.41c-.523-.82-.954-1.846-1.27-3.015zM7.095 10H3.737l-.004.017a8.5 8.5 0 0 0-.233 1.984c0 1.056.193 2.067.545 3h3.173a21 21 0 0 1-.123-5m1.788-5.91-.023.008A8.53 8.53 0 0 0 4.252 8.5H7.3c.313-1.752.86-3.278 1.583-4.41m3.119-.591-.116.005C10.62 3.62 9.398 5.622 8.83 8.5h6.343c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59.106.175c.67 1.112 1.178 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.338-4.29zm1.039 8.741-3.997 7.998A1.5 1.5 0 0 0 13.507 23h7.994a1.5 1.5 0 0 0 1.343-2.172l-3.997-7.998c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0v-3.001a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1"/>`
} as const;

export default function GlobeWarningIcon({ 
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

  const gradientId = 'globewarningicon_gradient';
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