import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 2A2.25 2.25 0 0 0 3 4.25v3A2.25 2.25 0 0 0 5.25 9.5h13.5A2.25 2.25 0 0 0 21 7.25v-3A2.25 2.25 0 0 0 18.75 2zM5 11.75V11h14v.75A2.25 2.25 0 0 1 16.75 14h-9.5A2.25 2.25 0 0 1 5 11.75m2.503 3.75H16.5v1.288a2.25 2.25 0 0 1-1.141 1.958l-.154.08-6.635 3.106a.75.75 0 0 1-1.061-.578l-.007-.101z"/>`,
  'regular': `<path d="M20.259 2.004a.75.75 0 0 1 .742.649l.007.102-.004 4.497a2.254 2.254 0 0 1-2.001 2.234v2.26a2.25 2.25 0 0 1-2.096 2.245l-.154.005H16.5v2.792a2.25 2.25 0 0 1-1.14 1.958l-.155.08-6.635 3.106a.75.75 0 0 1-1.061-.579l-.007-.1v-7.257H7.25A2.25 2.25 0 0 1 5.005 11.9L5 11.746v-2.26a2.25 2.25 0 0 1-1.994-2.072L3 7.25V2.754a.75.75 0 0 1 1.493-.102l.007.102V7.25c0 .38.282.694.648.744L5.25 8h13.501c.38 0 .695-.283.746-.649l.007-.101.004-4.497a.75.75 0 0 1 .75-.75M15 13.996H9.003v6.077l5.567-2.606a.75.75 0 0 0 .424-.572l.008-.107zM17.502 9.5H6.5v2.246c0 .38.282.694.648.743l.102.007h9.503a.75.75 0 0 0 .743-.648l.007-.102z"/>`
} as const;

export default function HighlightIcon({ 
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

  const gradientId = 'highlighticon_gradient';
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