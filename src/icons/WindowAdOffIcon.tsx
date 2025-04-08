import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l1.266 1.265c-.263.396-.416.87-.416 1.381v9a2.5 2.5 0 0 0 2.5 2.5h9c.51 0 .986-.153 1.381-.416l1.27 1.27a.5.5 0 0 0 .707-.708zm12.291 13.707a1.5 1.5 0 0 1-.649.147h-9a1.5 1.5 0 0 1-1.5-1.5V7h2.297l1 1H5.499a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1.794zM8.293 9l.706.706V12h-3V9zm7.703-2v6.875l.976.975q.024-.171.024-.35V7H17V6h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5h-9q-.179 0-.35.024L9.12 7z"/>`,
  'regular': `<path d="m2.854 2.146 15 15a.5.5 0 0 1-.708.708l-1.269-1.27c-.395.263-.87.416-1.38.416h-9a2.5 2.5 0 0 1-2.5-2.5v-9c0-.51.153-.985.415-1.38L2.146 2.854a.5.5 0 1 1 .708-.708m12.292 13.707L10 10.707V12.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1.793l-1-1H3.997v7.5a1.5 1.5 0 0 0 1.5 1.5h9c.232 0 .452-.053.649-.147M5.293 6 4.144 4.851a1.5 1.5 0 0 0-.147.649V6zm3 3H6v3h3V9.707zm7.704-3H8.121l1 1h6.876v6.876l.976.975q.024-.173.024-.351V7H17V6h-.003v-.5a2.5 2.5 0 0 0-2.5-2.5h-9q-.18 0-.351.024L6.12 4h8.376a1.5 1.5 0 0 1 1.5 1.5z"/>`
} as const;

export default function WindowAdOffIcon({ 
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

  const gradientId = 'windowadofficon_gradient';
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