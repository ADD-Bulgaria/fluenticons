import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.393 4.631a3.205 3.205 0 0 1 4.857-2.14V8h-.813a2 2 0 1 0-.205 1.5h1.018v11.755a3.74 3.74 0 0 1-5.875-2.107l-.014-.003A4.106 4.106 0 0 1 2.933 12.5H7.25a.5.5 0 0 1 .5.5v.645a2 2 0 1 0 1.5 0V13a2 2 0 0 0-2-2H3.508a3.24 3.24 0 0 1-.511-1.75v-.595a3.845 3.845 0 0 1 3.26-3.8l.098-.015zm6.357 16.624a3.74 3.74 0 0 0 5.875-2.107l.014-.003a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015-.038-.209A3.205 3.205 0 0 0 12.75 2.49V15.5h.75c.69 0 1.25-.56 1.25-1.25v-1.895a2 2 0 1 1 1.5 0v1.895A2.75 2.75 0 0 1 13.5 17h-.75zM8 8.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m.5 6.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m6.5-4.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0"/>`,
  'regular': `<path d="M9.545 2a3.205 3.205 0 0 0-3.152 2.631l-.038.209-.098.015a3.845 3.845 0 0 0-3.26 3.8v.595c0 .918.38 1.746.992 2.337a4.106 4.106 0 0 0 1.372 7.557l.014.003A3.741 3.741 0 0 0 12 20.507a3.741 3.741 0 0 0 6.625-1.36l.014-.002a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015-.038-.209a3.205 3.205 0 0 0-5.606-1.489A3.2 3.2 0 0 0 9.545 2m3.205 13.5V5.205l-.001-.085a1.705 1.705 0 0 1 3.38-.22l.133.734a.75.75 0 0 0 .624.607l.626.097A2.345 2.345 0 0 1 19.5 8.655v.595A1.75 1.75 0 0 1 17.75 11h-.313q.062-.24.063-.5a2 2 0 1 0-2.75 1.855v1.895c0 .69-.56 1.25-1.25 1.25zm3.5-3.145.036-.016a.75.75 0 0 0 .464.161h1.143a2.607 2.607 0 0 1 .474 5.17l-.503.092a.75.75 0 0 0-.597.578l-.086.397a2.241 2.241 0 0 1-4.431-.478V17h.75a2.75 2.75 0 0 0 2.75-2.75zM11.248 5.12l-.001.085V7.2q0 .035.003.069V8h-.813a2 2 0 1 0-.205 1.5h1.018v8.759a2.241 2.241 0 0 1-4.43.478l-.087-.397a.75.75 0 0 0-.597-.578l-.503-.092a2.606 2.606 0 0 1 .473-5.17H7.25a.5.5 0 0 1 .5.5v.645a2 2 0 1 0 1.5 0V13a2 2 0 0 0-2-2H6.247a1.75 1.75 0 0 1-1.75-1.75v-.595c0-1.157.844-2.141 1.988-2.317l.626-.097a.75.75 0 0 0 .624-.607l.133-.734a1.705 1.705 0 0 1 3.38.22M8.5 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M8 15.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m7.5-5.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"/>`
} as const;

export default function BrainCircuitIcon({ 
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

  const gradientId = 'braincircuiticon_gradient';
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