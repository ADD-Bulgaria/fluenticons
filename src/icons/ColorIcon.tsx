import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M15.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7.5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M20.5 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.809 2.001c-4.319 0-8.219 2.212-10.743 5.052-2.5 2.813-3.78 6.407-2.52 9.181.337.74.74 1.288 1.212 1.666.478.382 1.003.57 1.545.621 1.048.1 2.16-.315 3.147-.715l.399-.164c.88-.362 1.667-.686 2.38-.766.394-.044.73-.007 1.022.122.29.128.578.366.847.797.413.66.663 1.562.874 2.625.076.383.148.792.222 1.213.123.705.252 1.44.415 2.131.265 1.123.642 2.24 1.306 3.154.676.93 1.634 1.63 3.011 1.93 2.731.598 5.532-.647 7.616-2.953 2.09-2.312 3.51-5.736 3.51-9.65 0-7.867-6.377-14.244-14.243-14.244M3.457 15.821c-1.017-2.236-.042-5.405 2.356-8.103C8.187 5.048 11.829 3 15.809 3c7.314 0 13.244 5.93 13.244 13.244 0 3.676-1.335 6.858-3.253 8.98-1.923 2.127-4.382 3.145-6.66 2.647-1.129-.247-1.879-.803-2.416-1.542-.548-.755-.887-1.72-1.142-2.796-.158-.671-.275-1.343-.393-2.02-.075-.427-.15-.857-.236-1.289-.213-1.074-.49-2.133-1.007-2.96-.356-.57-.788-.959-1.29-1.181-.498-.22-1.023-.26-1.538-.201-.866.097-1.8.483-2.662.84l-.382.156c-1.017.413-1.908.72-2.677.647a1.85 1.85 0 0 1-1.015-.407c-.318-.254-.635-.66-.925-1.299"/>`
} as const;

export default function ColorIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'coloricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}