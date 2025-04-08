import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.318 6.5c.168-.873.397-1.657.67-2.32.301-.733.648-1.294 1.008-1.663C9.354 2.149 9.693 2 10 2s.646.149 1.004.517c.36.37.707.93 1.008 1.663.273.663.502 1.447.67 2.32zm-.255-2.7a7.2 7.2 0 0 1 .827-1.52A8.02 8.02 0 0 0 2.804 6.5h3.497c.182-1.007.441-1.922.762-2.7m5.874 0a7.2 7.2 0 0 0-.827-1.519A8.02 8.02 0 0 1 17.196 6.5h-3.497c-.182-1.007-.441-1.922-.762-2.7m.913 3.7h3.752a8 8 0 0 1 .394 2.754 5.48 5.48 0 0 0-4.018-1.23A20 20 0 0 0 13.85 7.5m-.865 1.711a19 19 0 0 0-.143-1.711H7.158A19 19 0 0 0 7 10c0 .875.056 1.714.158 2.5h2.217a5.51 5.51 0 0 1 3.61-3.289M9.09 13.5H7.318c.168.873.397 1.657.67 2.32.301.733.648 1.294 1.008 1.663.358.368.697.517 1.004.517q.114 0 .234-.029A5.48 5.48 0 0 1 9 14.5q0-.513.09-1m-6.287 0a8.02 8.02 0 0 0 5.087 4.219 7.2 7.2 0 0 1-.828-1.518c-.32-.78-.58-1.694-.762-2.701zm3.346-1H2.398A8 8 0 0 1 2 10c0-.873.14-1.713.398-2.5H6.15C6.052 8.295 6 9.134 6 10s.052 1.705.15 2.5M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m.954-5.608h1.544c.485 0 .687.647.295.944l-1.25.947.477 1.532c.15.48-.378.88-.77.583l-1.25-.947-1.25.947c-.392.297-.92-.103-.77-.583l.477-1.532-1.25-.947c-.392-.297-.19-.944.294-.944h1.546l.477-1.531a.494.494 0 0 1 .952 0z"/>`,
  'regular': `<path d="M10.254 17.996a8 8 0 1 1 7.742-7.742 5.5 5.5 0 0 0-1.008-.66A7 7 0 0 0 16.54 7.5h-2.733q.118.736.165 1.525a5.5 5.5 0 0 0-.992.188 15 15 0 0 0-.186-1.713H7.206A15 15 0 0 0 7 10c0 .883.073 1.725.206 2.5h2.169a5.5 5.5 0 0 0-.284 1H7.419c.153.59.342 1.126.56 1.592.48 1.028 1.041 1.614 1.577 1.821q.287.586.698 1.083m1.768-13.088C11.407 3.59 10.657 3 10 3s-1.407.59-2.022 1.908A9.3 9.3 0 0 0 7.42 6.5h5.162a9.3 9.3 0 0 0-.56-1.592M6.389 6.5c.176-.743.407-1.422.683-2.015.186-.399.401-.773.642-1.103A7.02 7.02 0 0 0 3.936 6.5zM6 10c0-.87.067-1.712.193-2.5H3.46A7 7 0 0 0 3 10c0 .88.163 1.724.46 2.5h2.733A16 16 0 0 1 6 10m1.072 5.515a10.5 10.5 0 0 1-.683-2.015H3.936a7.02 7.02 0 0 0 3.778 3.118 6.6 6.6 0 0 1-.642-1.103M16.064 6.5a7.02 7.02 0 0 0-3.778-3.118c.241.33.456.704.642 1.103.276.593.507 1.272.683 2.015zM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m.954-5.608h1.544c.485 0 .687.647.295.944l-1.25.947.477 1.532c.15.48-.378.88-.77.583l-1.25-.947-1.25.947c-.392.297-.92-.103-.77-.583l.477-1.532-1.25-.947c-.392-.297-.19-.944.294-.944h1.546l.477-1.531a.494.494 0 0 1 .952 0z"/>`
} as const;

export default function GlobeStarIcon({ 
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

  const gradientId = 'globestaricon_gradient';
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