import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m9.367 3.312.86 2.027c.375.883.167 1.922-.514 2.568L7.82 9.705q.175 1.614 1.084 3.178a8.7 8.7 0 0 0 2.271 2.594l2.276-.759c.862-.287 1.801.043 2.33.82l1.233 1.81c.614.904.504 2.15-.26 2.917l-.817.82c-.814.818-1.976 1.114-3.052.779q-3.808-1.189-7.003-7.054-3.199-5.874-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404l1.076-.344c1.008-.322 2.086.199 2.518 1.218m7.782-1.31.102-.006a.75.75 0 0 1 .743.648l.007.102V6h3.251a.75.75 0 0 1 .744.649l.006.102a.75.75 0 0 1-.648.743l-.102.007H18v3.248a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.744-.648l-.006-.102V7.5h-3.252a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743L13.249 6H16.5V2.745a.75.75 0 0 1 .649-.743l.102-.007z"/>`,
  'regular': `<path d="m9.526 3.572.902 2.006a2.75 2.75 0 0 1-.633 3.139L8.3 10.11a.25.25 0 0 0-.078.155c-.044.397.225 1.17.846 2.245.45.781.859 1.33 1.206 1.637.243.215.376.261.433.245l2.01-.615a2.75 2.75 0 0 1 3.034 1.02l1.28 1.776a2.75 2.75 0 0 1-.338 3.605l-.887.84a3.75 3.75 0 0 1-3.586.889c-2.755-.769-5.224-3.093-7.436-6.924C2.57 11.147 1.792 7.843 2.51 5.07a3.75 3.75 0 0 1 2.548-2.652l1.167-.351a2.75 2.75 0 0 1 3.302 1.505m-2.87-.07-1.166.353a2.25 2.25 0 0 0-1.53 1.59c-.602 2.332.087 5.261 2.123 8.788 2.034 3.522 4.223 5.583 6.54 6.23a2.25 2.25 0 0 0 2.152-.534l.886-.84a1.25 1.25 0 0 0 .154-1.639l-1.28-1.775a1.25 1.25 0 0 0-1.38-.464l-2.015.617c-1.17.348-2.231-.593-3.371-2.568-.77-1.33-1.128-2.36-1.038-3.161.046-.416.24-.8.545-1.086L8.772 7.62a1.25 1.25 0 0 0 .287-1.427l-.901-2.006a1.25 1.25 0 0 0-1.501-.684M17.15 2.005l.102-.007a.75.75 0 0 1 .743.649l.007.101L18 6.001l3.252.001a.75.75 0 0 1 .744.648l.006.102a.75.75 0 0 1-.648.743l-.102.007H18v3.248a.75.75 0 0 1-.648.744l-.101.006a.75.75 0 0 1-.744-.648l-.006-.102-.001-3.249-3.251.001a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .648-.743l.102-.007H16.5V2.746a.75.75 0 0 1 .649-.743l.102-.007z"/>`
} as const;

export default function CallAddIcon({ 
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

  const gradientId = 'calladdicon_gradient';
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