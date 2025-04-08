import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m37.605 39.373 4.261 4.26a1.25 1.25 0 0 0 1.768-1.767l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l9.812 9.812C11.758 14.761 8.94 14 5.5 14a1.5 1.5 0 0 0 0 3c5.781 0 9.446 2.45 12.904 5.622q.56-.543 1.14-1.115l.098-.097 1.414 1.414-.024.024-.085.084C16.621 27.195 12.703 31 5.5 31a1.5 1.5 0 0 0 0 3c8.49 0 13.192-4.634 17.468-8.848l.085-.084.125-.123 1.414 1.415-.135.133-.176.173-.831.817c2.083 1.924 4.386 3.742 7.232 4.966l4.945 4.946a1.5 1.5 0 0 0 1.978 1.978m-1.445-8.516 5.052 5.052 2.349-2.348a1.5 1.5 0 0 0 0-2.122l-5.5-5.5a1.5 1.5 0 0 0-2.122 2.122L38.88 31h-.38q-1.23-.002-2.34-.143M24.704 19.4l2.13 2.13C29.95 18.907 33.402 17 38.5 17h.379l-2.94 2.94a1.5 1.5 0 0 0 2.122 2.12l5.5-5.5a1.5 1.5 0 0 0 0-2.12l-5.5-5.5a1.5 1.5 0 0 0-2.122 2.12L38.88 14h-.38c-6.17 0-10.338 2.446-13.796 5.4"/>`,
  'regular': `<path d="m30.383 32.15 11.483 11.484a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L14.57 16.338C11.989 14.928 8.977 14 5.25 14a1.25 1.25 0 1 0 0 2.5c6.017 0 9.863 2.707 13.52 6.116q.469-.457.948-.93l.1-.1 1.415 1.415-.03.028-.08.08C16.664 27.506 12.56 31.5 5.25 31.5a1.25 1.25 0 1 0 0 2.5c8.388 0 13.151-4.696 17.546-9.03l.082-.08.123-.121 1.414 1.414-.133.131-.187.185-.652.641c2.04 1.91 4.26 3.727 6.94 5.01m8.92 1.85-2.611-2.611q.985.11 2.058.111h.982l-3.366-3.366a1.25 1.25 0 0 1 1.768-1.768l5.5 5.5a1.25 1.25 0 0 1 0 1.768l-2.349 2.348-1.767-1.767.214-.215zM26.648 21.345l-1.775-1.775C28.407 16.52 32.606 14 38.75 14h.982l-3.366-3.366a1.25 1.25 0 0 1 1.768-1.768l5.5 5.5a1.25 1.25 0 0 1 0 1.768l-5.5 5.5a1.25 1.25 0 0 1-1.768-1.768l3.366-3.366h-.982c-5.246 0-8.842 2.058-12.102 4.845"/>`
} as const;

export default function ArrowShuffleOffIcon({ 
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

  const gradientId = 'arrowshuffleofficon_gradient';
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