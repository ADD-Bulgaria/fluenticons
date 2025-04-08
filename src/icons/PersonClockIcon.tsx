import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.022 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.121 1.593 4.263Q11.397 22 10 22c-3.145 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578a2.25 2.25 0 0 1 2.249-2.25zM15 7.005a5 5 0 1 0-10 0 5 5 0 0 0 10 0M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>`,
  'regular': `<path d="M12.022 14a6.5 6.5 0 0 0-.709 1.5h-7.06a.75.75 0 0 0-.75.749v.578c0 .535.192 1.053.54 1.46 1.253 1.468 3.22 2.214 5.957 2.214q.894 0 1.679-.106c.247.495.554.954.914 1.368Q11.397 22 10 22c-3.145 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578a2.25 2.25 0 0 1 2.249-2.25zM15 7.005a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-8.5 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>`
} as const;

export default function PersonClockIcon({ 
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

  const gradientId = 'personclockicon_gradient';
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