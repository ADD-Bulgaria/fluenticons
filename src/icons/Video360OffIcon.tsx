import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l1.185 1.184A1.7 1.7 0 0 0 2 5.698v8.604c0 1.047.937 1.844 1.97 1.677a38 38 0 0 1 11.17-.132l2.006 2.007a.5.5 0 0 0 .708-.708zm11.14 12.556a39 39 0 0 0-.994-.09v-.905zM12 12.707v1.84a39 39 0 0 0-4 0V12a1 1 0 0 1 1-1h1.293zm-8 2.255V13a1 1 0 0 1 1-1h2v2.612a39 39 0 0 0-3 .35M5.5 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8.621 1L6.46 4.338c3.188.3 6.404.194 9.572-.317A1.7 1.7 0 0 1 18 5.698v8.604c0 .442-.167.84-.438 1.139L16 13.879v-.88a1 1 0 0 0-1-1zm.379-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M6 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.854 2.146a.5.5 0 1 0-.708.708l1.185 1.184A1.7 1.7 0 0 0 2 5.698v8.604c0 1.047.937 1.844 1.97 1.677a37.9 37.9 0 0 1 11.17-.132l2.006 2.007a.5.5 0 0 0 .708-.708l-1.185-1.184-6.124-6.124-1.383-1.383-3.157-3.157-1.144-1.144zM13 13.707v.905a39 39 0 0 0-1-.064v-1.84zM10.293 11H9a1 1 0 0 0-1 1v2.548a39 39 0 0 0-1 .064V12H5a1 1 0 0 0-1 1v1.962l-.19.03a.7.7 0 0 1-.81-.69V5.698c0-.43.385-.759.81-.69q.29.046.58.089zm3.828 1L16 13.879v-.88a1 1 0 0 0-1-1zm2.732 2.732.71.709c.27-.3.437-.697.437-1.139V5.698a1.7 1.7 0 0 0-1.97-1.677 38 38 0 0 1-9.57.317l1.088 1.089c2.883.182 5.782.042 8.642-.42a.7.7 0 0 1 .81.69v8.605a.7.7 0 0 1-.147.43M14 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function Video360OffIcon({ 
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

  const gradientId = 'video360officon_gradient';
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