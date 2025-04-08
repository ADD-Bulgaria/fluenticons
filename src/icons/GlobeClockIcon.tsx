
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.077 16.498Q11 16.988 11 17.5c0 1.652.616 3.16 1.631 4.307q-.311.189-.63.19c-1.196 0-2.4-2.094-3.037-5.204l-.058-.294zm-3.704 0c.365 2.083.983 3.855 1.792 5.094A10.03 10.03 0 0 1 3.067 16.5zm-.303-6.5a28 28 0 0 0 .033 4.42l.057.58H2.458a10.05 10.05 0 0 1-.258-5zm8.356 0q.05.645.068 1.317a6.52 6.52 0 0 0-3.995 3.683L8.676 15a26 26 0 0 1-.132-4.512l.033-.489zm6.377 0a10 10 0 0 1 .17 2.785 6.48 6.48 0 0 0-4.988-1.763 13 13 0 0 0-.013-.365l-.039-.656zm-6.965-7.593a10.03 10.03 0 0 1 6.536 6.093h-4.591c-.296-2.265-.878-4.231-1.675-5.647l-.162-.276zm-5.673 0c-.88 1.35-1.535 3.329-1.883 5.654l-.061.44H2.63A10.03 10.03 0 0 1 8.74 2.54l.303-.1zM12.002 2c1.318 0 2.645 2.542 3.214 6.183l.046.315H8.741C9.28 4.69 10.645 2 12 2m11 15.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>`,
  'regular': `<path d="M12.002 2c5.523 0 10.001 4.478 10.001 10.002q0 .395-.03.782a6.5 6.5 0 0 0-1.476-1.053l.004.177-.008-.318a8.5 8.5 0 0 0-.227-1.59l-.014.001h-3.344q.048.503.073 1.02a6.4 6.4 0 0 0-1.491.296q-.023-.677-.091-1.316H8.605a19 19 0 0 0 .135 5h2.758q-.299.714-.422 1.5H9.063c.598 2.216 1.602 3.735 2.655 3.97a6.5 6.5 0 0 0 1.066 1.502q-.388.03-.782.03C6.478 22.003 2 17.525 2 12.002 2 6.478 6.478 2 12.002 2M7.51 16.502H4.787a8.53 8.53 0 0 0 4.095 3.41c-.58-.91-1.048-2.076-1.372-3.41M3.737 10l-.004.017a8.5 8.5 0 0 0-.233 1.984c0 1.056.193 2.067.545 3h3.173a20 20 0 0 1-.218-3c0-.684.032-1.354.095-2.001zm5.146-5.91-.023.008A8.53 8.53 0 0 0 4.252 8.5H7.3c.313-1.752.86-3.278 1.583-4.41m3.119-.591-.116.005C10.621 3.62 9.398 5.622 8.83 8.5h6.343c-.585-2.965-1.865-5-3.171-5m3.12.59.106.175c.67 1.112 1.178 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.63-4.411M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"/>`
} as const;

export default function GlobeClockIcon({ 
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

  const gradientId = 'globeclockicon_gradient';
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