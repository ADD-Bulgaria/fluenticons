import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 7c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H23v-5.68a5 5 0 0 1 2.857-4.517l7-3.32a5 5 0 0 1 4.286 0l7 3.32q.407.194.766.45A8.5 8.5 0 0 0 36.5 18h-.541C35.45 11.84 30.29 7 24 7m21 31.677V29.32a3 3 0 0 0-1.714-2.71l-7-3.32a3 3 0 0 0-2.572 0l-7 3.32A3 3 0 0 0 25 29.32v9.357a3 3 0 0 0 1.714 2.71l7 3.321a3 3 0 0 0 2.572 0l7-3.32A3 3 0 0 0 45 38.678m-16.903-9.106a1 1 0 0 1 1.332-.475L35 31.74l5.571-2.643a1 1 0 0 1 .858 1.807L36 33.478V40a1 1 0 1 1-2 0v-6.522l-5.429-2.575a1 1 0 0 1-.475-1.332"/>`,
  'regular': `<path d="M24 9.5a9.5 9.5 0 0 0-9.497 9.721 1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12H23V35H11.5a8.5 8.5 0 0 1 0-17h.541C12.55 11.84 17.71 7 24 7s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.41 7.254 5 5 0 0 0-.767-.451l-2.338-1.11A6 6 0 0 0 36.5 20.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 9.5m21 29.177V29.32a3 3 0 0 0-1.714-2.71l-7-3.32a3 3 0 0 0-2.572 0l-7 3.32A3 3 0 0 0 25 29.32v9.357a3 3 0 0 0 1.714 2.71l7 3.321a3 3 0 0 0 2.572 0l7-3.32A3 3 0 0 0 45 38.678m-16.903-9.106a1 1 0 0 1 1.332-.475L35 31.74l5.571-2.643a1 1 0 0 1 .858 1.807L36 33.478V40a1 1 0 1 1-2 0v-6.522l-5.429-2.575a1 1 0 0 1-.475-1.332"/>`
} as const;

export default function CloudCubeIcon({ 
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

  const gradientId = 'cloudcubeicon_gradient';
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