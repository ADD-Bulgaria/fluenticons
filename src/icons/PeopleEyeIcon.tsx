import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 5.75a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 0 1 6.5 0M14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-11 1a2 2 0 0 0-2 2s0 4 5.25 4c1.012 0 1.829-.149 2.488-.389A3 3 0 0 1 9 14.5c0-.517.181-1.049.433-1.519.26-.484.633-.97 1.098-1.405a6 6 0 0 1 1.06-.789A2 2 0 0 0 10 10zm11 1c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M6.75 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M3.5 5.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m8.09 5.037A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2v.084a2 2 0 0 0 .012.175 3.95 3.95 0 0 0 .67 1.806C2.883 15.08 4.237 16 6.75 16c1.004 0 1.822-.147 2.488-.388a3.1 3.1 0 0 1-.234-.98c-.565.222-1.299.368-2.254.368-2.237 0-3.258-.799-3.745-1.503a2.95 2.95 0 0 1-.498-1.336l-.006-.083-.001-.017V12a1 1 0 0 1 1-1H10c.31 0 .588.142.771.364q.372-.314.82-.577M14.5 5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m2.5 4.5c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function PeopleEyeIcon({ 
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

  const gradientId = 'peopleeyeicon_gradient';
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