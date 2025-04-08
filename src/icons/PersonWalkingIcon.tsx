
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 6.5A2.25 2.25 0 1 0 13 2a2.25 2.25 0 0 0 0 4.5m-2.639-.081c.185.045.35.146.493.272a3.24 3.24 0 0 0 2.904.72c.186-.044.379-.056.564-.01l.132.033a1.5 1.5 0 0 1 .919.673l1.332 2.177a1 1 0 0 0 .657.46l1.431.285a1.5 1.5 0 0 1-.587 2.942l-2.504-.5a1.5 1.5 0 0 1-.986-.688l-.183-.3a.54.54 0 0 0-.966.09 1.5 1.5 0 0 0 .17 1.389l.994 1.433a1.5 1.5 0 0 1 .265.767l.25 4.25a1.5 1.5 0 0 1-2.995.176l-.2-3.391a1 1 0 0 0-.247-.602l-.851-.968a.88.88 0 0 0-1.477.252L7.39 21.061a1.5 1.5 0 0 1-2.783-1.122l3.076-7.634q.02-.081.052-.162l.565-1.47a.469.469 0 0 0-.865-.362l-1.268 2.806a1.5 1.5 0 0 1-2.735-1.232l1.624-3.61a1.5 1.5 0 0 1 .846-.792l3.075-1.14a1.5 1.5 0 0 1 .883-.049z"/>`,
  'regular': `<path d="M13 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M10 5a3 3 0 1 1 5.266 1.966l.005.003c.19.11.36.26.51.43.09.1.18.22.25.33L17 9.258c.06.08.109.15.159.23l.17.27 1.928.969a2.26 2.26 0 0 1 1.01 3.018 2.247 2.247 0 0 1-3.018 1.01l-2.468-1.23c-.16-.08-.31-.17-.45-.29 0 0-.06-.06-.1-.09 0 .13.05.27.13.39l.84 1.23c.33.49.53 1.039.579 1.628l.23 3.188a2.235 2.235 0 0 1-2.079 2.399 2.23 2.23 0 0 1-2.398-2.079l-.2-2.778-1.039-1.26-1.928 4.738c-.36.87-1.2 1.399-2.079 1.399l-.04-.01c-.28 0-.57-.05-.85-.17a2.244 2.244 0 0 1-1.228-2.928l1.798-4.417a2.246 2.246 0 0 1-1.819-3.028l.92-2.4s.02-.05.03-.07l.52-1.358c.25-.66.8-1.16 1.479-1.36l2.248-.66q.045-.014.09-.024t.09-.025c.02 0 .04 0 .07-.01q.226-.045.446-.04A3 3 0 0 1 10 5m.216 2.028a.75.75 0 0 0-.41.002l-2.3.665a.75.75 0 0 0-.493.453L5.55 11.983a.75.75 0 0 0 1.386.571l1.226-2.766a.619.619 0 0 1 1.14.483l-.862 2.13-2.884 7.066a.75.75 0 0 0 1.389.566l2.201-5.393a1.14 1.14 0 0 1 1.892-.202l1.68 2.042a.25.25 0 0 1 .057.141l.227 3.182a.75.75 0 0 0 1.496-.106l-.227-3.182a1.75 1.75 0 0 0-.311-.879l-.006-.009-.007-.01-.84-1.228a2.25 2.25 0 0 1-.245-2.069l.245-.643.265-.535a.71.71 0 0 1 1.167-.152l.578.912a.75.75 0 0 0 .298.269l2.5 1.25a.75.75 0 1 0 .67-1.342l-2.31-1.155-.395-.634a2 2 0 0 0-.12-.174l-1.032-1.628a.75.75 0 0 0-.431-.32z"/>`
} as const;

export default function PersonWalkingIcon({ 
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

  const gradientId = 'personwalkingicon_gradient';
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