
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m24 5-.532-.655a3.638 3.638 0 1 0-5.457 4.804l4.958 5.192.284.318q.136.15.307.234a.93.93 0 0 0 1.111-.176l5.32-5.563a3.641 3.641 0 1 0-5.46-4.81zm1.292 11.704q.595 1.283 1.007 2.645l.489 1.614a5 5 0 0 1-.798 4.463l-1.92 2.54c-1.609 2.128-4.519 2.545-6.783 1.455-3.224-1.55-7.036-2.702-10.188-2.839a2.28 2.28 0 0 1-1.714-.88c-.418-.554-.56-1.352-.112-2.088.865-1.421 2.229-2.07 3.353-2.367L2.44 15.06a1.5 1.5 0 1 1 2.122-2.121l4.103 4.104a.621.621 0 1 0 .879-.879L3.44 10.061A1.5 1.5 0 1 1 5.561 7.94l5.977 5.977a.798.798 0 1 0 1.129-1.129L7.439 7.561A1.5 1.5 0 1 1 9.561 5.44l4.637 4.637a1.63 1.63 0 0 0 2.308 0l.104.12 5.148 5.791a3 3 0 0 0 3.534.716m-9.096 5.276c1.142-.228 2.088-.21 2.881.037.778.243 1.485.731 2.125 1.583a1 1 0 1 0 1.599-1.201q-1.293-1.72-3.127-2.291c-1.207-.377-2.512-.36-3.87-.09a1 1 0 1 0 .392 1.962M15.798 9a5.54 5.54 0 0 1-.324-4.147l-.913-.913a1.5 1.5 0 0 0-2.122 2.12L15.38 9z"/>`,
  'regular': `<path d="M23.468 4.345 24 5l.532-.656a3.641 3.641 0 1 1 5.46 4.81l-5.32 5.563a.93.93 0 0 1-1.343 0L18.01 9.149a3.638 3.638 0 1 1 5.457-4.804m-8.049.69-.208-.211a2.764 2.764 0 0 0-4.45.712 2.77 2.77 0 0 0-3.758 1.268 2.62 2.62 0 0 0-3.035 4.159l.434.462a2.7 2.7 0 0 0-.68 4.2l5.159 5.56c-1.167.264-2.676.9-3.608 2.43-.448.736-.306 1.534.113 2.088.394.522 1.033.85 1.713.88 3.153.136 6.964 1.288 10.188 2.84 2.265 1.089 5.175.672 6.784-1.456l1.92-2.54a5 5 0 0 0 .797-4.463l-1.317-4.353a3 3 0 0 1-1.987.34l.007.021 1.383 4.57a3 3 0 0 1-.479 2.68l-1.92 2.539c-.944 1.248-2.77 1.605-4.32.859-3.385-1.628-7.466-2.884-10.97-3.035a.3.3 0 0 1-.136-.036c.548-.817 1.425-1.224 2.286-1.416a6.2 6.2 0 0 1 1.58-.136h.002a1 1 0 0 0 .816-1.677L5.19 14.264a.697.697 0 0 1 .87-1.071l4.211 4.492a1 1 0 0 0 1.463-1.366l-4.058-4.365a3 3 0 0 0-.286-.267L5.427 9.595a.62.62 0 0 1 .89-.862l5.976 5.975a1 1 0 0 0 1.414-1.415l-4.75-4.75a.768.768 0 1 1 1.085-1.085l1.084 1.084q.076.09.162.176l4.005 3.991.017.017.982.982a1 1 0 0 0 1.414-1.415L12.62 7.208a.764.764 0 0 1 1.165-.982l1.59 1.62a5.54 5.54 0 0 1 .045-2.81m.777 16.945c1.142-.228 2.088-.21 2.881.037.778.243 1.485.731 2.125 1.583a1 1 0 1 0 1.599-1.201q-1.293-1.72-3.127-2.291c-1.207-.377-2.512-.36-3.87-.09a1 1 0 1 0 .392 1.962"/>`
} as const;

export default function HandOpenHeartIcon({ 
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

  const gradientId = 'handopenhearticon_gradient';
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