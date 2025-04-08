
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 10.5a.75.75 0 0 1 .743.648l.007.102v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 22h-2a.75.75 0 0 1-.102-1.493l.102-.007h2a.75.75 0 0 0 .743-.648l.007-.102v-8.5a.75.75 0 0 1 .75-.75m0-8.5.07.003.101.017.068.019.06.023.07.035.082.054.08.07.051.056.045.062.05.09.017.037.024.066q.017.056.025.116L22 2.75v5a.75.75 0 0 1-1.493.102L20.5 7.75V4.56l-4.47 4.47a.75.75 0 0 1-1.133-.976l.073-.084 4.468-4.47H16.25a.75.75 0 0 1-.743-.648L15.5 2.75a.75.75 0 0 1 .648-.743L16.25 2zm-8 8.5a2.25 2.25 0 0 1 2.245 2.096l.005.154v7a2.25 2.25 0 0 1-2.096 2.245L13.25 22h-9a2.25 2.25 0 0 1-2.245-2.096L2 19.75v-7a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm-2.5 7h-4c-.41 0-.75.37-.75.75s.282.694.648.743L6.75 19h4c.41 0 .75-.37.75-.75a.75.75 0 0 0-.648-.743zM6 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m5.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.75 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4-11.5a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 0-.743.648L3.5 4.25v4a.75.75 0 0 1-1.493.102L2 8.25v-4a2.25 2.25 0 0 1 2.096-2.245L4.25 2z"/>`,
  'regular': `<path d="M13.25 10.5a2.25 2.25 0 0 1 2.245 2.096l.005.154v7a2.25 2.25 0 0 1-2.096 2.245L13.25 22h-9a2.25 2.25 0 0 1-2.245-2.096L2 19.75v-7a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm8 0a.75.75 0 0 1 .743.648l.007.102v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 22h-2a.75.75 0 0 1-.102-1.493l.102-.007h2a.75.75 0 0 0 .743-.648l.007-.102v-8.5a.75.75 0 0 1 .75-.75m-8 1.5h-9a.75.75 0 0 0-.743.648l-.007.102v7c0 .38.282.694.648.743l.102.007h9a.75.75 0 0 0 .743-.648L14 19.75v-7a.75.75 0 0 0-.75-.75m-2.5 5.5a.75.75 0 0 1 .75.75c0 .38-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75c0-.38.34-.75.75-.75zM6 13.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m5.5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-2.75 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M21.25 2a.8.8 0 0 1 .326.074l.043.023a1 1 0 0 1 .082.054l.08.069.051.057.01.014.035.048a.75.75 0 0 1 .116.31L22 2.75v5a.75.75 0 0 1-1.493.102L20.5 7.75V4.56l-4.47 4.47a.75.75 0 0 1-1.133-.976l.073-.084 4.468-4.47H16.25a.75.75 0 0 1-.743-.648L15.5 2.75a.75.75 0 0 1 .648-.743L16.25 2zm-8.5 0a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 0-.743.648L3.5 4.25v4a.75.75 0 0 1-1.493.102L2 8.25v-4a2.25 2.25 0 0 1 2.096-2.245L4.25 2z"/>`
} as const;

export default function KeyboardLayoutResizeIcon({ 
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

  const gradientId = 'keyboardlayoutresizeicon_gradient';
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