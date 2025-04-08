import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 8H6.5a1 1 0 0 1-.117-1.993L6.5 6H15a1 1 0 0 1 .117 1.993zH6.5zm6.707 6.707a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1-.083-1.32l.083-.094 2-2a1 1 0 0 1 1.497 1.32l-.083.094L20.414 12l1.293 1.293a1 1 0 0 1 0 1.414M15 13l-11.5.001a1 1 0 0 1-.117-1.993L3.5 11H15a1 1 0 0 1 .117 1.993zl-11.5.001zm0 5H6.5a1 1 0 0 1-.117-1.993L6.5 16H15a1 1 0 0 1 .117 1.993zH6.5z"/>`,
  'regular': `<path d="M6.25 16a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm15.03-6.78a.75.75 0 0 0-.976-.073l-.084.073-2 2a.75.75 0 0 0-.073.976l.073.084 2 2a.75.75 0 0 0 1.133-.976l-.073-.084-1.47-1.47 1.47-1.47a.75.75 0 0 0 0-1.06M3.25 11a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5zm3-5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function TextIndentIncreaseRtlIcon({ 
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

  const gradientId = 'textindentincreasertlicon_gradient';
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