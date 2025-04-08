import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.625 2.22a1 1 0 0 0-1.25 0l-3.75 3a1 1 0 1 0 1.25 1.56L12 4.28l3.125 2.5a1 1 0 0 0 1.25-1.56zM2.75 9A2.25 2.25 0 0 0 .5 11.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 2.75 9M2 11.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zM8.25 9A2.25 2.25 0 0 0 6 11.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 8.25 9m-.75 2.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zm6.5 0a2.25 2.25 0 0 1 4.5 0v1.5a2.25 2.25 0 0 1-4.5 0zm2.25-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m5.5-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 21.75 9M21 11.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zm-8-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.38 7.526 4-3.25a1 1 0 0 0-1.26-1.552L12 19.962l-3.37-2.738a1 1 0 1 0-1.26 1.552l4 3.25a1 1 0 0 0 1.26 0"/>`,
  'regular': `<path d="M12.473 2.168a.75.75 0 0 0-.946 0l-4 3.25a.75.75 0 1 0 .946 1.164L12 3.716l3.527 2.866a.75.75 0 1 0 .946-1.164zM2.75 9A2.25 2.25 0 0 0 .5 11.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 2.75 9M2 11.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zM8.25 9A2.25 2.25 0 0 0 6 11.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 8.25 9m-.75 2.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zm6.5 0a2.25 2.25 0 0 1 4.5 0v1.5a2.25 2.25 0 0 1-4.5 0zm2.25-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75m5.5-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5a2.25 2.25 0 0 0 4.5 0v-1.5A2.25 2.25 0 0 0 21.75 9M21 11.25a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-1.5 0zm-8-.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.223 7.332 4-3.25a.75.75 0 1 0-.946-1.164L12 20.284l-3.527-2.866a.75.75 0 0 0-.946 1.164l4 3.25a.75.75 0 0 0 .946 0"/>`
} as const;

export default function TimePickerIcon({ 
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

  const gradientId = 'timepickericon_gradient';
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