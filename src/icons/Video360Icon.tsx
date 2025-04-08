import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.692 4.017C3.318 3.824 2 4.875 2 6.316v11.369c0 1.44 1.318 2.49 2.691 2.298q.296-.042.636-.084a54 54 0 0 1 6.673-.4c3.19 0 5.732.263 7.31.484 1.372.192 2.69-.858 2.69-2.299V6.317c0-1.441-1.318-2.492-2.692-2.3-1.576.222-4.116.484-7.308.484-3.191 0-5.732-.262-7.308-.483M19 18.428a52 52 0 0 0-3.5-.324V15H18a1 1 0 0 1 1 1zm-5-.395a59 59 0 0 0-4 0V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm-5.5.07a52 52 0 0 0-3.5.325V16a1 1 0 0 1 1-1h2.5zM12 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-3.5-.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M13.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M2 6.316c0-1.441 1.318-2.492 2.692-2.3C6.268 4.239 8.809 4.5 12 4.5s5.732-.262 7.308-.483C20.682 3.824 22 4.875 22 6.316v11.369c0 1.44-1.318 2.49-2.69 2.298A53 53 0 0 0 12 19.5c-3.19 0-5.732.262-7.309.483-1.373.192-2.69-.858-2.691-2.299zm2.483-.814c-.524-.073-.983.338-.983.814v11.369c0 .475.458.886.983.812q.244-.034.517-.069V16a1 1 0 0 1 1-1h2.5v3.104q.716-.044 1.5-.07V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.033q.784.028 1.5.07V15H18a1 1 0 0 1 1 1v2.428q.273.035.517.07c.525.073.983-.338.983-.814V6.317c0-.476-.459-.887-.983-.814C17.884 5.732 15.272 6 12 6s-5.884-.269-7.517-.498"/>`
} as const;

export default function Video360Icon({ 
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

  const gradientId = 'video360icon_gradient';
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