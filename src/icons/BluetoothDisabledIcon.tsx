import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.677 17.738 4.042 4.043a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.48 8.48-4.325 3.46a1 1 0 1 0 1.25 1.56L11 14.08V21a1 1 0 0 0 1.707.707zm-3.578-3.578 2.163 2.163L13 18.586V14.08zm4.526-5.38-3.146 2.517-1.423-1.423 2.447-1.957L13 5.414v4.404l-2-2V3a1 1 0 0 1 1.707-.707l5 5a1 1 0 0 1-.082 1.488"/>`,
  'regular': `<path d="m16.5 17.56 4.22 4.22a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 1 0-1.06 1.06l8.56 8.56-4.516 3.839a.75.75 0 1 0 .972 1.143l3.764-3.2v7.628a.75.75 0 0 0 1.28.53zm-3.594-3.593L15.44 16.5l-2.94 2.94v-5.818zm4.33-5.646-3.099 2.634-1.064-1.064 2.572-2.186L12.5 4.561v4.757l-1.5-1.5V2.75a.75.75 0 0 1 1.28-.53l5 5a.75.75 0 0 1-.044 1.101"/>`
} as const;

export default function BluetoothDisabledIcon({ 
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

  const gradientId = 'bluetoothdisabledicon_gradient';
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