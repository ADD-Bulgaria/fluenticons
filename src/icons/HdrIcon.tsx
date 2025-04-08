
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.75 3.5A3.25 3.25 0 0 1 22 6.75v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.253V6.75A3.25 3.25 0 0 1 5.25 3.5zM8.378 8.993a.625.625 0 0 0-.618.532l-.007.093v1.768H6.272V9.635l-.007-.093a.625.625 0 0 0-1.236 0l-.007.093v4.752l.007.092a.625.625 0 0 0 1.236 0l.007-.092v-1.751h1.48l.001 1.734.007.092a.625.625 0 0 0 1.237 0l.006-.092V9.618l-.006-.093a.625.625 0 0 0-.619-.532m8.823.022H15.63l-.093.007a.625.625 0 0 0-.524.516l-.008.103.005 4.735.008.108.023.103c.182.582 1.113.549 1.21-.099l.01-.113-.002-1.751h.743l.8 1.984.045.091a.625.625 0 0 0 1.145-.46l-.03-.098-.74-1.833a1.804 1.804 0 0 0-.872-3.287zm-5.826-.01h-.75l-.093.007a.625.625 0 0 0-.524.516L10 9.63v4.742l.006.092c.04.268.25.48.516.525l.103.008h.75l.166-.005a2.625 2.625 0 0 0 2.454-2.454l.005-.166v-.742l-.005-.166a2.625 2.625 0 0 0-2.454-2.453zm0 1.25c.715 0 1.303.546 1.37 1.243l.005.133v.741l-.006.133a1.375 1.375 0 0 1-1.236 1.236l-.133.006h-.126v-3.492zm4.88.01h.946l.09.007a.554.554 0 0 1 0 1.095l-.09.007h-.945z"/>`,
  'regular': `<path d="M18.75 3.5A3.25 3.25 0 0 1 22 6.75v10.503a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.253V6.75A3.25 3.25 0 0 1 5.25 3.5zm0 1.5H5.25A1.75 1.75 0 0 0 3.5 6.75v10.503c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.75A1.75 1.75 0 0 0 18.75 5M8.378 8.993c.314 0 .574.23.619.532l.006.093v4.752a.625.625 0 0 1-1.243.092l-.007-.092v-1.734H6.272v1.75a.625.625 0 0 1-1.243.093l-.007-.092V9.635a.625.625 0 0 1 1.243-.093l.007.093v1.75h1.48l.001-1.767c0-.346.28-.625.625-.625m8.823.022a1.804 1.804 0 0 1 1.02 3.293l.74 1.833a.625.625 0 0 1-1.115.558l-.045-.09-.8-1.986h-.742v1.752c0 .755-1.027.826-1.22.212l-.022-.103-.008-.108-.005-4.735c0-.314.23-.574.532-.62l.093-.006zm-5.826-.01a2.625 2.625 0 0 1 2.62 2.46l.005.165v.742a2.625 2.625 0 0 1-2.459 2.62l-.166.005h-.75a.625.625 0 0 1-.619-.533L10 14.372V9.63c0-.313.23-.573.532-.618l.093-.007zm0 1.25h-.126v3.491l.126.001c.715 0 1.303-.545 1.37-1.242l.005-.133v-.742c0-.714-.545-1.302-1.242-1.368zm4.88.01v1.108h.946a.554.554 0 0 0 .09-1.1l-.09-.008z"/>`
} as const;

export default function HdrIcon({ 
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

  const gradientId = 'hdricon_gradient';
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