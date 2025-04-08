import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.395 3.902c.798-.748 2.105-.182 2.105.912v18.37c0 1.095-1.306 1.66-2.105.912L9.458 19.47a1.75 1.75 0 0 0-1.196-.473H5.25A3.25 3.25 0 0 1 2 15.747v-3.492a3.25 3.25 0 0 1 3.25-3.25h3.011c.445 0 .873-.169 1.197-.473zm6.068 2.155a.75.75 0 0 1 .817.162l4 4a.75.75 0 0 1-.05 1.107L22.022 14l3.208 2.674a.75.75 0 0 1 .05 1.106l-4 4a.75.75 0 0 1-1.28-.53v-5.565l-.77.642a.75.75 0 1 1-.96-1.152L19.68 14l-1.41-1.174a.75.75 0 1 1 .96-1.152l.77.641V6.75a.75.75 0 0 1 .463-.693M21.5 19.439l2.139-2.139-2.139-1.782zm2.139-8.74L21.5 8.56v3.922z"/>`,
  'regular': `<path d="M16.5 4.814c0-1.094-1.307-1.66-2.105-.912l-4.937 4.63a1.75 1.75 0 0 1-1.197.473H5.25A3.25 3.25 0 0 0 2 12.255v3.492a3.25 3.25 0 0 0 3.25 3.25h3.012c.444 0 .872.17 1.196.473l4.937 4.626c.799.748 2.105.182 2.105-.912zm-6.016 4.812L15 5.39v17.216l-4.516-4.232a3.25 3.25 0 0 0-2.222-.878H5.25a1.75 1.75 0 0 1-1.75-1.75v-3.492c0-.966.784-1.75 1.75-1.75h3.011a3.25 3.25 0 0 0 2.223-.88M21.28 6.219a.75.75 0 0 0-1.28.53v5.566l-.77-.641a.75.75 0 1 0-.96 1.152L19.68 14l-1.41 1.175a.75.75 0 1 0 .96 1.152l.77-.642v5.565a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0-.05-1.107L22.022 14l3.208-2.674a.75.75 0 0 0 .05-1.107zM23.64 17.3l-2.14 2.14v-3.922zM21.5 8.56l2.139 2.14-2.139 1.782z"/>`
} as const;

export default function SpeakerBluetoothIcon({ 
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

  const gradientId = 'speakerbluetoothicon_gradient';
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