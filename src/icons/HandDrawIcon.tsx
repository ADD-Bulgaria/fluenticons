
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M14 2.5a.5.5 0 0 1 .5-.5h1c4.01 0 6.81.25 8.621.702.903.226 1.602.512 2.085.875.497.372.794.852.794 1.423 0 .47-.122.948-.52 1.368-.379.399-.963.696-1.783.926C23.062 7.752 20.25 8 15.5 8s-7.438.252-8.928.669c-.742.208-1.127.441-1.326.652C5.066 9.51 5 9.72 5 10c0 .179.078.387.394.623.33.247.88.493 1.727.704 1.232.308 3.002.525 5.417.62q-.038.27-.038.553v.446c-2.456-.096-4.301-.318-5.621-.648-.903-.226-1.602-.512-2.085-.875C4.297 11.05 4 10.571 4 10c0-.47.122-.948.52-1.368.379-.399.963-.696 1.783-.926C7.939 7.248 10.75 7 15.5 7c4.751 0 7.439-.252 8.928-.669.742-.208 1.127-.441 1.326-.652.18-.19.246-.399.246-.679 0-.179-.078-.387-.394-.623-.33-.247-.88-.493-1.727-.704C22.189 3.25 19.489 3 15.5 3h-1a.5.5 0 0 1-.5-.5m2.476 7.5a2.5 2.5 0 0 0-2.5 2.5v6.731l-1.285-.57a4.49 4.49 0 0 0-5.513 1.55 1.006 1.006 0 0 0 .427 1.491c5.713 2.518 7.633 4.811 8.437 6.54.502 1.079 1.616 1.93 2.917 1.73l3.634-.56a2.5 2.5 0 0 0 2.046-1.867l1.224-4.92a4.5 4.5 0 0 0-3.651-5.53l-3.237-.521v-4.075A2.5 2.5 0 0 0 16.476 10m-1.5 2.5a1.5 1.5 0 0 1 3 0V17a.5.5 0 0 0 .42.494l3.657.588a3.5 3.5 0 0 1 2.84 4.301l-1.224 4.92a1.5 1.5 0 0 1-1.228 1.121l-3.634.56c-.742.114-1.488-.368-1.858-1.163-.944-2.03-3.104-4.462-8.941-7.034l-.004-.002-.002-.005a3.49 3.49 0 0 1 4.284-1.204l1.988.881a.5.5 0 0 0 .703-.457z"/>`
} as const;

export default function HandDrawIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'handdrawicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}