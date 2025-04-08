import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.848 11.5H19.5a1 1 0 0 1 0 2h-2.387a4.03 4.03 0 0 1 .998 2.685c0 2.929-3.28 4.915-7.033 4.479-2.328-.27-3.965-1.22-4.827-2.833-.26-.487-.207-1.015.248-1.33s1.256-.1 1.516.388c.533.997 1.604 1.592 3.294 1.788 2.586.3 4.802-.91 4.802-2.492 0-1.098-.547-1.94-2.107-2.685H5a1 1 0 1 1 0-2zM6.987 9.695a5 5 0 0 1-.298-.509c-.3-.59-.468-1.215-.435-1.836.16-2.964 2.934-4.713 6.602-4.286 2.26.262 3.99 1.084 5.147 2.486a.993.993 0 0 1-.153 1.4c-.426.352-1.049.326-1.4-.1-.813-.985-2.068-1.596-3.825-1.8-2.56-.297-4.371.718-4.371 2.324 0 .713.239 1.22.762 1.81q.338.38 1.265.814H7.192z"/>`,
  'regular': `<path d="M4.75 12h14.5a.75.75 0 0 1 .102 1.493l-.101.007h-2.975c.88.813 1.336 1.793 1.336 2.935 0 2.825-3.232 4.64-6.754 4.23-2.235-.26-3.809-1.155-4.635-2.702a.75.75 0 0 1 1.323-.707c.57 1.068 1.702 1.712 3.485 1.92 2.743.318 5.081-.995 5.081-2.741 0-1.172-.805-2.127-2.565-2.886l-.116-.049H4.75a.75.75 0 0 1-.743-.648L4 12.75a.75.75 0 0 1 .648-.743zh14.5zm1.511-3.877c.152-2.83 2.822-4.468 6.324-4.061 2.188.254 3.863 1.053 4.982 2.409a.75.75 0 1 1-1.157.955c-.852-1.033-2.17-1.662-3.999-1.874-2.717-.316-4.65.804-4.65 2.571 0 .772.234 1.348.83 1.982l.128.132c.094.096.197.195.25.24l.031.02H7.08l-.024-.038c-.143-.206-.856-1.195-.795-2.336"/>`
} as const;

export default function TextStrikethroughIcon({ 
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

  const gradientId = 'textstrikethroughicon_gradient';
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