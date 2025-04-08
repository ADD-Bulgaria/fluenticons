import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M40.194 18.814A8 8 0 1 0 29.186 7.806a17.04 17.04 0 0 1 11.008 11.008"/><path d="M40.194 18.814A8 8 0 1 0 29.186 7.806a17.04 17.04 0 0 1 11.008 11.008M18.814 7.806A17.04 17.04 0 0 0 7.806 18.814 8 8 0 1 1 18.814 7.806"/><path d="M18.814 7.806A17.04 17.04 0 0 0 7.806 18.814 8 8 0 1 1 18.814 7.806m22.82 32.06-4.75-4.75-1.768 1.768 4.75 4.75a1.25 1.25 0 0 0 1.768-1.768m-33.5 1.768 4.75-4.75-1.768-1.768-4.75 4.75a1.25 1.25 0 0 0 1.768 1.768"/><path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18"/><path d="M39.5 24c0 8.56-6.94 15.5-15.5 15.5S8.5 32.56 8.5 24 15.44 8.5 24 8.5 39.5 15.44 39.5 24"/><path fill-rule="evenodd" d="M22.75 13c.69 0 1.25.56 1.25 1.25V24h6.75a1.25 1.25 0 1 1 0 2.5h-8c-.69 0-1.25-.56-1.25-1.25v-11c0-.69.56-1.25 1.25-1.25" clip-rule="evenodd"/>`,
  'filled': `<path d="M6.5 12a5.48 5.48 0 0 0 1.49 3.765 18.1 18.1 0 0 1 7.775-7.775A5.5 5.5 0 0 0 6.5 12M12 4c2.504 0 4.74 1.15 6.207 2.952A18 18 0 0 1 24 6c2.027 0 3.975.335 5.793.952a8 8 0 1 1 11.255 11.255C41.665 20.025 42 21.973 42 24a17.93 17.93 0 0 1-4.419 11.813l4.053 4.053a1.25 1.25 0 0 1-1.768 1.768l-4.053-4.053A17.93 17.93 0 0 1 24 42a17.93 17.93 0 0 1-11.813-4.419l-4.053 4.053a1.25 1.25 0 0 1-1.768-1.768l4.053-4.053A17.93 17.93 0 0 1 6 24c0-2.027.335-3.975.952-5.793A8 8 0 0 1 12 4m20.236 3.99a18.1 18.1 0 0 1 7.774 7.775 5.5 5.5 0 0 0-7.774-7.774M24 14.25a1.25 1.25 0 1 0-2.5 0v11c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24z"/>`,
  'regular': `<path d="M12 6.5a5.48 5.48 0 0 1 3.765 1.49 18.1 18.1 0 0 0-7.775 7.775A5.5 5.5 0 0 1 12 6.5M4 12c0 2.504 1.15 4.74 2.952 6.207A18 18 0 0 0 6 24a17.93 17.93 0 0 0 4.419 11.813l-4.053 4.053a1.25 1.25 0 0 0 1.768 1.768l4.053-4.053A17.93 17.93 0 0 0 24 42a17.93 17.93 0 0 0 11.813-4.419l4.053 4.053a1.25 1.25 0 0 0 1.768-1.768l-4.053-4.053A17.93 17.93 0 0 0 42 24c0-2.027-.335-3.975-.953-5.793A8 8 0 1 0 29.794 6.953 18 18 0 0 0 24 6c-2.027 0-3.975.335-5.793.952A8 8 0 0 0 4 12m37.5 0c0 1.456-.566 2.78-1.49 3.765a18.1 18.1 0 0 0-7.774-7.775A5.5 5.5 0 0 1 41.5 12M24 8.5c8.56 0 15.5 6.94 15.5 15.5S32.56 39.5 24 39.5 8.5 32.56 8.5 24 15.44 8.5 24 8.5m0 5.75a1.25 1.25 0 1 0-2.5 0v11c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24z"/>`
} as const;

export default function ClockAlarmIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
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

  const gradientId = 'clockalarmicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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