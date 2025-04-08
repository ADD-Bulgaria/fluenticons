import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M29 5.5V7h-2a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-2V5.5A3.5 3.5 0 0 0 37.5 2h-5A3.5 3.5 0 0 0 29 5.5M32.5 4h5A1.5 1.5 0 0 1 39 5.5V7h-8V5.5A1.5 1.5 0 0 1 32.5 4M10.25 9H22.1q-.1.486-.1 1v11c0 1.761.91 3.31 2.286 4.2l-.284.15L4.02 14.747A6.25 6.25 0 0 1 10.25 9m14.332 18.87L28.133 26H43q.515 0 1-.1v8.85A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75V17.567l19.414 10.3a1.25 1.25 0 0 0 1.168.003"/>`,
  'regular': `<path d="M29 5.5V7h-2a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-2V5.5A3.5 3.5 0 0 0 37.5 2h-5A3.5 3.5 0 0 0 29 5.5M32.5 4h5A1.5 1.5 0 0 1 39 5.5V7h-8V5.5A1.5 1.5 0 0 1 32.5 4M10.25 9H22.1q-.1.486-.1 1v1.5H10.25a3.75 3.75 0 0 0-3.75 3.75v.814l17.502 9.286.284-.15A5 5 0 0 0 27 26h1.134l-3.552 1.87a1.25 1.25 0 0 1-1.168-.002L6.5 18.894V34.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V26H43q.515 0 1-.1v8.85A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75v-19.5A6.25 6.25 0 0 1 10.25 9"/>`
} as const;

export default function MailBriefcaseIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'mailbriefcaseicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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