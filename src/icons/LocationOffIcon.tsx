import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M43.634 41.866a1.25 1.25 0 0 1-1.768 1.768l-8.149-8.15-6.805 7.225a4 4 0 0 1-5.824 0L11 32h.038A16.93 16.93 0 0 1 7 21a16.9 16.9 0 0 1 2.833-9.4L4.366 6.135a1.25 1.25 0 1 1 1.768-1.768zM18.317 20.085a6 6 0 0 0 7.603 7.603zM13.186 7.882l8.558 8.559a6 6 0 0 1 7.82 7.82l7.554 7.553A16.93 16.93 0 0 0 41 21c0-9.389-7.611-17-17-17a16.93 16.93 0 0 0-10.814 3.882"/>`,
  'regular': `<path d="M6.134 4.366a1.25 1.25 0 0 0-1.768 1.768L9.833 11.6A16.9 16.9 0 0 0 7 21a16.92 16.92 0 0 0 4 10.955l.021.025.017.02H11l10.088 10.71a4 4 0 0 0 5.823 0l6.806-7.225 8.15 8.149a1.25 1.25 0 0 0 1.767-1.768zM9.5 21c0-2.782.784-5.382 2.143-7.59l6.674 6.675a6 6 0 0 0 7.603 7.603l6.029 6.028-6.857 7.279a1.5 1.5 0 0 1-2.184 0l-9.657-10.251-.308-.363A14.43 14.43 0 0 1 9.5 21m5.463-11.34-1.777-1.778A16.93 16.93 0 0 1 24 4c9.389 0 17 7.611 17 17a16.92 16.92 0 0 1-3.883 10.814l-1.777-1.777A14.43 14.43 0 0 0 38.5 21c0-8.008-6.492-14.5-14.5-14.5a14.44 14.44 0 0 0-9.037 3.16m8.846 8.845-2.065-2.064a6 6 0 0 1 7.82 7.82L27.5 22.196q.005-.097.005-.196a3.5 3.5 0 0 0-3.696-3.495"/>`
} as const;

export default function LocationOffIcon({ 
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

  const gradientId = 'locationofficon_gradient';
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