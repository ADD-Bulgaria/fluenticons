import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.002 22.002C6.478 22.002 2 17.524 2 12.001q0-.507.05-1.001H4v2h1v1h7v-1h2v1h7v-1h.954c-.502 5.055-4.766 9.002-9.952 9.002M20.004 6H3.999a9.99 9.99 0 0 1 8.003-4.001A9.99 9.99 0 0 1 20.004 6M7.41 15.659a.75.75 0 0 0-.125 1.053 5.99 5.99 0 0 0 4.717 2.29 5.99 5.99 0 0 0 4.712-2.284.75.75 0 1 0-1.177-.93A4.5 4.5 0 0 1 12 17.502a4.49 4.49 0 0 1-3.538-1.718.75.75 0 0 0-1.053-.125M3 7h19v3h-1v2h-1v1h-5v-1h-1v-2h-2v2h-1v1H6v-1H5v-2H4V9H2V8h1zm-2 3V9h1v1zm0 0H0v2h1zm6-1H6v1h1v1h1v-1H7zm9 0h-1v1h1v1h1v-1h-1z"/>`,
  'regular': `<path d="M20.004 6h-1.98a8.48 8.48 0 0 0-6.022-2.501A8.48 8.48 0 0 0 5.979 6H4a9.99 9.99 0 0 1 8.003-4.001A9.99 9.99 0 0 1 20.004 6M3.5 12q0-.507.058-1H2.05q-.048.495-.049 1c0 5.524 4.478 10.002 10.002 10.002 5.186 0 9.45-3.947 9.952-9.002H21v1h-.733A8.502 8.502 0 0 1 3.5 12m8.502 4.502a4.49 4.49 0 0 1-3.539-1.718.75.75 0 1 0-1.178.928 5.99 5.99 0 0 0 4.717 2.29 5.99 5.99 0 0 0 4.712-2.284.75.75 0 1 0-1.177-.93A4.5 4.5 0 0 1 12 16.502M3 7h19v3h-1v2h-1v1h-5v-1h-1v-2h-2v2h-1v1H6v-1H5v-2H4V9H2V8h1zm-2 3V9h1v1zm0 0H0v2h1zm6-1H6v1h1v1h1v-1H7zm9 0h-1v1h1v1h1v-1h-1z"/>`
} as const;

export default function EmojiMemeIcon({ 
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

  const gradientId = 'emojimemeicon_gradient';
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