
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.854 6.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.543.543 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796L17.987.363a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.005 1.367h-.001a2.8 2.8 0 0 1-.753.396l-.6.194-.78.249a.57.57 0 0 0-.26.2.5.5 0 0 0-.1.339.5.5 0 0 0 .099.292.54.54 0 0 0 .26.199l1.38.45a2.8 2.8 0 0 1 1.114.686m7.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.3.3 0 0 1-.382.186.3.3 0 0 1-.112-.054.28.28 0 0 1-.12-.14l-.092-.41-.113-.347a1.58 1.58 0 0 0-.999-1.001l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M15 12.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0m7 5.25v-3.858a1.29 1.29 0 0 1-1.29-.122 1.35 1.35 0 0 1-.49-.65l-.24-.76a.6.6 0 0 0-.14-.23.7.7 0 0 0-.22-.14l-.79-.25a1.3 1.3 0 0 1-.63-.48 1.26 1.26 0 0 1-.24-.75 1.3 1.3 0 0 1 .18-.66 1.45 1.45 0 0 1-.68.16 1.57 1.57 0 0 1-.89-.28 1.6 1.6 0 0 1-.57-.77l-.44-1.38a2 2 0 0 0-.29-.55l-.15-.17a1.8 1.8 0 0 0-.72-.44L13 5.96a1.6 1.6 0 0 1-.74-.57 1.57 1.57 0 0 1 0-1.79 1.65 1.65 0 0 1 .77-.57l1.36-.44.066-.023a2.3 2.3 0 0 0-.531-.064h-3.803a2.25 2.25 0 0 0-1.917 1.073L7.33 5H5.25A3.25 3.25 0 0 0 2 8.25v9.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75M7.5 12.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"/>`,
  'regular': `<path d="M15.854 6.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.543.543 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796L17.987.363a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.544.544 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M10.122 4.003h1.959a1.55 1.55 0 0 1 .95-.962l1.391-.453.05-.017a2.3 2.3 0 0 0-.547-.068h-3.803a2.25 2.25 0 0 0-1.917 1.073L7.33 5H5.25A3.25 3.25 0 0 0 2 8.25v9.5A3.25 3.25 0 0 0 5.25 21h13.5A3.25 3.25 0 0 0 22 17.75v-3.852c-.406.164-.89.118-1.252-.137a1.3 1.3 0 0 1-.248-.229v4.218a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h2.5a.75.75 0 0 0 .64-.358l1.093-1.781.065-.09a.75.75 0 0 1 .574-.268M16.5 12.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-7.5 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0"/>`
} as const;

export default function CameraSparklesIcon({ 
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

  const gradientId = 'camerasparklesicon_gradient';
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