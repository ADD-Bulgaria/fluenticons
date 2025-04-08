import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.996a1 1 0 0 1 1-1h.5a.5.5 0 1 0 0-1H4a2 2 0 0 0-2 2v.5a.5.5 0 1 0 1 0zm1 8.008a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h.25a.5.5 0 0 0 0-1zM2.5 8a.5.5 0 0 1 .5.5v2a.5.5 0 1 1-1 0v-2a.5.5 0 0 1 .5-.5M17 5.996a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2v.5a.5.5 0 0 1-1 0zm0 7.008a1 1 0 0 1-1 1h-.252a.5.5 0 0 0 0 1H16a2 2 0 0 0 2-2v-.5a.5.5 0 0 0-1 0zM17 8.5a.5.5 0 0 1 1 0v2a.5.5 0 1 1-1 0zM6 4.496a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5m5-.5a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zM5 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.698l.495-.743-1.949-2.923a1.497 1.497 0 0 1 .42-2.08 1.503 1.503 0 0 1 2.079.42l1.253 1.88 1.253-1.88a1.503 1.503 0 0 1 2.078-.42c.693.457.881 1.39.42 2.08L11.8 12.257l.495.743H15a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"/><path d="M7.216 8.087a.497.497 0 0 0-.14.692l2.319 3.478-1.238 1.857a2 2 0 1 0 .094 3.744 2 2 0 0 0 .74-3.191l1.005-1.508 1.009 1.513q-.227.252-.362.582a2 2 0 1 0 1.193-1.138l-1.24-1.859.003-.003-.601-.901-.002.003L7.91 8.228a.503.503 0 0 0-.694-.14M12.5 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.099-6.549.6.902 1.717-2.574a.497.497 0 0 0-.14-.692.5.5 0 0 0-.695.14z"/>`,
  'regular': `<path d="M4 4.996a1 1 0 0 0-1 1v.5a.5.5 0 1 1-1 0v-.5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1zm-1 8.008a1 1 0 0 0 1 1h.25a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 1 0zM3 8.5a.5.5 0 0 0-1 0v2a.5.5 0 1 0 1 0zm13-3.504a1 1 0 0 1 1 1v.5a.5.5 0 0 0 1 0v-.5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1zm0 9.008a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 1 0v.5a2 2 0 0 1-2 2h-.252a.5.5 0 0 1 0-1zM17.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.5-.5m-11-4.004a.5.5 0 0 0 0 1H9a.5.5 0 1 0 0-1zm4 .5a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.5-.5M7.216 8.087a.497.497 0 0 0-.14.692l2.319 3.478-1.238 1.857a2 2 0 1 0 .094 3.744 2 2 0 0 0 .74-3.191l1.005-1.508 1.009 1.513q-.227.252-.362.582a2 2 0 1 0 1.193-1.138l-1.24-1.859.003-.003-.601-.901-.002.003L7.91 8.228a.503.503 0 0 0-.694-.14M12.5 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3.099-6.549.6.902 1.717-2.574a.497.497 0 0 0-.14-.692.5.5 0 0 0-.695.14z"/>`
} as const;

export default function ScreenCutIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'screencuticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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