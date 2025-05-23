import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2a5.5 5.5 0 0 0-5.137 3.529 13 13 0 0 0-1.26-.296 14.5 14.5 0 0 0-2.647-.232l-.172.004-.048.002-.02.001a.75.75 0 0 0-.708.708l-.003.069q-.003.06-.004.171c-.002.146-.001.355.008.612.02.514.077 1.228.224 2.035.134.735.348 1.565.69 2.397h-.177a.746.746 0 0 0-.746.746V12c0 1.045.16 2.053.458 3h19.084A10 10 0 0 0 22 12v-.254a.746.746 0 0 0-.746-.746h-.257l.002-.125a4.88 4.88 0 0 0-3.666-4.724A5.5 5.5 0 0 0 11.999 2m0 1.5a4 4 0 0 1 3.715 2.517 4.88 4.88 0 0 0-4.022 2.82 7.6 7.6 0 0 0-.917-1.114c-.749-.749-1.62-1.29-2.502-1.683A4 4 0 0 1 12 3.5m7.499 7.375q0 .063-.003.125h-6.729l-.018-.05v-.075a3.375 3.375 0 1 1 6.75 0M9.715 8.784c.643.642 1.109 1.415 1.445 2.216h-2.1L7.28 9.22a.75.75 0 1 0-1.06 1.06l.72.72H4.57c-.44-.876-.704-1.813-.86-2.667a13 13 0 0 1-.2-1.822v-.002h.001c.46.017 1.101.068 1.822.2 1.46.267 3.16.85 4.383 2.075M3.067 16.5A10 10 0 0 0 12 22a10 10 0 0 0 8.933-5.5zm9.682-5.55.018.05Z"/>`,
  'regular': `<path d="M12 2a5.5 5.5 0 0 0-5.137 3.529 13 13 0 0 0-1.26-.296 14.5 14.5 0 0 0-2.647-.232l-.172.004-.048.002a.76.76 0 0 0-.728.709l-.001.02-.002.049q-.003.06-.004.171c-.002.146-.001.355.008.612.02.514.077 1.228.224 2.035.134.735.348 1.565.69 2.397H2.75a.75.75 0 0 0-.75.75V12c0 5.523 4.477 10 10 10s10-4.477 10-10v-.25a.75.75 0 0 0-.75-.75h-.253l.002-.125a4.88 4.88 0 0 0-3.666-4.724A5.5 5.5 0 0 0 11.999 2M8.273 6.04a4.001 4.001 0 0 1 7.441-.023 4.88 4.88 0 0 0-4.022 2.82 7.6 7.6 0 0 0-.917-1.114c-.749-.749-1.62-1.29-2.502-1.683M19.5 10.875q0 .063-.003.125h-6.729l-.018-.05v-.075a3.375 3.375 0 1 1 6.75 0M9.715 8.784c.643.642 1.109 1.415 1.445 2.216h-2.1L7.28 9.22a.75.75 0 1 0-1.06 1.06l.72.72H4.57c-.44-.876-.704-1.813-.86-2.667a13 13 0 0 1-.2-1.822v-.002h.001c.46.017 1.101.068 1.822.2 1.46.267 3.16.85 4.383 2.075M4.788 16.5h14.424a8.5 8.5 0 0 1-7.212 4 8.5 8.5 0 0 1-7.212-4m-1.274-4h16.972a8.5 8.5 0 0 1-.53 2.5H4.044a8.5 8.5 0 0 1-.53-2.5m-.796-7.492h.018z"/>`
} as const;

export default function BowlSaladIcon({ 
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

  const gradientId = 'bowlsaladicon_gradient';
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