
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.999 4.252v11.103l-2.51 2.51a3.7 3.7 0 0 0-.939 1.597l-3.123-2.776a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.246V9.75A2.25 2.25 0 0 1 4.25 7.5h3.68a.75.75 0 0 0 .497-.19l4.492-3.992c.806-.716 2.08-.144 2.08.934m3.392 7.71q.274-.272.59-.467a7 7 0 0 0-.823-2.822.75.75 0 0 0-1.319.714c.42.777.66 1.666.66 2.614q0 .478-.08.933zm2.05-.95a3.3 3.3 0 0 1 1.53.237 9.95 9.95 0 0 0-1.932-5.194.75.75 0 0 0-1.205.893 8.45 8.45 0 0 1 1.608 4.064m-1.343 1.658-5.901 5.901a2.7 2.7 0 0 0-.707 1.247l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.902-5.901a2.285 2.285 0 1 0-3.233-3.232"/>`,
  'regular': `<path d="M14.999 4.252c0-1.078-1.274-1.65-2.08-.934L8.427 7.311a.75.75 0 0 1-.498.19H4.25A2.25 2.25 0 0 0 2 9.75v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .497.189l3.123 2.776a3.7 3.7 0 0 1 .724-1.363l-2.85-2.534a2.25 2.25 0 0 0-1.495-.569H4.25a.75.75 0 0 1-.75-.75V9.75A.75.75 0 0 1 4.25 9h3.68a2.25 2.25 0 0 0 1.495-.569L13.5 4.809v12.046l1.5-1.5zm5.04 1.803a9.95 9.95 0 0 1 1.931 5.194 3.3 3.3 0 0 0-1.528-.237 8.45 8.45 0 0 0-1.608-4.064.75.75 0 1 1 1.205-.893m-1.88 2.618c.46.85.749 1.807.822 2.822q-.316.195-.59.468l-.971.971q.078-.455.079-.933a5.5 5.5 0 0 0-.66-2.614.75.75 0 1 1 1.32-.714m.94 3.997-5.902 5.901a2.7 2.7 0 0 0-.707 1.247l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.902-5.901a2.285 2.285 0 1 0-3.233-3.232"/>`
} as const;

export default function SpeakerEditIcon({ 
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

  const gradientId = 'speakerediticon_gradient';
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