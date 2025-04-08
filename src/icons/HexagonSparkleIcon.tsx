import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 15.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM12.047 3H8.105a2.25 2.25 0 0 0-1.948 1.125l-3.896 6.75a2.25 2.25 0 0 0 0 2.25l3.896 6.75A2.25 2.25 0 0 0 8.105 21h7.79a2.25 2.25 0 0 0 1.95-1.125l3.676-6.371c-.217.32-.527.545-1.02.545h-.041c-.96 0-1.23-.856-1.466-1.605l-.014-.045c-.116-.353-.547-.462-.906-.554q-.132-.032-.244-.066a1.33 1.33 0 0 1-.87-1.23 1.3 1.3 0 0 1 .18-.66 1.45 1.45 0 0 1-.68.16A1.55 1.55 0 0 1 15 8.999l-.41-1.45c-.176-.524-.674-.915-1.19-1.09l-1.4-.46c-.584-.253-.998-.895-1-1.53A1.565 1.565 0 0 1 12.047 3"/>`,
  'regular': `<path d="M15.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 15.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-4.939 9.662 3.68-6.375c-.218.322-.528.55-1.024.55h-.04c-.354 0-.614-.117-.813-.301l-3.102 5.376a.75.75 0 0 1-.65.375h-7.79a.75.75 0 0 1-.65-.375l-3.895-6.75a.75.75 0 0 1 0-.75l3.896-6.75a.75.75 0 0 1 .65-.375H11v-.031A1.565 1.565 0 0 1 12.047 3H8.105a2.25 2.25 0 0 0-1.948 1.125l-3.896 6.75a2.25 2.25 0 0 0 0 2.25l3.896 6.75A2.25 2.25 0 0 0 8.105 21h7.79a2.25 2.25 0 0 0 1.95-1.125"/>`
} as const;

export default function HexagonSparkleIcon({ 
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

  const gradientId = 'hexagonsparkleicon_gradient';
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