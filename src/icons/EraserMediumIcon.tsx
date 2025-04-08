import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.651 2.638a2.25 2.25 0 0 1 3.19.023l4.91 5.008a2.25 2.25 0 0 1-.007 3.158l-.687.695a6.5 6.5 0 0 0-9.043 5.552l-5.377-5.376-1.529 1.514a.75.75 0 0 0 .003 1.068l5.099 5.008a.75.75 0 0 0 1.058-.008l.804-.812a6.4 6.4 0 0 0 .477 1.65l-.214.217a2.25 2.25 0 0 1-3.176.023l-5.1-5.008a2.25 2.25 0 0 1-.006-3.204zM17.5 12a5.495 5.495 0 0 1 5.5 5.5 5.5 5.5 0 1 1-5.5-5.5"/>`,
  'regular': `<path d="M15.84 2.661a2.25 2.25 0 0 0-3.19-.023l-9.598 9.508a2.25 2.25 0 0 0 .007 3.204l5.1 5.008a2.25 2.25 0 0 0 3.175-.023l.215-.217a6.5 6.5 0 0 1-.478-1.65l-.803.812a.75.75 0 0 1-1.059.008L4.11 14.28a.75.75 0 0 1-.002-1.068l1.529-1.515 5.377 5.377a6.5 6.5 0 0 1 .362-1.759l-4.673-4.673 7.003-6.938a.75.75 0 0 1 1.064.007l4.91 5.009a.75.75 0 0 1-.003 1.052l-1.276 1.29c.58.08 1.135.237 1.655.46l.687-.695a2.25 2.25 0 0 0 .008-3.158z"/><path d="M19.289 12.297A5.5 5.5 0 1 1 17.473 12m.027 0a5.5 5.5 0 0 1 1.789.297Zm0 0h-.027Z"/>`
} as const;

export default function EraserMediumIcon({ 
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

  const gradientId = 'erasermediumicon_gradient';
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