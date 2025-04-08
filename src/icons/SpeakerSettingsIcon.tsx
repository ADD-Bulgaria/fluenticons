import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.395 3.838c.798-.743 2.105-.181 2.105.906v9.403a7.49 7.49 0 0 0-3.5 6.34c0 .882.152 1.728.432 2.513l-3.974-3.698a1.76 1.76 0 0 0-1.196-.47H5.25c-1.795 0-3.25-1.445-3.25-3.228v-3.469c0-1.783 1.455-3.228 3.25-3.228h3.011c.445 0 .873-.168 1.197-.47zm2.401 12.86a2 2 0 0 1-1.441 2.496l-1.024.254a6.8 6.8 0 0 0 .008 2.152l.976.235a2 2 0 0 1 1.45 2.51l-.324 1.098a6.2 6.2 0 0 0 1.753 1.1l.843-.886a2 2 0 0 1 2.899 0l.85.895a6.2 6.2 0 0 0 1.751-1.09l-.335-1.16a2 2 0 0 1 1.441-2.496l1.026-.253a6.8 6.8 0 0 0-.008-2.152l-.977-.235a2 2 0 0 1-1.45-2.51l.324-1.1a6.2 6.2 0 0 0-1.753-1.1l-.843.888a2 2 0 0 1-2.9 0l-.849-.895a6.2 6.2 0 0 0-1.751 1.09zM20.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`,
  'regular': `<path d="M16.5 4.744c0-1.087-1.307-1.65-2.105-.906L9.458 8.437c-.324.302-.752.47-1.197.47H5.25C3.455 8.907 2 10.352 2 12.135v3.469c0 1.783 1.455 3.228 3.25 3.228h3.012c.444 0 .872.168 1.196.47L13.432 23A7.5 7.5 0 0 1 13 20.557l-2.516-2.342a3.26 3.26 0 0 0-2.222-.873H5.25c-.966 0-1.75-.778-1.75-1.738v-3.469c0-.96.784-1.738 1.75-1.738h3.011c.826 0 1.62-.312 2.223-.874L15 5.317v10.075a7.5 7.5 0 0 1 1.5-1.245zm.296 11.954a2 2 0 0 1-1.441 2.496l-1.024.254a6.8 6.8 0 0 0 .008 2.152l.976.235a2 2 0 0 1 1.45 2.51l-.324 1.098a6.2 6.2 0 0 0 1.753 1.1l.843-.886a2 2 0 0 1 2.899 0l.85.895a6.2 6.2 0 0 0 1.751-1.09l-.335-1.16a2 2 0 0 1 1.441-2.496l1.026-.253a6.8 6.8 0 0 0-.008-2.152l-.977-.235a2 2 0 0 1-1.45-2.51l.324-1.1a6.2 6.2 0 0 0-1.753-1.1l-.843.888a2 2 0 0 1-2.9 0l-.849-.895a6.2 6.2 0 0 0-1.751 1.09zM20.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>`
} as const;

export default function SpeakerSettingsIcon({ 
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

  const gradientId = 'speakersettingsicon_gradient';
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