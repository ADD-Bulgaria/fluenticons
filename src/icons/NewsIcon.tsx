
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M21.5 7h2.25a2.25 2.25 0 0 1 2.245 2.096L26 9.25v11.5a3.25 3.25 0 0 1-3.066 3.245L22.75 24H21.5z"/><path d="M5.25 24a3.25 3.25 0 0 1-3.245-3.066L2 20.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h15.5a2.25 2.25 0 0 1 2.245 2.096L22 6.25 21.995 24z"/><path d="M5.25 24a3.25 3.25 0 0 1-3.245-3.066L2 20.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h15.5a2.25 2.25 0 0 1 2.245 2.096L22 6.25 21.995 24z"/><path d="M5.25 24a3.25 3.25 0 0 1-3.245-3.066L2 20.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h15.5a2.25 2.25 0 0 1 2.245 2.096L22 6.25 21.995 24z"/><path d="M10.247 13.004c.69 0 1.25.56 1.25 1.25v3.496c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-3.496c0-.69.56-1.25 1.25-1.25zM14.25 17.5h3.496a.75.75 0 0 1 .102 1.493l-.102.007H14.25a.75.75 0 0 1-.102-1.493zh3.496zm0-4.497h3.496a.75.75 0 0 1 .102 1.493l-.102.007H14.25a.75.75 0 0 1-.102-1.493zh3.496zM6.246 8.497h11.5a.75.75 0 0 1 .102 1.493l-.102.007h-11.5a.75.75 0 0 1-.102-1.494zh11.5z"/>`,
  'filled': `<path d="M22 5.75V20.5a.5.5 0 0 0 .992.09L23 20.5V7h1.25a1.75 1.75 0 0 1 1.744 1.606L26 8.75v12a3.25 3.25 0 0 1-3.066 3.245L22.75 24H5.25a3.25 3.25 0 0 1-3.245-3.066L2 20.75v-15a1.75 1.75 0 0 1 1.606-1.744L3.75 4h16.5a1.75 1.75 0 0 1 1.744 1.606zV20.5zM9.747 13.004H7.25a1.75 1.75 0 0 0-1.744 1.606l-.006.144v2.496a1.75 1.75 0 0 0 1.606 1.744L7.25 19h2.497a1.75 1.75 0 0 0 1.744-1.607l.005-.143v-2.496a1.75 1.75 0 0 0-1.606-1.745zM17.75 17.5h-3.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.5l.102-.007a.75.75 0 0 0 0-1.486zm-10.5-2.996h2.497a.25.25 0 0 1 .243.192l.007.058v2.496a.25.25 0 0 1-.193.243l-.057.007H7.25a.25.25 0 0 1-.243-.193L7 17.25v-2.496a.25.25 0 0 1 .193-.244zh2.497zm10.5-1.5h-3.5l-.102.006a.75.75 0 0 0 0 1.487l.102.007h3.5l.102-.007a.75.75 0 0 0 0-1.487zm0-4.507H6.25l-.102.007a.75.75 0 0 0 0 1.486l.102.007h11.5l.102-.007a.75.75 0 0 0 0-1.486z"/>`,
  'regular': `<path d="M22.75 24H5.25a3.25 3.25 0 0 1-3.245-3.066L2 20.75V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h15.5a2.25 2.25 0 0 1 2.245 2.096L22 6.25V7h1.75a2.25 2.25 0 0 1 2.245 2.096L26 9.25v11.5a3.25 3.25 0 0 1-3.066 3.245zH5.25zm-17.5-1.5h17.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V9.25a.75.75 0 0 0-.648-.743L23.75 8.5H22v10.75a.75.75 0 0 1-.648.743L21.25 20a.75.75 0 0 1-.743-.648l-.007-.102v-13a.75.75 0 0 0-.648-.743L19.75 5.5H4.25a.75.75 0 0 0-.743.648L3.5 6.25v14.5a1.75 1.75 0 0 0 1.606 1.744zh17.5zm4.996-9.496c.69 0 1.25.56 1.25 1.25v3.496c0 .69-.56 1.25-1.25 1.25H6.75c-.69 0-1.25-.56-1.25-1.25v-3.496c0-.69.56-1.25 1.25-1.25zM14.25 17.5h3.496a.75.75 0 0 1 .102 1.493l-.102.007H14.25a.75.75 0 0 1-.102-1.493zh3.496zm-4.253-2.996H7V17.5h2.997zm4.253-1.5h3.496a.75.75 0 0 1 .102 1.493l-.102.007H14.25a.75.75 0 0 1-.102-1.494zh3.496zM6.246 8.497h11.5a.75.75 0 0 1 .102 1.493l-.102.007h-11.5a.75.75 0 0 1-.101-1.493zh11.5z"/>`
} as const;

export default function NewsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
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

  const gradientId = 'newsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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