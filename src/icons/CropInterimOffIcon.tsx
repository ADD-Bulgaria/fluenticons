import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.064 1.065a2.5 2.5 0 0 0 1.254 3.467l-.816 5.312A2.501 2.501 0 1 0 6.499 17h7.006a2.496 2.496 0 0 0 3.153.718l1.81 1.81c-.83.61-1.855.971-2.963.971a5 5 0 0 1-2.998-.997l.744-.002.101-.006A.75.75 0 0 0 13.251 18h-2.505l-.102.007a.75.75 0 0 0-.648.743v2.499l.007.102a.75.75 0 0 0 .743.648l.102-.007a.75.75 0 0 0 .648-.743v-.632A6.48 6.48 0 0 0 15.505 22a6.47 6.47 0 0 0 4.033-1.402l1.182 1.183a.75.75 0 0 0 1.061-1.061zm10.006 12.127c-.18.345-.281.737-.281 1.153H7l-.007-.185a2.5 2.5 0 0 0-1.752-2.203l.795-5.166q.331-.073.623-.226zM7.182 4l1.5 1.5h3.304l.006.174a2.5 2.5 0 0 0 1.972 2.275l.514 3.347 1.795 1.796-.813-5.285A2.5 2.5 0 1 0 12.489 4zm13.07 13.071 1.155 1.155a6.502 6.502 0 0 0-4.736-9.121l.247 1.598a5 5 0 0 1 3.335 6.368"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.064 1.065A2.5 2.5 0 0 0 4.54 7.813l-.817 5.31A2.501 2.501 0 1 0 6.5 17.001h7.006a2.496 2.496 0 0 0 3.153.718l1.81 1.81c-.83.61-1.855.971-2.963.971a5 5 0 0 1-2.997-.997l.743-.002.101-.006A.75.75 0 0 0 13.251 18h-2.505l-.102.007a.75.75 0 0 0-.648.743v2.499l.007.102a.75.75 0 0 0 .743.648l.102-.007a.75.75 0 0 0 .648-.743v-.633A6.48 6.48 0 0 0 15.504 22a6.47 6.47 0 0 0 4.033-1.402l1.182 1.183a.75.75 0 0 0 1.061-1.061zm10.006 12.127c-.18.345-.281.737-.281 1.153H7l-.007-.185a2.5 2.5 0 0 0-1.751-2.203l.795-5.166q.33-.073.622-.226zM4.5 14.5a1 1 0 0 1 .156.012l.089.018.123.04.108.05a1 1 0 0 1 .517.763l.007.117-.007.117a1 1 0 0 1-.993.883l-.117-.007a1 1 0 0 1 0-1.986zM7.182 4l1.5 1.5h3.304l.006.174a2.5 2.5 0 0 0 1.97 2.275l.515 3.347 1.797 1.797-.813-5.286A2.5 2.5 0 1 0 12.489 4zm6.582 2.196a1 1 0 0 1 .605-1.685l.117-.007a1 1 0 0 1 .152.011l.083.017.146.05.105.054V4.63a1 1 0 0 1 .295 1.5l-.077.084-.109.093-.094.063-.087.044-.125.047-.17.036-.119.007-.123-.008-.078-.012-.092-.024-.108-.04-.091-.046-.086-.054-.12-.1zm6.489 10.875 1.154 1.155a6.502 6.502 0 0 0-4.736-9.121l.247 1.598a5 5 0 0 1 3.335 6.368"/>`
} as const;

export default function CropInterimOffIcon({ 
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

  const gradientId = 'cropinterimofficon_gradient';
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