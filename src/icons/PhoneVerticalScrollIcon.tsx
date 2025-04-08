import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.036 11.475L12 15.225l-1.718-1.75a.75.75 0 0 0-1.07 1.05l2.253 2.296c.294.3.777.3 1.07 0l2.25-2.296a.75.75 0 1 0-1.07-1.05m1.072-3.954-2.25-2.296a.75.75 0 0 0-.987-.075l-.084.075L9.212 9.52a.75.75 0 0 0 .987 1.125l.083-.074L12 8.821l1.714 1.75a.75.75 0 0 0 1.143-.965zl-2.25-2.296z"/>`,
  'regular': `<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75m-.975 9.964a.75.75 0 0 1 .082.976l-.071.085-2.25 2.296a.75.75 0 0 1-.987.074l-.084-.074-2.253-2.296a.75.75 0 0 1 .987-1.124l.083.074L12 15.225l1.714-1.75a.75.75 0 0 1 1.061-.01m-2.24-6.239 2.25 2.296a.75.75 0 1 1-1.07 1.05L12 8.82l-1.718 1.75a.75.75 0 0 1-1.07-1.05l2.253-2.296a.75.75 0 0 1 1.07 0"/>`
} as const;

export default function PhoneVerticalScrollIcon({ 
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

  const gradientId = 'phoneverticalscrollicon_gradient';
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