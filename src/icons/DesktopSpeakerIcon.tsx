
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.143 2.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 0 0-.96 1.152c.127.106.353.357.587.747.401.67.643 1.475.643 2.427s-.242 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 1 0 .96 1.152c.248-.207.585-.58.913-1.128C22.68 7.805 23 6.736 23 5.5s-.32-2.305-.857-3.198m-2.269 1.094a3.1 3.1 0 0 0-.674-.746.75.75 0 0 0-.9 1.2c.062.046.19.175.326.379.234.35.374.77.374 1.271s-.14.92-.374 1.271a1.7 1.7 0 0 1-.326.379l-.084.073A.75.75 0 0 0 19.2 8.35c.189-.141.435-.388.674-.746A3.73 3.73 0 0 0 20.5 5.5c0-.812-.235-1.517-.626-2.104M17 2.75a.75.75 0 0 0-1.314-.494L14.16 4h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 8.25zM11 4a1 1 0 0 1 .98-1H4.25l-.154.005A2.25 2.25 0 0 0 2 5.25v10.502l.005.154a2.25 2.25 0 0 0 2.245 2.096h4.249V20.5H6.75l-.102.007A.75.75 0 0 0 6.75 22h10.5l.102-.006a.75.75 0 0 0-.102-1.494h-1.751v-2.498h4.25l.154-.005a2.25 2.25 0 0 0 2.096-2.245v-5.27q-.066.06-.129.112a1.75 1.75 0 0 1-2.855-1.114 1.76 1.76 0 0 1-1.238-.275c-.54.955-1.942 1.25-2.804.33L13.533 8H12a1 1 0 0 1-1-1zm2.998 14.002.001 2.498h-4l-.001-2.498z"/>`,
  'regular': `<path d="M22.143 2.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 0 0-.96 1.152c.127.106.353.357.587.747.401.67.643 1.475.643 2.427s-.242 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 1 0 .96 1.152c.248-.207.585-.58.913-1.128C22.68 7.805 23 6.736 23 5.5s-.32-2.305-.857-3.198m-2.269 1.094a3.1 3.1 0 0 0-.674-.746.75.75 0 0 0-.9 1.2c.062.046.19.175.326.379.234.35.374.77.374 1.271s-.14.92-.374 1.271a1.7 1.7 0 0 1-.326.379l-.084.073A.75.75 0 0 0 19.2 8.35c.189-.141.435-.388.674-.746A3.73 3.73 0 0 0 20.5 5.5c0-.812-.235-1.517-.626-2.104M17 2.75a.75.75 0 0 0-1.314-.494L14.16 4h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 8.25zM4.25 3h7.73A1 1 0 0 0 11 4v.5H4.25a.75.75 0 0 0-.743.648L3.5 5.25v10.502c0 .38.282.694.648.743l.102.007h15.499a.75.75 0 0 0 .743-.648l.007-.102v-4.77c.474.069.974-.057 1.371-.388q.063-.052.129-.112v5.27a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-4.25V20.5h1.751a.75.75 0 0 1 .102 1.494L17.25 22H6.75a.75.75 0 0 1-.102-1.493l.102-.007h1.749v-2.498H4.25a2.25 2.25 0 0 1-2.245-2.096L2 15.752V5.25a2.25 2.25 0 0 1 2.096-2.245zm9.748 15.002h-4l.001 2.498h4z"/>`
} as const;

export default function DesktopSpeakerIcon({ 
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

  const gradientId = 'desktopspeakericon_gradient';
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