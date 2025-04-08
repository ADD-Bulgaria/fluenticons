import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h12.255A7.97 7.97 0 0 1 17 23a2.75 2.75 0 0 1 3-2.739V19a5 5 0 0 1 10 0V8.5A4.5 4.5 0 0 0 25.5 4zM8 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 9h6a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2m-1-4a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m12.528 12A5.97 5.97 0 0 1 19 23a.75.75 0 0 1 1.5 0c0 1.152.433 2.204 1.146 3a4.47 4.47 0 0 0 2.96 1.483l.017.002a4.6 4.6 0 0 0 1.129-.047l.018-.004a4.5 4.5 0 0 0 1.755-.709c.472-.32.88-.728 1.2-1.2A4.47 4.47 0 0 0 29.5 23a.75.75 0 1 1 1.5 0 5.97 5.97 0 0 1-1.034 3.368 6 6 0 0 1-1.598 1.598 6 6 0 0 1-2.368.951v1.333a.75.75 0 0 1-1.5 0v-1.27a6 6 0 0 1-2.818-.98 6 6 0 0 1-1.154-1M22 19a3 3 0 1 1 6 0v4a3 3 0 1 1-6 0z"/>`,
  'regular': `<path d="M6.5 4A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28h12.255a8 8 0 0 1-1.173-2H6.5A2.5 2.5 0 0 1 4 23.5v-15A2.5 2.5 0 0 1 6.5 6h19A2.5 2.5 0 0 1 28 8.5V15c1.214.912 2 2.364 2 4V8.5A4.5 4.5 0 0 0 25.5 4zm13.303 22a6 6 0 0 0 1.88 2c.82.545 1.78.894 2.817.98v1.27a.75.75 0 0 0 1.5 0v-1.333a6 6 0 0 0 2.368-.95 6 6 0 0 0 1.598-1.599A5.97 5.97 0 0 0 31 23a.75.75 0 0 0-1.5 0q0 .474-.095.922a4.5 4.5 0 0 1-.68 1.603c-.32.472-.728.88-1.2 1.2a4.5 4.5 0 0 1-1.755.71l-.018.003a4.5 4.5 0 0 1-1.129.047l-.017-.002A4.47 4.47 0 0 1 21.646 26a4.48 4.48 0 0 1-1.146-3 .75.75 0 0 0-1.5 0c0 1.093.292 2.117.803 3M25 16a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3M9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zM8 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z"/>`
} as const;

export default function SlideMicrophoneIcon({ 
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

  const gradientId = 'slidemicrophoneicon_gradient';
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