import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16m18 0a6 6 0 1 0 0-12 6 6 0 0 0 0 12M6.75 25A3.75 3.75 0 0 0 3 28.75V30s0 9 13 9c2.61 0 4.695-.363 6.362-.942A13 13 0 0 1 22 35a12.97 12.97 0 0 1 4.459-9.8c-.38-.13-.786-.2-1.209-.2zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-9.81-6.599a1.236 1.236 0 0 0-2.38 0l-1.194 3.83h-3.862c-1.213 0-1.716 1.617-.736 2.36l3.125 2.366-1.194 3.83c-.374 1.201.945 2.2 1.926 1.458L35 39.878l3.125 2.367c.98.743 2.3-.257 1.925-1.458l-1.193-3.83 3.125-2.367c.98-.742.477-2.36-.736-2.36h-3.862z"/>`,
  'regular': `<path d="M10.5 14a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M16 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16m14.5 10a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12M6.75 25A3.75 3.75 0 0 0 3 28.75v1.303l.004.097q.006.12.026.318c.029.262.084.622.192 1.05a8.7 8.7 0 0 0 1.5 3.112C6.479 36.946 9.826 39 16 39c2.585 0 4.675-.36 6.36-.949a13 13 0 0 1-.35-2.538c-1.45.586-3.395.987-6.01.987-5.575 0-8.103-1.82-9.285-3.38a6.2 6.2 0 0 1-1.07-2.215 5 5 0 0 1-.144-.881l-.001-.032V28.75c0-.69.56-1.25 1.25-1.25h17.63c.6-.848 1.298-1.62 2.079-2.3-.38-.13-.786-.2-1.209-.2zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-9.81-6.599a1.236 1.236 0 0 0-2.38 0l-1.194 3.83h-3.862c-1.213 0-1.716 1.617-.736 2.36l3.125 2.366-1.194 3.83c-.374 1.201.945 2.2 1.926 1.458L35 39.878l3.125 2.367c.98.743 2.3-.257 1.925-1.458l-1.193-3.83 3.125-2.367c.98-.742.477-2.36-.736-2.36h-3.862z"/>`
} as const;

export default function PeopleStarIcon({ 
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

  const gradientId = 'peoplestaricon_gradient';
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