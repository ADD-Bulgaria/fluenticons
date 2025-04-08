import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M10.5 4a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11M6 9.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M23 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-3 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-4 6c.387 0 .757.073 1.096.207q-.436.38-.821.812A2 2 0 0 0 16 18H5a2 2 0 0 0-2 2c0 .884.333 2.12 1.406 3.137C5.476 24.151 7.34 25 10.5 25c1.418 0 2.575-.171 3.517-.451q.03.511.117 1.006c-1.013.282-2.215.445-3.634.445-3.34 0-5.476-.9-6.781-2.137C2.417 22.63 2 21.116 2 20a3 3 0 0 1 3-3zm2.343 3.036a1.52 1.52 0 0 1-1.117 1.928l-1.536.35a7.5 7.5 0 0 0-.04 3.19l1.698.423a1.52 1.52 0 0 1 1.096 1.892l-.496 1.724a7.5 7.5 0 0 0 2.75 1.597l1.26-1.3a1.53 1.53 0 0 1 2.193 0l1.236 1.272a7.5 7.5 0 0 0 2.737-1.635l-.467-1.514a1.52 1.52 0 0 1 1.117-1.927l1.536-.351a7.5 7.5 0 0 0 .04-3.189l-1.698-.423a1.52 1.52 0 0 1-1.096-1.893l.496-1.724a7.5 7.5 0 0 0-2.75-1.596l-1.26 1.3a1.53 1.53 0 0 1-2.193 0l-1.236-1.272a7.5 7.5 0 0 0-2.737 1.635zM25 24a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function PeopleSettingsIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'peoplesettingsicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}