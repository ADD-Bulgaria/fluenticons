import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M35 24c6.075 0 11-4.925 11-11S41.075 2 35 2 24 6.925 24 13s4.925 11 11 11m1-18v11.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L34 17.586V6a1 1 0 1 1 2 0m5.304 30.707A4.25 4.25 0 0 0 44 32.75V22.38A12.96 12.96 0 0 1 35 26c-2.057 0-4.002-.478-5.73-1.328zM23.328 18.73A12.95 12.95 0 0 1 22 13c0-3.017 1.028-5.794 2.752-8H9.597zM4.885 6.653A4.23 4.23 0 0 0 4 9.25v23.5A4.25 4.25 0 0 0 8.25 37H17v3.5h-2.75a1.25 1.25 0 1 0 0 2.5h19.5a1.25 1.25 0 1 0 0-2.5H31V37h4.232l6.634 6.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM19.5 37h9v3.5h-9z"/>`,
  'regular': `<path d="M46 13c0 6.075-4.925 11-11 11s-11-4.925-11-11S28.925 2 35 2s11 4.925 11 11M35 5a1 1 0 0 0-1 1v11.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L36 17.586V6a1 1 0 0 0-1-1m6.5 27.75v-8.49a13 13 0 0 0 2.5-1.88v10.37a4.25 4.25 0 0 1-2.696 3.957L39.097 34.5h.653a1.75 1.75 0 0 0 1.75-1.75m-8.768 1.75L6.69 8.457a1.76 1.76 0 0 0-.189.793v23.5c0 .967.784 1.75 1.75 1.75zm2.5 2.5H31v3.5h2.75a1.25 1.25 0 1 1 0 2.5h-19.5a1.25 1.25 0 1 1 0-2.5H17V37H8.25A4.25 4.25 0 0 1 4 32.75V9.25c0-.978.33-1.879.885-2.597l-.519-.52a1.25 1.25 0 1 1 1.768-1.767l37.5 37.5a1.25 1.25 0 0 1-1.768 1.768zM23.217 7.5h-11.12L9.597 5h15.155a13 13 0 0 0-1.535 2.5m5.283 33V37h-9v3.5z"/>`
} as const;

export default function DesktopArrowDownOffIcon({ 
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

  const gradientId = 'desktoparrowdownofficon_gradient';
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