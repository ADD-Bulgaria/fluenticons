
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.172 4.172c-.654.654-2.053 2.513-3.229 4.116a244 244 0 0 0-1.363 1.878l-2.898-2.898a4.5 4.5 0 0 0-6.364 0l-3.172 3.171a1.5 1.5 0 0 0 0 2.122l.88.879-2.294 2.292a2.5 2.5 0 0 0 0 3.536l9.003 9.002a2.5 2.5 0 0 0 3.537-.002l2.289-2.293.878.878a1.5 1.5 0 0 0 2.122 0l3.17-3.175a4.5 4.5 0 0 0-.001-6.362l-2.896-2.896a243 243 0 0 0 1.879-1.364c1.602-1.175 3.462-2.574 4.115-3.227a4 4 0 0 0-5.656-5.657M17.146 24.56l-2.29 2.294a.5.5 0 0 1-.707 0l-9.003-9.001a.5.5 0 0 1 0-.708l2.293-2.292zM20.4 12.986 19.014 11.6c.409-.57.958-1.333 1.542-2.13 1.221-1.665 2.512-3.366 3.03-3.884a2 2 0 1 1 2.828 2.828c-.518.518-2.219 1.809-3.884 3.03-.797.584-1.559 1.134-2.13 1.542"/>`,
  'light': `<path d="M22.172 4.172a4 4 0 1 1 5.656 5.656c-.726.727-2.392 1.887-3.827 2.839a114 114 0 0 1-2.204 1.424l3.228 3.227a4.5 4.5 0 0 1 0 6.364l-3.464 3.464a1.5 1.5 0 0 1-2.122 0l-.94-.939-2.938 2.94a1.5 1.5 0 0 1-2.122 0L2.853 18.56a1.5 1.5 0 0 1 0-2.122l2.94-2.939-.94-.94a1.5 1.5 0 0 1 0-2.12l3.465-3.465a4.5 4.5 0 0 1 6.364 0l3.227 3.227A120 120 0 0 1 19.333 8c.952-1.435 2.112-3.101 2.839-3.827m-1.1 9.193a109 109 0 0 0 2.376-1.532c1.46-.969 3.033-2.071 3.673-2.712A3 3 0 1 0 22.88 4.88c-.641.64-1.744 2.212-2.713 3.673a114 114 0 0 0-1.532 2.376zm-7.097-5.683a3.5 3.5 0 0 0-4.95 0l-3.464 3.464a.5.5 0 0 0 0 .708L20.146 26.44a.5.5 0 0 0 .707 0l3.465-3.464a3.5 3.5 0 0 0 0-4.95zM3.56 17.146a.5.5 0 0 0 0 .708l10.585 10.585a.5.5 0 0 0 .707 0l2.94-2.939L6.5 14.207z"/>`,
  'regular': `<path d="M18.944 8.288c1.175-1.603 2.574-3.462 3.228-4.116a4 4 0 1 1 5.656 5.657c-.653.653-2.513 2.052-4.115 3.227-.685.503-1.344.98-1.88 1.364l2.897 2.896a4.5 4.5 0 0 1 .002 6.362l-3.17 3.175a1.5 1.5 0 0 1-2.123 0l-.878-.878-2.289 2.293a2.5 2.5 0 0 1-3.537.002l-9.003-9.002a2.5 2.5 0 0 1 0-3.536l2.293-2.292-.879-.88a1.5 1.5 0 0 1 0-2.12l3.172-3.172a4.5 4.5 0 0 1 6.364 0l2.898 2.898c.385-.535.861-1.194 1.364-1.878M7.438 14.854l-2.293 2.292a.5.5 0 0 0 0 .708l9.003 9.002a.5.5 0 0 0 .708 0l2.29-2.295zm15.09-3.41c1.666-1.221 3.367-2.512 3.885-3.03a2 2 0 0 0-2.828-2.828c-.518.518-1.808 2.22-3.03 3.884-.584.797-1.134 1.56-1.542 2.13l1.386 1.386c.571-.408 1.333-.958 2.13-1.542M6.915 11.5 20.5 25.085l2.817-2.82a2.5 2.5 0 0 0-.001-3.535L13.268 8.682a2.5 2.5 0 0 0-3.536 0z"/>`
} as const;

export default function ClassificationIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'classificationicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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