import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m12.858 14.273 7.434 7.434a1 1 0 0 0 1.414-1.414l-17.999-18a1 1 0 1 0-1.414 1.414L5.39 6.804c-.643.429-1.254.927-1.821 1.495a12.4 12.4 0 0 0-1.39 1.683 1 1 0 0 0 1.644 1.14c.363-.524.761-1.01 1.16-1.41a10 10 0 0 1 1.855-1.46L7.99 9.405a8.14 8.14 0 0 0-3.203 3.377 1 1 0 0 0 1.784.903 6.1 6.1 0 0 1 1.133-1.563 6.1 6.1 0 0 1 1.77-1.234l1.407 1.407A5.2 5.2 0 0 0 8.336 13.7a5.3 5.3 0 0 0-1.09 1.612 1 1 0 0 0 1.832.802c.167-.381.394-.722.672-1a3.23 3.23 0 0 1 3.108-.841m-1.332-5.93 2.228 2.229a6.1 6.1 0 0 1 2.616 1.55 6.4 6.4 0 0 1 1.137 1.582 1 1 0 1 0 1.78-.911 8.4 8.4 0 0 0-1.503-2.085 8.1 8.1 0 0 0-6.258-2.365M8.51 5.327l1.651 1.651a9.9 9.9 0 0 1 10.016 4.148 1 1 0 1 0 1.646-1.136A11.91 11.91 0 0 0 8.51 5.327m4.552 11.114a1.501 1.501 0 1 1-2.123 2.123 1.501 1.501 0 0 1 2.123-2.123"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.364 3.365a12 12 0 0 0-2.033 1.634c-.49.489-.964 1.069-1.394 1.69a.75.75 0 1 0 1.233.854c.381-.55.8-1.062 1.222-1.484a10.5 10.5 0 0 1 2.062-1.604l1.592 1.592a8 8 0 0 0-1.923 1.424c-.61.61-1.109 1.3-1.492 2.056a.75.75 0 0 0 1.339.677 6.5 6.5 0 0 1 1.214-1.673 6.6 6.6 0 0 1 1.984-1.362l1.93 1.93a5.07 5.07 0 0 0-2.876 1.44 5.1 5.1 0 0 0-1.061 1.57.75.75 0 0 0 1.374.602c.185-.422.437-.8.747-1.11a3.59 3.59 0 0 1 3.36-.959l7.857 7.858a.75.75 0 0 0 1.061-1.06zm8.304 6.182 1.584 1.584a6.53 6.53 0 0 1 3.516 1.825 6.8 6.8 0 0 1 1.217 1.692.75.75 0 0 0 1.335-.683 8.3 8.3 0 0 0-1.492-2.07 8.04 8.04 0 0 0-6.16-2.348M8.487 5.305 9.713 6.53a10.44 10.44 0 0 1 10.908 4.297.75.75 0 0 0 1.235-.852 11.95 11.95 0 0 0-13.369-4.67m4.573 11.134a1.5 1.5 0 1 1-2.121 2.122 1.5 1.5 0 0 1 2.121-2.122"/>`
} as const;

export default function WifiOffIcon({ 
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

  const gradientId = 'wifiofficon_gradient';
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