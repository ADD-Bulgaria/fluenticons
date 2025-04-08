import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 3a1 1 0 0 1 1 1v5h2.25A2.75 2.75 0 0 1 18 11.75v5.836l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 17.586V11.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v5.836l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 17.586V11.75A2.75 2.75 0 0 1 8.75 9H11V4a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M12 3a.75.75 0 0 1 .75.75V9.5h2.496a2.75 2.75 0 0 1 2.75 2.75v6.192l1.725-1.723a.75.75 0 1 1 1.06 1.062l-3.005 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.061l1.72 1.72v-6.19c0-.69-.56-1.25-1.25-1.25H8.751c-.69 0-1.25.56-1.25 1.25v6.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3.001-3a.75.75 0 1 1 1.06-1.06L6 18.44v-6.19A2.75 2.75 0 0 1 8.75 9.5h2.5V3.75A.75.75 0 0 1 12 3"/>`
} as const;

export default function ArrowSplitIcon({ 
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

  const gradientId = 'arrowspliticon_gradient';
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