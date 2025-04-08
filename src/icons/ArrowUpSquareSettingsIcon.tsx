import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.278 14.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM18.5 20c-.8 0-1.45-.672-1.45-1.5S17.7 17 18.5 17s1.45.672 1.45 1.5S19.3 20 18.5 20M6.25 21h6.248a6.5 6.5 0 0 1-.32-4.021A.8.8 0 0 1 12 17l-.102-.007a.75.75 0 0 1-.648-.743V9.558L8.53 12.28l-.085.073a.75.75 0 0 1-.976-1.133l4-4.002.084-.072a.75.75 0 0 1 .976.072l4.001 4.001.073.084a.75.75 0 0 1-.073.977l-.044.038A6.5 6.5 0 0 1 18.5 12c.886 0 1.73.177 2.5.498V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21m6.5-11.44v5.906a6.53 6.53 0 0 1 3.247-2.967.75.75 0 0 1-.527-.22z"/>`,
  'regular': `<path d="M15.278 14.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM18.5 20c-.8 0-1.45-.672-1.45-1.5S17.7 17 18.5 17s1.45.672 1.45 1.5S19.3 20 18.5 20M6.25 21h6.248a6.5 6.5 0 0 1-.422-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v5.826a6.5 6.5 0 0 1 1.5.422V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21M12 17a.8.8 0 0 0 .18-.021 6.4 6.4 0 0 1 .57-1.513V9.56l2.72 2.72a.75.75 0 0 0 .527.22q.24-.1.489-.182l.044-.038a.75.75 0 0 0 .073-.977l-.073-.084-4-4a.75.75 0 0 0-.977-.073l-.084.072-4 4.002a.75.75 0 0 0 .976 1.133l.085-.073 2.72-2.722v6.692c0 .38.282.694.648.743z"/>`
} as const;

export default function ArrowUpSquareSettingsIcon({ 
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

  const gradientId = 'arrowupsquaresettingsicon_gradient';
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