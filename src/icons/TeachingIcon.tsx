
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 8.25A4.25 4.25 0 0 1 10.25 4h18.5A4.25 4.25 0 0 1 33 8.25v5.563q-.654.444-1.224.974a10 10 0 0 0-1.276-1.024V8.25a1.75 1.75 0 0 0-1.75-1.75h-18.5A1.75 1.75 0 0 0 8.5 8.25V11h1.25a1.25 1.25 0 1 1 0 2.5H8.5v7.25h1.25a1.25 1.25 0 1 1 0 2.5H8.5v7.25h1.25a1.25 1.25 0 1 1 0 2.5H8.5v2.75c0 .967.784 1.75 1.75 1.75h7.123c.35.892.746 1.728 1.16 2.5H10.25A4.25 4.25 0 0 1 6 35.75V33H4.75a1.25 1.25 0 1 1 0-2.5H6v-7.25H4.75a1.25 1.25 0 1 1 0-2.5H6V13.5H4.75a1.25 1.25 0 1 1 0-2.5H6zm16 8.5c0 2.081.77 3.982 2.042 5.433C21.022 22.89 18 25.65 18 30.571c0 5.887 3.469 10.713 5.252 12.818C24.185 44.49 25.54 45 26.87 45c1.397 0 2.736-.56 3.717-1.554l.714-.723a.75.75 0 0 1 .448-.218.75.75 0 0 1 .448.218l.714.723A5.22 5.22 0 0 0 36.629 45c1.331 0 2.687-.51 3.62-1.611 1.782-2.105 5.251-6.93 5.251-12.818 0-5.775-4.158-8.571-7.595-8.571-1.873 0-3.729.588-4.905 1.051V22.3a5.75 5.75 0 0 1 2.616-4.821l1.815-1.18a1.25 1.25 0 1 0-1.362-2.096l-1.815 1.18a8.2 8.2 0 0 0-2.488 2.525A8.24 8.24 0 0 0 24.75 14H23.5a1.5 1.5 0 0 0-1.5 1.5zm8.5 5.5v.25h-.25a5.75 5.75 0 0 1-5.75-5.75v-.25h.25a5.75 5.75 0 0 1 5.75 5.75m-3.65 5.406a1.25 1.25 0 0 1-.506 1.694 2 2 0 0 0-1.028 2.048l.17 1.171a1.25 1.25 0 0 1-2.473.362l-.171-1.171a4.5 4.5 0 0 1 2.314-4.61 1.25 1.25 0 0 1 1.694.506"/>`,
  'regular': `<path d="M10.25 4A4.25 4.25 0 0 0 6 8.25V11H4.75a1.25 1.25 0 1 0 0 2.5H6v7.25H4.75a1.25 1.25 0 1 0 0 2.5H6v7.25H4.75a1.25 1.25 0 1 0 0 2.5H6v2.75A4.25 4.25 0 0 0 10.25 40h8.283a24 24 0 0 1-1.16-2.5H10.25a1.75 1.75 0 0 1-1.75-1.75V33h1.25a1.25 1.25 0 1 0 0-2.5H8.5v-7.25h1.25a1.25 1.25 0 1 0 0-2.5H8.5V13.5h1.25a1.25 1.25 0 1 0 0-2.5H8.5V8.25c0-.966.784-1.75 1.75-1.75h18.5c.966 0 1.75.784 1.75 1.75v5.514q.68.462 1.276 1.023.57-.53 1.224-.974V8.25A4.25 4.25 0 0 0 28.75 4zM30.5 22.5h-.25a5.75 5.75 0 0 1-5.75-5.75v-.25h.25a5.75 5.75 0 0 1 5.75 5.75zm1.266-4.593A8.24 8.24 0 0 0 24.75 14H23.5a1.5 1.5 0 0 0-1.5 1.5v1.25c0 2.081.77 3.982 2.042 5.433C21.022 22.89 18 25.65 18 30.571c0 5.887 3.469 10.713 5.252 12.818C24.185 44.49 25.54 45 26.87 45c1.397 0 2.736-.56 3.717-1.554l.714-.723a.75.75 0 0 1 .448-.218.75.75 0 0 1 .448.218l.714.723A5.22 5.22 0 0 0 36.629 45c1.331 0 2.687-.51 3.62-1.611 1.782-2.105 5.251-6.93 5.251-12.818 0-5.775-4.158-8.571-7.595-8.571-1.873 0-3.729.588-4.905 1.051V22.3a5.75 5.75 0 0 1 2.616-4.821l1.815-1.18a1.25 1.25 0 1 0-1.362-2.096l-1.815 1.18a8.2 8.2 0 0 0-2.488 2.525M20.5 30.571c0-4.32 2.963-6.071 5.095-6.071 1.786 0 3.561.731 4.388 1.131.454.22.981.369 1.549.369h.227c.525 0 1.017-.127 1.45-.323.876-.399 2.849-1.177 4.696-1.177 2.132 0 5.095 1.752 5.095 6.071 0 4.97-2.976 9.214-4.66 11.202-.387.458-1 .727-1.711.727a2.72 2.72 0 0 1-1.938-.81l-.714-.723a3.25 3.25 0 0 0-2.173-.964l-.054-.002-.054.002a3.25 3.25 0 0 0-2.173.964l-.714.723c-.512.518-1.21.81-1.938.81-.712 0-1.324-.269-1.711-.727-1.684-1.988-4.66-6.232-4.66-11.202m4.656-3.42a1.25 1.25 0 1 1 1.188 2.199 2 2 0 0 0-1.028 2.048l.17 1.171a1.25 1.25 0 0 1-2.473.362l-.171-1.171a4.5 4.5 0 0 1 2.314-4.61"/>`
} as const;

export default function TeachingIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'teachingicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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