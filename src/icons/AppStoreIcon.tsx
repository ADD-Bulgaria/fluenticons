import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zM9.369 15.254H7.63l-.067.116-.045.091a.75.75 0 0 0 1.283.75l.057-.085zm3.924-5.23-.871 1.492 2.658 4.608.056.085a.75.75 0 0 0 1.288-.743l-.045-.092-.502-.87h.875l.102-.006a.75.75 0 0 0 .641-.641l.007-.102-.007-.102a.75.75 0 0 0-.641-.641l-.102-.007h-1.74zm-.03-2.923a.75.75 0 0 0-.969.185l-.057.085-.24.409-.234-.406-.056-.084a.75.75 0 0 0-.867-.24l-.101.05-.085.056a.75.75 0 0 0-.239.867l.05.1.662 1.148-2.181 3.734H7.252l-.102.007a.75.75 0 0 0 0 1.486l.102.007h6.027l-.865-1.5-1.731-.001 2.85-4.877.045-.091a.75.75 0 0 0-.315-.935"/>`,
  'regular': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75M9.369 15.254l-.51.872a.75.75 0 0 1-1.34-.665l.045-.091.067-.116zm3.924-5.23 1.719 2.98h1.74a.75.75 0 0 1 .743.65l.007.1a.75.75 0 0 1-.648.744l-.102.007h-.875l.502.87a.75.75 0 0 1-1.243.834l-.056-.085-2.658-4.608zm-.03-2.923a.75.75 0 0 1 .315.935l-.046.091-2.85 4.877h1.732l.865 1.5H7.252a.75.75 0 0 1-.102-1.492l.102-.007h1.694l2.18-3.734-.662-1.147a.75.75 0 0 1 .19-.968l.085-.057a.75.75 0 0 1 .968.19l.056.085.233.406.241-.41a.75.75 0 0 1 1.026-.269"/>`
} as const;

export default function AppStoreIcon({ 
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

  const gradientId = 'appstoreicon_gradient';
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