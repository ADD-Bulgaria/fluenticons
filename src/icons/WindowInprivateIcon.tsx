import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.498 3.001a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5V8h.003V6.5h-.003v-.999a2.5 2.5 0 0 0-2.5-2.5zM15.501 6v.5H14.21l1.145-1.145c.093.195.146.414.146.645m-.852-1.353L12.795 6.5H9.967l2-2H14c.232 0 .451.053.648.147M10.553 4.5l-2 2H5.724l2-2zm-4.243 0L4.5 6.31V6A1.5 1.5 0 0 1 6 4.5zM7.053 8 4.5 10.552V8zM4.5 11.966 8.467 8h2.828l-6.648 6.648A1.5 1.5 0 0 1 4.5 14zM12.71 8h2.79v.037L8.039 15.5H6c-.23 0-.45-.052-.645-.146zm2.79 1.452v2.828l-3.22 3.22H9.453zm0 4.242V14a1.5 1.5 0 0 1-1.5 1.5h-.305z"/>`,
  'regular': `<path d="M5.498 3.001a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-7.5h.003v-1h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5zm10.5 2.5v.5h-1.29l1.145-1.144c.093.195.145.413.145.644m-.85-1.353-1.854 1.853h-2.828l2-2h2.032c.232 0 .453.053.65.147m-4.096-.147-2 2H6.223l2-2zm-4.243 0-2 2h-.811v-.5a1.5 1.5 0 0 1 1.5-1.5zM3.998 8.226l1.225-1.225h2.829l-4.054 4.054zm5.468-1.225h2.828L4.145 15.15a1.5 1.5 0 0 1-.147-.649v-2.032zm4.243 0h2.289v.539L7.537 16H5.498c-.23 0-.45-.052-.644-.145zm2.289 1.953v2.829L11.78 16H8.95zm0 4.243V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.304z"/>`
} as const;

export default function WindowInprivateIcon({ 
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

  const gradientId = 'windowinprivateicon_gradient';
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