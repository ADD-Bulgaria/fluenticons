import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25l2.985.001a6.5 6.5 0 0 0 1.08 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123m12.781 9.962a.5.5 0 0 0-.568 0l-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645-4.798.001-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.011-.043-.032-.078-.024-.042-.038-.05-2.53-2.533zM17.75 2A2.25 2.25 0 0 1 20 4.25v7.248a6.5 6.5 0 0 0-8.687 8.002H8.75a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2z"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25l2.985.001a6.5 6.5 0 0 0 1.08 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123m12.781 9.962a.5.5 0 0 0-.568 0l-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07 1.646 1.645-4.798.001-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008 4.8-.001-1.648 1.647-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.53-2.533.036-.05.042-.08.026-.083.01-.064v-.088l-.01-.064-.011-.043-.032-.078-.024-.042-.038-.05-2.53-2.533zM17.75 2A2.25 2.25 0 0 1 20 4.25v7.248a6.5 6.5 0 0 0-1.5-.421V4.25a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h2.269q.061.781.295 1.5H8.75a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2z"/>`
} as const;

export default function CopyArrowRightIcon({ 
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

  const gradientId = 'copyarrowrighticon_gradient';
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