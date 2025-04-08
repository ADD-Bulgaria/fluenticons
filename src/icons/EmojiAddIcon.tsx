import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M12 1.997c5.524 0 10.002 4.478 10.002 10.002q0 .395-.03.782a6.502 6.502 0 0 0-10.88 3.626 4.5 4.5 0 0 1-2.63-1.625.75.75 0 0 0-1.179.928 6 6 0 0 0 3.73 2.21c.1 1.564.755 2.98 1.77 4.05Q12.395 22 12 22c-5.524.001-10.002-4.477-10.002-10C1.998 6.476 6.476 1.998 12 1.998m5.5 12-.09.008a.5.5 0 0 0-.402.402l-.008.09v2.5L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.504l.008.09a.5.5 0 0 0 .402.401l.09.009.09-.009a.5.5 0 0 0 .402-.402l.008-.09v-2.504l2.503.001.09-.008a.5.5 0 0 0 .402-.402l.009-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75m6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M12 1.997c5.524 0 10.002 4.478 10.002 10.002q0 .395-.03.782a6.5 6.5 0 0 0-1.475-1.052 8.501 8.501 0 1 0-8.765 8.767c.28.54.635 1.036 1.05 1.474Q12.397 22 12 22c-5.524.001-10.002-4.477-10.002-10C1.998 6.476 6.476 1.998 12 1.998m5.5 12-.09.008a.5.5 0 0 0-.402.402l-.008.09v2.5L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.504l.008.09a.5.5 0 0 0 .402.401l.09.009.09-.009a.5.5 0 0 0 .402-.402l.008-.09v-2.504l2.503.001.09-.008a.5.5 0 0 0 .402-.402l.009-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-9.038.785a4.5 4.5 0 0 0 2.63 1.626 6.5 6.5 0 0 0-.079 1.51 5.98 5.98 0 0 1-3.73-2.208.75.75 0 1 1 1.179-.928M9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75m6 0a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499"/>`
} as const;

export default function EmojiAddIcon({ 
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

  const gradientId = 'emojiaddicon_gradient';
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