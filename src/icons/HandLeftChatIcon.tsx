
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 3v9.251a.75.75 0 0 0 1.5 0v-7.75a1 1 0 1 1 2 0v8.25c0 .18.063.345.169.474a7.503 7.503 0 0 0-4.93 10.524l-.63 2.152a3.25 3.25 0 0 1-2.117-1.71l-.696-1.408a11 11 0 0 0-1.027-1.688l-2.79-3.786-2.632-1.675a.75.75 0 0 1-.347-.633c0-.487.214-.889.549-1.169.31-.26.699-.397 1.066-.466.733-.14 1.622-.06 2.417.16.722.183 1.423.524 1.968.837V4.5a1 1 0 1 1 2 0v7.751a.75.75 0 0 0 1.5 0v-9.25a1 1 0 1 1 2 0m5.501 10q-.278 0-.55.02A.8.8 0 0 0 20 12.75V6.998a1 1 0 1 1 2 0v6.152a7.5 7.5 0 0 0-1.499-.15m0 14a6.5 6.5 0 1 0-5.69-3.354l-.794 2.713a.5.5 0 0 0 .62.62l2.716-.79a6.5 6.5 0 0 0 3.148.811m-3-7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5M18 22a.5.5 0 0 1 0-1h2.5a.5.5 0 1 1 0 1z"/>`,
  'regular': `<path d="M14 4.26v7.991a.75.75 0 0 1-1.5 0V5.763c0-.4-.324-.76-.75-.763-.384-.002-.75.363-.75.796v8.955a.75.75 0 0 1-1.246.563l-.186-.166c-.24-.214-.398-.357-.629-.49-.266-.153-.656-.305-1.377-.415-.663-.102-1.346-.013-1.829.25-.35.189-.606.468-.697.893l2.144 1.501a1 1 0 0 1 .117.102l2.535 2.704a12.8 12.8 0 0 1 2.128 3.07l.377.762a1.75 1.75 0 0 0 1.194.934l-.422 1.442a3.25 3.25 0 0 1-2.117-1.71l-.377-.764a11.3 11.3 0 0 0-1.877-2.708l-2.482-2.647-2.436-1.706a.75.75 0 0 1-.32-.614c0-1.24.639-2.102 1.518-2.579.839-.454 1.87-.552 2.772-.413.735.113 1.272.277 1.71.497V5.796c0-1.172.954-2.304 2.258-2.296.297.002.572.059.822.158A2.21 2.21 0 0 1 14.749 2c1.1 0 1.912.742 2.167 1.658a2.2 2.2 0 0 1 .837-.158C19.113 3.5 20 4.644 20 5.796v.329c.23-.08.482-.125.75-.125C22.09 6 23 7.103 23 8.27v5.156a7.5 7.5 0 0 0-1.5-.36V8.27c0-.424-.32-.77-.75-.77s-.75.342-.75.77v4.48a.8.8 0 0 1-.05.269 7.5 7.5 0 0 0-1.281.205.75.75 0 0 1-.169-.474V5.796c0-.446-.332-.796-.747-.796-.421 0-.753.35-.753.796v6.455a.75.75 0 1 1-1.5 0V4.272c0-.427-.32-.771-.752-.772-.44 0-.748.332-.748.76M20.5 27a6.5 6.5 0 1 0-5.689-3.354l-.794 2.713a.5.5 0 0 0 .62.62l2.716-.79a6.5 6.5 0 0 0 3.148.811m-3-7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5M18 22a.5.5 0 0 1 0-1h2.5a.5.5 0 1 1 0 1z"/>`
} as const;

export default function HandLeftChatIcon({ 
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

  const gradientId = 'handleftchaticon_gradient';
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