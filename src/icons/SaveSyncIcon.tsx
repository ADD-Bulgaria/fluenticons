import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5a2 2 0 0 1 2-2h1v3.5A1.5 1.5 0 0 0 7.5 8h4A1.5 1.5 0 0 0 13 6.5V3h.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V9.6a5.5 5.5 0 0 0-2.5-.6c-1.177 0-2.268.37-3.163 1H6.5A1.5 1.5 0 0 0 5 11.5V17a2 2 0 0 1-2-2zm6 9.5c0-1.33.472-2.55 1.257-3.5H6.5a.5.5 0 0 0-.5.5V17h3.6a5.5 5.5 0 0 1-.6-2.5M12 3H7v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5zm-2 11.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`,
  'regular': `<path d="M3 5a2 2 0 0 1 2-2h8.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 17 6.621V9.6a5.5 5.5 0 0 0-1-.393V6.621a1 1 0 0 0-.293-.707l-1.621-1.621A1 1 0 0 0 13.379 4H13v2.5A1.5 1.5 0 0 1 11.5 8h-4A1.5 1.5 0 0 1 6 6.5V4H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1v-4.5A1.5 1.5 0 0 1 6.5 10h4.837c-.403.284-.767.62-1.08 1H6.5a.5.5 0 0 0-.5.5V16h3.207q.149.524.393 1H5a2 2 0 0 1-2-2zm4-1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V4zm3 10.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`
} as const;

export default function SaveSyncIcon({ 
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

  const gradientId = 'savesyncicon_gradient';
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