
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.5zM12 20h8a2 2 0 0 0 2-2v-6h-6a2 2 0 0 1-2-2V4h-2zm4-9.5h5.5l-6-6V10a.5.5 0 0 0 .5.5"/>`,
  'regular': `<path d="M3.5 6a.5.5 0 0 1 .5-.5h6.5v13H4a.5.5 0 0 1-.5-.5zM12 18.5v-13h2V10a2 2 0 0 0 2 2h4.5v6a.5.5 0 0 1-.5.5zm3.5-11.878 3.879 3.878H16a.5.5 0 0 1-.5-.5zm5.914 3.793-5.828-5.829A2 2 0 0 0 14.172 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6.172l-.007-.082-.007-.059a2 2 0 0 0-.138-.624c-.024-.057-.056-.112-.087-.166l-.053-.098a1 1 0 0 0-.044-.08 2 2 0 0 0-.18-.219l-.03-.036q-.018-.026-.04-.049"/>`
} as const;

export default function DocumentLandscapeSplitIcon({ 
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

  const gradientId = 'documentlandscapespliticon_gradient';
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