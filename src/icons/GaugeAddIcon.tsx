import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 18a8 8 0 1 0-7.996-7.746 5.5 5.5 0 0 1 2.05-1.062 6 6 0 0 1 8.127-4.783.5.5 0 0 1-.363.932 5.002 5.002 0 0 0-6.72 3.673 5.48 5.48 0 0 1 3.573.99c.06-.169.151-.331.275-.477.072-.084.203-.204.343-.328.15-.132.343-.296.56-.479a236 236 0 0 1 2.957-2.4l.275-.219.369-.293a.5.5 0 0 1 .746.637l-.11.196-.686 1.206-.23.402-.298.518-.422.727c-.2.345-.395.675-.567.963a30 30 0 0 1-.492.793l-.074.108a1.5 1.5 0 0 1-.932.613c.393.757.615 1.617.615 2.529 0 1.328-.47 2.546-1.254 3.496Q9.873 18 10 18m5.59-10.182a6 6 0 0 1-1.347 6.425.5.5 0 1 1-.707-.707 5 5 0 0 0 1.123-5.354.5.5 0 0 1 .932-.364M8 18.242a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.146-6.096A.5.5 0 0 0 5 12.5V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.146-.354"/>`,
  'regular': `<path d="M10.406 16.988a7 7 0 1 0-7.394-7.394q-.543.276-1.008.66L2 10a8 8 0 1 1 7.746 7.996q.384-.466.66-1.008m2.06-11.931a.5.5 0 0 1-.647.284 5 5 0 0 0-6.721 3.673 5.5 5.5 0 0 0-1.044.178 6 6 0 0 1 8.127-4.783.5.5 0 0 1 .285.648M8.67 10.005a5.5 5.5 0 0 1 1.715 1.966 1.5 1.5 0 0 0 .842-.496c.072-.084.17-.232.27-.39.107-.17.239-.385.385-.628.292-.488.646-1.096.989-1.69a301 301 0 0 0 1.213-2.126l.111-.196a.5.5 0 0 0-.746-.637l-.177.14a335 335 0 0 0-1.91 1.531c-.532.431-1.078.877-1.513 1.242-.218.182-.41.346-.56.478a4 4 0 0 0-.344.328 1.5 1.5 0 0 0-.275.479m6.273-2.47a.5.5 0 0 1 .647.284 6 6 0 0 1-1.348 6.424.5.5 0 1 1-.707-.707 5 5 0 0 0 1.123-5.354.5.5 0 0 1 .284-.648M8 18.241a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.146-6.096A.5.5 0 0 0 5 12.5V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6v-1.5a.5.5 0 0 0-.146-.354"/>`
} as const;

export default function GaugeAddIcon({ 
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

  const gradientId = 'gaugeaddicon_gradient';
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