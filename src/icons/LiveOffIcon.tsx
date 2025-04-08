import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.203 2.203c-3.393 3.93-3.224 9.872.506 13.602a1 1 0 0 0 1.414-1.415 8.004 8.004 0 0 1-.501-10.768l1.52 1.52a5.92 5.92 0 0 0 .533 7.763A1 1 0 0 0 9.31 14.77a3.92 3.92 0 0 1-.513-4.913l1.835 1.836a1.503 1.503 0 0 0 1.45 1.889q.201 0 .388-.051l8.25 8.25a.75.75 0 1 0 1.06-1.061zm15.748 13.626 1.462 1.462c2.414-3.861 1.942-9.012-1.415-12.37a1 1 0 1 0-1.415 1.415 8.01 8.01 0 0 1 1.368 9.493m-3.098-3.098 1.591 1.591a5.92 5.92 0 0 0-1.253-6.527 1 1 0 1 0-1.414 1.414 3.92 3.92 0 0 1 1.076 3.522"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.198 2.2c-3.386 3.929-3.216 9.865.51 13.592a.75.75 0 1 0 1.062-1.06 8.5 8.5 0 0 1-.508-11.468L7.26 8.321a6 6 0 0 0 .497 7.922.75.75 0 0 0 1.061-1.061 4.5 4.5 0 0 1-.486-5.79l2.219 2.22A1.503 1.503 0 0 0 12 13.5q.202-.001.388-.05l8.331 8.33a.75.75 0 0 0 1.061-1.06zm16.11 13.987 1.093 1.094c2.418-3.861 1.947-9.014-1.41-12.372a.75.75 0 0 0-1.062 1.06 8.504 8.504 0 0 1 1.378 10.218m-3.042-3.042 1.178 1.178a6 6 0 0 0-1.282-6.586.75.75 0 1 0-1.061 1.061 4.5 4.5 0 0 1 1.165 4.348"/>`
} as const;

export default function LiveOffIcon({ 
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

  const gradientId = 'liveofficon_gradient';
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