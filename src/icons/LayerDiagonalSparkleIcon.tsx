import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.088 7.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 2.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-12.8-9.077a2.25 2.25 0 0 1 2.95 1.572L13.05 4c-.52.185-.9.618-1.014 1.14L7.474 6.79A3.75 3.75 0 0 0 5 10.317v5.554a2.25 2.25 0 0 1-3-2.122V7.667a3.25 3.25 0 0 1 2.144-3.056zm-3.17 5.595 4.346-1.573A1.7 1.7 0 0 0 13 7l1.4.46c.443.15.873.46 1.097.876L11.144 9.91A3.25 3.25 0 0 0 9 12.966v5.905a2.25 2.25 0 0 1-3-2.122v-6.432A2.75 2.75 0 0 1 7.814 7.73m13.646 7.32c.211 0 .389-.042.54-.114v2.1a2.25 2.25 0 0 1-1.484 2.115l-7.5 2.714A2.25 2.25 0 0 1 10 19.749v-6.783a2.25 2.25 0 0 1 1.484-2.116L15.8 9.29l.201.71a1.55 1.55 0 0 0 1.46 1.05c.236.003.47-.052.68-.16a1.3 1.3 0 0 0-.18.66c-.004.54.362 1.048.87 1.23.073.023.157.044.244.066.36.091.79.2.906.554l.014.045c.236.749.506 1.605 1.466 1.605"/>`,
  'regular': `<path d="M16.088 7.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 2.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zm-12.8-9.077a2.25 2.25 0 0 1 2.95 1.572L13.05 4a1.6 1.6 0 0 0-.55.332v-.08a.75.75 0 0 0-1.005-.704l-6.84 2.475A1.75 1.75 0 0 0 3.5 7.667v6.082a.75.75 0 0 0 1.005.705L5 14.275v1.595a2.25 2.25 0 0 1-3-2.12V7.666A3.25 3.25 0 0 1 4.144 4.61zm-3.17 5.595 4.346-1.573A1.7 1.7 0 0 0 13 7l.652.214-5.327 1.928a1.25 1.25 0 0 0-.825 1.176v6.432a.75.75 0 0 0 1.005.705l.495-.18v1.596a2.25 2.25 0 0 1-3-2.122v-6.432A2.75 2.75 0 0 1 7.814 7.73m3.67 3.12L15.8 9.288l.201.71c.088.257.24.481.435.655l-4.44 1.607a.75.75 0 0 0-.495.705v6.783a.75.75 0 0 0 1.005.705l7.5-2.714a.75.75 0 0 0 .495-.705v-2.448c.214.276.512.463.96.463.211 0 .389-.042.54-.114v2.1a2.25 2.25 0 0 1-1.484 2.115l-7.5 2.714A2.25 2.25 0 0 1 10 19.749v-6.783a2.25 2.25 0 0 1 1.484-2.116"/>`
} as const;

export default function LayerDiagonalSparkleIcon({ 
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

  const gradientId = 'layerdiagonalsparkleicon_gradient';
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