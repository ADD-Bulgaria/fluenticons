import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.683 14.926 1.284 3.854a1.75 1.75 0 0 1-.81 2.083C15.786 21.626 14.064 22 12 22s-3.786-.374-5.157-1.137a1.75 1.75 0 0 1-.81-2.083l1.285-3.854A7.7 7.7 0 0 0 12 16.5c1.76 0 3.382-.586 4.683-1.574M12 2c1.337 0 2.582.388 3.63 1.059-.082.313-.208.544-.367.704-.253.252-.683.42-1.325.47l-.222.013-.379.01c-2.169.159-2.115 3.494.163 3.494.89 0 1.457.181 1.763.487.252.253.42.683.47 1.325l.013.222.01.379c.096 1.314 1.358 1.812 2.338 1.494A6.751 6.751 0 0 1 5.25 8.75 6.75 6.75 0 0 1 12 2m6.25 0c0 1.15.27 1.96.78 2.47.471.47 1.198.737 2.21.775l.26.005c.958 0 .998 1.378.12 1.492l-.12.008c-1.15 0-1.96.27-2.47.78-.47.472-.737 1.198-.775 2.21l-.005.26c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.472-.47-1.198-.737-2.21-.775l-.26-.005c-.958 0-.998-1.378-.12-1.492l.12-.008c1.15 0 1.96-.27 2.47-.78s.78-1.32.78-2.47c0-1 1.5-1 1.5 0"/>`,
  'regular': `<path d="M12 2c1.153 0 2.24.29 3.189.8-.076.445-.224.76-.426.963a1.3 1.3 0 0 1-.437.28 5.25 5.25 0 1 0-4.464 9.504q1.033.401 1.906.447L12 14q.968 0 2.137-.452a5.3 5.3 0 0 0 2.242-1.9c.64.22 1.409.086 1.894-.401a6.76 6.76 0 0 1-1.927 2.668l1.621 4.865a1.75 1.75 0 0 1-.81 2.083C15.786 21.626 14.064 22 12 22s-3.786-.374-5.157-1.137a1.75 1.75 0 0 1-.81-2.083l1.621-4.865A6.75 6.75 0 0 1 12 2m3.057 12.791-.36.149-.018.008a6.7 6.7 0 0 1-2.352.544h-.017l-.073.004L12 15.5l-.196-.004-.13-.005a6.7 6.7 0 0 1-2.353-.543l-.018-.008a11 11 0 0 1-.36-.149l-1.487 4.464a.25.25 0 0 0 .115.297c1.13.627 2.603.948 4.429.948s3.3-.32 4.429-.948a.25.25 0 0 0 .115-.297zm-3.367.702.114.003.033.002.163.002q-.156 0-.31-.007M17.992 1.88 18 2c0 1.15.27 1.96.78 2.47.471.47 1.198.737 2.21.775l.26.005c.958 0 .998 1.378.12 1.492l-.12.008c-1.15 0-1.96.27-2.47.78-.47.472-.737 1.198-.775 2.21L18 10c0 1-1.5 1-1.5 0 0-1.15-.27-1.96-.78-2.47-.472-.47-1.198-.737-2.21-.775l-.26-.005c-.958 0-.998-1.378-.12-1.492l.12-.008c1.15 0 1.96-.27 2.47-.78s.78-1.32.78-2.47c0-.958 1.378-.998 1.492-.12m-.742 3.073-.144.203a3.6 3.6 0 0 1-.904.844 3.6 3.6 0 0 1 1.048 1.047A3.6 3.6 0 0 1 18.297 6a3.6 3.6 0 0 1-.903-.844z"/>`
} as const;

export default function PredictionsIcon({ 
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

  const gradientId = 'predictionsicon_gradient';
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