import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25z"/><path fill-opacity=".5" d="M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25z"/><path fill-opacity=".5" d="M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25z"/><path fill-rule="evenodd" d="M11.28 8.22a.75.75 0 1 0-1.06 1.06l1.195 1.196A3 3 0 0 0 11 12c0 .556.151 1.077.415 1.524L10.22 14.72a.75.75 0 1 0 1.06 1.06l1.196-1.195c.447.264.968.415 1.524.415s1.077-.151 1.524-.415l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196c.264-.447.415-.968.415-1.524s-.151-1.077-.415-1.524L17.78 9.28a.75.75 0 0 0-1.06-1.06l-1.196 1.195A3 3 0 0 0 14 9c-.556 0-1.077.151-1.524.415zM14 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M5.75 7a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5A.75.75 0 0 1 5.75 7" clip-rule="evenodd"/>`,
  'filled': `<path d="M14 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25zM5.75 7a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5A.75.75 0 0 0 5.75 7m5.53 1.22a.75.75 0 1 0-1.06 1.06l1.195 1.196A3 3 0 0 0 11 12c0 .556.151 1.077.415 1.524L10.22 14.72a.75.75 0 1 0 1.06 1.06l1.196-1.195c.447.264.968.415 1.524.415s1.077-.151 1.524-.415l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196c.264-.447.415-.968.415-1.524s-.151-1.077-.415-1.524L17.78 9.28a.75.75 0 0 0-1.06-1.06l-1.196 1.195A3 3 0 0 0 14 9c-.556 0-1.077.151-1.524.415z"/>`,
  'regular': `<path d="M16.585 13.524c.264-.447.415-.968.415-1.524s-.151-1.077-.415-1.524L17.78 9.28a.75.75 0 0 0-1.06-1.06l-1.196 1.195A3 3 0 0 0 14 9c-.556 0-1.077.151-1.524.415L11.28 8.22a.75.75 0 1 0-1.06 1.06l1.195 1.196A3 3 0 0 0 11 12c0 .556.151 1.077.415 1.524L10.22 14.72a.75.75 0 1 0 1.06 1.06l1.196-1.195c.447.264.968.415 1.524.415s1.077-.151 1.524-.415l1.196 1.195a.75.75 0 1 0 1.06-1.06zM14 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M6.5 7.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0zm-4.5 0A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25zM5.75 5.5A2.25 2.25 0 0 0 3.5 7.75v8.5a2.25 2.25 0 0 0 2.25 2.25h12.5a2.25 2.25 0 0 0 2.25-2.25v-8.5a2.25 2.25 0 0 0-2.25-2.25z"/>`
} as const;

export default function VaultIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'vaulticon_gradient';
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