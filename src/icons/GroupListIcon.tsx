import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m3.001 11.996 3 .004a1 1 0 0 1 .114 1.993L6 14l-2-.004v5.003L6 19a1 1 0 0 1 .993.883L7 20a1 1 0 0 1-.883.993L6 21H3a1 1 0 0 1-.993-.883L2 20v-7.004a1 1 0 0 1 .885-.994zM21 17a1 1 0 0 1 .117 1.993L21 19H9a1 1 0 0 1-.117-1.993L9 17zm0-3a1 1 0 0 1 .117 1.993L21 16H9a1 1 0 0 1-.117-1.993L9 14zM6 2a1 1 0 0 1 .117 1.993L6 4H4v4.995h2a1 1 0 0 1 .993.883L7 9.995a1 1 0 0 1-.883.993L6 10.995H3a1 1 0 0 1-.993-.883L2 9.995V3a1 1 0 0 1 .883-.993L3 2zm15 5a1 1 0 0 1 .117 1.993L21 9H9a1 1 0 0 1-.117-1.993L9 7zm0-3a1 1 0 0 1 .117 1.993L21 6H9a1 1 0 0 1-.117-1.993L9 4z"/>`,
  'regular': `<path d="m2.753 11.996 2.5.011a.75.75 0 0 1 .095 1.494l-.102.006-1.746-.009v5.501L5.25 19a.75.75 0 0 1 .742.648L6 19.75a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 19.75v-7.004a.75.75 0 0 1 .651-.744zM21.245 17.5a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007zm0-4a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007zM2.753 2.5l2.5.011a.75.75 0 0 1 .095 1.494l-.102.006L3.5 4.003v5.492h1.75a.75.75 0 0 1 .742.648l.007.102a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 10.245V3.25a.75.75 0 0 1 .651-.744zm18.492 5.504a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007zm.005-4a.75.75 0 0 1 .102 1.493l-.102.007H7.754a.75.75 0 0 1-.102-1.493l.102-.007z"/>`
} as const;

export default function GroupListIcon({ 
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

  const gradientId = 'grouplisticon_gradient';
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