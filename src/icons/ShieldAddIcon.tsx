import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24.865 4.348a1.25 1.25 0 0 0-1.73 0c-2.759 2.643-6.685 4.077-10.037 4.84-1.66.376-3.139.58-4.202.69a29 29 0 0 1-1.574.119L7.22 10A1.25 1.25 0 0 0 6 11.25v9.5c0 4.837 1.243 9.658 4.098 13.775 2.861 4.126 7.29 7.469 13.529 9.418.243.076.503.076.746 0q.465-.146.916-.3A12.95 12.95 0 0 1 22 35c0-7.18 5.82-13 13-13 2.508 0 4.85.71 6.835 1.94Q42 22.474 42 21v-9.75A1.25 1.25 0 0 0 40.78 10q-.052 0-.102-.003l-.328-.017a29 29 0 0 1-1.246-.102 36 36 0 0 1-4.202-.69c-3.353-.763-7.279-2.197-10.037-4.84M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`,
  'regular': `<path d="M23.135 4.348a1.25 1.25 0 0 1 1.73 0c2.758 2.643 6.684 4.077 10.037 4.84 1.659.376 3.139.58 4.202.69.531.054.957.085 1.246.102q.213.014.426.02h.003A1.25 1.25 0 0 1 42 11.25V21q0 1.474-.165 2.94a13 13 0 0 0-2.4-1.164Q39.5 21.89 39.5 21v-8.575a38 38 0 0 1-5.152-.8c-3.219-.731-7.21-2.102-10.348-4.702-3.138 2.6-7.13 3.97-10.348 4.702a38 38 0 0 1-5.152.8v8.325c0 4.413 1.132 8.717 3.652 12.35 2.405 3.467 6.12 6.393 11.483 8.216a13 13 0 0 0 1.654 2.326q-.452.156-.916.301a1.25 1.25 0 0 1-.746 0c-6.238-1.95-10.668-5.292-13.53-9.418C7.244 30.408 6 25.587 6 20.75v-9.5A1.25 1.25 0 0 1 7.22 10h.004q.213-.006.426-.02c.29-.017.715-.048 1.246-.102a36 36 0 0 0 4.202-.69c3.352-.763 7.278-2.197 10.037-4.84M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"/>`
} as const;

export default function ShieldAddIcon({ 
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

  const gradientId = 'shieldaddicon_gradient';
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