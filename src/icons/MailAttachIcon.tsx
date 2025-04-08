import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m20.408 15.067 4.585-4.593v9.27a3.25 3.25 0 0 1-3.064 3.243l-.185.005H6.25a3.25 3.25 0 0 1-3.244-3.064L3 19.743v-9.622l10.65 5.54a.75.75 0 0 0 .692 0l1.436-.747q.069.08.144.154a3.17 3.17 0 0 0 4.485 0M6.248 5H17.52l-3.011 3.01a1.75 1.75 0 0 0 1.07 2.979 3.17 3.17 0 0 0-.494 2.595l-1.088.566L3 8.432v-.184a3.25 3.25 0 0 1 3.065-3.244zm15.706-.9-5.678 5.677Z"/><path d="M21.954 4.1a2.077 2.077 0 0 1 2.938 2.938L18.64 13.3a.672.672 0 0 1-.95-.95l5.084-5.072a.75.75 0 1 0-1.06-1.062L16.63 11.29a2.172 2.172 0 0 0 3.07 3.071l6.253-6.263a3.577 3.577 0 0 0-5.06-5.058l-5.677 5.677a.75.75 0 1 0 1.06 1.06z"/>`,
  'regular': `<path d="m15.778 14.914-1.436.746a.75.75 0 0 1-.58.047l-.111-.047L4.5 10.902v8.841a1.75 1.75 0 0 0 1.606 1.744l.143.006h15.495a1.75 1.75 0 0 0 1.744-1.606l.006-.144v-7.767l1.5-1.502v9.27a3.25 3.25 0 0 1-3.065 3.243l-.185.005H6.25a3.25 3.25 0 0 1-3.244-3.064L3 19.743V8.248a3.25 3.25 0 0 1 3.065-3.244l.184-.005h11.272l-1.5 1.5H6.25a1.75 1.75 0 0 0-1.744 1.605l-.005.144v.963l9.497 4.94 1.088-.567c.118.48.348.937.693 1.33M21.954 4.1a2.078 2.078 0 0 1 2.938 2.938l-6.238 6.248-.015.015a.672.672 0 0 1-.95-.95l5.084-5.072a.75.75 0 1 0-1.06-1.062L16.63 11.29a2.172 2.172 0 1 0 3.071 3.07l6.252-6.262a3.577 3.577 0 1 0-5.058-5.058l-5.678 5.677a.75.75 0 1 0 1.06 1.06z"/>`
} as const;

export default function MailAttachIcon({ 
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

  const gradientId = 'mailattachicon_gradient';
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