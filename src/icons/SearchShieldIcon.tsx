import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.5 3a5.5 5.5 0 0 1 4.383 8.823l4.147 4.147a.75.75 0 0 1-.976 1.133l-.084-.073-4.147-4.147c-.54.41-1.157.722-1.825.91l.002-.209V12.21a4.001 4.001 0 1 0-5.479-4.124c-.192.07-.372.186-.524.344a4.6 4.6 0 0 1-.952.776A5.5 5.5 0 0 1 8.5 3M7 10.347a4.6 4.6 0 0 1-1-.583 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 3 18q.787.6 1.875.979c.082.028.17.028.252 0C7.687 18.089 9 16.266 9 13.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`,
  'regular': `<path d="M8.5 3a5.5 5.5 0 0 1 4.227 9.02l4.127 4.126a.5.5 0 0 1-.638.765l-.07-.057-4.126-4.127a5.5 5.5 0 0 1-2.022 1.067l.002-.21v-.84A4.502 4.502 0 0 0 8.5 4 4.5 4.5 0 0 0 4 8.425l-.003.004a4.6 4.6 0 0 1-.952.776A5.5 5.5 0 0 1 8.5 3M7 10.347a4.6 4.6 0 0 1-1-.583 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 3 18q.787.6 1.875.979c.082.028.17.028.252 0C7.687 18.089 9 16.266 9 13.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`
} as const;

export default function SearchShieldIcon({ 
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

  const gradientId = 'searchshieldicon_gradient';
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