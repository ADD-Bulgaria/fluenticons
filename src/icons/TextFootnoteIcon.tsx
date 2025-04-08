import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.023 7.542a5 5 0 0 1-.218.154 1 1 0 1 1-1.11-1.664c.724-.483 1.241-1.244 1.35-1.745a1 1 0 0 1 1.978.213V11a1 1 0 1 1-2 0zM1 9a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 .991-.169 2.31-.789 3.475-.643 1.209-1.768 2.234-3.556 2.513a1 1 0 1 1-.31-1.976c1.087-.17 1.713-.747 2.1-1.476.25-.47.401-1.006.481-1.536H2a1 1 0 0 1-1-1m6.5-3v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0m8 12V6a1 1 0 1 1 2 0v12a1 1 0 0 1-2 0M13.478 7.21a1 1 0 1 0-1.956-.42l-1.5 7a1 1 0 0 0 1.142 1.196l3-.5a1 1 0 1 0-.328-1.972l-1.55.258z"/>`,
  'regular': `<path d="M20.5 7.263a5 5 0 0 1-.607.475.75.75 0 0 1-.832-1.248c.764-.51 1.33-1.321 1.456-1.9A.75.75 0 0 1 22 4.75v6.5a.75.75 0 0 1-1.5 0zM2 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75c0 .968-.166 2.241-.76 3.358-.61 1.149-1.673 2.117-3.374 2.383a.75.75 0 1 1-.232-1.482c1.175-.184 1.862-.816 2.282-1.606.312-.585.476-1.262.544-1.903H2.75A.75.75 0 0 1 2 9.25m6-3v12a.75.75 0 0 0 1.5 0v-12a.75.75 0 0 0-1.5 0m8 12v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-1.5 0M12.742 7.106a.75.75 0 0 0-1.485-.212l-1 7a.75.75 0 0 0 .85.848l3.5-.5a.75.75 0 0 0-.213-1.485l-2.51.36z"/>`
} as const;

export default function TextFootnoteIcon({ 
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

  const gradientId = 'textfootnoteicon_gradient';
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