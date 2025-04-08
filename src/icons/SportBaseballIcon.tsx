
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.94 6.079A9.96 9.96 0 0 0 2 12c0 2.209.716 4.25 1.929 5.905q.107-.103.227-.21c.645-.578 1.608-1.268 2.857-1.684a.75.75 0 1 1 .474 1.423c-1 .333-1.788.893-2.33 1.378a7 7 0 0 0-.251.236A9.97 9.97 0 0 0 12 22a9.97 9.97 0 0 0 7.094-2.952 7 7 0 0 0-.25-.236c-.543-.485-1.33-1.045-2.331-1.378a.75.75 0 1 1 .474-1.423c1.25.416 2.212 1.106 2.857 1.684q.12.108.227.21A9.96 9.96 0 0 0 22 12c0-2.216-.72-4.264-1.94-5.921l-.216.199c-.646.577-1.608 1.267-2.857 1.684a.75.75 0 0 1-.474-1.423c1-.334 1.788-.894 2.33-1.38q.129-.115.237-.22A9.97 9.97 0 0 0 12 2a9.97 9.97 0 0 0-7.08 2.938q.107.106.236.222c.543.485 1.33 1.045 2.331 1.378a.75.75 0 1 1-.474 1.424C5.763 7.545 4.8 6.855 4.156 6.278a9 9 0 0 1-.215-.2m5.083 10.075a.76.76 0 0 1 .547-.91h.003l.007-.002.024-.006.08-.018a11 11 0 0 1 1.32-.181 12.5 12.5 0 0 1 3.393.2.75.75 0 0 1-.294 1.47 11 11 0 0 0-2.983-.175 10 10 0 0 0-1.123.153l-.065.015s-.748.099-.91-.546m.909-8.882.065.015q.077.016.232.044c.206.036.511.08.891.109a11 11 0 0 0 2.983-.175.75.75 0 0 1 .294 1.47 12.5 12.5 0 0 1-3.392.2 11 11 0 0 1-1.32-.181l-.081-.018-.024-.005-.007-.002H9.57a.76.76 0 0 1-.547-.91c.16-.646.909-.547.909-.547"/>`,
  'regular': `<path d="M9.932 16.7s-.748.099-.91-.546a.76.76 0 0 1 .548-.91h.003l.007-.002.024-.006.08-.018q.105-.022.29-.055c.247-.043.599-.093 1.031-.126a12.5 12.5 0 0 1 3.392.2.75.75 0 0 1-.294 1.47 11 11 0 0 0-2.983-.175 10 10 0 0 0-1.123.153zm-.91-8.806c.161-.645.91-.546.91-.546a6 6 0 0 0 .297.059c.206.035.51.079.89.108a11 11 0 0 0 2.984-.175.75.75 0 0 1 .294 1.47 12.5 12.5 0 0 1-3.392.2 11 11 0 0 1-1.32-.18l-.082-.018-.023-.006-.007-.002H9.57a.76.76 0 0 1-.548-.91M12 22a9.97 9.97 0 0 0 7.094-2.952q.531-.535.977-1.143A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10M5.074 7.071a8 8 0 0 0 1.939.966.75.75 0 1 0 .474-1.423 6.4 6.4 0 0 1-1.43-.691A8.47 8.47 0 0 1 12 3.5c2.313 0 4.41.924 5.943 2.423-.412.264-.89.51-1.43.69a.75.75 0 1 0 .474 1.424 8 8 0 0 0 1.939-.966A8.46 8.46 0 0 1 20.5 12a8.46 8.46 0 0 1-1.597 4.961 8 8 0 0 0-1.916-.95.75.75 0 1 0-.474 1.423c.527.175.996.414 1.4.672A8.47 8.47 0 0 1 12 20.5a8.47 8.47 0 0 1-5.913-2.394 6.4 6.4 0 0 1 1.4-.672.75.75 0 1 0-.474-1.423 8 8 0 0 0-1.916.95A8.46 8.46 0 0 1 3.5 12a8.46 8.46 0 0 1 1.574-4.929"/>`
} as const;

export default function SportBaseballIcon({ 
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

  const gradientId = 'sportbaseballicon_gradient';
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