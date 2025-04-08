import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.585 2.914a2.56 2.56 0 0 0-3.715-.095L2.801 14.887a2.563 2.563 0 0 0 .072 3.694l1.375 1.271c.714.66 1.692.513 2.29.27a1.667 1.667 0 0 1 2.216 2.05c-.195.615-.266 1.602.448 2.262l1.02.944a2.56 2.56 0 0 0 3.535-.053l11.528-11.322a2.563 2.563 0 0 0 .107-3.545l-1.075-1.192c-.635-.703-1.592-.664-2.2-.494a1.669 1.669 0 0 1-2.002-2.217c.232-.589.369-1.537-.266-2.24z"/>`,
  'regular': `<path d="M17.47 3.919a1.06 1.06 0 0 0-1.54-.04L3.863 15.949a1.063 1.063 0 0 0 .03 1.531l1.375 1.272c.037.035.104.071.233.076.134.006.303-.025.474-.095a3.167 3.167 0 0 1 4.21 3.894 1.2 1.2 0 0 0-.058.481c.016.128.057.192.095.226l1.02.944a1.06 1.06 0 0 0 1.465-.022l11.528-11.322a1.063 1.063 0 0 0 .045-1.47l-1.075-1.192c-.034-.036-.094-.077-.218-.096a1.2 1.2 0 0 0-.466.042 3.17 3.17 0 0 1-4.021-3.05c0-.41.078-.802.22-1.163.066-.167.095-.33.09-.459-.006-.124-.04-.188-.074-.225zm-2.6-1.1a2.56 2.56 0 0 1 3.714.095l1.265 1.401c.634.703.498 1.651.266 2.24a1.667 1.667 0 0 0 2.001 2.217c.609-.17 1.566-.21 2.201.494l1.075 1.192a2.563 2.563 0 0 1-.107 3.545L13.757 25.325a2.56 2.56 0 0 1-3.535.053l-1.02-.944c-.714-.66-.643-1.647-.447-2.262q.076-.238.077-.505a1.667 1.667 0 0 0-2.293-1.545c-.599.243-1.577.39-2.29-.27l-1.376-1.271a2.563 2.563 0 0 1-.072-3.694z"/>`
} as const;

export default function TicketDiagonalIcon({ 
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

  const gradientId = 'ticketdiagonalicon_gradient';
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