import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 23.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.794a12.9 12.9 0 0 0-6.033-2.009q.033-.137.033-.285c0-.69-.56-1.25-1.25-1.25h-10.5a1.25 1.25 0 1 0 0 2.5h5.741C25.298 24.961 22 29.596 22 35c0 2.577.75 4.98 2.044 7H12.25A6.25 6.25 0 0 1 6 35.75zm15 9.25a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M16.5 37a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m-3.25-26a1.25 1.25 0 1 0 0 2.5h21.5a1.25 1.25 0 1 0 0-2.5zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h11.794c-.5-.78-.919-1.618-1.244-2.5H12.25a3.75 3.75 0 0 1-3.75-3.75v-23.5a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V22.8c.882.325 1.72.744 2.5 1.244V12.25A6.25 6.25 0 0 0 35.75 6zM35 22q.488 0 .967.035.033-.137.033-.285c0-.69-.56-1.25-1.25-1.25h-10.5a1.25 1.25 0 1 0 0 2.5h5.741A13 13 0 0 1 35 22m-23-8.75c0-.69.56-1.25 1.25-1.25h21.5a1.25 1.25 0 1 1 0 2.5h-21.5c-.69 0-1.25-.56-1.25-1.25m9 8.25a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 15.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m0-2.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`
} as const;

export default function FormNewIcon({ 
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

  const gradientId = 'formnewicon_gradient';
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