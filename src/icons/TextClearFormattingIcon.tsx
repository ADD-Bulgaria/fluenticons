import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M18 2.5a.5.5 0 0 0-1 0v14.172l1.618-1.618C18.232 14.34 18 13.468 18 12.5 18 9.905 19.665 8 21.5 8c1.614 0 3.098 1.475 3.43 3.597.36.077.713.2 1.049.369C25.762 9.266 23.925 7 21.5 7c-1.45 0-2.691.811-3.5 2.04zm-8.564.148c-.325-.863-1.546-.863-1.872 0L2.032 17.323a.5.5 0 1 0 .936.353L4.731 13h7.539l1.762 4.676a.5.5 0 0 0 .936-.352zM11.893 12H5.108L8.5 3zm14.165 1.85a2.91 2.91 0 0 0-4.116 0l-8.091 8.092a2.91 2.91 0 0 0 0 4.116l3.091 3.092a2.9 2.9 0 0 0 2.16.85H26.5a.5.5 0 1 0 0-1h-5.293l7.942-7.942a2.91 2.91 0 0 0 0-4.116zM19 29l-.037.001a1.9 1.9 0 0 1-1.314-.559l-3.091-3.091a1.91 1.91 0 0 1 0-2.701l1.692-1.693 5.793 5.793-1.692 1.692a1.9 1.9 0 0 1-1.27.558zm3.65-14.442a1.91 1.91 0 0 1 2.7 0l3.092 3.092a1.91 1.91 0 0 1 0 2.7l-5.692 5.693-5.793-5.793z"/>`
} as const;

export default function TextClearFormattingIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'textclearformattingicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}