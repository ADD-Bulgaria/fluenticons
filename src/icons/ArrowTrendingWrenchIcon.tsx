import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 4a1 1 0 0 0-1-1h-5a1 1 0 1 0 0 2h2.586L12.5 10.086l-1.793-1.793a1 1 0 0 0-1.414 0l-6 6a1 1 0 1 0 1.414 1.414L10 10.414l1.793 1.793a1 1 0 0 0 1.414 0L19 6.414V9a1 1 0 1 0 2 0zm-.52 7.833c.25-.25.165-.673-.181-.749a4.001 4.001 0 0 0-4.54 5.47l-3.741 3.742a1.5 1.5 0 0 0 2.121 2.121l3.742-3.741a4.001 4.001 0 0 0 5.47-4.54c-.076-.347-.499-.432-.75-.182L20.858 15.7a1.5 1.5 0 0 1-2.122-2.121z"/>`,
  'regular': `<path d="M21 3.75a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h3.19L13 9.94l-2.22-2.22a.75.75 0 0 0-1.06 0l-6.5 6.5a.75.75 0 1 0 1.06 1.06l5.97-5.97 2.22 2.22a.75.75 0 0 0 1.06 0l5.97-5.97v3.19a.75.75 0 0 0 1.5 0zm-.52 8.083c.25-.25.165-.673-.181-.749a4.001 4.001 0 0 0-4.54 5.47l-3.741 3.742a1.5 1.5 0 0 0 2.121 2.121l3.742-3.741a4.001 4.001 0 0 0 5.47-4.54c-.076-.347-.499-.432-.75-.182L20.858 15.7a1.5 1.5 0 0 1-2.122-2.121z"/>`
} as const;

export default function ArrowTrendingWrenchIcon({ 
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

  const gradientId = 'arrowtrendingwrenchicon_gradient';
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