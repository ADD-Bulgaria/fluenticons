import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.527 13.062a1.75 1.75 0 0 1 1.285-.562h2.938a1.25 1.25 0 1 0 0-2.5h-2.938a4.25 4.25 0 0 0-3.12 1.364L5.46 19.182c-.287.263-.54.563-.75.892a4.25 4.25 0 0 0-.71 2.35V29.5a6.5 6.5 0 0 0 6.5 6.5h5a6.5 6.5 0 0 0 6.5-6.5v-5h4v5a6.5 6.5 0 0 0 6.5 6.5h5a6.5 6.5 0 0 0 6.5-6.5v-7.075a4.25 4.25 0 0 0-.71-2.35 4.5 4.5 0 0 0-.75-.893l-7.232-7.818A4.25 4.25 0 0 0 32.188 10H29.25a1.25 1.25 0 1 0 0 2.5h2.938c.488 0 .954.204 1.285.562L38.041 18H30.5a4.5 4.5 0 0 0-4.472 4h-4.055a4.5 4.5 0 0 0-4.473-4H9.959z"/>`,
  'regular': `<path d="M14.527 13.062a1.75 1.75 0 0 1 1.285-.562h2.938a1.25 1.25 0 1 0 0-2.5h-2.938a4.25 4.25 0 0 0-3.12 1.364L5.46 19.182c-.287.263-.54.563-.75.892a4.25 4.25 0 0 0-.71 2.35V29.5a6.5 6.5 0 0 0 6.5 6.5h5a6.5 6.5 0 0 0 6.5-6.5v-5h4v5a6.5 6.5 0 0 0 6.5 6.5h5a6.5 6.5 0 0 0 6.5-6.5v-7.075a4.25 4.25 0 0 0-.71-2.35 4.5 4.5 0 0 0-.75-.893l-7.232-7.818A4.25 4.25 0 0 0 32.188 10H29.25a1.25 1.25 0 1 0 0 2.5h2.938c.488 0 .954.204 1.285.562L38.041 18H30.5a4.5 4.5 0 0 0-4.472 4h-4.055a4.5 4.5 0 0 0-4.473-4H9.959zM28.5 29.5v-7a2 2 0 0 1 2-2h9a2 2 0 0 1 1.289.47l.246.266q.086.095.157.198c.195.308.308.674.308 1.066v7a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4m-9-7v7a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4v-7c0-.392.113-.758.308-1.066q.071-.104.157-.198l.246-.266c.348-.293.798-.47 1.289-.47h9a2 2 0 0 1 2 2"/>`
} as const;

export default function GlassesIcon({ 
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

  const gradientId = 'glassesicon_gradient';
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