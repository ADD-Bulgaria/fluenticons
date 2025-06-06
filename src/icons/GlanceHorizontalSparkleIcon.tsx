import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.488 7.511a3.5 3.5 0 0 1 .837 1.363l.548 1.682a.664.664 0 0 0 1.254 0l.548-1.682a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.683-.547a3.47 3.47 0 0 1-2.198-2.196L24.094.444a.665.665 0 0 0-1.255 0l-.547 1.682-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M3 6.25A3.25 3.25 0 0 1 6.25 3h7.5A3.25 3.25 0 0 1 17 6.25v5.5A3.25 3.25 0 0 1 13.75 15h-7.5A3.25 3.25 0 0 1 3 11.75zm11 15A3.25 3.25 0 0 1 17.25 18h8.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-8.5A3.25 3.25 0 0 1 14 25.75zm-11 0A3.25 3.25 0 0 1 6.25 18h1.5A3.25 3.25 0 0 1 11 21.25v4.5A3.25 3.25 0 0 1 7.75 29h-1.5A3.25 3.25 0 0 1 3 25.75z"/>`,
  'regular': `<path d="M21.488 7.511a3.5 3.5 0 0 1 .837 1.363l.548 1.682a.664.664 0 0 0 1.254 0l.548-1.682a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.683-.547a3.47 3.47 0 0 1-2.198-2.196L24.094.444a.665.665 0 0 0-1.255 0l-.547 1.682-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M6.25 3A3.25 3.25 0 0 0 3 6.25v5.5A3.25 3.25 0 0 0 6.25 15h7.5A3.25 3.25 0 0 0 17 11.75v-5.5A3.25 3.25 0 0 0 13.75 3zM5 6.25C5 5.56 5.56 5 6.25 5h7.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-7.5C5.56 13 5 12.44 5 11.75zm9 15A3.25 3.25 0 0 1 17.25 18h8.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-8.5A3.25 3.25 0 0 1 14 25.75zM17.25 20c-.69 0-1.25.56-1.25 1.25v4.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25zm-11-2A3.25 3.25 0 0 0 3 21.25v4.5A3.25 3.25 0 0 0 6.25 29h1.5A3.25 3.25 0 0 0 11 25.75v-4.5A3.25 3.25 0 0 0 7.75 18zM5 21.25c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25v4.5C9 26.44 8.44 27 7.75 27h-1.5C5.56 27 5 26.44 5 25.75z"/>`
} as const;

export default function GlanceHorizontalSparkleIcon({ 
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

  const gradientId = 'glancehorizontalsparkleicon_gradient';
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