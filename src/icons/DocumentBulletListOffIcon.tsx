import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.06V20a2 2 0 0 0 2 2h12a2 2 0 0 0 1.804-1.135l.915.916a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06zm12.473 12.474.493.493a.75.75 0 0 1-.716.973h-5.5a.75.75 0 0 1 0-1.5h5.5q.117 0 .223.034M14.939 16H10.75a.75.75 0 0 1 0-1.5h2.69zm-3-3H10.75a.75.75 0 0 1-.263-1.453zM7 12.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M16.25 13h-.068L20 16.818V10h-6c-.49 0-.94-.177-1.288-.47l1.97 1.97h1.568a.75.75 0 0 1 0 1.5M12 8c0 .49.177.94.47 1.288L5.306 2.124Q5.632 2.002 6 2h6zm1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5"/>`,
  'regular': `<path d="M7 12.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7 18.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M4 5.06 2.22 3.28a.75.75 0 1 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06l-.916-.915A2 2 0 0 1 18 22H6a2 2 0 0 1-2-2zm14.5 14.501-1.534-1.534a.75.75 0 0 1-.716.973h-5.5a.75.75 0 0 1 0-1.5h5.5q.117 0 .223.034L14.939 16H10.75a.75.75 0 0 1 0-1.5h2.69l-1.5-1.5h-1.19a.75.75 0 0 1-.263-1.453L5.5 6.562V20a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5zM12 8c0 .492.178.942.473 1.29l.236.237c.349.295.8.473 1.291.473h4.5v5.318l1.5 1.5v-6.99a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6q-.368.002-.694.124L6.682 3.5H12zm1.5-3.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zm2.75 6.879h-1.568l1.5 1.5h.068a.75.75 0 0 0 0-1.5"/>`
} as const;

export default function DocumentBulletListOffIcon({ 
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

  const gradientId = 'documentbulletlistofficon_gradient';
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