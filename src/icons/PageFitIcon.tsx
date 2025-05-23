import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.25 4A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4zm0 9a.75.75 0 0 0-.743.648l-.007.102V15a.5.5 0 0 1-.41.492L17 15.5h-1.25a.75.75 0 0 0-.102 1.493l.102.007H17a2 2 0 0 0 1.994-1.85L19 15v-1.25a.75.75 0 0 0-.75-.75m-12.5 0a.75.75 0 0 0-.743.648L5 13.75V15a2 2 0 0 0 1.85 1.994L7 17h1.25a.75.75 0 0 0 .102-1.493L8.25 15.5H7a.5.5 0 0 1-.492-.41L6.5 15v-1.25a.75.75 0 0 0-.75-.75m2.5-6H7l-.15.005a2 2 0 0 0-1.844 1.838L5 9v1.25l.007.102a.75.75 0 0 0 1.486 0l.007-.102V9l.008-.09a.5.5 0 0 1 .402-.402L7 8.5h1.25l.102-.007a.75.75 0 0 0 0-1.486zM17 7h-1.25a.75.75 0 0 0-.102 1.493l.102.007H17a.5.5 0 0 1 .492.41L17.5 9v1.25a.75.75 0 0 0 1.493.102L19 10.25V9a2 2 0 0 0-1.85-1.995z"/>`,
  'regular': `<path d="M18.25 4A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4zm0 1.5H5.75A2.25 2.25 0 0 0 3.5 7.75v8.5a2.25 2.25 0 0 0 2.25 2.25h12.5a2.25 2.25 0 0 0 2.25-2.25v-8.5a2.25 2.25 0 0 0-2.25-2.25m0 7.5a.75.75 0 0 1 .75.75V15a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H17a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 .75-.75m-12.5 0a.75.75 0 0 1 .75.75V15a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H7a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 .75-.75M7 7h1.25a.75.75 0 0 1 .102 1.493L8.25 8.5H7a.5.5 0 0 0-.492.41L6.5 9v1.25a.75.75 0 0 1-1.493.102L5 10.25V9a2 2 0 0 1 1.85-1.995zm10 0a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0V9a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5z"/>`
} as const;

export default function PageFitIcon({ 
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

  const gradientId = 'pagefiticon_gradient';
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