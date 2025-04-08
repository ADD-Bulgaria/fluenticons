
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.144 3.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 0 0-.96 1.152c.126.106.352.357.586.747.402.67.643 1.475.643 2.427s-.241 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 0 0 .96 1.152c.249-.207.585-.58.914-1.128C22.68 8.805 23 7.736 23 6.5s-.321-2.305-.857-3.198"/><path d="M19.875 4.396a3.1 3.1 0 0 0-.674-.746.75.75 0 0 0-.9 1.2c.061.046.19.175.326.379.233.35.373.77.373 1.271s-.14.92-.373 1.271a1.7 1.7 0 0 1-.326.379l-.084.073A.75.75 0 0 0 19.2 9.35c.188-.141.434-.388.674-.746A3.73 3.73 0 0 0 20.5 6.5c0-.812-.234-1.517-.625-2.104M17 3.75a.75.75 0 0 0-1.314-.494L14.16 5h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 9.25zM11 5a1 1 0 0 1 .25-.662v-.32a2 2 0 0 0-.245-.017H3.758a1.75 1.75 0 0 0-1.75 1.75v12.495c0 .967.783 1.75 1.75 1.75h7.247q.125 0 .246-.017V8.662A1 1 0 0 1 11 8zM9.25 15.5l.102.007a.75.75 0 0 1 0 1.486L9.251 17H7.749l-.102-.007a.75.75 0 0 1 0-1.486l.102-.007z"/><path d="M13.534 9h-.784v10.98q.125.018.255.018h7.248a1.75 1.75 0 0 0 1.75-1.75v-6.77q-.067.063-.132.116a1.75 1.75 0 0 1-2.855-1.114 1.76 1.76 0 0 1-1.238-.275c-.541.955-1.943 1.25-2.804.33zm2.713 6.5.101.007a.75.75 0 0 1 0 1.486l-.101.007h-1.5l-.102-.007a.75.75 0 0 1 0-1.486l.101-.007z"/>`,
  'regular': `<path d="M22.144 3.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 0 0-.96 1.152c.126.106.352.357.586.747.402.67.643 1.475.643 2.427s-.241 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 0 0 .96 1.152c.249-.207.585-.58.914-1.128C22.68 8.805 23 7.736 23 6.5s-.321-2.305-.857-3.198"/><path d="M19.875 4.396a3.1 3.1 0 0 0-.674-.746.75.75 0 0 0-.9 1.2c.061.046.19.175.326.379.233.35.373.77.373 1.271s-.14.92-.373 1.271a1.7 1.7 0 0 1-.326.379l-.084.073A.75.75 0 0 0 19.2 9.35c.188-.141.434-.388.674-.746A3.73 3.73 0 0 0 20.5 6.5c0-.812-.234-1.517-.625-2.104M17 3.75a.75.75 0 0 0-1.314-.494L14.16 5h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 9.25z"/><path d="M11.951 4.001H3.758a1.75 1.75 0 0 0-1.75 1.75v12.495c0 .967.783 1.75 1.75 1.75h7.497v.003h8.998a1.75 1.75 0 0 0 1.75-1.75v-6.77q-.067.061-.132.115c-.396.33-.895.456-1.368.389v6.265a.25.25 0 0 1-.25.25h-7.498V9H12a1 1 0 0 1-.745-.333v9.83H3.758a.25.25 0 0 1-.25-.25V5.75a.25.25 0 0 1 .25-.25H11V5a1 1 0 0 1 .95-1"/><path d="M16.247 15.5h-1.5l-.102.007A.75.75 0 0 0 14.746 17h1.5l.102-.007a.75.75 0 0 0-.101-1.493m-8.498 0h1.502a.75.75 0 0 1 .101 1.493L9.251 17H7.749a.75.75 0 0 1-.102-1.493z"/>`
} as const;

export default function DualScreenSpeakerIcon({ 
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

  const gradientId = 'dualscreenspeakericon_gradient';
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