import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 21.5V3a1 1 0 0 1 2 0v.955h16.978a1.023 1.023 0 0 1 0 2.045H4v15.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m3-14a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v7.75A3.75 3.75 0 0 1 16.25 19h-7.5A3.75 3.75 0 0 1 5 15.25zm4.35 4.2a1 1 0 0 0-.35.76v3.04a.5.5 0 0 0 .5.5h1.75a.25.25 0 0 0 .25-.25V14.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1.25c0 .138.112.25.25.25h1.75a.5.5 0 0 0 .5-.5v-3.04a1 1 0 0 0-.35-.76l-2.825-2.42a.5.5 0 0 0-.65 0z"/>`,
  'regular': `<path d="M3.5 4.25V20.5H5v-14h14.728a.773.773 0 0 0 0-1.545H5v-.75a.705.705 0 0 0-.705-.705H4.25a.75.75 0 0 0-.75.75M22 5.728a2.27 2.27 0 0 1-1 1.883v7.639A3.75 3.75 0 0 1 17.25 19h-8.5a3.73 3.73 0 0 1-2.25-.75v2.5c0 .69-.56 1.25-1.25 1.25h-2C2.56 22 2 21.44 2 20.75V4.25A2.25 2.25 0 0 1 4.25 2h.045c.954 0 1.767.606 2.074 1.455h13.359A2.27 2.27 0 0 1 22 5.728M6.5 8v7.25a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25V8zm3 4.46a1 1 0 0 1 .35-.76l2.825-2.42a.5.5 0 0 1 .65 0l2.826 2.42a1 1 0 0 1 .349.76v3.04a.5.5 0 0 1-.5.5h-1.75a.25.25 0 0 1-.25-.25V14.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.25a.25.25 0 0 1-.25.25H10a.5.5 0 0 1-.5-.5z"/>`
} as const;

export default function RealEstateIcon({ 
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

  const gradientId = 'realestateicon_gradient';
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