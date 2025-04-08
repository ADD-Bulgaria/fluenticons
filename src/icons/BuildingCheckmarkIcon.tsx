import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 2A1.5 1.5 0 0 0 4 3.5v14a.5.5 0 0 0 .5.5H7v-3.5a.5.5 0 0 1 .5-.5h1.522c.05-.555.183-1.087.386-1.582a.75.75 0 1 1 .752-1.296A5.49 5.49 0 0 1 14.5 9c.509 0 1.002.07 1.47.199A1.5 1.5 0 0 0 14.5 8H13V3.5A1.5 1.5 0 0 0 11.5 2zm2 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M6.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.75 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.75 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.022 15a5.5 5.5 0 0 0 1.235 3H8v-3zM19 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M6.75 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.75-6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.75 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-.342 2.918a5.4 5.4 0 0 1 .752-1.296.75.75 0 1 0-.752 1.296M7.5 14h1.522a5.6 5.6 0 0 0 0 1H8v2h1.5v-.206c.2.436.456.84.757 1.206H4.5a.5.5 0 0 1-.5-.5v-14A1.5 1.5 0 0 1 5.5 2h6A1.5 1.5 0 0 1 13 3.5V8h1.5a1.5 1.5 0 0 1 1.47 1.199A5.5 5.5 0 0 0 14.5 9h-2a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V17h2v-2.5a.5.5 0 0 1 .5-.5m11.5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708"/>`
} as const;

export default function BuildingCheckmarkIcon({ 
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

  const gradientId = 'buildingcheckmarkicon_gradient';
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