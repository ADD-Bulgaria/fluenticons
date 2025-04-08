import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.993 1.648A.75.75 0 0 0 16.25 1l-.102.007-.097.02a.75.75 0 0 0-.551.723v2.249h-1.751l.001-2.249-.007-.102A.75.75 0 0 0 13 1l-.102.007a.75.75 0 0 0-.648.743l-.001 2.249H10.5V1.75l-.007-.102A.75.75 0 0 0 9 1.75v2.325a3.75 3.75 0 0 0-2.925 2.924L3.75 7l-.102.007A.75.75 0 0 0 3 7.75l.007.102a.75.75 0 0 0 .743.648L6 8.499v1.75l-2.25.001-.102.007A.75.75 0 0 0 3 11l.007.102a.74.74 0 0 0 .188.403 5.5 5.5 0 0 1 7.598 6.494h1.456l.001 2.251.007.102A.75.75 0 0 0 13 21l.102-.007a.75.75 0 0 0 .648-.743l-.001-2.251H15.5v2.251l.007.102A.75.75 0 0 0 17 20.25v-2.325a3.76 3.76 0 0 0 2.924-2.92h2.326l.102-.007a.75.75 0 0 0 .648-.743l-.007-.102a.75.75 0 0 0-.743-.648L20 13.504v-1.75h2.25l.102-.006a.75.75 0 0 0 .648-.743l-.007-.102a.75.75 0 0 0-.743-.648L20 10.254v-1.75h2.25l.102-.006a.75.75 0 0 0-.102-1.493h-2.324A3.75 3.75 0 0 0 17 4.074V1.75zm-6.988 9.357a3 3 0 1 1 6 0 3 3 0 0 1-6 0m4.5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M16.993 1.648A.75.75 0 0 0 16.25 1l-.102.007-.097.02a.75.75 0 0 0-.551.723v2.249h-1.751l.001-2.249-.007-.102A.75.75 0 0 0 13 1l-.102.007a.75.75 0 0 0-.648.743l-.001 2.249H10.5V1.75l-.007-.102A.75.75 0 0 0 9 1.75v2.325a3.75 3.75 0 0 0-2.925 2.924L3.75 7l-.102.007A.75.75 0 0 0 3 7.75l.007.102a.75.75 0 0 0 .743.648L6 8.499v1.75l-2.25.001-.102.007A.75.75 0 0 0 3 11l.007.102a.74.74 0 0 0 .188.403A5.5 5.5 0 0 1 5.5 11c.706 0 1.38.133 2 .375V7.75A2.25 2.25 0 0 1 9.75 5.5h6.5a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 1-2.25 2.25H11c0 .52-.072 1.023-.207 1.499h1.456l.001 2.251.007.102A.75.75 0 0 0 13 21l.102-.007a.75.75 0 0 0 .648-.743l-.001-2.251H15.5v2.251l.007.102A.75.75 0 0 0 17 20.25v-2.325A3.75 3.75 0 0 0 19.926 15h2.324l.102-.007A.75.75 0 0 0 23 14.25l-.007-.102a.75.75 0 0 0-.743-.648H20v-1.75h2.25l.102-.007A.75.75 0 0 0 23 11l-.007-.102a.75.75 0 0 0-.743-.648H20V8.5h2.25l.102-.007A.75.75 0 0 0 22.25 7h-2.325A3.75 3.75 0 0 0 17 4.075V1.75zm-.988 9.357a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-4.5 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M5.5 21a4.5 4.5 0 0 0 2.607-.832l2.613 2.612a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 5.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function DeveloperBoardSearchIcon({ 
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

  const gradientId = 'developerboardsearchicon_gradient';
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