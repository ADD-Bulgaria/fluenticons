
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.912 6.412a2.84 2.84 0 0 1 1.347-.955l1.378-.448a.544.544 0 0 0 0-1.025l-1.378-.448A2.84 2.84 0 0 1 7.5 1.774l-.011-.034L7.04.363a.544.544 0 0 0-1.027 0L5.567 1.74a2.84 2.84 0 0 1-1.798 1.796l-1.378.448-.028.007a.544.544 0 0 0 0 1.025l1.378.448A2.84 2.84 0 0 1 5.539 7.26l.448 1.377A.55.55 0 0 0 6.5 9a.54.54 0 0 0 .513-.363l.448-1.377c.101-.307.254-.593.45-.848M.217 10.213l.766-.248a1.58 1.58 0 0 0 .998-.999l.25-.764a.302.302 0 0 1 .57 0l.248.764a1.58 1.58 0 0 0 .984.999l.765.248a.302.302 0 0 1 0 .57l-.765.249a1.58 1.58 0 0 0-1 1.002l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-.999l-.765-.248a.302.302 0 0 1 0-.57zM3.29 13.81q-.136.098-.29.156v3.785c0 .627.178 1.213.485 1.71l6.939-6.812.135-.123a2.25 2.25 0 0 1 2.889.006l.128.117 6.939 6.811A3.24 3.24 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-6.797c.306.11.573.308.767.569a1.57 1.57 0 0 1 0 1.79 1.54 1.54 0 0 1-.72.64l-1.4.46a1.9 1.9 0 0 0-.72.44l-.18.1a2 2 0 0 0-.29.55L8 8.999a1.6 1.6 0 0 1-.57.77 1.57 1.57 0 0 1-.89.28 1.45 1.45 0 0 1-.68-.16c.119.2.181.428.18.66a1.26 1.26 0 0 1-.24.75 1.3 1.3 0 0 1-.63.48l-.79.25a.7.7 0 0 0-.22.14.6.6 0 0 0-.14.23l-.24.76a1.35 1.35 0 0 1-.49.65m8.185-.091.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.24 3.24 0 0 1 17.75 21H6.25a3.24 3.24 0 0 1-1.703-.481zM13.25 8.75a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>`,
  'regular': `<path d="M7.912 6.412a2.84 2.84 0 0 1 1.347-.955l1.378-.448a.544.544 0 0 0 0-1.025l-1.378-.448A2.84 2.84 0 0 1 7.5 1.774l-.011-.034L7.04.363a.544.544 0 0 0-1.027 0L5.567 1.74a2.84 2.84 0 0 1-1.798 1.796l-1.378.448-.028.007a.544.544 0 0 0 0 1.025l1.378.448A2.84 2.84 0 0 1 5.539 7.26l.448 1.377A.55.55 0 0 0 6.5 9a.54.54 0 0 0 .513-.363l.448-1.377c.101-.307.254-.593.45-.848M.217 10.213l.766-.248a1.58 1.58 0 0 0 .998-.999l.25-.764a.302.302 0 0 1 .57 0l.248.764a1.58 1.58 0 0 0 .984.999l.765.248a.302.302 0 0 1 0 .57l-.765.249a1.58 1.58 0 0 0-1 1.002l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-.999l-.765-.248a.302.302 0 0 1 0-.57zM12 4.47v.03h5.75c.966 0 1.75.784 1.75 1.75v11.5q-.002.315-.104.595l-5.822-5.702-.128-.116a2.25 2.25 0 0 0-3.02.116l-5.823 5.7a1.8 1.8 0 0 1-.103-.593v-5.759l-.12.038a.7.7 0 0 0-.22.14.6.6 0 0 0-.14.23l-.24.76a1.35 1.35 0 0 1-.78.806v3.785A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-6.797c.306.11.573.308.767.569a1.6 1.6 0 0 1 .28.9m.525 9.246L18.33 19.4a1.8 1.8 0 0 1-.581.099H6.25q-.308-.002-.582-.099l5.807-5.686.084-.071a.75.75 0 0 1 .966.07m4.98-4.963a2.252 2.252 0 1 0-4.505 0 2.252 2.252 0 0 0 4.504 0m-3.005 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0"/>`
} as const;

export default function ImageSparkleIcon({ 
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

  const gradientId = 'imagesparkleicon_gradient';
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