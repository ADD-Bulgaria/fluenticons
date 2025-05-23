import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 16.27v-5.772a1.3 1.3 0 0 0 .87 1.228l.011.004.773.251a.58.58 0 0 1 .362.364v.002l.252.773.004.011a1.3 1.3 0 0 0 1.728.77v4.345a2.75 2.75 0 0 1-2.75 2.75H5.75A2.75 2.75 0 0 1 3 18.246v-12.5a2.75 2.75 0 0 1 2.75-2.75h6.417l-.124.04-.012.005a1.544 1.544 0 0 0 0 2.912l.011.004 1.386.45a1.84 1.84 0 0 1 1.16 1.165l.001.001.45 1.385.005.012c.09.258.249.486.456.663v6.637c0 .403.336.73.75.73a.74.74 0 0 0 .75-.73M7 9.746v6.507c0 .412.336.746.75.746s.75-.334.75-.746V9.746A.75.75 0 0 0 7.75 9a.75.75 0 0 0-.75.747m4.25 2.984v3.547a.74.74 0 0 0 .75.72c.404-.005.754-.333.75-.734v-3.548a.74.74 0 0 0-.75-.719c-.404.004-.754.332-.75.734m3.838-6.318a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 15.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`,
  'regular': `<path d="M17 9.917a1.54 1.54 0 0 1-1.5-.284v6.637l.007.099c.05.356.363.63.743.63a.74.74 0 0 0 .75-.729zm2.5 3.615v4.714c0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25v-12.5c0-.69.56-1.25 1.25-1.25H11a1.54 1.54 0 0 1 1.03-1.455l.013-.005.124-.04H5.75A2.75 2.75 0 0 0 3 5.746v12.5a2.75 2.75 0 0 0 2.75 2.75h12.5a2.75 2.75 0 0 0 2.75-2.75V13.9a1.3 1.3 0 0 1-1.5-.368M8.493 9.645a.75.75 0 0 0-.743-.646.75.75 0 0 0-.75.747v6.507l.007.101c.05.364.363.645.743.645.414 0 .75-.334.75-.746V9.746zm4.257 2.972a.75.75 0 0 0-.75-.62c-.404.003-.754.332-.75.733v3.645a.75.75 0 0 0 .75.621c.404-.004.754-.332.75-.733zm2.338-6.205a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 15.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57z"/>`
} as const;

export default function DataUsageSparkleIcon({ 
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

  const gradientId = 'datausagesparkleicon_gradient';
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