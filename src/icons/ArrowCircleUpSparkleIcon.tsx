import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM12 2.001c.957 0 1.883.134 2.76.385q-.175.107-.37.173l-1.34.44A1.565 1.565 0 0 0 12 4.469c.002.635.416 1.277 1 1.53l1.4.46c.516.175 1.014.566 1.19 1.09l.41 1.45a1.55 1.55 0 0 0 1.46 1.05c.236.003.47-.052.68-.16a1.3 1.3 0 0 0-.18.66c-.004.54.362 1.048.87 1.23q.111.034.244.066c.36.091.79.2.906.554l.014.045c.236.749.506 1.605 1.466 1.605q.185 0 .338-.04c-.93 4.56-4.963 7.992-9.798 7.992-5.523 0-10-4.477-10-10S6.477 2 12 2M7.47 12.28l.083.072a.75.75 0 0 0 .977-.072l2.72-2.72v6.69l.007.102A.75.75 0 0 0 12 17l.101-.007a.75.75 0 0 0 .649-.743V9.56l2.72 2.721.084.073a.75.75 0 0 0 .977-1.133l-4-4.002-.084-.072a.75.75 0 0 0-.977.072l-4 4.001-.073.084a.75.75 0 0 0 .072.977"/>`,
  'regular': `<path d="M16.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM12 2.001c.957 0 1.883.134 2.76.385q-.175.107-.37.173l-1.34.44a1.6 1.6 0 0 0-.713.508 8.5 8.5 0 1 0 8.046 9.908c.22.367.54.635 1.077.635q.185-.001.338-.041c-.93 4.56-4.963 7.992-9.798 7.992-5.523 0-10-4.477-10-10S6.477 2 12 2M7.47 12.28l.083.072a.75.75 0 0 0 .977-.072l2.72-2.72v6.69l.007.102A.75.75 0 0 0 12 17l.101-.007a.75.75 0 0 0 .649-.743V9.56l2.72 2.721.084.073a.75.75 0 0 0 .977-1.133l-4-4.002-.084-.072a.75.75 0 0 0-.977.072l-4 4.001-.073.084a.75.75 0 0 0 .072.977"/>`
} as const;

export default function ArrowCircleUpSparkleIcon({ 
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

  const gradientId = 'arrowcircleupsparkleicon_gradient';
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