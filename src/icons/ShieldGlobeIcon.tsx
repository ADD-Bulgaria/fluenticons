import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.75 5a.75.75 0 0 0-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 0 0 .55 0C18.042 19.676 21 16 21 11V5.75a.75.75 0 0 0-.75-.75c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 0 0-.9 0C9.008 4.057 6.413 5 3.75 5m6.324 10.507c-.29-.77-.487-1.718-.551-2.757H8.07a4 4 0 0 0 2.004 2.757m1.524-.239c-.28-.614-.498-1.488-.572-2.518h1.948c-.074 1.03-.292 1.904-.572 2.518-.169.372-.311.561-.402.655-.09-.094-.233-.283-.402-.655m0-6.536c-.28.614-.498 1.488-.572 2.518h1.948c-.074-1.03-.292-1.904-.572-2.518-.169-.372-.311-.561-.402-.655-.09.094-.233.283-.402.655m2.328 6.775c.29-.77.486-1.718.55-2.757h1.454a4 4 0 0 1-2.004 2.757m.55-4.257h1.454a4 4 0 0 0-2.004-2.757c.29.77.486 1.718.55 2.757m-6.406 0h1.453c.064-1.04.26-1.986.55-2.757A4 4 0 0 0 8.07 11.25M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/>`,
  'regular': `<path d="M3.75 5a.75.75 0 0 0-.75.75V11c0 5.001 2.958 8.676 8.725 10.948a.75.75 0 0 0 .55 0C18.042 19.676 21 16 21 11V5.75a.75.75 0 0 0-.75-.75c-2.663 0-5.258-.943-7.8-2.85a.75.75 0 0 0-.9 0C9.008 4.057 6.413 5 3.75 5m.75 6V6.478c2.577-.152 5.08-1.09 7.5-2.8 2.42 1.71 4.923 2.648 7.5 2.8V11c0 4.256-2.453 7.379-7.5 9.442C6.953 18.379 4.5 15.256 4.5 11m5.574 4.507c-.29-.77-.487-1.718-.551-2.757H8.07a4 4 0 0 0 2.004 2.757m1.524-.239c.169.372.311.561.402.655.09-.094.233-.283.402-.655.28-.614.498-1.488.572-2.518h-1.948c.074 1.03.292 1.904.572 2.518m0-6.536c-.28.614-.498 1.488-.572 2.518h1.948c-.074-1.03-.292-1.904-.572-2.518-.169-.372-.311-.561-.402-.655-.09.094-.233.283-.402.655m2.328 6.775a4 4 0 0 0 2.004-2.757h-1.453c-.065 1.04-.26 1.986-.55 2.757m.55-4.257h1.454a4 4 0 0 0-2.004-2.757c.29.77.486 1.718.55 2.757m-6.406 0h1.453c.064-1.04.26-1.986.55-2.757A4 4 0 0 0 8.07 11.25M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/>`
} as const;

export default function ShieldGlobeIcon({ 
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

  const gradientId = 'shieldglobeicon_gradient';
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