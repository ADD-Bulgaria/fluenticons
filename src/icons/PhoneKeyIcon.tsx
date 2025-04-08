import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v7.006a4.5 4.5 0 0 0-2.966 4.796L13.086 18H10.75a.75.75 0 0 0 0 1.5h.836l-.073.073A1.75 1.75 0 0 0 11 20.811V22H8.25A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm3.75 17a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v7.006a4.5 4.5 0 0 0-1.5.89V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h2.778a2 2 0 0 0-.028.31V22H8.25A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.501 15.5q.15.001.282.055l-1.447 1.447-1.333.002a.75.75 0 0 1-.002-1.5zM19.5 19a3.5 3.5 0 1 0-3.38-2.586.8.8 0 0 0-.15.116l-3.75 3.75a.75.75 0 0 0-.22.53v1.44c0 .414.336.75.75.75h1.75a.5.5 0 0 0 .5-.5V22h1a.5.5 0 0 0 .5-.5v-1h1a.5.5 0 0 0 .5-.5v-1zm1.5-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`
} as const;

export default function PhoneKeyIcon({ 
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

  const gradientId = 'phonekeyicon_gradient';
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