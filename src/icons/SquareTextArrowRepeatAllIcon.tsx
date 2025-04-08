import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h10.965l-.233-.232a2.5 2.5 0 0 1-.703-1.386 2.5 2.5 0 0 1-2.715-1.231A6.5 6.5 0 0 1 14 23h-4a1 1 0 1 1 0-2h4.313a6.52 6.52 0 0 1 3.683-4H10a1 1 0 1 1 0-2h11.5q.105-.14.232-.268a2.5 2.5 0 0 1 3.536 0l2.5 2.5c.39.39.625.879.703 1.386q.264-.057.529-.056V7.5A4.5 4.5 0 0 0 24.5 3zM10 9h12a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2m14.207 6.793a1 1 0 0 0-1.414 1.414l.793.793H20.5a5 5 0 0 0-4.374 7.423 1 1 0 0 0 1.748-.97A3 3 0 0 1 20.5 20h3.086l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zm5.667 4.784a1 1 0 0 0-1.748.97A3 3 0 0 1 25.5 26h-3.086l.793-.793a1 1 0 0 0-1.414-1.414l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L22.414 28H25.5a5 5 0 0 0 4.374-7.423"/>`,
  'regular': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h10.965l-.233-.232a2.5 2.5 0 0 1-.703-1.386A2.5 2.5 0 0 1 15.585 27H7.5A2.5 2.5 0 0 1 5 24.5v-17A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v8.965l.768.767c.39.39.625.879.703 1.386q.264-.057.529-.056V7.5A4.5 4.5 0 0 0 24.5 3zM14 23c0-.698.11-1.37.313-2H10a1 1 0 1 0 0 2zm7-6.5c0-.528.166-1.057.5-1.5H10a1 1 0 1 0 0 2h7.996a6.5 6.5 0 0 1 2.504-.5zM10 9a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm14.207 6.793a1 1 0 0 0-1.414 1.414l.793.793H20.5a5 5 0 0 0-4.374 7.423 1 1 0 0 0 1.748-.97A3 3 0 0 1 20.5 20h3.086l-.793.793a1 1 0 0 0 1.414 1.414l2.5-2.5a1 1 0 0 0 0-1.414zm5.667 4.784a1 1 0 0 0-1.748.97A3 3 0 0 1 25.5 26h-3.086l.793-.793a1 1 0 0 0-1.414-1.414l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 1.414-1.414L22.414 28H25.5a5 5 0 0 0 4.374-7.423"/>`
} as const;

export default function SquareTextArrowRepeatAllIcon({ 
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

  const gradientId = 'squaretextarrowrepeatallicon_gradient';
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