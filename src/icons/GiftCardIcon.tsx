import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v8.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-8.5A3.25 3.25 0 0 0 18.75 4z"/><path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v8.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-8.5A3.25 3.25 0 0 0 18.75 4z"/><path d="M7.986 10 8 3.998l1.5.004L9.486 10H22v1.5H9.482l-.017 7.502-1.5-.004.017-7.498H2V10z"/><path d="M7.986 10 8 3.998l1.5.004L9.486 10H22v1.5H9.482l-.017 7.502-1.5-.004.017-7.498H2V10z"/><path fill-rule="evenodd" d="M6.94 11.5a2.5 2.5 0 1 1 1.81-4.285 2.5 2.5 0 1 1 1.81 4.285l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 0 1-1.06-1.06zM7 8a1 1 0 0 0 0 2h1V9a1 1 0 0 0-1-1m3.5 2h-1V9a1 1 0 1 1 1 1" clip-rule="evenodd"/><path fill-rule="evenodd" d="M6.94 11.5a2.5 2.5 0 1 1 1.81-4.285 2.5 2.5 0 1 1 1.81 4.285l1.72 1.72a.75.75 0 1 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 0 1-1.06-1.06zM7 8a1 1 0 0 0 0 2h1V9a1 1 0 0 0-1-1m3.5 2h-1V9a1 1 0 1 1 1 1" clip-rule="evenodd"/>`,
  'filled': `<path d="M9.5 19H19a3 3 0 0 0 3-3v-4.5H10.56l1.72 1.72a.75.75 0 1 1-1.06 1.06L9.5 12.56zM8 10V9a1 1 0 1 0-1 1zm1.5-1v1h1a1 1 0 1 0-1-1m0-2.292V4H19a3 3 0 0 1 3 3v3h-9.208A2.5 2.5 0 0 0 9.5 6.708M8 4v2.708A2.5 2.5 0 0 0 4.708 10H2V7a3 3 0 0 1 3-3zm0 8.56V19H5a3 3 0 0 1-3-3v-4.5h4.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06z"/>`,
  'regular': `<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v8.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-8.5A3.25 3.25 0 0 0 18.75 4zM3.5 7.25c0-.966.784-1.75 1.75-1.75H8v1.208A2.5 2.5 0 0 0 4.708 10H3.5zM9.5 9a1 1 0 1 1 1 1h-1zM8 10H7a1 1 0 1 1 1-1zm0 2.56v4.94H5.25a1.75 1.75 0 0 1-1.75-1.75V11.5h3.44l-1.72 1.72a.75.75 0 1 0 1.06 1.06zm1.5 4.94v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-1.72-1.72h9.94v4.25a1.75 1.75 0 0 1-1.75 1.75zm0-10.792V5.5h9.25c.966 0 1.75.784 1.75 1.75V10h-7.708A2.5 2.5 0 0 0 9.5 6.708"/>`
} as const;

export default function GiftCardIcon({ 
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

  const gradientId = 'giftcardicon_gradient';
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