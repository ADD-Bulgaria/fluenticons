import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 5A1.5 1.5 0 0 0 3 6.5v6A1.5 1.5 0 0 0 4.5 14h6.55a8 8 0 0 1-.044-.603v-.008l-.004-.255v-2.259c0-.693.54-1.375 1.35-1.375.743 0 1.454-.303 2.172-1.073A1.34 1.34 0 0 1 15.496 8h.01c.364.002.716.153.972.427q.261.28.522.48V6.5A1.5 1.5 0 0 0 15.5 5zm-2 10h8.737q.141.523.371 1H2.5a.5.5 0 0 1 0-1m13.001 3a.3.3 0 0 1-.11-.02q-1.038-.37-1.761-.979L13.628 17a4.4 4.4 0 0 1-.876-.999L12.75 16q-.694-1.093-.745-2.635l-.004-.24v-2.25c0-.207.157-.375.35-.375 1.07 0 2.033-.458 2.903-1.39A.34.34 0 0 1 15.5 9c.089 0 .178.037.246.11.87.932 1.832 1.39 2.903 1.39.193 0 .35.168.35.375v2.25l-.004.24q-.05 1.542-.745 2.635v.001q-.356.56-.878.999v.001q-.724.61-1.762.98a.3.3 0 0 1-.11.019"/>`,
  'regular': `<path d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1.907a4.4 4.4 0 0 1-.522-.48 1.35 1.35 0 0 0-.478-.33V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6.002v.134l.004.255v.008q.01.307.043.603H5a2 2 0 0 1-2-2zm8.609 9a5.7 5.7 0 0 1-.372-1H2.5a.5.5 0 0 0 0 1zm3.892 2a.3.3 0 0 1-.11-.02q-1.038-.37-1.761-.979L13.628 17a4.4 4.4 0 0 1-.876-.999L12.75 16q-.694-1.093-.745-2.635l-.004-.24v-2.25c0-.207.157-.375.35-.375 1.07 0 2.033-.458 2.903-1.39A.34.34 0 0 1 15.5 9c.089 0 .178.037.246.11.87.932 1.832 1.39 2.903 1.39.193 0 .35.168.35.375v2.25l-.004.24q-.05 1.542-.745 2.635v.001q-.356.56-.878.999v.001q-.724.61-1.762.98a.3.3 0 0 1-.11.019"/>`
} as const;

export default function LaptopShieldIcon({ 
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

  const gradientId = 'laptopshieldicon_gradient';
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