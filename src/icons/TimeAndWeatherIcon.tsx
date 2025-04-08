import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.997 18.532a1 1 0 0 1 .993.883l.007.117v1.456a1 1 0 0 1-1.993.116l-.007-.116v-1.456a1 1 0 0 1 1-1m6.036-1.932 1.03 1.03a1 1 0 0 1-1.415 1.413l-1.029-1.029a1 1 0 0 1 1.414-1.414m-10.66 0a1 1 0 0 1 0 1.414l-1.028 1.03a1 1 0 0 1-1.415-1.415l1.03-1.03a1 1 0 0 1 1.414 0M12.01 6.472a5.525 5.525 0 1 1 0 11.05 5.525 5.525 0 0 1 0-11.05M11.25 9a.75.75 0 0 0-.743.648l-.007.102v3.004l.007.102a.75.75 0 0 0 .642.641l.101.007h2l.102-.007a.75.75 0 0 0 .641-.641l.007-.102-.007-.102a.75.75 0 0 0-.641-.641l-.102-.007H12V9.75l-.006-.102A.75.75 0 0 0 11.25 9m9.728 2.018a1 1 0 0 1 .116 1.993l-.117.007h-1.455a1 1 0 0 1-.117-1.993l.117-.007zM4.479 10.99a1 1 0 0 1 .117 1.993l-.117.007H3.023a1 1 0 0 1-.116-1.993l.116-.007zM6.25 4.874l.095.083 1.029 1.03a1 1 0 0 1-1.32 1.497L5.96 7.4 4.93 6.371a1 1 0 0 1 1.32-1.497m12.813.083a1 1 0 0 1 .083 1.32l-.083.094-1.03 1.03a1 1 0 0 1-1.497-1.32l.083-.095 1.03-1.03a1 1 0 0 1 1.414 0M12 2.013a1 1 0 0 1 .993.883l.007.117v1.455a1 1 0 0 1-1.994.117L11 4.468V3.013a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M11.996 19.01a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102l-.007-.102v-1.5a.75.75 0 0 1 .75-.75m6.022-2.073 1.06 1.061a.75.75 0 0 1-1.06 1.06l-1.061-1.06a.75.75 0 1 1 1.06-1.06m-10.984 0a.75.75 0 0 1 0 1.061l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0M12 6.476a5.525 5.525 0 1 1 0 11.05 5.525 5.525 0 0 1 0-11.05m0 1.5a4.025 4.025 0 1 0 0 8.05 4.025 4.025 0 0 0 0-8.05M11.25 9a.75.75 0 0 1 .743.648L12 9.75v2.253h1.25a.75.75 0 0 1 .743.649l.006.102a.75.75 0 0 1-.648.743l-.102.007h-2a.75.75 0 0 1-.742-.649l-.007-.101V9.75a.75.75 0 0 1 .75-.75m10 2.268a.75.75 0 0 1 .101 1.493l-.101.007h-1.5a.75.75 0 0 1-.102-1.493l.102-.007zm-17-.029a.75.75 0 0 1 .102 1.493l-.102.007h-1.5a.75.75 0 0 1-.102-1.493l.102-.007zm1.64-6.37.084.072L7.034 6a.75.75 0 0 1-.976 1.134l-.084-.073-1.06-1.06a.75.75 0 0 1 .976-1.134m13.188.072a.75.75 0 0 1 .073.976l-.073.084-1.06 1.061a.75.75 0 0 1-1.134-.976L16.957 6l1.06-1.06a.75.75 0 0 1 1.061 0M12 1.989a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102l-.007-.102v-1.5a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function TimeAndWeatherIcon({ 
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

  const gradientId = 'timeandweathericon_gradient';
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