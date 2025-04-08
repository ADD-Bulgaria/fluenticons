import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 6.502a5.5 5.5 0 0 1-5.499 5.501 5.5 5.5 0 0 1-5.498-5.501A5.5 5.5 0 0 1 17.5 1 5.5 5.5 0 0 1 23 6.502m-7.145-2.355a.5.5 0 1 0-.707.708l1.646 1.647-1.646 1.647a.5.5 0 0 0 .707.707l1.646-1.647 1.646 1.647a.5.5 0 1 0 .707-.707l-1.646-1.647 1.646-1.647a.5.5 0 0 0-.707-.708l-1.646 1.647zm1.647 8.857c.883 0 1.726-.177 2.494-.497v7.242a2.25 2.25 0 0 1-2.096 2.246l-.154.005H6.25a2.25 2.25 0 0 1-2.244-2.097L4 19.75V4.247A2.25 2.25 0 0 1 6.095 2l.154-.005h6.568a6.48 6.48 0 0 0-1.814 4.506 6.5 6.5 0 0 0 6.499 6.502m-8.998 3a1.5 1.5 0 0 0 0 3.001h6.998a1.5 1.5 0 0 0 0-3z"/>`,
  'regular': `<path d="M23.001 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.147-2.354a.5.5 0 1 0-.707.708L16.794 6.5l-1.647 1.646a.5.5 0 0 0 .707.708l1.647-1.647 1.646 1.647a.5.5 0 1 0 .708-.708L18.208 6.5l1.647-1.646a.5.5 0 1 0-.708-.708l-1.646 1.647zm2.642 15.598v-6.82a6.5 6.5 0 0 0 1.5-.42v7.24a2.25 2.25 0 0 1-2.096 2.245l-.154.005h-11.5a2.25 2.25 0 0 1-2.245-2.096l-.005-.154V4.246A2.25 2.25 0 0 1 6.092 2l.154-.005h6.569a6.5 6.5 0 0 0-1.08 1.5H6.247a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.693.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648zM8.501 16a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 0-3z"/>`
} as const;

export default function DocumentFooterDismissIcon({ 
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

  const gradientId = 'documentfooterdismissicon_gradient';
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