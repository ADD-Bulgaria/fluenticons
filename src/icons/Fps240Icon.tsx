import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.149 6.178a1 1 0 0 0 1.29-.534l.03-.054c.035-.056.097-.14.191-.225C3.832 5.208 4.158 5 4.767 5c.425 0 .746.13.944.297.183.155.305.375.305.703 0 .549-.172.865-.422 1.124-.302.313-.722.553-1.322.897-.545.312-1.25.716-1.796 1.33-.586.659-.955 1.513-.955 2.649a1 1 0 0 0 .999 1h4.495a1 1 0 0 0 0-2H3.741q.1-.179.227-.32c.297-.333.716-.591 1.295-.923l.103-.058c.51-.29 1.159-.66 1.665-1.186.593-.615.983-1.422.983-2.513 0-.915-.38-1.694-1.012-2.23C6.387 3.25 5.585 3 4.767 3c-1.138 0-1.936.417-2.451.885a3.1 3.1 0 0 0-.665.864l-.05.108-.005.012-.002.005v.002l-.001.002s-.209.52 0 0a1 1 0 0 0 .556 1.3M16.006 6c0-1.657 1.342-3 2.997-3A3 3 0 0 1 22 6v4c0 1.657-1.342 3-2.997 3a3 3 0 0 1-2.997-3zm2.997-1a1 1 0 0 0-.999 1v4a1 1 0 1 0 1.998 0V6a1 1 0 0 0-.999-1M4.768 15a.75.75 0 0 0-.75.75v5.481a.75.75 0 1 0 1.499 0v-1.728h1.748a.75.75 0 0 0 0-1.5H5.517V16.5h2.248a.75.75 0 0 0 0-1.5zm4.745.75a.75.75 0 0 1 .749-.75h1.499a2.25 2.25 0 0 1 2.247 2.25 2.25 2.25 0 0 1-2.247 2.25h-.75v1.75a.75.75 0 1 1-1.498 0zM11.01 18h.75a.75.75 0 0 0 0-1.5h-.75zm6.369-3a2.124 2.124 0 0 0-2.123 2.125c0 1.174.95 2.125 2.123 2.125h.5a.625.625 0 0 1 0 1.25h-.625a.5.5 0 0 1-.5-.5.75.75 0 1 0-1.498 0c0 1.105.894 2 1.998 2h.624a2.124 2.124 0 0 0 2.123-2.125c0-1.174-.95-2.125-2.123-2.125h-.5a.625.625 0 0 1 0-1.25h.625a.5.5 0 0 1 .5.5.75.75 0 1 0 1.498 0c0-1.105-.894-2-1.998-2zM15.007 3.994a1 1 0 1 0-1.998.012L13.027 7H11.01V4a1 1 0 1 0-1.998 0v4a1 1 0 0 0 1 1h3.02v3a1 1 0 1 0 1.998 0V7.405q0-.046-.005-.092z"/>`,
  'regular': `<path d="M2.627 5.99a.75.75 0 0 0 .86-.604l.003-.01a1.1 1.1 0 0 1 .211-.395C3.867 4.78 4.216 4.5 5 4.5A1.5 1.5 0 0 1 6.5 6c0 .618-.201 1.018-.506 1.35-.334.365-.789.65-1.364 1.011l-.03.019c-.55.346-1.212.764-1.72 1.362-.534.63-.881 1.434-.881 2.509 0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5H3.597c.092-.32.244-.57.428-.788.336-.396.8-.702 1.374-1.062l.096-.06c.517-.324 1.13-.708 1.605-1.226C7.639 7.776 8 7.022 8 6a3 3 0 0 0-3-3c-1.216 0-1.992.47-2.451 1.02a2.6 2.6 0 0 0-.51.976l-.025.111-.002.011-.001.005v.002a.75.75 0 0 0 .616.865M16 5.996a2.994 2.994 0 0 1 2.994-2.994h.012A2.994 2.994 0 0 1 22 5.996v4.01A2.994 2.994 0 0 1 19.006 13h-.012A2.994 2.994 0 0 1 16 10.006zm2.994-1.494c-.825 0-1.494.669-1.494 1.494v4.01c0 .825.669 1.494 1.494 1.494h.012c.825 0 1.494-.669 1.494-1.494v-4.01c0-.825-.67-1.494-1.494-1.494zM4.75 15a.75.75 0 0 0-.75.75v5.481a.75.75 0 0 0 1.5 0v-1.728h1.75a.75.75 0 0 0 0-1.5H5.5V16.5h2.25a.75.75 0 0 0 0-1.5zm4.75.75a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 1 1 0 4.5H11v1.75a.75.75 0 0 1-1.5 0zM11 18h.75a.75.75 0 1 0 0-1.5H11zm6.375-3a2.125 2.125 0 0 0 0 4.25h.5a.625.625 0 1 1 0 1.25h-.625a.5.5 0 0 1-.5-.5.75.75 0 0 0-1.5 0 2 2 0 0 0 2 2h.625a2.125 2.125 0 0 0 0-4.25h-.5a.625.625 0 1 1 0-1.25H18a.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2zm-3.13-12a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V9H9.75A.75.75 0 0 1 9 8.25v-4.5a.75.75 0 1 1 1.5 0V7.5h2.997V3.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function Fps240Icon({ 
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

  const gradientId = 'fps240icon_gradient';
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