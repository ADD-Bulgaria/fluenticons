import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.77 5.79a.75.75 0 1 0-1.04-1.08l-6.75 6.5a.75.75 0 1 0 1.04 1.08zM18.987 5H4.55A2.55 2.55 0 0 0 2 7.55v6.9A2.55 2.55 0 0 0 4.55 17h14.9A2.55 2.55 0 0 0 22 14.45v-6.9q0-.278-.057-.538l-6.23 5.999a1.75 1.75 0 0 1-2.427-2.522zM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M21.78 5.78a.75.75 0 0 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06zm.167 1.248q.053.253.053.522v6.9A2.55 2.55 0 0 1 19.45 17H4.55A2.55 2.55 0 0 1 2 14.45v-6.9A2.55 2.55 0 0 1 4.55 5h14.475l-1.5 1.5H4.55c-.58 0-1.05.47-1.05 1.05v6.9c0 .58.47 1.05 1.05 1.05h14.9c.58 0 1.05-.47 1.05-1.05V8.475zM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function CheckIcon({ 
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

  const gradientId = 'checkicon_gradient';
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