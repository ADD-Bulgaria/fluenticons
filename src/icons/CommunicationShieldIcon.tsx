import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 4a8 8 0 0 0-5.662 13.652 1 1 0 1 1-1.416 1.413A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .487-.046.961c-.8-.261-1.488-.767-1.957-1.184A8 8 0 0 0 12 4m5.3 7.487c.183-.182.4-.313.632-.393A6.001 6.001 0 0 0 6 12c0 1.657.673 3.158 1.757 4.243a1 1 0 1 0 1.415-1.415 4 4 0 1 1 6.793-2.294 7 7 0 0 0 1.335-1.047M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6.99 2.194c.652.651 1.907 1.686 3.449 1.899.308.042.561.285.561.589v2.838c0 3.816-3.58 5.201-4.353 5.456a.46.46 0 0 1-.293 0C17.58 22.721 14 21.336 14 17.52v-2.838c0-.304.253-.547.561-.59 1.542-.212 2.797-1.247 3.45-1.898a.714.714 0 0 1 .979 0"/>`,
  'regular': `<path d="M12 3.5a8.5 8.5 0 0 0-6.016 14.505.75.75 0 0 1-1.061 1.06A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10q0 .487-.046.961a5.2 5.2 0 0 1-1.456-.777L20.5 12A8.5 8.5 0 0 0 12 3.5m1.056 10.767c.163-.584.655-.978 1.165-1.119a2.5 2.5 0 1 0-1.165 1.119m4.244-2.78a1.68 1.68 0 0 1 1.124-.486A6.502 6.502 0 0 0 5.5 12c0 1.796.73 3.423 1.906 4.598a.75.75 0 1 0 1.06-1.06 5 5 0 1 1 8.529-3.762q.174-.157.305-.289M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m7.99.194c.652.651 1.907 1.686 3.449 1.899.308.042.561.285.561.589v2.838c0 3.816-3.58 5.201-4.353 5.456a.46.46 0 0 1-.293 0C17.58 22.721 14 21.336 14 17.52v-2.838c0-.304.253-.547.561-.59 1.542-.212 2.797-1.247 3.45-1.898a.714.714 0 0 1 .979 0"/>`
} as const;

export default function CommunicationShieldIcon({ 
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

  const gradientId = 'communicationshieldicon_gradient';
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