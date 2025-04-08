
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.007 6c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134C6.31 1.034 6.443 1 6.5 1s.191.034.386.281c.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585zm-.396-3.9c.108-.323.23-.622.368-.887A5.5 5.5 0 0 0 1.022 6h2.985c.04-1.5.26-2.865.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 11.978 6H8.993c-.04-1.5-.26-2.865-.604-3.9M8.993 7h2.985a5.5 5.5 0 0 1-3.957 4.787 6 6 0 0 0 .368-.886c.345-1.036.564-2.4.604-3.901m-2.107 4.719c-.195.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.134-.305-.916-.513-2.17-.553-3.585h2.986c-.04 1.415-.248 2.669-.553 3.585-.171.513-.364.893-.554 1.134M1.022 7a5.505 5.505 0 0 0 3.957 4.787 6 6 0 0 1-.368-.886C4.266 9.865 4.047 8.5 4.007 7zm14.73.5a.752.752 0 1 1 0 1.504.752.752 0 0 1 0-1.504"/><path d="M6.5 13a6.5 6.5 0 0 0 5.478-10h5.772A3.25 3.25 0 0 1 21 6.25v11.5c0 .627-.178 1.213-.485 1.71l-6.939-6.812-.128-.117a2.25 2.25 0 0 0-2.889-.006l-.135.123-6.939 6.811A3.24 3.24 0 0 1 3 17.75v-5.772A6.47 6.47 0 0 0 6.5 13m9.252-7a2.252 2.252 0 1 0 0 4.504 2.252 2.252 0 0 0 0-4.504"/><path d="m11.475 13.718.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.24 3.24 0 0 1 17.75 21H6.25a3.24 3.24 0 0 1-1.703-.481z"/>`,
  'regular': `<path d="M5.007 6c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134C6.31 1.034 6.443 1 6.5 1s.191.034.386.281c.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585zm-.396-3.9c.108-.323.23-.622.368-.887A5.5 5.5 0 0 0 1.022 6h2.985c.04-1.5.26-2.865.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 11.978 6H8.993c-.04-1.5-.26-2.865-.604-3.9M8.993 7h2.985a5.5 5.5 0 0 1-3.957 4.787 6 6 0 0 0 .368-.886c.345-1.036.564-2.4.604-3.901m-2.107 4.719c-.195.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.134-.305-.916-.513-2.17-.553-3.585h2.986c-.04 1.415-.248 2.669-.553 3.585-.171.513-.364.893-.554 1.134M1.022 7a5.505 5.505 0 0 0 3.957 4.787 6 6 0 0 1-.368-.886C4.266 9.865 4.047 8.5 4.007 7z"/><path d="M17.75 4.5h-5.063a6.5 6.5 0 0 0-.709-1.5h5.772A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-5.772c.463.297.967.536 1.5.709v5.063q.001.313.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702q.102-.28.104-.595V6.25a1.75 1.75 0 0 0-1.75-1.75m.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687q.274.097.582.099h11.5c.203 0 .399-.035.58-.099"/><path d="M15.252 6.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504m0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504"/>`
} as const;

export default function ImageGlobeIcon({ 
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

  const gradientId = 'imageglobeicon_gradient';
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