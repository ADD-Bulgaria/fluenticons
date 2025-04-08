import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M33.25 13c5.841 0 10.594 4.659 10.746 10.464l.004.286v.5c0 5.841-4.659 10.594-10.464 10.746L33.25 35h-4.5a1.75 1.75 0 0 1-.143-3.494l.143-.006h4.5a7.25 7.25 0 0 0 7.246-7.01l.004-.24v-.5a7.25 7.25 0 0 0-7.01-7.246l-.24-.004h-4.5a1.75 1.75 0 0 1-.143-3.494L28.75 13zm-14 0a1.75 1.75 0 0 1 .143 3.494l-.143.006h-4.5a7.25 7.25 0 0 0-7.246 7.01l-.004.24v.5a7.25 7.25 0 0 0 7.01 7.246l.24.004h4.5a1.75 1.75 0 0 1 .143 3.494L19.25 35h-4.5C8.909 35 4.156 30.341 4.004 24.536L4 24.25v-.5c0-5.841 4.659-10.594 10.464-10.746L14.75 13zM14 22.25h20a1.75 1.75 0 0 1 .144 3.494L34 25.75H14a1.75 1.75 0 0 1-.143-3.494zh20z"/>`,
  'regular': `<path d="M34 14c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L34 34h-5.75a1.25 1.25 0 0 1-.128-2.494l.128-.006H34a7.5 7.5 0 0 0 .243-14.996L34 16.5h-5.75a1.25 1.25 0 0 1-.128-2.493L28.25 14zm-14.25 0a1.25 1.25 0 0 1 .128 2.494l-.128.006H14a7.5 7.5 0 0 0-.243 14.996L14 31.5h5.75a1.25 1.25 0 0 1 .128 2.493L19.75 34H14C8.477 34 4 29.523 4 24c0-5.43 4.327-9.848 9.72-9.996L14 14zM13 22.75h22a1.25 1.25 0 0 1 .128 2.494L35 25.25H13a1.25 1.25 0 0 1-.128-2.494zh22z"/>`
} as const;

export default function LinkIcon({ 
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

  const gradientId = 'linkicon_gradient';
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