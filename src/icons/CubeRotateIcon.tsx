
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.533 2.627a3.5 3.5 0 0 1 2.934 0l4.662 2.151A1.5 1.5 0 0 1 17 6.14V8h-1a1.5 1.5 0 0 0-.812 2.762C13.925 11.494 12.103 12 9.999 12s-3.925-.507-5.188-1.239A1.499 1.499 0 0 0 4 8.001H3V6.14a1.5 1.5 0 0 1 .871-1.363zM6.697 6.54a.5.5 0 0 0-.394.92L9.5 8.83v1.67a.5.5 0 1 0 1 0V8.83l3.197-1.37a.5.5 0 1 0-.394-.92L10 7.957zM15.5 9.5A.5.5 0 0 1 16 9h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1 .936q-.3.227-.637.433C14.735 13.385 12.485 14 10 14s-4.735-.615-6.364-1.61A8 8 0 0 1 3 11.959a6.2 6.2 0 0 1-1-.935V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48q.213.325.52.636.182.186.399.364a7 7 0 0 0 .758.535c.41.252.872.479 1.375.674 1.266.494 2.798.79 4.467.79 1.67 0 3.203-.297 4.47-.79a8.7 8.7 0 0 0 1.373-.674q.42-.257.758-.535.217-.18.4-.365.307-.312.518-.635H16a.5.5 0 0 1-.5-.5M10 15c-2.665 0-5.163-.669-7-1.828v.688a1.5 1.5 0 0 0 .871 1.362l4.662 2.151a3.5 3.5 0 0 0 2.934 0l4.662-2.151A1.5 1.5 0 0 0 17 13.86v-.689C15.163 14.331 12.664 15 10 15"/>`,
  'regular': `<path d="M8.952 3.535a2.5 2.5 0 0 1 2.096 0l4.662 2.151a.5.5 0 0 1 .29.454V8h1V6.14a1.5 1.5 0 0 0-.871-1.362l-4.662-2.151a3.5 3.5 0 0 0-2.934 0L3.871 4.778A1.5 1.5 0 0 0 3 6.14V8h1V6.14a.5.5 0 0 1 .29-.454zM3.4 11a6.5 6.5 0 0 0 .758.535C5.605 12.42 7.668 13 10 13s4.395-.58 5.843-1.465l.158-.099a7 7 0 0 0 .6-.436q.217-.18.4-.365.307-.312.518-.635H16a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0v-.98a6.2 6.2 0 0 1-1 .936 8 8 0 0 1-1 .643c-1.592.87-3.695 1.4-6 1.4s-4.408-.529-6-1.4a8 8 0 0 1-1-.642 6.2 6.2 0 0 1-1-.934V12a.5.5 0 0 1-1 0V9.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H2.48q.213.325.52.636.182.186.399.364M4 13.725v.136a.5.5 0 0 0 .29.454l4.662 2.151a2.5 2.5 0 0 0 2.096 0l4.662-2.151a.5.5 0 0 0 .29-.454v-.137a10 10 0 0 0 1-.552v.689a1.5 1.5 0 0 1-.871 1.362l-4.662 2.151a3.5 3.5 0 0 1-2.934 0l-4.662-2.151A1.5 1.5 0 0 1 3 13.86v-.688q.473.299 1 .552m2.04-6.921a.5.5 0 0 1 .657-.263L10 7.957l3.303-1.416a.5.5 0 0 1 .394.92L10.5 8.83V11a.5.5 0 1 1-1 0V8.83L6.303 7.46a.5.5 0 0 1-.263-.657"/>`
} as const;

export default function CubeRotateIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'cuberotateicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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