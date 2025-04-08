import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.115 14.007c.372-.512.666-1.201.802-2.007h-4.834c.136.806.43 1.495.802 2.007.519.714 1.109.993 1.615.993s1.096-.28 1.615-.993m0-6.014c.447.615.781 1.486.865 2.507h-4.96c.084-1.021.418-1.892.865-2.507C11.404 7.28 11.994 7 12.5 7s1.096.28 1.615.993M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm8.5 12c2.21 0 4-2.462 4-5.5s-1.79-5.5-4-5.5-4 2.462-4 5.5 1.79 5.5 4 5.5"/>`,
  'regular': `<path d="M12.5 16.5c2.21 0 4-2.462 4-5.5s-1.79-5.5-4-5.5-4 2.462-4 5.5 1.79 5.5 4 5.5m1.615-2.493c-.519.714-1.109.993-1.615.993s-1.096-.28-1.615-.993c-.372-.512-.666-1.201-.802-2.007h4.834c-.136.806-.43 1.495-.802 2.007m0-6.014c.447.615.781 1.486.865 2.507h-4.96c.084-1.021.418-1.892.865-2.507C11.404 7.28 11.994 7 12.5 7s1.096.28 1.615.993M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"/>`
} as const;

export default function BookThetaIcon({ 
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

  const gradientId = 'bookthetaicon_gradient';
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