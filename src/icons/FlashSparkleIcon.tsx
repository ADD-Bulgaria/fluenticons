import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.603 2c-.53 0-1 .333-1.178.83l-3.321 9.323a1.75 1.75 0 0 0 1.642 2.337l1.568.006-1.269 5.669c-.33 1.477 1.487 2.459 2.541 1.371l3.959-4.086-.117-.043-1.386-.45-.011-.005a1.544 1.544 0 0 1 0-2.911l.011-.005 1.38-.448a1.84 1.84 0 0 0 1.131-1.136l.009-.026.45-1.384.004-.012a1.544 1.544 0 0 1 2.913 0l.004.012.45 1.385.008.021 2.256-2.328c.768-.793.206-2.12-.898-2.12h-3.958l1.451-4.355A1.25 1.25 0 0 0 15.056 2zm5.25 15.146a2.85 2.85 0 0 1 .686 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.93 4.067-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`,
  'regular': `<path d="M8.603 2c-.53 0-1 .333-1.178.83l-3.321 9.323a1.75 1.75 0 0 0 1.642 2.337l1.568.006-1.269 5.669c-.33 1.477 1.487 2.459 2.541 1.371l3.959-4.086-.117-.043-1.386-.45-.011-.005-.068-.025-3.454 3.565 1.473-6.578a.75.75 0 0 0-.73-.914l-2.5-.01a.25.25 0 0 1-.235-.334L8.779 3.5h5.93l-1.67 5.013a.75.75 0 0 0 .71.987h4.41l-1.307 1.35q.044.087.077.18l.004.012.45 1.385.008.021 2.256-2.328c.768-.793.206-2.12-.898-2.12h-3.958l1.451-4.355A1.25 1.25 0 0 0 15.056 2zm5.25 15.146a2.85 2.85 0 0 1 .686 1.114l.448 1.377a.544.544 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.93 4.067-.766-.248a1.58 1.58 0 0 1-.998-.998l-.25-.765a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`
} as const;

export default function FlashSparkleIcon({ 
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

  const gradientId = 'flashsparkleicon_gradient';
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