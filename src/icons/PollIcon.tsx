import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M12 6.5a3.5 3.5 0 1 1 7 0v19a3.5 3.5 0 1 1-7 0zm10 6a3.5 3.5 0 1 1 7 0v13a3.5 3.5 0 1 1-7 0zM5.5 15A3.5 3.5 0 0 0 2 18.5v7a3.5 3.5 0 1 0 7 0v-7A3.5 3.5 0 0 0 5.5 15"/>`,
  'filled': `<path d="M12 6.5a3.5 3.5 0 1 1 7 0v19a3.5 3.5 0 1 1-7 0zM25.5 9a3.5 3.5 0 0 0-3.5 3.5v13a3.5 3.5 0 1 0 7 0v-13A3.5 3.5 0 0 0 25.5 9M2 18.5a3.5 3.5 0 1 1 7 0v7a3.5 3.5 0 1 1-7 0z"/>`,
  'light': `<path d="M15.5 3A3.5 3.5 0 0 1 19 6.5v19a3.5 3.5 0 1 1-7 0v-19A3.5 3.5 0 0 1 15.5 3m0 1A2.5 2.5 0 0 0 13 6.5v19a2.5 2.5 0 0 0 5 0v-19A2.5 2.5 0 0 0 15.5 4M29 12.5v13a3.5 3.5 0 1 1-7 0v-13a3.5 3.5 0 1 1 7 0M25.5 10a2.5 2.5 0 0 0-2.5 2.5v13a2.5 2.5 0 0 0 5 0v-13a2.5 2.5 0 0 0-2.5-2.5M9 25.5v-7a3.5 3.5 0 1 0-7 0v7a3.5 3.5 0 1 0 7 0m-6-7a2.5 2.5 0 0 1 5 0v7a2.5 2.5 0 0 1-5 0z"/>`,
  'regular': `<path d="M12 6.5a3.5 3.5 0 1 1 7 0v19a3.5 3.5 0 1 1-7 0zM15.5 5A1.5 1.5 0 0 0 14 6.5v19a1.5 1.5 0 0 0 3 0v-19A1.5 1.5 0 0 0 15.5 5m6.5 7.5a3.5 3.5 0 1 1 7 0v13a3.5 3.5 0 1 1-7 0zm3.5-1.5a1.5 1.5 0 0 0-1.5 1.5v13a1.5 1.5 0 0 0 3 0v-13a1.5 1.5 0 0 0-1.5-1.5m-20 4A3.5 3.5 0 0 0 2 18.5v7a3.5 3.5 0 1 0 7 0v-7A3.5 3.5 0 0 0 5.5 15M4 18.5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 1-3 0z"/>`
} as const;

export default function PollIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'pollicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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