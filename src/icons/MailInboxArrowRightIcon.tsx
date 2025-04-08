import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.499 4a6.5 6.5 0 0 0-.423 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V14H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.5 0A.75.75 0 0 1 15 14h4.5l.001-1.733a6.5 6.5 0 0 0 1.5-1.077L21 18.75A3.25 3.25 0 0 1 17.75 22H6.25A3.25 3.25 0 0 1 3 18.75V7.25A3.25 3.25 0 0 1 6.25 4zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.216 2.589-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07L18.292 6H13l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402L13 7h5.292l-1.646 1.646-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.541-2.548.033-.048.034-.067.021-.063.015-.082L20 6.5l-.003-.053-.014-.075-.03-.083-.042-.074-.045-.056-2.512-2.513-.07-.057a.5.5 0 0 0-.568 0"/>`,
  'regular': `<path d="M10.499 4a6.5 6.5 0 0 0-.422 1.5H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 7.25V14H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.495.154l.005-.154a.75.75 0 0 1 .648-.743L15 14h4.5l.001-1.733a6.5 6.5 0 0 0 1.5-1.077L21 18.75a3.25 3.25 0 0 1-3.066 3.245L17.75 22H6.25a3.25 3.25 0 0 1-3.245-3.066L3 18.75V7.25a3.25 3.25 0 0 1 3.066-3.245L6.25 4zM19.5 15.5h-3.825a3.75 3.75 0 0 1-3.475 2.995l-.2.005a3.75 3.75 0 0 1-3.675-3H4.5v3.25a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.216 2.589-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07L18.292 6H13l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402L13 7h5.292l-1.646 1.646-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.541-2.548.033-.048.034-.067.021-.063.015-.082L20 6.5l-.003-.053-.014-.075-.03-.083-.042-.074-.045-.056-2.512-2.513-.07-.057a.5.5 0 0 0-.568 0"/>`
} as const;

export default function MailInboxArrowRightIcon({ 
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

  const gradientId = 'mailinboxarrowrighticon_gradient';
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