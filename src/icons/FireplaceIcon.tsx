import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4C14.059 4 6 12.059 6 22v13.25c0 .69.56 1.25 1.25 1.25h33.5c.69 0 1.25-.56 1.25-1.25V22c0-9.941-8.059-18-18-18M8.5 22c0-8.56 6.94-15.5 15.5-15.5S39.5 13.44 39.5 22v12h-9.132a8.84 8.84 0 0 0 3.132-6.75c0-2.89-1.694-4.927-3.154-6.683l-.38-.459C28.374 18.168 27 16.263 27 13.25a1.25 1.25 0 0 0-1.543-1.215c-2.159.52-3.43 1.678-4.112 3.105-.636 1.332-.704 2.798-.75 3.803l-.003.062c-.018.406-.032.714-.06.96-.3-.126-.735-.36-1.348-.761a1.25 1.25 0 0 0-1.532.128s.004-.004 0 0l-.002.001-.002.002-.004.004-.012.012a4 4 0 0 0-.15.15 8 8 0 0 0-.37.413c-.297.354-.684.87-1.07 1.539A11.55 11.55 0 0 0 14.5 27.25 8.84 8.84 0 0 0 17.636 34H8.5zM5.25 39.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5z"/>`,
  'regular': `<path d="M6 22c0-9.941 8.059-18 18-18s18 8.059 18 18v13.25c0 .69-.56 1.25-1.25 1.25H7.25c-.69 0-1.25-.56-1.25-1.25zM24 6.5C15.44 6.5 8.5 13.44 8.5 22v12h9.136a8.84 8.84 0 0 1-3.136-6.75c0-2.496.77-4.46 1.542-5.797.386-.669.773-1.185 1.07-1.54a8 8 0 0 1 .52-.562l.012-.012.004-.004.002-.002h.001l.001-.001a1.23 1.23 0 0 1 1.535-.126c.454.299.798.496 1.054.622.01-.173.017-.37.025-.605l.011-.343c.038-1.02.122-2.483.833-3.816.754-1.415 2.119-2.526 4.365-3.033A1.25 1.25 0 0 1 27 13.25c0 3.013 1.374 4.918 2.966 6.858l.38.459c1.46 1.755 3.154 3.793 3.154 6.683A8.84 8.84 0 0 1 30.368 34H39.5V22c0-8.56-6.94-15.5-15.5-15.5m-5.792 16.201A9.05 9.05 0 0 0 17 27.25c0 3.402 2.747 6.5 7.004 6.5 4.255 0 6.996-3.096 6.996-6.5 0-1.952-1.112-3.303-2.69-5.219l-.276-.337c-1.403-1.709-2.962-3.755-3.408-6.727-.686.365-1.07.822-1.31 1.273-.414.777-.503 1.714-.54 2.732l-.01.267c-.012.395-.025.828-.07 1.192-.05.395-.17 1.11-.716 1.606-.665.604-1.495.525-2.088.342a6 6 0 0 1-1.14-.51 9 9 0 0 0-.544.832M4 40.75c0-.69.56-1.25 1.25-1.25h37.5a1.25 1.25 0 1 1 0 2.5H5.25C4.56 42 4 41.44 4 40.75"/>`
} as const;

export default function FireplaceIcon({ 
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

  const gradientId = 'fireplaceicon_gradient';
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