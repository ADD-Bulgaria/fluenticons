import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3h-7.535c.34-.588.535-1.271.535-2v-6a4 4 0 0 0-3.08-3.894A5.002 5.002 0 0 0 5 16V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M20 21a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm3-5a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1M5.5 19.5V19a3.5 3.5 0 1 1 7 0v.5h.5a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 28v-6A2.5 2.5 0 0 1 5 19.5zm2-.5v.5h3V19a1.5 1.5 0 0 0-3 0m3.5 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`,
  'regular': `<path d="M5 5a3 3 0 0 1 3-3h10.172a3 3 0 0 1 2.12.879l5.83 5.828A3 3 0 0 1 27 10.828V27a3 3 0 0 1-3 3h-7.535c.34-.588.535-1.271.535-2h7a1 1 0 0 0 1-1V12h-5a3 3 0 0 1-3-3V4H8a1 1 0 0 0-1 1v9.416a5 5 0 0 0-2 1.583zm15 5h4.586L19 4.414V9a1 1 0 0 0 1 1m-1 11a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm3-5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M5.5 19.5V19a3.5 3.5 0 1 1 7 0v.5h.5a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 28v-6A2.5 2.5 0 0 1 5 19.5zm2-.5v.5h3V19a1.5 1.5 0 0 0-3 0m3.5 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`
} as const;

export default function DocumentDataLockIcon({ 
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

  const gradientId = 'documentdatalockicon_gradient';
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