import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 4a1 1 0 1 0-2 0v15.25a1 1 0 0 0 1.996.092A3.76 3.76 0 0 0 17.11 20c2.27 0 4.111-2.07 4.111-4.625 0-2.554-1.84-4.625-4.11-4.625-.773 0-1.495.24-2.112.656zm2.111 14c-.95 0-2.111-.947-2.111-2.625s1.16-2.625 2.111-2.625 2.111.947 2.111 2.625S18.062 18 17.112 18M11 19.26v-5.5l-.005-.21v-.006c-.042-.961-.375-1.763-.976-2.337-.6-.572-1.444-.894-2.47-.945l-.29-.01h-.004c-1.158-.022-2.114.186-2.831.69a1 1 0 1 0 1.148 1.637c.326-.229.932-.367 1.878-.32.585.03.959.172 1.189.396.175.17.291.41.337.748a7.7 7.7 0 0 0-2.596-.135c-1.033.125-1.88.526-2.47 1.14-.59.615-.91 1.43-.91 2.352 0 2.1 1.53 3.5 3.5 3.5.806 0 1.653-.244 2.544-.707a1 1 0 0 0 .956.707h.008l.119-.008h.008A1 1 0 0 0 11 19.26m-6-2.463c0-.42.132-.753.383-1 .256-.252.658-.437 1.237-.508a5.8 5.8 0 0 1 2.257.185l.122.037v1.771l-.137.093c-.965.638-1.753.922-2.362.922-.466 0-.837-.146-1.09-.393-.251-.246-.41-.615-.41-1.107"/>`,
  'regular': `<path d="M13.75 3a.75.75 0 0 1 .75.75v8.237c.685-.618 1.554-.987 2.5-.987 2.21 0 4 2.015 4 4.5S19.21 20 17 20c-.946 0-1.815-.37-2.5-.987v.237a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75m.75 12.5c0 1.828 1.28 3 2.5 3s2.5-1.172 2.5-3-1.28-3-2.5-3-2.5 1.172-2.5 3m-7-4.999.287.01c1.96.098 3.128 1.226 3.209 3.045l.004.204v5.5a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L9.5 19.26l-.001-.104c-.988.565-1.901.854-2.749.854-1.838 0-3.25-1.294-3.25-3.25 0-1.724 1.188-3.005 3.16-3.244a7.5 7.5 0 0 1 2.839.21c-.01-1.108-.556-1.655-1.786-1.717-.962-.047-1.639.088-2.035.365a.75.75 0 1 1-.861-1.228c.658-.461 1.554-.665 2.683-.645m2 4.823-.303-.09a6.1 6.1 0 0 0-2.356-.193c-1.232.15-1.84.805-1.84 1.756 0 1.096.712 1.75 1.75 1.75.68 0 1.518-.315 2.501-.964l.248-.169z"/>`
} as const;

export default function TextCaseLowercaseIcon({ 
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

  const gradientId = 'textcaselowercaseicon_gradient';
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