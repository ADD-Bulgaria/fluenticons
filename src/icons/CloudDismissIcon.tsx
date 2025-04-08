import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h25a8.5 8.5 0 0 0 0-17h-.541C35.45 10.84 30.29 6 24 6"/><path fill-opacity=".3" d="M20 25.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"/><path fill-opacity=".3" d="M24 30c6.627 0 12-5.373 12-12S30.627 6 24 6c-6.296 0-11.46 4.85-11.96 11.017a8.5 8.5 0 0 1 7.2 12.002C20.7 29.65 22.309 30 24 30"/><path d="M24 30c6.627 0 12-5.373 12-12S30.627 6 24 6c-6.296 0-11.46 4.85-11.96 11.017a8.5 8.5 0 0 1 7.2 12.002C20.7 29.65 22.309 30 24 30"/><path fill-opacity=".5" d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h25a8.5 8.5 0 0 0 0-17h-.541C35.45 10.84 30.29 6 24 6"/><path fill-opacity=".5" d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17h25a8.5 8.5 0 0 0 0-17h-.541C35.45 10.84 30.29 6 24 6"/><path d="M45 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11"/><path d="M39.707 29.707a1 1 0 0 0-1.414-1.414L34 32.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L32.586 34l-4.293 4.293a1 1 0 0 0 1.414 1.414L34 35.414l4.293 4.293a1 1 0 0 0 1.414-1.414L35.414 34z"/>`,
  'filled': `<path d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H21c0-7.18 5.82-13 13-13 4.556 0 8.565 2.344 10.887 5.892q.112-.68.113-1.392a8.5 8.5 0 0 0-8.5-8.5h-.541C35.45 10.84 30.29 6 24 6m21 28c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L34 32.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L32.586 34l-4.293 4.293a1 1 0 0 0 1.414 1.414L34 35.414l4.293 4.293a1 1 0 0 0 1.414-1.414L35.414 34z"/>`,
  'regular': `<path d="M24 8.5a9.5 9.5 0 0 0-9.497 9.721 1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h9.74c-.157.809-.24 1.645-.24 2.5h-9.5a8.5 8.5 0 0 1 0-17h.541C12.55 10.84 17.71 6 24 6s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.387 9.892 13 13 0 0 0-2.575-2.888A6 6 0 0 0 36.5 19.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 8.5M45 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L34 32.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L32.586 34l-4.293 4.293a1 1 0 0 0 1.414 1.414L34 35.414l4.293 4.293a1 1 0 0 0 1.414-1.414L35.414 34z"/>`
} as const;

export default function CloudDismissIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'clouddismissicon_gradient';
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