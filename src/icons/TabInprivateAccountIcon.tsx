import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.621A3.9 3.9 0 0 1 12 19.328V19H5.75a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 5.75 5h12.5a.75.75 0 0 1 .75.75v3.376a4 4 0 0 1 2 1.228V5.75A2.75 2.75 0 0 0 18.25 3zM15 13a3 3 0 0 1 3-3v1h2.236c.258.289.462.627.593 1H18v1h3c0 .35-.06.687-.17 1H18v1h2.236A3 3 0 0 1 15 13m-.062 4c-.582 0-1.07.282-1.396.635-.324.35-.542.823-.542 1.309v.384C13 21.289 15.041 23 18 23v-1h3.473a3.9 3.9 0 0 0 .997-1H18v-1h4.919q.08-.33.081-.672V19h-5v-1h4.73a2 2 0 0 0-.272-.365c-.327-.353-.814-.635-1.395-.635z"/>`,
  'regular': `<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v4.604a4 4 0 0 0-1.5-1.063V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h6.254c.022.536.15 1.039.367 1.5H5.75A2.75 2.75 0 0 1 3 18.25zm15 8.75a1.5 1.5 0 0 1 0-3v.5h2.83a3 3 0 0 0-.594-1H18v-1a3 3 0 1 0 2.236 5H18zM14.938 17c-.582 0-1.07.282-1.396.635-.324.35-.542.823-.542 1.309v.384C13 21.289 15.041 23 18 23v-1h3.473a3.9 3.9 0 0 0 .997-1H18v.5c-2.53 0-3.5-1.389-3.5-2.172v-.384c0-.046.03-.169.143-.29.107-.115.217-.154.294-.154H18V18h4.73a2 2 0 0 0-.272-.365c-.327-.353-.814-.635-1.395-.635zM18 14v-1h3c0 .35-.06.687-.17 1zm4.919 6H18v-1h5v.328q0 .343-.081.672"/>`
} as const;

export default function TabInprivateAccountIcon({ 
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

  const gradientId = 'tabinprivateaccounticon_gradient';
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