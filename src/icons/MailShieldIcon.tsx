import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 2.624a4 4 0 0 1-1-.277q-.908-.38-1.716-1.225a.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266c.042 1.247.38 2.3 1.006 3.15q.412.558.99 1 .785.6 1.874.979c.082.028.17.028.252 0C17.688 10.089 19 8.266 19 5.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043m-5.697 8.101.09.07c.62.474 1.343.847 2.153 1.128.294.103.614.103.909 0 .99-.344 1.848-.825 2.545-1.454V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0zM10 4v1.593l.005.282v.008c.047 1.413.434 2.67 1.2 3.71q.16.217.34.418L10 10.92 2.015 6.223A2.5 2.5 0 0 1 4.5 4z"/>`,
  'regular': `<path d="M18 2.624a4 4 0 0 1-1-.277q-.908-.38-1.716-1.225a.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266c.042 1.247.38 2.3 1.006 3.15q.412.558.99 1 .785.6 1.874.979c.082.028.17.028.252 0C17.688 10.089 19 8.266 19 5.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043M10 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-4.03q-.456.41-1 .738V14.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968.082.038a.5.5 0 0 0 .426-.038l2.049-1.206a6 6 0 0 1-.759-.714L10 10.92 3 6.802V6.5A1.5 1.5 0 0 1 4.5 5H10z"/>`
} as const;

export default function MailShieldIcon({ 
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

  const gradientId = 'mailshieldicon_gradient';
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