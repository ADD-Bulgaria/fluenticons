import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h13A1.5 1.5 0 0 1 18 5.5v5.837A3.5 3.5 0 0 0 16.5 11h-4a3.5 3.5 0 0 0-3.163 5H3.5A1.5 1.5 0 0 1 2 14.5zm3 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m4 3.199a.95.95 0 0 0-.949-.949H4.95a.95.95 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 9 11.699M11.5 8a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm1 4a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-3.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>`,
  'regular': `<path d="M6.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1.551.75a.95.95 0 0 0-.949.949c0 .847.577 1.585 1.399 1.791l.059.015c.684.17 1.4.17 2.084 0l.06-.015A1.846 1.846 0 0 0 9 11.699a.95.95 0 0 0-.949-.949zM11 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M9.035 15H3.75a.75.75 0 0 1-.75-.75v-8.5A.75.75 0 0 1 3.75 5h12.5a.75.75 0 0 1 .75.75v5.285c.353.05.69.154 1 .302V5.75A1.75 1.75 0 0 0 16.25 4H3.75A1.75 1.75 0 0 0 2 5.75v8.5c0 .966.784 1.75 1.75 1.75h5.587a3.5 3.5 0 0 1-.302-1m3.465-3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H16a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>`
} as const;

export default function ContactCardLinkIcon({ 
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

  const gradientId = 'contactcardlinkicon_gradient';
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