
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.388 4.29a4.3 4.3 0 0 0-6.127-.016 4.4 4.4 0 0 0-.94 4.737Q2.408 9 2.5 9h2.308L6.12 5.913a1.5 1.5 0 0 1 2.765.01l1.383 3.319.96-1.537a1.5 1.5 0 0 1 2.4-.193L14.932 9H17.5q.103 0 .202.014a4.42 4.42 0 0 0-.978-4.702 4.305 4.305 0 0 0-6.135-.015l-.596.603zm3.488 3.88.952 1.089a5.5 5.5 0 0 0-.966.414l-.295-.337-.585.936a5.5 5.5 0 0 0-1.76 2.676.5.5 0 0 1-.684-.256L7.495 7.79 6.26 10.696A.5.5 0 0 1 5.8 11H2.5a.5.5 0 0 1 0-1h2.97l1.57-3.696a.5.5 0 0 1 .922.004l2.127 5.106 1.987-3.179a.5.5 0 0 1 .8-.064m-2.999 5.825q.073.006.145.005a5.5 5.5 0 0 0 .48 2.798l-.006.005a.66.66 0 0 1-.942 0L4.799 12H5.8a1.5 1.5 0 0 0 1.38-.913l.306-.72 1.13 2.71a1.5 1.5 0 0 0 1.261.918M20 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L14.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="m12.876 8.17.952 1.089a5.5 5.5 0 0 0-.966.414l-.295-.337-.585.936a5.5 5.5 0 0 0-1.76 2.676.5.5 0 0 1-.684-.256L7.495 7.79 6.26 10.696A.5.5 0 0 1 5.8 11H2.5a.5.5 0 0 1 0-1h2.97l1.57-3.696a.5.5 0 0 1 .922.004l2.127 5.106 1.987-3.179a.5.5 0 0 1 .8-.064m3.848-3.858a4.42 4.42 0 0 1 .978 4.702A2 2 0 0 0 17.5 9h-.889a3.415 3.415 0 0 0-.598-3.984A3.306 3.306 0 0 0 11.3 5l-.951.963a.5.5 0 0 1-.711 0l-.96-.97a3.3 3.3 0 0 0-4.706-.016C2.899 6.061 2.713 7.711 3.42 9H2.5q-.09 0-.18.01a4.4 4.4 0 0 1 .941-4.736 4.3 4.3 0 0 1 6.127.016l.605.61.596-.603.109-.106a4.306 4.306 0 0 1 6.026.121M4.856 12l4.784 4.847a.5.5 0 0 0 .712-.703l-4.146-4.2Q6.011 12 5.8 12zM20 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L14.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`
} as const;

export default function HeartPulseCheckmarkIcon({ 
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

  const gradientId = 'heartpulsecheckmarkicon_gradient';
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