import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 2C7.373 2 2 7.373 2 14c0 2.037.508 3.958 1.405 5.64L2.05 24.408a1.25 1.25 0 0 0 1.544 1.545l4.77-1.357A11.95 11.95 0 0 0 14 26q.584 0 1.152-.055A3 3 0 0 1 15 25v-5a3 3 0 0 1 2.5-2.959V17a4 4 0 0 1 8 0v.041l.106.02c.257-.977.394-2.003.394-3.061 0-6.627-5.373-12-12-12m4.5 16H18a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-.5v-1a3 3 0 1 0-6 0zm1.5-1a1.5 1.5 0 0 1 3 0v1h-3zm3 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M14 24.5a10.45 10.45 0 0 1-4.931-1.227 1.5 1.5 0 0 0-1.116-.12l-4.338 1.234 1.233-4.337a1.5 1.5 0 0 0-.12-1.116A10.45 10.45 0 0 1 3.5 14C3.5 8.201 8.201 3.5 14 3.5S24.5 8.201 24.5 14q0 .174-.006.348A4 4 0 0 1 25.5 17v.041l.106.02c.257-.977.394-2.003.394-3.061 0-6.627-5.373-12-12-12S2 7.373 2 14c0 2.037.508 3.958 1.405 5.64L2.05 24.408a1.25 1.25 0 0 0 1.544 1.545l4.77-1.357A11.95 11.95 0 0 0 14 26q.584 0 1.152-.055A3 3 0 0 1 15 25v-.547q-.495.047-1 .047m4.5-6.5H18a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-.5v-1a3 3 0 1 0-6 0zm1.5-1a1.5 1.5 0 0 1 3 0v1h-3zm3 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function ChatLockIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'chatlockicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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