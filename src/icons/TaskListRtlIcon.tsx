import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.707 3.293a1 1 0 0 0-1.414 0L19 4.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414M14.004 17H3l-.117.007A1 1 0 0 0 3 19h11.004l.117-.007A1 1 0 0 0 14.003 17m0-6H3l-.117.007A1 1 0 0 0 3 13h11.004l.117-.007A1 1 0 0 0 14.003 11m0-6H3l-.117.007A1 1 0 0 0 3 7h11.004l.117-.007A1 1 0 0 0 14.003 5m7.703 11.293a1 1 0 0 0-1.414 0L19 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414m-1.414-6.5a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l.293.293z"/>`,
  'regular': `<path d="M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm-7.53 13.227H2.75l-.102.007a.75.75 0 0 0 .102 1.493h11.5l.102-.007a.75.75 0 0 0-.102-1.493m0-6.507H2.75l-.102.007A.75.75 0 0 0 2.75 13h11.5l.102-.007a.75.75 0 0 0-.102-1.493m0-6.5H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h11.5l.102-.007A.75.75 0 0 0 14.25 5m7.53 12.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0-7.56a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function TaskListRtlIcon({ 
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

  const gradientId = 'tasklistrtlicon_gradient';
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