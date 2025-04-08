import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.207A5.5 5.5 0 0 1 16 9.207V5a3 3 0 0 0-3-3zm7.854 4.854-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 10.793l4.646-4.647a.5.5 0 0 1 .708.708M10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`,
  'regular': `<path d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.207a5.5 5.5 0 0 1-.185-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4.022q.516.047 1 .185V5a3 3 0 0 0-3-3zm7.854 4.854a.5.5 0 0 0-.708-.708L7.5 10.793 5.854 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0zM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`
} as const;

export default function CheckboxCheckedSyncIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'checkboxcheckedsyncicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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