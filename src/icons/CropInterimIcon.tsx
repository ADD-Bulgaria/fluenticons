import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.671 9.104A6.502 6.502 0 0 1 15.505 22c-1.483 0-2.884-.5-4.008-1.382v.632a.75.75 0 0 1-.65.743l-.1.007a.75.75 0 0 1-.744-.648l-.007-.102v-2.499a.75.75 0 0 1 .648-.743l.102-.007h2.505a.75.75 0 0 1 .101 1.493l-.101.007-.744.002a5 5 0 1 0 4.411-8.8zm-2.185-6.1a2.5 2.5 0 0 1 .974 4.803l.818 5.315A2.501 2.501 0 1 1 13.505 17H6.5a2.5 2.5 0 1 1-2.778-3.877l.818-5.312A2.5 2.5 0 1 1 7.497 4h4.992a2.5 2.5 0 0 1 1.997-.996m-2.5 2.496H8c0 1.2-.841 2.2-1.964 2.446l-.795 5.166a2.5 2.5 0 0 1 1.752 2.203L7 15.5h6.005a2.5 2.5 0 0 1 1.752-2.386l-.793-5.165a2.5 2.5 0 0 1-1.972-2.275z"/>`,
  'regular': `<path d="M16.671 9.104A6.502 6.502 0 0 1 15.505 22a6.48 6.48 0 0 1-4.01-1.383l.001.633a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102v-2.499a.75.75 0 0 1 .648-.743l.102-.007h2.505a.75.75 0 0 1 .101 1.493l-.101.007-.743.002a5 5 0 1 0 4.41-8.8zm-2.185-6.1a2.5 2.5 0 0 1 .975 4.803l.818 5.315a2.501 2.501 0 1 1-2.774 3.879H6.5a2.5 2.5 0 1 1-2.778-3.877l.819-5.311A2.5 2.5 0 1 1 7.497 4h4.992a2.5 2.5 0 0 1 1.997-.996M4.5 14.5l-.117.007a1 1 0 0 0 0 1.986l.117.007a1 1 0 0 0 .993-.883L5.5 15.5l-.007-.117a1 1 0 0 0-.517-.762l-.108-.051-.123-.04-.09-.018A1 1 0 0 0 4.5 14.5m10.693.049-.051.019-.066.029-.093.05a1 1 0 0 0 .405 1.846l.117.007a1 1 0 0 0 .116-1.993l-.117-.007q-.084 0-.167.014zm-3.207-9.05H8C8 6.7 7.16 7.702 6.037 7.947l-.795 5.166a2.5 2.5 0 0 1 1.751 2.203L7 15.5h6.005a2.5 2.5 0 0 1 1.752-2.386l-.794-5.165a2.5 2.5 0 0 1-1.971-2.275zm1.778.697.024.024.12.1.086.054.09.046.109.04.092.024.078.012.123.008.12-.007.17-.036.124-.047.087-.045.094-.062.11-.093.075-.085a1 1 0 0 0-.294-1.5v.007l-.105-.054-.146-.05-.083-.017a1 1 0 0 0-.152-.011l-.117.007a1 1 0 0 0-.605 1.685M4.5 5.504a1 1 0 0 0 .22.625l.066.075q.087.089.192.153l.109.058.1.04.082.022.1.018.131.009q.085 0 .166-.014l.077-.016.109-.034.054-.022.151-.084.085-.065.054-.047.088-.097.06-.085a1 1 0 0 0 .15-.42L6.5 5.5l-.007-.115-.02-.11-.018-.067a1 1 0 0 0-.838-.697L5.5 4.504q-.085 0-.166.014l-.081.016-.09.028-.057.022-.097.049a1 1 0 0 0-.509.87"/>`
} as const;

export default function CropInterimIcon({ 
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

  const gradientId = 'cropinterimicon_gradient';
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