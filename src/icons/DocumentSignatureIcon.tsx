import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 15.25V4H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V28.397l-9.506 9.36a5 5 0 0 1-2.253 1.276l-3.234.839c-1.862.483-3.618-.408-4.47-1.872h-6.299a1.25 1.25 0 1 1 0-2.5h5.796q.032-.25.098-.503l.838-3.235a5 5 0 0 1 1.277-2.253L32.595 19H27.75A3.75 3.75 0 0 1 24 15.25m13.414-.652c-.6.29-1.16.687-1.655 1.189l-.702.713H27.75c-.69 0-1.25-.56-1.25-1.25V4.464zm5.42 2.57a3.98 3.98 0 0 0-5.652.022L23.671 30.913a3 3 0 0 0-.767 1.351l-.838 3.235c-.383 1.476.961 2.82 2.437 2.437l3.235-.839a3 3 0 0 0 1.351-.766L42.812 22.82a3.98 3.98 0 0 0 .022-5.652"/>`,
  'regular': `<path d="M8 8.25A4.25 4.25 0 0 1 12.25 4h13.336a2.25 2.25 0 0 1 1.59.659l10.04 10.04a6 6 0 0 0-1.457 1.088l-.491.499L26.5 7.518v7.732c0 .69.56 1.25 1.25 1.25h7.307L32.595 19H27.75A3.75 3.75 0 0 1 24 15.25V6.5H12.25a1.75 1.75 0 0 0-1.75 1.75v31.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-8.891l2.5-2.462V39.75A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75zm29.182 8.94a3.981 3.981 0 1 1 5.63 5.63L29.09 36.33a3 3 0 0 1-1.351.766l-3.235.839a2 2 0 0 1-.593.064h-9.672a1.25 1.25 0 1 1 0-2.5h7.828l.838-3.236a3 3 0 0 1 .767-1.352z"/>`
} as const;

export default function DocumentSignatureIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'documentsignatureicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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