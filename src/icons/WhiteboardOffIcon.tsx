import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25A3.25 3.25 0 0 0 2 7.25v3.555L5.11 8.85l.146-.084a2.25 2.25 0 0 1 3.12 2.874l-.079.166-1.208 2.286-.041.093a.75.75 0 0 0 .974.957l.098-.046 1.76-.993.091-.045a.75.75 0 0 1 .735 1.292l-.085.057-1.765.996-.17.086a2.25 2.25 0 0 1-2.993-2.953l.07-.145 1.208-2.286.045-.104a.75.75 0 0 0-1.01-.933l-.097.052-3.76 2.363-.073.04-.076.032v4.2a3.25 3.25 0 0 0 3.25 3.25h13.5q.095 0 .188-.006l1.781 1.782a.75.75 0 0 0 1.061-1.061zm9.676 7.553 2.212 2.212.913-.275c.356-.106.68-.3.943-.562l4.28-4.274a2.27 2.27 0 0 0 .122-3.078l-.12-.13-.13-.121a2.27 2.27 0 0 0-3.08.119l-4.29 4.283a2.25 2.25 0 0 0-.553.903zm8.608 8.609-5.393-5.394.27-.08a3.5 3.5 0 0 0 1.285-.707l.181-.169L22 7.946v8.809c0 .592-.159 1.148-.436 1.627M7.184 4l4.779 4.78.1-.313.08-.224a3.5 3.5 0 0 1 .779-1.18L15.989 4z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25A3.25 3.25 0 0 0 2 7.25v9.505a3.25 3.25 0 0 0 3.25 3.25h13.5q.095 0 .188-.006l1.781 1.782a.75.75 0 0 0 1.061-1.061zm14.164 16.285H5.25a1.75 1.75 0 0 1-1.75-1.75v-5.493L6.909 9.12l.098-.052a.75.75 0 0 1 .964 1.037l-1.208 2.286-.07.145a2.25 2.25 0 0 0 3.163 2.867l1.765-.996.085-.057a.75.75 0 0 0-.827-1.247l-1.759.993-.098.046a.75.75 0 0 1-.933-1.05l1.208-2.286.08-.166q.03-.072.056-.146zM6.569 7.629a2.3 2.3 0 0 0-.459.221L3.5 9.49V7.25c0-.727.443-1.35 1.074-1.615zm6.387 2.145 2.21 2.21.915-.274c.356-.106.68-.3.943-.562l4.28-4.274a2.27 2.27 0 0 0 .122-3.078l-.12-.13-.13-.121a2.27 2.27 0 0 0-3.08.119l-4.29 4.283a2.25 2.25 0 0 0-.553.903zm8.608 8.608-1.134-1.134q.069-.236.07-.493V9.443L22 7.946v8.809c0 .593-.159 1.149-.436 1.627M7.182 4l1.5 1.5h5.804L15.989 4zm11.974.725a.77.77 0 0 1 1.163 1.002l-.075.086-4.28 4.273a.75.75 0 0 1-.314.188l-1.417.425.448-1.39a.75.75 0 0 1 .184-.3z"/>`
} as const;

export default function WhiteboardOffIcon({ 
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

  const gradientId = 'whiteboardofficon_gradient';
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