import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v1h-.026a4.3 4.3 0 0 0-1.498.308 3.9 3.9 0 0 0-1.278.838 4.1 4.1 0 0 0-.866 1.236A3.7 3.7 0 0 0 12 12.938q0 .21.021.424l-2.58 2.58A1.48 1.48 0 0 0 9 17v1H5.5A1.5 1.5 0 0 1 4 16.5v-13A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zm-.852 16.602A.48.48 0 0 0 10.5 19h2a.6.6 0 0 0 .273-.07.37.37 0 0 0 .149-.172 1 1 0 0 0 .062-.235q.016-.125.016-.257V18q.36-.008.563-.023a.47.47 0 0 0 .304-.118.46.46 0 0 0 .117-.297Q14 17.368 14 17h.5q.165 0 .266-.07a.5.5 0 0 0 .156-.172.7.7 0 0 0 .07-.235q.015-.133.016-.273a3 3 0 0 1-.008-.227v-.195q.258.094.523.133.266.039.54.039a2.87 2.87 0 0 0 2.078-.898q.405-.423.632-.961Q19 13.6 19 13q0-.625-.234-1.172a3 3 0 0 0-.641-.953 3 3 0 0 0-.953-.64A2.9 2.9 0 0 0 16 10q-.61.015-1.148.234a2.9 2.9 0 0 0-.954.625q-.414.407-.656.938a2.7 2.7 0 0 0-.242 1.14q0 .367.086.774l-2.938 2.937A.48.48 0 0 0 10 17v1.5q0 .203.148.352m7.133-7.133a.72.72 0 0 1 .219.531.72.72 0 0 1-.219.531.72.72 0 0 1-.531.219.72.72 0 0 1-.531-.219.72.72 0 0 1-.219-.531q0-.312.219-.531a.72.72 0 0 1 .531-.219q.312 0 .531.219"/>`,
  'regular': `<path d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v1.135A4.3 4.3 0 0 1 15.974 9H16V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207zm-4.645 11.852A.48.48 0 0 0 10.5 19h2a.6.6 0 0 0 .273-.07.37.37 0 0 0 .149-.172 1 1 0 0 0 .062-.235q.016-.125.016-.257V18q.36-.008.563-.023a.47.47 0 0 0 .304-.118.46.46 0 0 0 .117-.297Q14 17.368 14 17c.5 0 .634.02.766-.07a.5.5 0 0 0 .156-.172.7.7 0 0 0 .07-.235c.027-.229.008-.464.008-.695q.258.094.523.133.266.039.54.039a2.87 2.87 0 0 0 2.078-.898q.405-.423.632-.961Q19 13.6 19 13q0-.625-.234-1.172a3 3 0 0 0-.641-.953 3 3 0 0 0-.953-.64A2.9 2.9 0 0 0 16 10q-.61.015-1.148.234a2.9 2.9 0 0 0-.954.625q-.414.407-.656.938a2.7 2.7 0 0 0-.242 1.14q0 .367.086.774l-2.938 2.937A.48.48 0 0 0 10 17v1.5q0 .203.148.352M17.5 12.25c0 .412-.338.75-.75.75a.75.75 0 0 1-.75-.75c0-.412.338-.75.75-.75s.75.338.75.75"/>`
} as const;

export default function DocumentKeyIcon({ 
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

  const gradientId = 'documentkeyicon_gradient';
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