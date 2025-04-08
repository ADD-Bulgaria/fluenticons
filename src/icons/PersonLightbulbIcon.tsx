import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 16c0-.711.149-1.387.416-2H6.253a2.25 2.25 0 0 0-2.25 2.25v.919c0 .572.18 1.13.511 1.596C6.056 20.929 8.58 22 12 22q1.764 0 3.205-.38l-.346-1.731A5 5 0 0 1 13 16m4-8.995a5 5 0 1 0-10 0 5 5 0 0 0 10 0M22 16c0 1.38-.699 2.598-1.763 3.317l-.136.683h-4.2l-.137-.683A4 4 0 1 1 22 16m-5.9 5 .16.794A1.5 1.5 0 0 0 17.73 23h.54a1.5 1.5 0 0 0 1.472-1.206L19.9 21z"/>`,
  'regular': `<path d="M13.025 15.5a5 5 0 0 1 .391-1.5H6.253a2.25 2.25 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435 1.565 1.834 3.952 2.74 7.097 2.74q1.764 0 3.205-.38l-.295-1.474q-1.274.353-2.91.353c-2.738 0-4.704-.745-5.957-2.213a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM17 7.005a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8.5 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M22 16c0 1.38-.699 2.598-1.763 3.317l-.136.683h-4.2l-.137-.683A4 4 0 1 1 22 16m-5.9 5 .16.794A1.5 1.5 0 0 0 17.73 23h.54a1.5 1.5 0 0 0 1.472-1.206L19.9 21z"/>`
} as const;

export default function PersonLightbulbIcon({ 
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

  const gradientId = 'personlightbulbicon_gradient';
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