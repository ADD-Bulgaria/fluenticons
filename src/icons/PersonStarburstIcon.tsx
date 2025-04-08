import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M13.1 7.278a5.247 5.247 0 0 1 6.95-2.844l2.946 1.277c.69.299 1.472.302 2.164.01l2.958-1.253a5.247 5.247 0 0 1 6.924 2.903l1.18 2.987a2.75 2.75 0 0 0 1.524 1.536l2.976 1.207a5.247 5.247 0 0 1 2.844 6.948l-1.277 2.947a2.75 2.75 0 0 0-.01 2.164l1.253 2.958a5.247 5.247 0 0 1-2.903 6.924l-2.987 1.18a2.75 2.75 0 0 0-1.536 1.524l-1.207 2.976a5.247 5.247 0 0 1-6.948 2.844l-2.947-1.277a2.75 2.75 0 0 0-2.164-.01l-2.958 1.252a5.247 5.247 0 0 1-6.924-2.902l-1.18-2.987a2.75 2.75 0 0 0-1.524-1.536l-2.976-1.207a5.247 5.247 0 0 1-2.844-6.948l1.277-2.947c.299-.69.302-1.472.01-2.164l-1.253-2.958a5.247 5.247 0 0 1 2.903-6.924l2.987-1.18a2.75 2.75 0 0 0 1.536-1.524z" clip-rule="evenodd"/><path fill-opacity=".7" fill-rule="evenodd" d="M13.1 7.278a5.247 5.247 0 0 1 6.95-2.844l2.946 1.277c.69.299 1.472.302 2.164.01l2.958-1.253a5.247 5.247 0 0 1 6.924 2.903l1.18 2.987a2.75 2.75 0 0 0 1.524 1.536l2.976 1.207a5.247 5.247 0 0 1 2.844 6.948l-1.277 2.947a2.75 2.75 0 0 0-.01 2.164l1.253 2.958a5.247 5.247 0 0 1-2.903 6.924l-2.987 1.18a2.75 2.75 0 0 0-1.536 1.524l-1.207 2.976a5.247 5.247 0 0 1-6.948 2.844l-2.947-1.277a2.75 2.75 0 0 0-2.164-.01l-2.958 1.252a5.247 5.247 0 0 1-6.924-2.902l-1.18-2.987a2.75 2.75 0 0 0-1.524-1.536l-2.976-1.207a5.247 5.247 0 0 1-2.844-6.948l1.277-2.947c.299-.69.302-1.472.01-2.164l-1.253-2.958a5.247 5.247 0 0 1 2.903-6.924l2.987-1.18a2.75 2.75 0 0 0 1.536-1.524z" clip-rule="evenodd"/><path fill-opacity=".9" d="M24 11.93a4.828 4.828 0 1 0 0 9.656 4.828 4.828 0 0 0 0-9.656M30.035 24h-12.07c-2 0-3.621 1.62-3.621 3.62 0 2.695 1.108 4.854 2.926 6.313 1.79 1.436 4.188 2.137 6.73 2.137s4.94-.7 6.73-2.137c1.818-1.46 2.926-3.618 2.926-6.312 0-2-1.621-3.621-3.621-3.621"/>`,
  'filled': `<path d="M13.1 7.278a5.247 5.247 0 0 1 6.95-2.844l2.946 1.277c.69.299 1.472.302 2.164.01l2.958-1.253a5.247 5.247 0 0 1 6.924 2.903l1.18 2.987a2.75 2.75 0 0 0 1.524 1.536l2.976 1.207a5.247 5.247 0 0 1 2.844 6.948l-1.277 2.947a2.75 2.75 0 0 0-.01 2.164l1.253 2.958a5.247 5.247 0 0 1-2.903 6.924l-2.987 1.18a2.75 2.75 0 0 0-1.536 1.524l-1.207 2.976a5.247 5.247 0 0 1-6.948 2.844l-2.947-1.277a2.75 2.75 0 0 0-2.164-.01l-2.958 1.252a5.247 5.247 0 0 1-6.924-2.902l-1.18-2.987a2.75 2.75 0 0 0-1.524-1.536l-2.976-1.207a5.247 5.247 0 0 1-2.844-6.948l1.277-2.947c.299-.69.302-1.472.01-2.164l-1.253-2.958a5.247 5.247 0 0 1 2.903-6.924l2.987-1.18a2.75 2.75 0 0 0 1.536-1.524zM30.036 24H17a3 3 0 0 0-3 3v1c0 2.487 1.48 5.02 4.15 6.551 1.66 1.02 3.704 1.519 5.85 1.519 2.142 0 4.183-.498 5.843-1.514C32.517 33.026 34 30.49 34 28v-1a3 3 0 0 0-3-3h-.966M24 11a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11"/>`,
  'regular': `<path d="M20.05 4.433a5.247 5.247 0 0 0-6.95 2.844l-1.205 2.976a2.75 2.75 0 0 1-1.537 1.524l-2.987 1.18a5.247 5.247 0 0 0-2.903 6.925l1.252 2.957c.293.693.29 1.475-.01 2.164L4.435 27.95a5.247 5.247 0 0 0 2.844 6.95l2.976 1.205a2.75 2.75 0 0 1 1.524 1.537l1.18 2.987a5.247 5.247 0 0 0 6.925 2.903l2.957-1.252a2.75 2.75 0 0 1 2.164.01l2.947 1.276a5.247 5.247 0 0 0 6.95-2.844l1.205-2.976a2.75 2.75 0 0 1 1.537-1.524l2.987-1.18a5.247 5.247 0 0 0 2.902-6.925l-1.251-2.957a2.75 2.75 0 0 1 .01-2.164l1.276-2.947a5.247 5.247 0 0 0-2.844-6.95l-2.976-1.205a2.75 2.75 0 0 1-1.524-1.537l-1.18-2.987a5.247 5.247 0 0 0-6.925-2.903L25.161 5.72a2.75 2.75 0 0 1-2.164-.01zm-4.634 3.782a2.75 2.75 0 0 1 3.64-1.49l2.947 1.277a5.25 5.25 0 0 0 4.131.018l2.958-1.252a2.75 2.75 0 0 1 3.627 1.521l1.18 2.987a5.25 5.25 0 0 0 2.91 2.933l2.976 1.207a2.75 2.75 0 0 1 1.49 3.64l-1.277 2.946a5.25 5.25 0 0 0-.018 4.131l1.252 2.958a2.75 2.75 0 0 1-1.521 3.627l-2.987 1.18a5.25 5.25 0 0 0-2.933 2.91l-1.206 2.976a2.75 2.75 0 0 1-3.64 1.49l-2.947-1.278a5.25 5.25 0 0 0-4.131-.017l-2.958 1.252a2.75 2.75 0 0 1-3.627-1.521l-1.18-2.987a5.25 5.25 0 0 0-2.91-2.933l-2.976-1.206a2.75 2.75 0 0 1-1.49-3.64l1.277-2.947a5.25 5.25 0 0 0 .018-4.131L6.77 18.908a2.75 2.75 0 0 1 1.521-3.627l2.987-1.18a5.25 5.25 0 0 0 2.933-2.91zM31 24a3 3 0 0 1 3 3v1c0 3.943-3.719 8-10 8s-10-4.057-10-8v-1a3 3 0 0 1 3-3zm-7-13a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/>`
} as const;

export default function PersonStarburstIcon({ 
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

  const gradientId = 'personstarbursticon_gradient';
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