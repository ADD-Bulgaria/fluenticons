import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.644 19.018h3.71l-1.856-4.494zM11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h13.269a12.94 12.94 0 0 1-2.044-7c0-1.584.283-3.101.802-4.504H11.25a1.25 1.25 0 1 1 0-2.5h13.272A12.99 12.99 0 0 1 35.475 22c2.378 0 4.607.639 6.525 1.754V11.25C42 8.35 39.65 6 36.75 6zM10 35.25c0-.69.56-1.25 1.25-1.25h8.008a1.25 1.25 0 0 1 0 2.5H11.25c-.69 0-1.25-.56-1.25-1.25m9.498-25.252c.506 0 .962.305 1.155.773l4.752 11.506a1.25 1.25 0 0 1-2.31.954l-.708-1.713h-5.775l-.707 1.713a1.25 1.25 0 1 1-2.31-.954l4.747-11.506a1.25 1.25 0 0 1 1.156-.773m12.25 0c.69 0 1.25.56 1.25 1.25V14h2.752a1.25 1.25 0 1 1 0 2.5h-2.752v2.748a1.25 1.25 0 0 1-2.5 0V16.5H27.75a1.25 1.25 0 1 1 0-2.5h2.748v-2.752c0-.69.56-1.25 1.25-1.25M46.475 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`,
  'regular': `<path d="M11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h13.269c-.5-.78-.918-1.618-1.244-2.5H11.25a2.75 2.75 0 0 1-2.75-2.75v-25.5a2.75 2.75 0 0 1 2.75-2.75h25.5a2.75 2.75 0 0 1 2.75 2.75v11.385c.878.286 1.715.662 2.5 1.119V11.25C42 8.35 39.65 6 36.75 6zm13.272 21.996c-.5.78-.92 1.617-1.245 2.5H11.25a1.25 1.25 0 1 1 0-2.5zm8.476-16.748a1.25 1.25 0 0 0-2.5 0V14H27.75a1.25 1.25 0 1 0 0 2.5h2.748v2.748a1.25 1.25 0 0 0 2.5 0V16.5h2.752a1.25 1.25 0 1 0 0-2.5h-2.752zm-12.345-.477a1.25 1.25 0 0 0-2.31 0l-4.748 11.507a1.25 1.25 0 1 0 2.31.953l.707-1.713h5.775l.708 1.714a1.25 1.25 0 1 0 2.31-.955zm.701 8.247h-3.71l1.854-4.494zM10 35.25c0-.69.56-1.25 1.25-1.25h8.008a1.25 1.25 0 0 1 0 2.5H11.25c-.69 0-1.25-.56-1.25-1.25M46.475 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`
} as const;

export default function QuizNewIcon({ 
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

  const gradientId = 'quiznewicon_gradient';
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