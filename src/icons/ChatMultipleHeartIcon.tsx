import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.5 3C6.701 3 2 7.701 2 13.5a10.5 10.5 0 0 0 1.102 4.688l-1.05 3.918a1.5 1.5 0 0 0 1.838 1.837l3.915-1.049A10.46 10.46 0 0 0 12.5 24C18.3 24 23 19.299 23 13.5S18.3 3 12.5 3m1.955 22.342a12 12 0 0 1-2.808.128A10.47 10.47 0 0 0 19.5 29a10.46 10.46 0 0 0 4.695-1.106l3.915 1.05a1.5 1.5 0 0 0 1.837-1.838l-1.05-3.918A10.44 10.44 0 0 0 30 18.5a10.5 10.5 0 0 0-6.451-9.69c.362.853.63 1.757.787 2.699A8.49 8.49 0 0 1 28 18.5a8.46 8.46 0 0 1-1.046 4.088 1 1 0 0 0-.09.74l.927 3.46-3.456-.927a1 1 0 0 0-.74.09 8.46 8.46 0 0 1-4.095 1.05 8.46 8.46 0 0 1-5.045-1.66m-2.376-14.967.416.415.41-.41a2.99 2.99 0 0 1 4.218.01 2.964 2.964 0 0 1 .011 4.199l-4.293 4.277a.46.46 0 0 1-.648 0l-4.315-4.302a2.963 2.963 0 0 1-.01-4.2 2.985 2.985 0 0 1 4.211.011"/>`,
  'regular': `<path d="M12.5 3C6.701 3 2 7.701 2 13.5a10.5 10.5 0 0 0 1.102 4.688l-1.05 3.918a1.5 1.5 0 0 0 1.838 1.837l3.915-1.049A10.46 10.46 0 0 0 12.5 24C18.3 24 23 19.299 23 13.5S18.3 3 12.5 3M5.046 17.588A8.46 8.46 0 0 1 4 13.5a8.5 8.5 0 1 1 8.5 8.5c-1.486 0-2.88-.38-4.094-1.049a1 1 0 0 0-.741-.09l-3.456.926.926-3.458a1 1 0 0 0-.09-.74m9.409 7.754a12 12 0 0 1-2.808.128A10.47 10.47 0 0 0 19.5 29a10.46 10.46 0 0 0 4.695-1.106l3.915 1.05a1.5 1.5 0 0 0 1.837-1.838l-1.05-3.918A10.44 10.44 0 0 0 30 18.5a10.5 10.5 0 0 0-6.451-9.69c.362.853.63 1.757.787 2.699A8.49 8.49 0 0 1 28 18.5a8.46 8.46 0 0 1-1.046 4.088 1 1 0 0 0-.09.74l.927 3.46-3.456-.927a1 1 0 0 0-.74.09 8.46 8.46 0 0 1-4.095 1.05 8.46 8.46 0 0 1-5.045-1.66m-2.376-14.967a2.985 2.985 0 0 0-4.212-.01 2.963 2.963 0 0 0 .01 4.199l4.316 4.302a.46.46 0 0 0 .648 0l4.293-4.277a2.964 2.964 0 0 0-.011-4.198 2.99 2.99 0 0 0-4.218-.011l-.41.41z"/>`
} as const;

export default function ChatMultipleHeartIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'chatmultiplehearticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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