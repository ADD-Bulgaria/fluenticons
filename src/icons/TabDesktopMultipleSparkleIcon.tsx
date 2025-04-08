import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m19 11.827.074.018c.36.091.79.2.906.554l.014.045c.236.749.506 1.605 1.466 1.605.212 0 .39-.041.542-.114v3.315a4.75 4.75 0 0 1-4.75 4.75h-8a3.25 3.25 0 0 1-3.24-3h8.739A4.25 4.25 0 0 0 19 14.75zm-1 2.923A3.25 3.25 0 0 1 14.75 18h-9.5A3.25 3.25 0 0 1 2 14.75v-9.5A3.25 3.25 0 0 1 5.25 2H8.5v3.25a2.25 2.25 0 0 0 2.25 2.25h4.823l.017.049.41 1.45a1.55 1.55 0 0 0 1.46 1.05c.185.002.368-.03.54-.097zM13.003 6H10.75a.75.75 0 0 1-.75-.75V2h4.75q.22 0 .433.029a1.84 1.84 0 0 1-.793.53l-1.34.44A1.565 1.565 0 0 0 12 4.469c.002.635.416 1.277 1 1.53zm3.085.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`,
  'regular': `<path d="M6.01 19a3.25 3.25 0 0 0 3.24 3h8A4.75 4.75 0 0 0 22 17.25v-3.314a1.2 1.2 0 0 1-.54.114c-.448 0-.746-.187-.96-.463v3.663a3.25 3.25 0 0 1-3.25 3.25h-8A1.75 1.75 0 0 1 7.518 19zM18 10.226v-.274a1.55 1.55 0 0 1-1.5-.243v5.041a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75H8.5v1.75a2.25 2.25 0 0 0 2.25 2.25h4.823c-.19-.5-.673-.871-1.173-1.041L13.003 6H10.75a.75.75 0 0 1-.75-.75V3.5h2.343c.18-.224.422-.4.707-.501l1.34-.44a1.84 1.84 0 0 0 .793-.53A3 3 0 0 0 14.75 2h-9.5A3.25 3.25 0 0 0 2 5.25v9.5A3.25 3.25 0 0 0 5.25 18h9.5A3.25 3.25 0 0 0 18 14.75v-3.883a1.3 1.3 0 0 1 0-.64m-1.912-3.814a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`
} as const;

export default function TabDesktopMultipleSparkleIcon({ 
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

  const gradientId = 'tabdesktopmultiplesparkleicon_gradient';
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