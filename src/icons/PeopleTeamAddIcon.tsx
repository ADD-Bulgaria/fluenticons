import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2-.09.007a.5.5 0 0 0-.402.402L17 14.5V17h-2.502l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-3.246-4a2.25 2.25 0 0 1 1.951 1.13A6.502 6.502 0 0 0 12.023 21l-.02-.001a4.5 4.5 0 0 1-4.501-4.501V12.25A2.25 2.25 0 0 1 9.752 10zm-6.848 0a3.24 3.24 0 0 0-.897 2.034l-.007.216v4.249c0 .847.191 1.649.533 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V12.25a2.25 2.25 0 0 1 2.096-2.245L4.25 10zm12.344 0A2.25 2.25 0 0 1 22 12.25v.56A6.48 6.48 0 0 0 17.5 11l-.243.005A3.3 3.3 0 0 0 16.599 10zM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2-.09.007a.5.5 0 0 0-.402.402L17 14.5V17h-2.502l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403zm-3.246-4a2.25 2.25 0 0 1 1.951 1.13 6.4 6.4 0 0 0-1.518.509.74.74 0 0 0-.433-.139H9.752a.75.75 0 0 0-.75.75v4.249c0 1.41.974 2.594 2.286 2.915a6.4 6.4 0 0 0 .735 1.587l-.02-.001a4.5 4.5 0 0 1-4.501-4.501V12.25A2.25 2.25 0 0 1 9.752 10zm-6.848 0a3.24 3.24 0 0 0-.817 1.5H4.25a.75.75 0 0 0-.75.75v2.749a2.5 2.5 0 0 0 3.082 2.433c.085.504.24.985.453 1.432Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V12.25a2.25 2.25 0 0 1 2.096-2.245L4.25 10zm12.344 0A2.25 2.25 0 0 1 22 12.25v.56A6.48 6.48 0 0 0 17.5 11l-.245.005A3.2 3.2 0 0 0 16.6 10zM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m13 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6.5-1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-6.5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`
} as const;

export default function PeopleTeamAddIcon({ 
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

  const gradientId = 'peopleteamaddicon_gradient';
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