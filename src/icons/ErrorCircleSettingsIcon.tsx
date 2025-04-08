import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 10a8 8 0 1 0-7.411 7.979A5.5 5.5 0 0 1 10 15.5a5.5 5.5 0 0 1 .216-1.532.748.748 0 0 1-.966-.718.75.75 0 0 1 1.408-.36 5.5 5.5 0 0 1 7.32-2.301Q18 10.297 18 10M9.508 6.41a.5.5 0 0 1 .984 0l.008.09V11l-.008.09a.5.5 0 0 1-.984 0L9.5 11V6.5zm2.127 8.51a2 2 0 0 0 1.43-2.478l-.155-.557q.382-.293.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.343q.448.211.835.518l-.126.422a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556q-.383.295-.822.498l-.337-.358a2 2 0 0 0-2.91-.002l-.325.345a4.3 4.3 0 0 1-.835-.518l.127-.423a2 2 0 0 0-1.456-2.519l-.35-.083a4.7 4.7 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M18 10a8 8 0 1 0-7.411 7.979 5.5 5.5 0 0 1-.383-.982L10 17a7 7 0 1 1 6.997-6.794q.514.146.982.383Q18 10.297 18 10m-7.342 2.89a.75.75 0 1 0-.442 1.078q.165-.568.442-1.078m-.166-6.48a.5.5 0 0 0-.992.09V11l.008.09A.5.5 0 0 0 10.5 11V6.5zm1.143 8.51a2 2 0 0 0 1.43-2.478l-.155-.557q.382-.293.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.343q.448.211.835.518l-.126.422a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.431 2.478l.156.556q-.383.295-.822.498l-.337-.358a2 2 0 0 0-2.91-.002l-.325.345a4.3 4.3 0 0 1-.835-.518l.127-.423a2 2 0 0 0-1.456-2.519l-.35-.083a4.7 4.7 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`
} as const;

export default function ErrorCircleSettingsIcon({ 
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

  const gradientId = 'errorcirclesettingsicon_gradient';
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