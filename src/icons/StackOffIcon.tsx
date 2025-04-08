import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m36.523 38.29 5.343 5.344a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.209 2.209A4.25 4.25 0 0 0 4 12.25v13.5A4.25 4.25 0 0 0 8.25 30h19.982l2.438 2.438a7 7 0 0 1-.92.062H9.374a4.25 4.25 0 0 0 3.874 2.5h16.5a9.2 9.2 0 0 0 2.99-.494l1.921 1.922a11.7 11.7 0 0 1-4.91 1.072H14.374a4.25 4.25 0 0 0 3.874 2.5h11.5c2.452 0 4.759-.62 6.774-1.71m7.476-12.54c0 3.783-1.474 7.221-3.879 9.773l-1.768-1.769a11.7 11.7 0 0 0 3.147-8.004v-7.374A4.25 4.25 0 0 1 44 22.25zm-5 0a9.22 9.22 0 0 1-2.417 6.235l-1.77-1.77a6.73 6.73 0 0 0 1.687-4.465V13.376A4.25 4.25 0 0 1 39 17.25zm-4.999 0c0 1.021-.36 1.959-.96 2.692L12.596 8H29.75A4.25 4.25 0 0 1 34 12.25z"/>`,
  'regular': `<path d="m36.523 38.29 5.343 5.344a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l2.209 2.209A4.25 4.25 0 0 0 4 12.25v13.5A4.25 4.25 0 0 0 8.25 30h19.982l2.438 2.438q-.451.061-.92.062H9.376A4.25 4.25 0 0 0 13.25 35h16.5a9.2 9.2 0 0 0 2.989-.493l1.921 1.921a11.7 11.7 0 0 1-4.91 1.072H14.376A4.25 4.25 0 0 0 18.25 40h11.5a14.2 14.2 0 0 0 6.773-1.71M25.733 27.5H8.25a1.75 1.75 0 0 1-1.75-1.75v-13.5c0-.966.784-1.75 1.75-1.75h.482zM44 25.75c0 3.783-1.474 7.222-3.88 9.773l-1.768-1.769A11.7 11.7 0 0 0 41.5 25.75v-7.374A4.25 4.25 0 0 1 44 22.25zm-5 0a9.22 9.22 0 0 1-2.417 6.235l-1.77-1.77A6.73 6.73 0 0 0 36.5 25.75V13.376A4.25 4.25 0 0 1 39 17.25zm-5 0c0 1.021-.36 1.959-.96 2.692l-1.79-1.79c.159-.263.25-.572.25-.902v-13.5a1.75 1.75 0 0 0-1.75-1.75H15.097l-2.5-2.5H29.75A4.25 4.25 0 0 1 34 12.25z"/>`
} as const;

export default function StackOffIcon({ 
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

  const gradientId = 'stackofficon_gradient';
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