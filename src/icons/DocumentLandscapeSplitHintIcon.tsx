import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.75 4H14v6a2 2 0 0 0 2 2h6v6a2 2 0 0 1-2 2h-7.25a.75.75 0 0 1-.75-.75V4.75a.75.75 0 0 1 .75-.75m8.737 6.427.07.073H16a.5.5 0 0 1-.5-.5V4.443q.038.034.073.07zM3.5 10.25a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0zM7 4.75A.75.75 0 0 1 7.75 4h2a.75.75 0 0 1 0 1.5h-2A.75.75 0 0 1 7 4.75m.75 13.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zM2 6a2 2 0 0 1 2-2h.75a.75.75 0 0 1 0 1.5H4a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0zm2 14a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V18a.5.5 0 0 0 .5.5h.75a.75.75 0 0 1 0 1.5z"/>`,
  'regular': `<path d="M7 4.75A.75.75 0 0 1 7.75 4h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 4.75M2.75 9.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75m5 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zM2 6a2 2 0 0 1 2-2h.75a.75.75 0 0 1 0 1.5H4a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0zm2 14a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V18a.5.5 0 0 0 .5.5h.75a.75.75 0 0 1 0 1.5zm6.5-14.75c0-.69.56-1.25 1.25-1.25h2.586c.464 0 .909.184 1.237.513l5.914 5.914c.329.328.513.773.513 1.237V18a2 2 0 0 1-2 2h-8.25c-.69 0-1.25-.56-1.25-1.25zm1.5.25v13h8a.5.5 0 0 0 .5-.5v-6H16a2 2 0 0 1-2-2V5.5zm3.5 1.06V10a.5.5 0 0 0 .5.5h3.44z"/>`
} as const;

export default function DocumentLandscapeSplitHintIcon({ 
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

  const gradientId = 'documentlandscapesplithinticon_gradient';
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