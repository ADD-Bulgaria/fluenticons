import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.79 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778 5.272.766c1.108.16 1.55 1.522.749 2.303l-3.816 3.719.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-3.958-2.08a6.5 6.5 0 0 0-9.442-7.43l-.905-.883c-.801-.781-.359-2.142.748-2.303l5.273-.766zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M3.5 17a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 1 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 1 0-.708.707L8.293 17z"/>`,
  'regular': `<path d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778 5.273.766c1.107.16 1.549 1.522.748 2.303l-3.816 3.719.901 5.25c.19 1.104-.968 1.945-1.959 1.424l-3.956-2.08a6.6 6.6 0 0 0 .24-1.569l4.145 2.18-.862-5.03a1.35 1.35 0 0 1 .388-1.194l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04 9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734 1.158 1.129a6.5 6.5 0 0 0-1.517.616l-.906-.883c-.801-.781-.359-2.142.748-2.303L8.43 7.88zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M3.5 17a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 1 0 .708.707l2.5-2.5a.5.5 0 0 0 0-.707l-2.5-2.5a.5.5 0 1 0-.708.707L8.293 17z"/>`
} as const;

export default function StarArrowRightStartIcon({ 
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

  const gradientId = 'stararrowrightstarticon_gradient';
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