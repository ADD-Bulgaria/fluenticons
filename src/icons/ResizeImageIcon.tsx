import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 3a1 1 0 0 0-1-1H5.25A3.25 3.25 0 0 0 2 5.25V10a1 1 0 1 0 2 0V5.25C4 4.56 4.56 4 5.25 4H10a1 1 0 0 0 1-1m3-1a1 1 0 1 0 0 2h4.75c.69 0 1.25.56 1.25 1.25V10a1 1 0 1 0 2 0V5.25A3.25 3.25 0 0 0 18.75 2zm0 20a1 1 0 1 1 0-2h4.75c.69 0 1.25-.56 1.25-1.25V14a1 1 0 1 1 2 0v4.75A3.25 3.25 0 0 1 18.75 22zM4 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524L4.91 18.03a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415L5.97 19.09a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 9 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M11 2.75a.75.75 0 0 0-.75-.75h-5A3.25 3.25 0 0 0 2 5.25v5a.75.75 0 0 0 1.5 0v-5c0-.966.784-1.75 1.75-1.75h5a.75.75 0 0 0 .75-.75M13.75 2a.75.75 0 0 0 0 1.5h5c.966 0 1.75.784 1.75 1.75v5a.75.75 0 0 0 1.5 0v-5A3.25 3.25 0 0 0 18.75 2zm0 20a.75.75 0 0 1 0-1.5h5a1.75 1.75 0 0 0 1.75-1.75v-5a.75.75 0 0 1 1.5 0v5A3.25 3.25 0 0 1 18.75 22zM4 12a3 3 0 0 0-3 3v5c0 .556.151 1.077.415 1.524L4.91 18.03a2.25 2.25 0 0 1 3.182 0l3.494 3.494c.264-.447.415-.968.415-1.524v-5a3 3 0 0 0-3-3zm0 11a3 3 0 0 1-1.524-.415L5.97 19.09a.75.75 0 0 1 1.06 0l3.494 3.494A3 3 0 0 1 9 23zm5-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`
} as const;

export default function ResizeImageIcon({ 
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

  const gradientId = 'resizeimageicon_gradient';
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