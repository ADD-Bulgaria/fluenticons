import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.5 5.5 0 0 0 14.5 11m-10-7h4.707a5.5 5.5 0 0 0 2.235 6.072L10 10.92 2.015 6.223A2.5 2.5 0 0 1 4.5 4M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m5.396-2.604a.5.5 0 0 1 .708 0l1.75 1.75a.5.5 0 0 1 .002.705l-1.752 1.753a.5.5 0 0 1-.708-.708l.897-.896H14.75A1.75 1.75 0 0 0 13 7.25v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.543l-.897-.896a.5.5 0 0 1 0-.708"/>`,
  'regular': `<path d="M17 14.5v-4.1a5.5 5.5 0 0 0 1-.657V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h4.707a5.5 5.5 0 0 0-.185 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118 1.441-.848q.488.327 1.043.547l-2.23 1.312a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5m-7-9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m5.396-2.604a.5.5 0 0 1 .708 0l1.75 1.75a.5.5 0 0 1 .002.705l-1.752 1.753a.5.5 0 0 1-.708-.708l.897-.896H14.75A1.75 1.75 0 0 0 13 7.25v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.543l-.897-.896a.5.5 0 0 1 0-.708"/>`
} as const;

export default function MailArrowForwardIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'mailarrowforwardicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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