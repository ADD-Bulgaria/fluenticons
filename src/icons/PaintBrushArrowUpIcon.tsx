import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2a2 2 0 0 0-2 2v3.5H7.112c-1.174 0-2.077.993-2.04 2.131.013.392.022 1.355.021 1.869H19V9.75a2.25 2.25 0 0 0-2.25-2.25H14V4a2 2 0 0 0-2-2M4.855 15.114c.089-.72.184-2.114.184-2.114H19v1.169a1.75 1.75 0 0 0-1.988.344l-2.5 2.5a1.75 1.75 0 0 0 2.038 2.794V22h-5.996c.165-.384.36-.872.532-1.388a9.5 9.5 0 0 0 .356-1.341 4 4 0 0 0 .056-.463l.002-.035v-.023s0-.75-.75-.75a.75.75 0 0 0-.75.739l-.003.039q-.005.064-.032.232c-.04.226-.125.597-.302 1.128A17 17 0 0 1 8.91 22H7.566c.122-.267.262-.584.407-.929.406-.969.88-2.235 1.02-3.215a.75.75 0 0 0-1.485-.212c-.11.77-.512 1.879-.918 2.847A32 32 0 0 1 5.91 22H3.75a.75.75 0 0 1-.63-1.157c.948-1.465 1.47-3.581 1.735-5.729M16.28 18.78a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L19 17.56v4.69a.75.75 0 0 1-1.5 0v-4.69z"/>`,
  'regular': `<path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v3H7.112c-1.174 0-2.077.993-2.04 2.131.043 1.292.045 3.356-.217 5.483-.265 2.148-.787 4.264-1.735 5.729A.75.75 0 0 0 3.75 22h12.8v-1.5h-5.42l.352-1.587a.75.75 0 0 0-1.464-.326L9.593 20.5H8.28l.079-.21c.23-.623.497-1.49.632-2.434a.75.75 0 0 0-1.485-.212 10.7 10.7 0 0 1-.555 2.128c-.103.28-.198.507-.267.663l-.029.065H5.01c.722-1.574 1.117-3.445 1.334-5.202A33 33 0 0 0 6.541 13H17.5v1.169a1.75 1.75 0 0 1 1.5 0V9.75a2.25 2.25 0 0 0-2.25-2.25H14.5v-3A2.5 2.5 0 0 0 12 2m5.5 9.5H6.59c.01-.736-.001-1.39-.019-1.918A.557.557 0 0 1 7.111 9h3.139a.75.75 0 0 0 .75-.75V4.5a1 1 0 1 1 2 0v3.75c0 .414.336.75.75.75h3a.75.75 0 0 1 .75.75zm-2.28 7.28a.75.75 0 0 0 1.06 0l1.27-1.27v4.74a.75.75 0 0 0 1.5 0v-4.64l1.17 1.17a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 0 1.06"/>`
} as const;

export default function PaintBrushArrowUpIcon({ 
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

  const gradientId = 'paintbrusharrowupicon_gradient';
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