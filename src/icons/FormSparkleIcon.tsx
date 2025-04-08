import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m14.878.282.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM6.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m.5 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6 3h4.105a1.5 1.5 0 0 0-.105.5 1.42 1.42 0 0 0 1 1.34l.489.16H5.5a.5.5 0 0 0 0 1h7.333l.317 1c.09.258.25.486.46.66q.2.148.44.21a1.3 1.3 0 0 0-.05.63 1.3 1.3 0 0 0 .099.5H9.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .433-.25l.727.23q.122.05.22.14a.6.6 0 0 1 .14.23l.24.76a1.35 1.35 0 0 0 .74.79V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8 13.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m1.5-.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>`,
  'regular': `<path d="m14.878.282.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM6 3h4.105a1.5 1.5 0 0 0-.105.5c.002.172.035.342.097.5H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.703l.02.053.24.76a1.35 1.35 0 0 0 .74.79V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m-.5 2h5.989l.611.2a1 1 0 0 1 .4.23l.06.06c.112.107.2.237.26.38v.09l.013.04H5.5a.5.5 0 0 1 0-1m4 4h4.599q.055.133.141.25c.155.221.376.389.63.48l.063.02a.5.5 0 0 1-.433.25h-5a.5.5 0 0 1 0-1m-3 2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M8 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0m2.5-.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>`
} as const;

export default function FormSparkleIcon({ 
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

  const gradientId = 'formsparkleicon_gradient';
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