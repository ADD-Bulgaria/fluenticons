import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.988c-.669-.246-1.311-.67-1.938-1.298q-.03-.03-.062-.059V5.75a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75v12.5c0 .414.336.75.75.75h6.98a6.7 6.7 0 0 0 1.452 2H5.75A2.75 2.75 0 0 1 3 18.25zm15.355 4.397C19.595 11.389 20.969 12 22.5 12a.5.5 0 0 1 .492.41l.008.09v3.001c0 3.219-1.641 5.406-4.842 6.473a.5.5 0 0 1-.316 0c-3.104-1.034-4.741-3.123-4.837-6.183l-.005-.29V12.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854a.5.5 0 0 1 .708 0m-2.39 3.692-.069.057-.057.07a.5.5 0 0 0 0 .568l.057.07L17.293 16l-1.397 1.396-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057L18 16.707l1.396 1.397.07.057a.5.5 0 0 0 .568 0l.07-.057.057-.07a.5.5 0 0 0 0-.568l-.057-.07L18.707 16l1.397-1.396.057-.07a.5.5 0 0 0 0-.568l-.057-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057L18 15.293l-1.396-1.397-.07-.057a.5.5 0 0 0-.492-.044z"/>`,
  'regular': `<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.988a5 5 0 0 1-1.5-.894V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h7.244a6.7 6.7 0 0 0 1.188 1.5H5.75A2.75 2.75 0 0 1 3 18.25zm15.355 4.397C19.595 11.389 20.969 12 22.5 12a.5.5 0 0 1 .492.41l.008.09v3.001c0 3.219-1.641 5.406-4.842 6.473a.5.5 0 0 1-.316 0c-3.104-1.034-4.741-3.123-4.837-6.183l-.005-.29V12.5a.5.5 0 0 1 .5-.5c1.53 0 2.904-.611 4.147-1.854a.5.5 0 0 1 .708 0m-2.39 3.692-.069.057-.057.07a.5.5 0 0 0 0 .568l.057.07L17.293 16l-1.397 1.396-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057L18 16.707l1.396 1.397.07.057a.5.5 0 0 0 .568 0l.07-.057.057-.07a.5.5 0 0 0 0-.568l-.057-.07L18.707 16l1.397-1.396.057-.07a.5.5 0 0 0 0-.568l-.057-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057L18 15.293l-1.396-1.397-.07-.057a.5.5 0 0 0-.492-.044z"/>`
} as const;

export default function TabShieldDismissIcon({ 
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

  const gradientId = 'tabshielddismissicon_gradient';
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