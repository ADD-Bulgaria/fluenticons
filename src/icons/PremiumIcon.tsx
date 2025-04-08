import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M25.894 4.553A1 1 0 0 0 25 4h-6a1 1 0 0 0-.97 1.243l1.932 7.727-.166.53h10.07a1 1 0 0 0 .028-.947z"/><path d="M25.894 4.553A1 1 0 0 0 25 4h-6a1 1 0 0 0-.97 1.243l1.932 7.727-.166.53h10.07a1 1 0 0 0 .028-.947zm-19.788 0A1 1 0 0 1 7 4h6a1 1 0 0 1 .97 1.243l-1.932 7.727.166.53H2.134a1 1 0 0 1-.028-.947z"/><path d="M6.106 4.553A1 1 0 0 1 7 4h6a1 1 0 0 1 .97 1.243l-1.932 7.727.166.53H2.134a1 1 0 0 1-.028-.947z"/><path d="M12.03 4.757A1 1 0 0 1 13 4h6a1 1 0 0 1 .97.757l2 8a1 1 0 0 1-.015.541l-.064.202H10.11l-.063-.202a1 1 0 0 1-.016-.54z"/><path d="M12.03 4.757A1 1 0 0 1 13 4h6a1 1 0 0 1 .97.757l2 8a1 1 0 0 1-.015.541l-.064.202H10.11l-.063-.202a1 1 0 0 1-.016-.54z"/><path d="m19.952 13-4.906 15.702a1 1 0 0 0 1.73.929l13-16A1 1 0 0 0 30 13z"/><path d="M2 13a1 1 0 0 0 .224.63l13 16a1 1 0 0 0 1.73-.928L12.049 13z"/><path d="M2 13a1 1 0 0 0 .224.63l13 16a1 1 0 0 0 1.73-.928L12.049 13z"/><path d="M10 13a1 1 0 0 0 .046.298l5 16a1 1 0 0 0 1.909 0l5-16A1 1 0 0 0 22 13z"/><path d="M10 13a1 1 0 0 0 .046.298l5 16a1 1 0 0 0 1.909 0l5-16A1 1 0 0 0 22 13z"/><path fill-opacity=".7" d="M7 4a1 1 0 0 0-.894.553l-4 8a1 1 0 0 0 .118 1.078l13 16a1 1 0 0 0 1.552 0l13-16a1 1 0 0 0 .118-1.078l-4-8A1 1 0 0 0 25 4z"/>`,
  'filled': `<path d="M7 4c-.48 0-.916.274-1.125.706l-3.75 7.75a1.25 1.25 0 0 0 .153 1.33l12.75 15.75a1.25 1.25 0 0 0 1.944 0l12.75-15.75a1.25 1.25 0 0 0 .153-1.33l-3.75-7.75A1.25 1.25 0 0 0 25 4zm-1.636 7.5 2.42-5h3.688l-1.563 5zm.304 2.5h4.098l2.868 8.606zm6.733 0h7.198L16 24.797zm9.833 0h4.098l-6.966 8.606zm4.402-2.5H22.09l-1.563-5h3.688zm-7.164 0h-6.944l1.563-5h3.818z"/>`,
  'regular': `<path d="M7 4a1 1 0 0 0-.894.553l-4 8a1 1 0 0 0 .118 1.078l13 16a1 1 0 0 0 1.552 0l13-16a1 1 0 0 0 .118-1.078l-4-8A1 1 0 0 0 25 4zm-2.382 8 3-6h4.101l-1.5 6zm.483 2h5.164l3.227 10.328zm7.26 0h7.279L16 25.647zm9.374 0H26.9l-8.391 10.328zm5.647-2h-5.601l-1.5-6h4.101zm-7.663 0h-7.438l1.5-6h4.438z"/>`
} as const;

export default function PremiumIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'premiumicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}