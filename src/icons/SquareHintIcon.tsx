import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.5 6a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3zM42 21.5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm-22 19a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 0 3h-5a1.5 1.5 0 0 1-1.5-1.5m-11-19a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm5-14A1.5 1.5 0 0 0 12.5 6 6.5 6.5 0 0 0 6 12.5a1.5 1.5 0 0 0 3 0A3.5 3.5 0 0 1 12.5 9 1.5 1.5 0 0 0 14 7.5M12.5 42a1.5 1.5 0 0 0 0-3A3.5 3.5 0 0 1 9 35.5a1.5 1.5 0 0 0-3 0 6.5 6.5 0 0 0 6.5 6.5M34 7.5A1.5 1.5 0 0 1 35.5 6a6.5 6.5 0 0 1 6.5 6.5 1.5 1.5 0 0 1-3 0A3.5 3.5 0 0 0 35.5 9 1.5 1.5 0 0 1 34 7.5M35.5 42a1.5 1.5 0 0 1 0-3 3.5 3.5 0 0 0 3.5-3.5 1.5 1.5 0 0 1 3 0 6.5 6.5 0 0 1-6.5 6.5"/>`,
  'regular': `<path d="M21.25 6a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5zm0 36a1.25 1.25 0 1 1 0-2.5h5.5a1.25 1.25 0 1 1 0 2.5zm-14-14C6.56 28 6 27.44 6 26.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5c0 .69-.56 1.25-1.25 1.25m32.25-1.25a1.25 1.25 0 1 0 2.5 0v-5.5a1.25 1.25 0 1 0-2.5 0zM14 7.25C14 6.56 13.44 6 12.75 6h-.5A6.25 6.25 0 0 0 6 12.25v.5a1.25 1.25 0 1 0 2.5 0v-.5a3.75 3.75 0 0 1 3.75-3.75h.5c.69 0 1.25-.56 1.25-1.25M12.75 42a1.25 1.25 0 1 0 0-2.5h-.5a3.75 3.75 0 0 1-3.75-3.75v-.5a1.25 1.25 0 1 0-2.5 0v.5A6.25 6.25 0 0 0 12.25 42zM34 7.25c0-.69.56-1.25 1.25-1.25h.5A6.25 6.25 0 0 1 42 12.25v.5a1.25 1.25 0 1 1-2.5 0v-.5a3.75 3.75 0 0 0-3.75-3.75h-.5c-.69 0-1.25-.56-1.25-1.25M35.25 42a1.25 1.25 0 1 1 0-2.5h.5a3.75 3.75 0 0 0 3.75-3.75v-.5a1.25 1.25 0 1 1 2.5 0v.5A6.25 6.25 0 0 1 35.75 42z"/>`
} as const;

export default function SquareHintIcon({ 
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

  const gradientId = 'squarehinticon_gradient';
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