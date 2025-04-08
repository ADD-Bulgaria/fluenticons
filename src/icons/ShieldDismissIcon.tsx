import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.45 2.15C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0M9.28 8.222a.75.75 0 0 0-1.13.975l.072.084 2.723 2.723-2.723 2.725a.749.749 0 1 0 1.059 1.059l2.723-2.724 2.725 2.724a.75.75 0 0 0 .975.073l.084-.073a.75.75 0 0 0 .073-.975l-.073-.084-2.724-2.725 2.724-2.723a.749.749 0 1 0-1.06-1.06l-2.724 2.724z"/>`,
  'regular': `<path d="M12.45 2.15C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 5.001-2.958 8.676-8.725 10.948a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11V5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0M12 3.678c-2.42 1.71-4.923 2.648-7.5 2.8V11c0 4.256 2.453 7.379 7.5 9.442 5.047-2.063 7.5-5.186 7.5-9.442V6.478c-2.577-.152-5.08-1.09-7.5-2.8M9.28 8.222l2.724 2.723 2.725-2.723a.75.75 0 0 1 .975-.073l.084.073a.75.75 0 0 1 .073.975l-.073.084-2.724 2.723 2.724 2.725a.749.749 0 1 1-1.06 1.059l-2.724-2.724-2.723 2.724a.75.75 0 0 1-.975.073l-.084-.073a.75.75 0 0 1-.073-.975l.073-.084 2.723-2.725-2.723-2.723A.75.75 0 0 1 9.28 8.22"/>`
} as const;

export default function ShieldDismissIcon({ 
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

  const gradientId = 'shielddismissicon_gradient';
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