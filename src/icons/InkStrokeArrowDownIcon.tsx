
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.004 2.907a1 1 0 0 1 1.09-.903l3.746.35c2.655.264 5.202.581 7.296.942 2.041.351 3.797.766 4.762 1.275.248.131.521.307.732.548.225.257.438.663.35 1.166-.082.458-.377.767-.613.953a3.7 3.7 0 0 1-.876.486c-1.27.525-3.66 1.022-7.392 1.51-1.682.22-2.923.435-3.801.636q.316.07.68.136c1.217.224 2.75.415 4.382.561 1.247.112 2.582.288 3.723.514.57.113 1.105.24 1.564.383q.162.05.323.107A2 2 0 0 0 17.5 13.5v1.642c-.93.195-2.127.38-3.623.56-2.611.311-4.179.706-5.036 1.095-.342.156-.513.285-.591.36.03.046.086.116.181.207.18.173.444.366.786.568.682.403 1.563.778 2.417 1.07l3.245 1.046a1 1 0 1 1-.614 1.904L11.004 20.9l-.008-.003c-.933-.319-1.955-.746-2.796-1.243a6.3 6.3 0 0 1-1.152-.845c-.319-.305-.64-.71-.771-1.214-.147-.564-.023-1.128.34-1.604.33-.431.826-.756 1.398-1.015 1.147-.52 2.967-.943 5.625-1.26 1.588-.19 2.756-.38 3.587-.56a19 19 0 0 0-.532-.113 35 35 0 0 0-3.513-.484c-1.667-.15-3.267-.347-4.565-.586a17 17 0 0 1-1.728-.397c-.466-.138-.939-.315-1.285-.56a1.55 1.55 0 0 1-.547-.649c-.162-.382-.12-.79.074-1.124.164-.282.408-.467.601-.587.207-.127.447-.236.705-.332 1.006-.373 2.759-.727 5.403-1.073 3.232-.423 5.27-.833 6.407-1.201-.777-.257-1.949-.525-3.451-.783-2.028-.35-4.522-.661-7.151-.922l-3.738-.35a1 1 0 0 1-.903-1.088M20.5 13.5a1 1 0 1 0-2 0v6.086l-.793-.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l2.5-2.5a1 1 0 0 0-1.414-1.414l-.793.793z"/>`,
  'regular': `<path d="M3.253 2.93a.75.75 0 0 1 .817-.677l3.745.35c2.652.263 5.193.58 7.278.94 2.047.352 3.764.761 4.688 1.249a2.3 2.3 0 0 1 .662.492c.192.22.362.552.29.957-.066.372-.307.632-.52.8a3.5 3.5 0 0 1-.818.452c-1.234.511-3.595 1.005-7.328 1.493-2.38.312-3.895.615-4.758.89l.077.023c.41.121.934.24 1.548.353 1.226.225 2.768.418 4.404.564 1.24.111 2.567.287 3.697.51.564.112 1.09.237 1.538.376.3.094.593.201.846.33a1.75 1.75 0 0 0-1.306 1.098 14 14 0 0 0-1.37-.332 35 35 0 0 0-3.54-.488c-1.661-.149-3.253-.346-4.54-.583a17 17 0 0 1-1.703-.39c-.461-.137-.9-.304-1.212-.525a1.3 1.3 0 0 1-.46-.542 1 1 0 0 1 .06-.901c.134-.232.338-.39.516-.5.187-.116.411-.218.66-.31.977-.363 2.705-.714 5.348-1.06 3.749-.49 5.922-.966 6.95-1.392l.125-.055c-.732-.34-2.16-.696-4.108-1.032-2.037-.35-4.537-.663-7.17-.924l-3.739-.35a.75.75 0 0 1-.677-.816M18 13.75v1.023c-.974.237-2.336.463-4.152.68-2.618.313-4.217.711-5.11 1.117-.448.203-.65.378-.73.483-.05.064-.043.083-.039.097l.002.004c.015.06.081.194.287.391.199.19.48.394.832.602.702.415 1.601.797 2.466 1.093l3.246 1.046a.75.75 0 0 1-.46 1.428l-3.266-1.053c-.923-.316-1.928-.737-2.749-1.222a6 6 0 0 1-1.106-.81c-.303-.29-.587-.656-.702-1.097-.126-.485-.022-.971.297-1.39.293-.384.748-.687 1.302-.938 1.111-.505 2.9-.923 5.552-1.24 2.175-.26 3.581-.522 4.419-.765a1.8 1.8 0 0 0-.089.551m2.5 0a.75.75 0 0 0-1.5 0v6.69l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22z"/>`
} as const;

export default function InkStrokeArrowDownIcon({ 
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

  const gradientId = 'inkstrokearrowdownicon_gradient';
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