import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.5 6.5 0 0 1-1.636-3h-.424a.75.75 0 0 1 0-1.5H11q.002-.776.174-1.5h-.424a.75.75 0 0 1 0-1.5h.982A6.5 6.5 0 0 1 12.81 13h-2.06a.75.75 0 0 1 0-1.5h4.246A6.5 6.5 0 0 1 17.5 11c.886 0 1.73.177 2.5.498V10h-6a2 2 0 0 1-2-2m-5 4.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5m9.5 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.78.418a.5.5 0 0 1-.219-.489L17 13.5a.5.5 0 1 1 1 0l.001 3.5h2.496a.5.5 0 0 1 0 1H17.56a.5.5 0 0 1-.34-.082"/>`,
  'regular': `<path d="m19.414 8.414-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.5 6.5 0 0 1-1.078-1.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5v1.076a6.5 6.5 0 0 1 1.5.422v-1.67a2 2 0 0 0-.586-1.414M13.5 4.621 17.378 8.5H14a.5.5 0 0 1-.5-.5zM10.75 17.5H11q.002.776.174 1.5h-.424a.75.75 0 0 1 0-1.5m.424-1.5c.125-.528.314-1.03.558-1.5h-.982a.75.75 0 0 0 0 1.5zm1.636-3a6.5 6.5 0 0 1 2.186-1.5H10.75a.75.75 0 0 0 0 1.5zm-5.06-1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M7 15.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m16-.75a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.78.418a.5.5 0 0 1-.219-.489L17 13.5a.5.5 0 1 1 1 0l.001 3.5h2.496a.5.5 0 0 1 0 1H17.56a.5.5 0 0 1-.34-.082"/>`
} as const;

export default function DocumentBulletListClockIcon({ 
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

  const gradientId = 'documentbulletlistclockicon_gradient';
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