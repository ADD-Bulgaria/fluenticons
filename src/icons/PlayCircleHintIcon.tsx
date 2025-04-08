import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c-.667 0-1.32.065-1.95.19a.75.75 0 0 0 .29 1.472 8.6 8.6 0 0 1 3.32 0 .75.75 0 0 0 .29-1.472A10 10 0 0 0 12 2M7.278 4.931a.75.75 0 0 0-.835-1.246 10 10 0 0 0-2.758 2.758.75.75 0 1 0 1.246.835A8.6 8.6 0 0 1 7.278 4.93m10.279-1.246a.75.75 0 0 0-.835 1.246 8.6 8.6 0 0 1 2.347 2.347.75.75 0 1 0 1.246-.835 10 10 0 0 0-2.758-2.758m4.253 6.364a.75.75 0 0 0-1.472.291 8.5 8.5 0 0 1 0 3.32.75.75 0 1 0 1.472.29 10 10 0 0 0 0-3.9m-18.148.291a.75.75 0 0 0-1.472-.29 10 10 0 0 0 0 3.9.75.75 0 0 0 1.472-.29 8.6 8.6 0 0 1 0-3.32m1.27 6.382a.75.75 0 0 0-1.247.835 10 10 0 0 0 2.758 2.758.75.75 0 0 0 .835-1.246 8.6 8.6 0 0 1-2.347-2.347m15.383.835a.75.75 0 0 0-1.246-.835 8.6 8.6 0 0 1-2.347 2.347.75.75 0 1 0 .835 1.246 10 10 0 0 0 2.758-2.758m-9.975 2.781a.75.75 0 1 0-.29 1.472 10 10 0 0 0 3.9 0 .75.75 0 0 0-.29-1.472 8.5 8.5 0 0 1-3.32 0M19.25 12a7.25 7.25 0 1 1-14.5 0 7.25 7.25 0 0 1 14.5 0m-8.394-3.846A1.25 1.25 0 0 0 9 9.247v5.498a1.25 1.25 0 0 0 1.856 1.093l5.757-3.186a.75.75 0 0 0 0-1.311z"/>`,
  'regular': `<path d="M12 2c-.667 0-1.32.065-1.95.19a.75.75 0 0 0 .29 1.472 8.6 8.6 0 0 1 3.32 0 .75.75 0 0 0 .29-1.472A10 10 0 0 0 12 2M7.278 4.931a.75.75 0 0 0-.835-1.246 10 10 0 0 0-2.758 2.758.75.75 0 1 0 1.246.835A8.6 8.6 0 0 1 7.278 4.93m10.279-1.246a.75.75 0 0 0-.835 1.246 8.6 8.6 0 0 1 2.347 2.347.75.75 0 1 0 1.246-.835 10 10 0 0 0-2.758-2.758m4.253 6.364a.75.75 0 0 0-1.472.291 8.5 8.5 0 0 1 0 3.32.75.75 0 1 0 1.472.29 10 10 0 0 0 0-3.9m-18.148.291a.75.75 0 0 0-1.472-.29 10 10 0 0 0 0 3.9.75.75 0 0 0 1.472-.29 8.6 8.6 0 0 1 0-3.32m1.27 6.382a.75.75 0 0 0-1.247.835 10 10 0 0 0 2.758 2.758.75.75 0 0 0 .835-1.246 8.6 8.6 0 0 1-2.347-2.347m15.383.835a.75.75 0 0 0-1.246-.835 8.6 8.6 0 0 1-2.347 2.347.75.75 0 1 0 .835 1.246 10 10 0 0 0 2.758-2.758m-9.975 2.781a.75.75 0 1 0-.29 1.472 10 10 0 0 0 3.9 0 .75.75 0 0 0-.29-1.472 8.5 8.5 0 0 1-3.32 0M9 9.248a1.25 1.25 0 0 1 1.856-1.093l5.757 3.186a.75.75 0 0 1 0 1.311l-5.757 3.187A1.25 1.25 0 0 1 9 14.746z"/>`
} as const;

export default function PlayCircleHintIcon({ 
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

  const gradientId = 'playcirclehinticon_gradient';
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