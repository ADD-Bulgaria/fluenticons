import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H21c0-7.18 5.82-13 13-13 4.556 0 8.565 2.344 10.887 5.892q.112-.68.113-1.392a8.5 8.5 0 0 0-8.5-8.5h-.541C35.45 10.84 30.29 6 24 6m-1 28c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m8.647-7.093A7 7 0 0 1 39 28.601V28a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.106-.035 1 1 0 0 1-1.414-1.415 7 7 0 0 1 2.597-1.643m4.706 14.186A7 7 0 0 1 29 39.399V40a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 5.25 1.21 5 5 0 0 0 1.856-1.175 1 1 0 0 1 1.414 1.415 7 7 0 0 1-2.597 1.643"/>`,
  'regular': `<path d="M24 8.5a9.5 9.5 0 0 0-9.497 9.721 1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12h9.74c-.157.809-.24 1.645-.24 2.5h-9.5a8.5 8.5 0 0 1 0-17h.541C12.55 10.84 17.71 6 24 6s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.387 9.892 13 13 0 0 0-2.575-2.888A6 6 0 0 0 36.5 19.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 8.5M23 34c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m8.647-7.093A7 7 0 0 1 39 28.601V28a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.106-.035 1 1 0 0 1-1.414-1.415 7 7 0 0 1 2.597-1.643m4.706 14.186A7 7 0 0 1 29 39.399V40a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 5.25 1.21 5 5 0 0 0 1.856-1.175 1 1 0 0 1 1.414 1.415 7 7 0 0 1-2.597 1.643"/>`
} as const;

export default function CloudSyncIcon({ 
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

  const gradientId = 'cloudsyncicon_gradient';
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