import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".5" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".7" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".7" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".7" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path d="M26 15V4l14 14H29a3 3 0 0 1-3-3"/><path fill-rule="evenodd" d="M8 30v-1a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V33a3 3 0 0 1 3-3zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5z" clip-rule="evenodd"/><path d="M16 38a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'filled': `<path d="M24 4v11.25A3.75 3.75 0 0 0 27.75 19H40v21a3 3 0 0 1-3 3H24V33a5 5 0 0 0-4.059-4.912A7.001 7.001 0 0 0 8 24.101V7a3 3 0 0 1 3-3zm2.5.464V15.25c0 .69.56 1.25 1.25 1.25h11.712zM8 30H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'regular': `<path d="M12.25 4A4.25 4.25 0 0 0 8 8.25v15.851a7 7 0 0 1 2.5-1.641V8.25c0-.966.784-1.75 1.75-1.75H24v8.75A3.75 3.75 0 0 0 27.75 19h9.75v20.75a1.75 1.75 0 0 1-1.75 1.75H24V43q0 .515-.1 1h11.85A4.25 4.25 0 0 0 40 39.75V18.414a2.25 2.25 0 0 0-.659-1.59L27.177 4.658A2.25 2.25 0 0 0 25.586 4zm23.232 12.5H27.75c-.69 0-1.25-.56-1.25-1.25V7.518zM8 30H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`
} as const;

export default function DocumentLockIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'documentlockicon_gradient';
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