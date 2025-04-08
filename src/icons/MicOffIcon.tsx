import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 17.768V24a8 8 0 0 0 12.704 6.472l2.356 2.356A11.45 11.45 0 0 1 24 35.25c-6.351 0-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0v-5.035c2.963-.21 5.67-1.34 7.84-3.108l8.776 8.777a1.25 1.25 0 1 0 1.768-1.768l-37-37a1.25 1.25 0 0 0-1.768 1.768zm18.258 11.186 1.842 1.843A13.94 13.94 0 0 0 38 23.75a1.25 1.25 0 1 0-2.5 0 11.45 11.45 0 0 1-1.242 5.204M16.09 10.788l15.56 15.559A8 8 0 0 0 31.999 24V12a8 8 0 0 0-15.909-1.212"/>`,
  'regular': `<path d="M16 17.768 4.616 6.384a1.25 1.25 0 1 1 1.768-1.768l37 37a1.25 1.25 0 0 1-1.768 1.768l-8.777-8.777A13.94 13.94 0 0 1 25 37.715v5.035a1.25 1.25 0 1 1-2.5 0v-5.08C15.473 36.923 10 30.976 10 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5a11.45 11.45 0 0 0 7.06-2.422l-2.356-2.356A8 8 0 0 1 16 24zm10.904 10.904L18.5 20.268V24a5.5 5.5 0 0 0 8.404 4.672M29.5 24q0 .098-.003.193l2.153 2.154c.228-.742.35-1.53.35-2.347V12a8 8 0 0 0-15.909-1.212l2.409 2.409V12a5.5 5.5 0 1 1 11 0zm4.758 4.954 1.842 1.843A13.94 13.94 0 0 0 38 23.75a1.25 1.25 0 1 0-2.5 0 11.45 11.45 0 0 1-1.242 5.204"/>`
} as const;

export default function MicOffIcon({ 
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

  const gradientId = 'micofficon_gradient';
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