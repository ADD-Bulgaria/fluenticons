import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.645 4.361c1.564 2.852 2.359 5.145 2.359 6.72s-.744 2.896-1.466 3.52q-.087.075-.196.137l-.114.057a.454.454 0 0 1-.634-.495l.025-.088q.92-2.273.885-4.464a.75.75 0 0 0-1.499-.023l.004.023q.009.555-.056 1.12l-.066.478-.042.237-.068.33-.102.412-.043.156q-.256.903-.684 1.833c-.763 1.658-2.079 2.875-3.912 3.634a.75.75 0 0 1-.574-1.387q1.446-.598 2.324-1.621c-1.663-.525-2.63-1.671-2.763-3.27-.15-1.81.532-3.035 2.26-4.412l.49-.378.356-.269.37-.289q1.248-1.011 1.876-1.98c.3-.464 1.001-.47 1.27.02M17 6.001a3 3 0 0 1 2.995 2.823l.005.177v1l1 .017a1 1 0 0 1 .993.879l.008.121v2a1 1 0 0 1-.866.991l-.134.01L20 14v1a3 3 0 0 1-2.824 2.994L17 18H8.243a1 1 0 0 1-.117-1.993L8.243 16h.63l.075-.005.105-.019C9.796 15.814 12 14.773 12 11.018q0-1.824-.905-4.054a.7.7 0 0 1 .553-.957L11.743 6z"/>`,
  'regular': `<path d="M11.005 11.08c0-1.574-.795-3.867-2.359-6.719-.269-.49-.97-.483-1.27-.02q-.629.97-1.877 1.981l-.37.29-.354.268-.49.378c-1.729 1.377-2.41 2.602-2.26 4.411.131 1.6 1.099 2.746 2.762 3.27q-.878 1.025-2.324 1.622a.75.75 0 1 0 .574 1.387c1.833-.76 3.149-1.976 3.912-3.634q.428-.93.684-1.833l.043-.156.102-.412.068-.33.042-.237.066-.477a9 9 0 0 0 .056-1.12l-.004-.024a.75.75 0 0 1 1.5.023q.033 2.191-.886 4.464l-.025.088a.454.454 0 0 0 .634.495l.114-.057q.11-.062.196-.137c.722-.624 1.466-1.945 1.466-3.52M17 6h-5.25l-.102.007a.75.75 0 0 0 .102 1.494H17l.145.006A1.5 1.5 0 0 1 18.5 9.001v6l-.007.144A1.5 1.5 0 0 1 17 16.5H7.75c-.406.028-.75.321-.75.75 0 .415.336.75.75.75H17l.176-.005A3 3 0 0 0 20 15v-1l1 .018.135-.009a1 1 0 0 0 .866-.991v-2l-.008-.121a1 1 0 0 0-.992-.879L20 10V9l-.005-.176A3 3 0 0 0 17 6.001"/>`
} as const;

export default function BatterySaverIcon({ 
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

  const gradientId = 'batterysavericon_gradient';
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