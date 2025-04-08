import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 2a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h6.017a3.25 3.25 0 0 1-1.43-2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9.5h.5c.537 0 1.045.12 1.5.337V6a4 4 0 0 0-4-4zm10.5 13.5H23V7.25C23 6.56 22.44 6 21.75 6h-11.5C9.56 6 9 6.56 9 7.25v17.5c0 .69.56 1.25 1.25 1.25h3.25v-3.75a3.75 3.75 0 0 1 2.512-3.54A3.5 3.5 0 0 1 19.5 15.5m0 1.5a2 2 0 0 0-2 2v1h-.25A2.25 2.25 0 0 0 15 22.25v5c0 .966.784 1.75 1.75 1.75h.75a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h.75A1.75 1.75 0 0 0 30 27.25v-5A2.25 2.25 0 0 0 27.75 20h-.25v-1a2 2 0 0 0-2-2zm-.5 3v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1zm0 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V29a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5z"/>`,
  'regular': `<path d="M9 2a4 4 0 0 0-4 4v20a4 4 0 0 0 4 4h6.017a3.25 3.25 0 0 1-1.43-2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9.5h.5c.537 0 1.045.12 1.5.337V6a4 4 0 0 0-4-4zm14 5.25v8.25h-2V8H11v16h2.5v2h-3.25C9.56 26 9 25.44 9 24.75V7.25C9 6.56 9.56 6 10.25 6h11.5c.69 0 1.25.56 1.25 1.25M19.5 17a2 2 0 0 0-2 2v1h-.25A2.25 2.25 0 0 0 15 22.25v5c0 .966.784 1.75 1.75 1.75h.75a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h.75A1.75 1.75 0 0 0 30 27.25v-5A2.25 2.25 0 0 0 27.75 20h-.25v-1a2 2 0 0 0-2-2zm-.5 3v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1zm0 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V29a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5z"/>`
} as const;

export default function DocumentBorderPrintIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'documentborderprinticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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