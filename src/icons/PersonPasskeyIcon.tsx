import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44c3.716 0 7.216-.65 10-2.027v-7.489A9 9 0 0 1 30.055 28zm19.82 0A7 7 0 1 1 41 33.71V34l2.293 2.293a1 1 0 0 1 0 1.414L41 40l2.322 2.322a1 1 0 0 1 .03 1.384l-3.646 3.968a1 1 0 0 1-1.444.03l-1.97-1.969a1 1 0 0 1-.292-.707V33.326A7.01 7.01 0 0 1 32.07 28M41 26a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`,
  'regular': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44c3.716 0 7.216-.65 10-2.027v-2.866l-.22.138C31.37 40.712 27.932 41.5 24 41.5s-7.37-.788-9.78-2.255c-2.36-1.437-3.72-3.5-3.72-6.245v-.751a1.75 1.75 0 0 1 1.75-1.749h18.456a9 9 0 0 1-.651-2.5zm19.82 0A7 7 0 1 1 41 33.71V34l2.293 2.293a1 1 0 0 1 0 1.414L41 40l2.322 2.322a1 1 0 0 1 .03 1.384l-3.646 3.968a1 1 0 0 1-1.444.03l-1.97-1.969a1 1 0 0 1-.292-.707V33.326a7.03 7.03 0 0 1-3.063-2.826 7 7 0 0 1-.866-2.5M41 26a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`
} as const;

export default function PersonPasskeyIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'personpasskeyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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