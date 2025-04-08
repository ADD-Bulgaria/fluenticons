import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.504 16.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 19h13.503a1 1 0 0 0 .117-1.993zm4-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-4 .5H3a1 1 0 0 0-.117 1.993L3 13h13.503a1 1 0 0 0 .117-1.993zm4-6.492a1.5 1.5 0 1 0 0 2.999 1.5 1.5 0 0 0 0-3m-4 .493H3a1 1 0 0 0-.117 1.993L3 7.001h13.503a1 1 0 0 0 .117-1.993z"/>`,
  'regular': `<path d="M20.75 17.5a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493L2.75 13h14.5a.75.75 0 0 0 .102-1.493zm3.5-7a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499m-3.5.5H2.75a.75.75 0 0 0-.102 1.493l.102.007h14.5a.75.75 0 0 0 .102-1.493z"/>`
} as const;

export default function TextBulletListRtlIcon({ 
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

  const gradientId = 'textbulletlistrtlicon_gradient';
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