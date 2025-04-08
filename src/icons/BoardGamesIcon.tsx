import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.949 5.5h.05a2.5 2.5 0 1 1-1.354 4.602l.449 1.854a1.25 1.25 0 0 1-1.215 1.544h-.763a1.25 1.25 0 0 1-1.214-1.545l.45-1.853a2.5 2.5 0 0 1-1.417.397 2 2 0 0 0-.7-1.07A4 4 0 0 0 10.5 8c0-.818-.246-1.578-.667-2.212A2.5 2.5 0 0 1 11.05 5.5a2.5 2.5 0 0 1 0-1 2.5 2.5 0 0 1 4.9 1M6.5 5a3 3 0 0 0-2.236 5H4a1 1 0 1 0 0 2h.52c-.372 1.798-1.353 2.836-1.9 3.293-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451 0-.52-.274-.966-.62-1.256-.547-.457-1.528-1.495-1.9-3.293H9a1 1 0 1 0 0-2h-.264A3 3 0 0 0 6.5 5"/>`,
  'regular': `<path d="M13.5 3a2 2 0 0 0-1.96 2.4.5.5 0 0 1-.54.6c-.33 0-.642.08-.916.222a4 4 0 0 0-.557-.836 3 3 0 0 1 .974-.345V5a3 3 0 1 1 6 0l-.001.041a3 3 0 1 1-1.138 5.89l.22.907A1.75 1.75 0 0 1 13.88 14h-.762a1.75 1.75 0 0 1-1.7-2.164l.45-1.852a.5.5 0 1 1 .972.236l-.45 1.853a.75.75 0 0 0 .728.927h.762a.75.75 0 0 0 .73-.927l-.45-1.854a.5.5 0 0 1 .757-.537A2 2 0 1 0 15.96 6a.5.5 0 0 1-.5-.6q.04-.194.04-.401a2 2 0 0 0-2-2m-9 5a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.893a.5.5 0 0 0-.496.56c.302 2.47 1.609 3.888 2.34 4.5.175.146.263.33.263.489a.45.45 0 0 1-.451.451H3.45a.45.45 0 0 1-.45-.45c0-.16.088-.343.262-.489.732-.612 2.04-2.03 2.341-4.5a.5.5 0 0 0-.496-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8A2 2 0 0 1 4.5 8m2-3a3 3 0 0 0-2.817 4.034A1.5 1.5 0 0 0 4 12h.52c-.372 1.798-1.353 2.836-1.9 3.293-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451 0-.52-.274-.966-.62-1.256-.547-.457-1.528-1.495-1.9-3.293H9a1.5 1.5 0 0 0 .317-2.966A3 3 0 0 0 6.5 5"/>`
} as const;

export default function BoardGamesIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'boardgamesicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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