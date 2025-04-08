import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.75 3a1 1 0 0 1 .923.615l3.75 9a1 1 0 1 1-1.846.77L9.584 11H5.917l-.994 2.385a1 1 0 0 1-1.846-.77l3.75-9A1 1 0 0 1 7.75 3m0 3.6-1 2.4h2zm9.543-1.307a1 1 0 0 1 1.414 0l1.927 1.934c.223.182.365.46.366.77v.006c0 .31-.143.588-.366.77l-1.927 1.934a1 1 0 0 1-1.414-1.414L17.586 9H13a1 1 0 0 1 0-2h4.586l-.293-.293a1 1 0 0 1 0-1.414m1.414 9a1 1 0 0 0-1.414 1.414l.293.293H4a1 1 0 1 0 0 2h13.586l-.293.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z"/>`,
  'regular': `<path d="m3.053 12.97 3.753-9.496a.75.75 0 0 1 1.345-.104l.05.105 3.747 9.5a.75.75 0 0 1-1.352.643l-.043-.092L9.556 11H5.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876zm4.45-7.178L6.036 9.5h2.928zM12 7.75c0 .414.336.75.75.75h5.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72h-5.69a.75.75 0 0 0-.75.75m-9 9.5c0 .414.336.75.75.75h14.69l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H3.75a.75.75 0 0 0-.75.75"/>`
} as const;

export default function TextDirectionHorizontalRightIcon({ 
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

  const gradientId = 'textdirectionhorizontalrighticon_gradient';
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