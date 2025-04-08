import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.725 2.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-.47-.47L18.56 8.5l2.47 2.47a.75.75 0 1 1-1.061 1.06l-1.47-1.47-6.841 6.842A3.75 3.75 0 0 1 9.007 18.5H6.561l-3.28 3.28a.75.75 0 0 1-1.061-1.06l3.28-3.28v-2.447a3.75 3.75 0 0 1 1.098-2.652L6.94 12l1.53 1.53a.75.75 0 0 0 1.061-1.06L8 10.94l.94-.94 1.53 1.53a.75.75 0 1 0 1.06-1.06L10 8.94l.94-.94 1.53 1.53a.75.75 0 1 0 1.06-1.06L12 6.94l1.44-1.44-1.47-1.47a.75.75 0 0 1 1.06-1.06l2.47 2.47 1.694-1.69-.47-.47a.75.75 0 0 1 0-1.06m2.469 3.53-.94-.94L16.56 6.5l.939.94z"/>`,
  'regular': `<path d="M16.725 2.22a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06l-.47-.47L18.56 8.5l2.47 2.47a.75.75 0 1 1-1.061 1.06l-1.47-1.47-6.841 6.842A3.75 3.75 0 0 1 9.007 18.5H6.561l-3.28 3.28a.75.75 0 0 1-1.061-1.06l3.28-3.28v-2.447a3.75 3.75 0 0 1 1.098-2.652l.871-.87.001-.002 2-1.999 1.999-2 .002-.001L13.439 5.5l-1.47-1.47a.75.75 0 0 1 1.061-1.06l2.47 2.47 1.694-1.69-.47-.47a.75.75 0 0 1 0-1.06M12 9.06l-.94.94.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72-.94.94.72.72a.75.75 0 1 1-1.06 1.06L8 13.06l-.341.342A2.25 2.25 0 0 0 7 14.992V17h2.007a2.25 2.25 0 0 0 1.591-.659L17.44 9.5 14.5 6.56 13.06 8l.72.72a.75.75 0 0 1-1.06 1.06zm7.194-3.31-.94-.94-1.693 1.69.939.94z"/>`
} as const;

export default function SyringeIcon({ 
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

  const gradientId = 'syringeicon_gradient';
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