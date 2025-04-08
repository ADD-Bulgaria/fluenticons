import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.75 3.75a1 1 0 0 0 0 2h16.5a1 1 0 1 0 0-2zm12.124 5.5a4.27 4.27 0 0 0-1.872-2A4.2 4.2 0 0 0 12 6.75c-.724 0-1.405.18-2.002.5a4.27 4.27 0 0 0-1.872 2A4.2 4.2 0 0 0 7.75 11v4.75a1 1 0 1 0 2 0V11a2 2 0 0 1 .014-.25 2.247 2.247 0 0 1 2.236-2A2.247 2.247 0 0 1 14.25 11v4.75a1 1 0 1 0 2 0V11q0-.126-.007-.25a4.2 4.2 0 0 0-.369-1.5m-12.124-2h4.576a5.25 5.25 0 0 0-1.277 2H3.75a1 1 0 0 1 0-2m0 3.5h3.006a5 5 0 0 0-.006.25v1.75h-3a1 1 0 1 1 0-2m0 3.5h3v1.5q0 .26.063.5H3.75a1 1 0 1 1 0-2m13.5 1.5q0 .26-.063.5h3.063a1 1 0 1 0 0-2h-3zm3-3h-3V11q0-.126-.006-.25h3.006a1 1 0 1 1 0 2m0-3.5h-3.299a5.25 5.25 0 0 0-1.277-2h4.576a1 1 0 1 1 0 2m-16.5 8.5h16.5a1 1 0 1 1 0 2H3.75a1 1 0 1 1 0-2"/>`,
  'regular': `<path d="M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 8.25a.75.75 0 0 1 .75-.75h4.68A5 5 0 0 0 7.415 9H3.75A.75.75 0 0 1 3 8.25M15.465 9a4 4 0 0 0-1.527-1.5A4 4 0 0 0 12 7c-.703 0-1.364.181-1.938.5A4 4 0 0 0 8.535 9 4 4 0 0 0 8 11v4.75a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V11A2.496 2.496 0 0 1 12 8.5a2.496 2.496 0 0 1 2.5 2.5v4.75a.747.747 0 0 0 .75.75.75.75 0 0 0 .75-.75V11c0-.729-.195-1.412-.535-2M3.75 11H7v1.5H3.75a.75.75 0 0 1 0-1.5m0 3.5H7v1.25q0 .127.018.25H3.75a.75.75 0 0 1 0-1.5m16.5 1.5h-3.268q.018-.123.018-.25V14.5h3.25a.75.75 0 0 1 0 1.5m0-3.5H17V11h3.25a.75.75 0 0 1 0 1.5m0-3.5h-3.666a5 5 0 0 0-1.013-1.5h4.679a.75.75 0 0 1 0 1.5m-16.5 9a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function TextPositionTightIcon({ 
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

  const gradientId = 'textpositiontighticon_gradient';
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