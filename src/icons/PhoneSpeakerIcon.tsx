import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.75 2A2.25 2.25 0 0 1 16 4.25v8.673c-.368.051-.73.224-1.027.54L13.533 15H12a1 1 0 0 0-1 1v2H8.75a.75.75 0 0 0 0 1.5h2.384A1 1 0 0 0 12 20h1.533l1.44 1.536.061.062A2.24 2.24 0 0 1 13.75 22h-7.5A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm8.393 12.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 1 0-.96 1.152c.127.106.353.357.587.747.401.67.643 1.475.643 2.427s-.242 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 1 0 .96 1.152c.248-.207.585-.58.913-1.128.536-.893.857-1.962.857-3.198s-.32-2.305-.857-3.198m-2.269 1.095a3.1 3.1 0 0 0-.674-.747.75.75 0 0 0-.9 1.2c.062.046.19.175.326.379.234.35.374.77.374 1.271s-.14.92-.374 1.271a1.7 1.7 0 0 1-.326.379l-.084.073a.75.75 0 0 0 .984 1.127c.189-.141.435-.388.674-.747A3.73 3.73 0 0 0 20.5 17.5c0-.812-.235-1.517-.626-2.104M17 14.75a.75.75 0 0 0-1.314-.494L14.16 16h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 20.25z"/>`,
  'regular': `<path d="M13.75 2A2.25 2.25 0 0 1 16 4.25v8.673c-.368.051-.73.224-1.027.54l-.473.506V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.8.8 0 0 0 .221-.033l1.002 1.069.061.062A2.24 2.24 0 0 1 13.75 22h-7.5A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zM8.749 17.504 11 17.5V19l-2.249.004a.75.75 0 0 1-.002-1.5m13.394-3.202c-.328-.547-.665-.921-.913-1.128a.75.75 0 1 0-.96 1.152c.127.106.353.357.587.747.401.67.643 1.475.643 2.427s-.242 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 1 0 .96 1.152c.248-.207.585-.58.913-1.128.536-.893.857-1.962.857-3.198s-.32-2.305-.857-3.198m-2.269 1.095a3.1 3.1 0 0 0-.674-.747.75.75 0 0 0-.9 1.2c.062.046.19.175.326.379.234.35.374.77.374 1.271s-.14.92-.374 1.271a1.7 1.7 0 0 1-.326.379l-.084.073a.75.75 0 0 0 .984 1.127c.189-.141.435-.388.674-.747A3.73 3.73 0 0 0 20.5 17.5c0-.812-.235-1.517-.626-2.104M17 14.75a.75.75 0 0 0-1.314-.494L14.16 16h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 20.25z"/>`
} as const;

export default function PhoneSpeakerIcon({ 
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

  const gradientId = 'phonespeakericon_gradient';
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