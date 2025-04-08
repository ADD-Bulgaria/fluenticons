import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 8c1.576 0 2.997.663 4 1.725A5.5 5.5 0 0 1 28 8h13a3 3 0 0 1 3 3v18a6.99 6.99 0 0 0-3-5.745V11H28a2.5 2.5 0 0 0-2.5 2.5v21c0 .593.206 1.137.551 1.566.133 1.381.52 2.687 1.117 3.871A5.5 5.5 0 0 1 24 38.275 5.5 5.5 0 0 1 20 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3zm2.5 26.5v-21A2.5 2.5 0 0 0 20 11H7v26h13a2.5 2.5 0 0 0 2.5-2.5m9.916 2.5A5 5 0 0 1 32 35v-6a5 5 0 0 1 10 0v6a5 5 0 0 1-9.584 2m-4.193 0A9 9 0 0 1 28 35a1 1 0 1 1 2 0 7 7 0 0 0 2.101 5A6.98 6.98 0 0 0 37 42a6.98 6.98 0 0 0 5.29-2.415A6.97 6.97 0 0 0 44 35a1 1 0 1 1 2 0 9 9 0 0 1-8 8.945V45a1 1 0 1 1-2 0v-1.055A9 9 0 0 1 28.223 37"/>`,
  'regular': `<path d="M20 8c1.602 0 3.037.718 4 1.85A5.24 5.24 0 0 1 28 8h13.25A2.75 2.75 0 0 1 44 10.75V29a6.99 6.99 0 0 0-2.5-5.362V10.75a.25.25 0 0 0-.25-.25H28a2.75 2.75 0 0 0-2.75 2.75v21.5c0 .803.344 1.526.893 2.028a11 11 0 0 0 1.023 3.156A5.24 5.24 0 0 1 24 38.151 5.24 5.24 0 0 1 20 40H6.75A2.75 2.75 0 0 1 4 37.25v-26.5A2.75 2.75 0 0 1 6.75 8zm2.75 26.75v-21.5A2.75 2.75 0 0 0 20 10.5H6.75a.25.25 0 0 0-.25.25v26.5c0 .138.112.25.25.25H20a2.75 2.75 0 0 0 2.75-2.75m5.602 2.75A9 9 0 0 1 28 35a1 1 0 1 1 2 0 7 7 0 0 0 2.101 5A6.98 6.98 0 0 0 37 42a6.98 6.98 0 0 0 5.29-2.415A6.97 6.97 0 0 0 44 35a1 1 0 1 1 2 0 9 9 0 0 1-8 8.945V45a1 1 0 1 1-2 0v-1.055a9 9 0 0 1-7.648-6.445m4.317 0A5 5 0 0 0 37 40a5 5 0 0 0 5-5v-6a5 5 0 0 0-10 0v6c0 .91.243 1.765.669 2.5"/>`
} as const;

export default function BookOpenMicrophoneIcon({ 
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

  const gradientId = 'bookopenmicrophoneicon_gradient';
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