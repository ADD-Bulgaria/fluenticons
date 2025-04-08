import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2.25a.75.75 0 0 0-1.5 0V3.5a2.24 2.24 0 0 0-.841.53L2.78 10.91a2.25 2.25 0 0 0 0 3.182l4.88 4.878a2.25 2.25 0 0 0 3.182 0l6.879-6.879a2.25 2.25 0 0 0 0-3.182L12.84 4.03A2.24 2.24 0 0 0 12 3.5zm-1.5 3.06v1.44a.75.75 0 0 0 1.5 0V5.31l4.659 4.66a.75.75 0 0 1 0 1.06l-.97.97H3.812l.029-.03zm9.021 8.292a.874.874 0 0 0-1.542 0l-2.008 3.766C14.85 19.466 16.372 22 18.75 22s3.898-2.534 2.78-4.632z"/>`,
  'regular': `<path d="M12 2.25a.75.75 0 0 0-1.5 0V3.5a2.24 2.24 0 0 0-.841.53L2.78 10.91a2.25 2.25 0 0 0 0 3.182l4.88 4.878a2.25 2.25 0 0 0 3.182 0l6.879-6.879a2.25 2.25 0 0 0 0-3.182L12.84 4.03A2.24 2.24 0 0 0 12 3.5zm-8.159 9.72L10.5 5.31v1.44a.75.75 0 0 0 1.5 0V5.31l4.659 4.66a.75.75 0 0 1 0 1.06l-.97.97H3.812zm.47 1.53h9.878L9.78 17.909a.75.75 0 0 1-1.06 0zm15.21.102a.874.874 0 0 0-1.542 0l-2.008 3.766C14.85 19.466 16.372 22 18.75 22s3.898-2.534 2.78-4.632zm-2.227 4.471 1.456-2.73 1.456 2.73a1.65 1.65 0 1 1-2.912 0"/>`
} as const;

export default function PaintBucketIcon({ 
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

  const gradientId = 'paintbucketicon_gradient';
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