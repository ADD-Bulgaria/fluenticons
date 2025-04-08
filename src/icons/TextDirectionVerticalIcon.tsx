import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 3a1 1 0 0 1 1 1v13.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V4a1 1 0 0 1 1-1m8 12a1 1 0 1 1 2 0v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l.293.293zm5-11a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1zm-8 0a1 1 0 1 0 0 2h3v.25c0 .895-.184 1.87-.642 2.586C13.939 9.49 13.255 10 12 10a1 1 0 1 0 0 2c1.945 0 3.26-.864 4.042-2.086.742-1.158.958-2.56.958-3.664V5a1 1 0 0 0-1-1z"/>`,
  'regular': `<path d="M6 3.75a.75.75 0 0 1 1.5 0v14.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72zM16.25 14a.75.75 0 0 0-.75.75v3.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-3.69a.75.75 0 0 0-.75-.75m2.5-11a.75.75 0 0 1 .75.75V7h1.25a.75.75 0 0 1 0 1.5H19.5v3.75a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m-7 1a.75.75 0 0 0 0 1.5H15V6c0 .922-.188 1.949-.682 2.72-.463.725-1.227 1.28-2.568 1.28a.75.75 0 0 0 0 1.5c1.859 0 3.095-.82 3.832-1.97.706-1.104.918-2.452.918-3.53V4.75a.75.75 0 0 0-.75-.75z"/>`
} as const;

export default function TextDirectionVerticalIcon({ 
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

  const gradientId = 'textdirectionverticalicon_gradient';
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