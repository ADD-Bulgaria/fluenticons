import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.004 3.132a1 1 0 0 1 .992 0l9.492 5.424q.247.142.46.322L14.5 14.848 4.053 8.878a3 3 0 0 1 .459-.322zm11.945 7.478q.051.27.051.55v8.34a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5v-8.34a3 3 0 0 1 .051-.55l10.953 6.258a1 1 0 0 0 .992 0zM7.256 25.495a4.5 4.5 0 0 0 3.746 2.005h11.5a7 7 0 0 0 7-7v-7.34a3 3 0 0 0-1.512-2.604l-.49-.28v2.844l.002.04v7.34a5 5 0 0 1-5 5H7.5q-.123 0-.245-.005"/>`,
  'light': `<path d="M14.253 4.065a.5.5 0 0 1 .494 0l9.115 5.18c.408.231.727.581.921.992L14.75 16.039a.5.5 0 0 1-.5 0L4.217 10.237c.194-.411.513-.76.921-.993zM4 11.267l9.75 5.637a1.5 1.5 0 0 0 1.5 0L25 11.267V19.5a3.5 3.5 0 0 1-3.5 3.5h-14A3.5 3.5 0 0 1 4 19.5zm11.241-8.071a1.5 1.5 0 0 0-1.482 0L4.644 8.375A3.25 3.25 0 0 0 3 11.2v8.3A4.5 4.5 0 0 0 7.5 24h14a4.5 4.5 0 0 0 4.5-4.5v-8.3a3.25 3.25 0 0 0-1.645-2.825zM7.671 26c.773.625 1.757 1 2.83 1h12a6.5 6.5 0 0 0 6.5-6.5v-6.15c0-.896-.37-1.74-1-2.345V20.5a5.5 5.5 0 0 1-5.5 5.5H7.67"/>`,
  'regular': `<path d="M14.004 3.132a1 1 0 0 1 .992 0l9.492 5.424A3 3 0 0 1 26 11.16v8.34a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5v-8.34a3 3 0 0 1 1.512-2.604zM6.016 10l8.484 4.848L22.984 10 14.5 5.152zM24 11.723l-9.004 5.145a1 1 0 0 1-.992 0L5 11.723V19.5A2.5 2.5 0 0 0 7.5 22h14a2.5 2.5 0 0 0 2.5-2.5zM11.002 27.5a4.5 4.5 0 0 1-3.746-2.005q.122.005.245.005h15a5 5 0 0 0 5-5V10.276l.489.28a3 3 0 0 1 1.512 2.605v7.34a7 7 0 0 1-7 7z"/>`
} as const;

export default function MailReadMultipleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'mailreadmultipleicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}