import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6-1.793V9.5a.5.5 0 0 0 1 0V4.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708zm5.995 15.542.001-10.277A6.5 6.5 0 0 1 16.5 13a6.47 6.47 0 0 1-3.758-1.195V21.98q.125.018.256.019h7.247a1.75 1.75 0 0 0 1.75-1.75M14.74 17.5h1.5l.101.007a.75.75 0 0 1 0 1.486L16.24 19h-1.5l-.102-.007a.75.75 0 0 1 0-1.486zM10 6.5q0-.252.019-.498H3.75A1.75 1.75 0 0 0 2 7.751v12.494c0 .967.784 1.75 1.75 1.75h7.248q.125 0 .245-.017V10.323A6.47 6.47 0 0 1 10 6.5m-2.259 11h1.502l.102.007a.75.75 0 0 1 0 1.486L9.243 19H7.74l-.102-.007a.75.75 0 0 1 0-1.486z"/>`,
  'regular': `<path d="M22 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6-1.793V9.5a.5.5 0 0 0 1 0V4.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708zM10 6.5q0-.252.019-.498H3.75A1.75 1.75 0 0 0 2 7.751v12.494c0 .967.784 1.75 1.75 1.75h7.497V22h8.998a1.75 1.75 0 0 0 1.75-1.75l.001-10.277a6.5 6.5 0 0 1-1.5 1.655v8.622a.25.25 0 0 1-.25.25h-7.498v-8.691a6.5 6.5 0 0 1-1.501-1.48v10.168H3.75a.25.25 0 0 1-.25-.25V7.751a.25.25 0 0 1 .25-.25h6.327A6.6 6.6 0 0 1 10 6.5m6.989 11.75a.75.75 0 0 0-.75-.75h-1.5l-.102.007A.75.75 0 0 0 14.739 19h1.5l.101-.007a.75.75 0 0 0 .649-.743m-6.996 0a.75.75 0 0 0-.75-.75H7.74l-.102.007A.75.75 0 0 0 7.741 19h1.502l.102-.007a.75.75 0 0 0 .648-.743"/>`
} as const;

export default function DualScreenArrowUpIcon({ 
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

  const gradientId = 'dualscreenarrowupicon_gradient';
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