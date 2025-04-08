import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c5.523 0 10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-9.19 9.19q-.385.03-.78.03a9.96 9.96 0 0 1-4.644-1.142l-4.29 1.117a.85.85 0 0 1-1.037-1.036l1.116-4.289A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m2.278 11.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.484.922l.494-.52a2 2 0 0 1 2.899.001l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM17.5 16c.8 0 1.45.672 1.45 1.5S18.3 19 17.5 19s-1.45-.672-1.45-1.5.65-1.5 1.45-1.5"/>`,
  'regular': `<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 1.115 4.592l-1.068 3.823a1.25 1.25 0 0 0 1.54 1.54l3.826-1.067a9.96 9.96 0 0 0 5.368 1.082 6.5 6.5 0 0 1-1.051-1.474 8.45 8.45 0 0 1-3.863-1.066l-.27-.15-3.986 1.111 1.113-3.984-.151-.27A8.46 8.46 0 0 1 3.5 12a8.5 8.5 0 0 1 16.996-.27c.54.281 1.036.636 1.474 1.05q.03-.385.03-.78m-9.163 4.472a2 2 0 0 0 1.441-2.496l-.198-.687a5.3 5.3 0 0 1 1.483-.912l.499.524a2 2 0 0 0 2.899.001l.493-.518a5.3 5.3 0 0 1 1.484.921l-.186.631a2 2 0 0 0 1.45 2.51l.539.13a5.7 5.7 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686a5.3 5.3 0 0 1-1.483.913l-.498-.525a2 2 0 0 0-2.9 0l-.493.519a5.3 5.3 0 0 1-1.484-.922l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.7 5.7 0 0 1-.006-1.808zM18.95 17.5c0-.828-.65-1.5-1.45-1.5s-1.45.672-1.45 1.5.65 1.5 1.45 1.5 1.45-.672 1.45-1.5"/>`
} as const;

export default function ChatSettingsIcon({ 
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

  const gradientId = 'chatsettingsicon_gradient';
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