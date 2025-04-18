import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 13a8 8 0 0 1 15.809-1.747 3.5 3.5 0 0 1 2.147 2.69Q22 13.478 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.922 7.065 1 1 0 0 0 1.416-1.413A7.97 7.97 0 0 1 4 13m13.69-1.906a6 6 0 1 0-9.934 6.149 1 1 0 1 0 1.416-1.415 4 4 0 1 1 6.737-3.681 3.5 3.5 0 0 1 1.782-1.053M10 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0m11 1.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M3.5 13a8.5 8.5 0 0 1 16.876-1.455 3.5 3.5 0 0 1 1.58 2.399Q22 13.477 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.923 7.065.75.75 0 0 0 1.061-1.06A8.47 8.47 0 0 1 3.5 13m14.69-1.986a6.5 6.5 0 1 0-10.785 6.585.75.75 0 1 0 1.061-1.062 5 5 0 1 1 8.293-5.074 3.5 3.5 0 0 1 1.432-.45M9.5 13a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function CommunicationPersonIcon({ 
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

  const gradientId = 'communicationpersonicon_gradient';
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