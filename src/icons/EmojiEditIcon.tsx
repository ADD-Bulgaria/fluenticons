import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 24C4 12.954 12.954 4 24 4c10.478 0 19.074 8.057 19.93 18.314a5.98 5.98 0 0 0-6.173 1.472l-5.137 5.218a1.24 1.24 0 0 0-.933.589A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307A11.72 11.72 0 0 0 24 36a12 12 0 0 0 1.854-.124l-1.608 1.633a5 5 0 0 0-1.277 2.253l-.839 3.235q-.118.459-.13.904C11.893 42.898 4 34.371 4 24m13.5-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m11.834 5.668a3.98 3.98 0 0 0-5.652.022L25.671 38.913a3 3 0 0 0-.767 1.351l-.838 3.234c-.383 1.477.961 2.82 2.437 2.438l3.235-.839a3 3 0 0 0 1.351-.766L44.812 30.82a3.98 3.98 0 0 0 .022-5.651"/>`,
  'regular': `<path d="M17.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M18.452 34.681A11.7 11.7 0 0 0 24 36a12 12 0 0 0 1.854-.124l6.766-6.872a1.24 1.24 0 0 0-.933.589A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307 11.7 11.7 0 0 0 4.269 3.781M6.5 24c0 9.171 7.055 16.695 16.034 17.44l-.404 1.557q-.118.459-.13.904C11.893 42.898 4 34.371 4 24 4 12.954 12.954 4 24 4c10.478 0 19.074 8.057 19.93 18.314a6 6 0 0 0-2.54-.28C40.415 13.295 33 6.5 24 6.5 14.335 6.5 6.5 14.335 6.5 24m38.334 1.168a3.98 3.98 0 0 0-5.652.022L25.671 38.913a3 3 0 0 0-.767 1.351l-.838 3.234c-.383 1.477.961 2.82 2.437 2.438l3.235-.839a3 3 0 0 0 1.351-.766L44.812 30.82a3.98 3.98 0 0 0 .022-5.651"/>`
} as const;

export default function EmojiEditIcon({ 
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

  const gradientId = 'emojiediticon_gradient';
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