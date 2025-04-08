import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2"/><path d="M22.962 21.869a1 1 0 0 0 1.344-.3 10.01 10.01 0 0 0 .3-10.665 1 1 0 1 0-1.72 1.021 8.01 8.01 0 0 1-.24 8.528 1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473 1 1 0 0 1-.828 1.559"/><path d="M22.962 21.869a1 1 0 0 0 1.344-.3 10.01 10.01 0 0 0 .3-10.665 1 1 0 1 0-1.72 1.021 8.01 8.01 0 0 1-.24 8.528 1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473 1 1 0 0 1-.828 1.559"/><path d="M22.962 21.869a1 1 0 0 0 1.344-.3 10.01 10.01 0 0 0 .3-10.665 1 1 0 1 0-1.72 1.021 8.01 8.01 0 0 1-.24 8.528 1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473 1 1 0 0 1-.828 1.559"/><path d="M21.518 7.876a.82.82 0 0 0-.526.177l-1.056.842c-.638.507-1.494 1.192-2.368 1.9s-1.77 1.437-2.485 2.037c-.357.3-.673.568-.92.786a7 7 0 0 0-.563.538 2.463 2.463 0 0 0 3.745 3.2 7 7 0 0 0 .443-.64c.176-.278.393-.632.632-1.032.48-.8 1.061-1.798 1.623-2.773s1.108-1.927 1.508-2.636l.484-.853.182-.322a.82.82 0 0 0-.7-1.224"/>`,
  'filled': `<path d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16m15.56-7.848a1 1 0 1 0 .388-1.962 10 10 0 0 0-10.24 15.4 1 1 0 1 0 1.657-1.118 8 8 0 0 1 8.196-12.32m5.676 2.403a1 1 0 0 0-.35 1.37 8 8 0 0 1-.24 8.534 1 1 0 1 0 1.661 1.113 10 10 0 0 0 .3-10.666 1 1 0 0 0-1.37-.351m-2.244-2.502-1.056.842c-.638.507-1.494 1.192-2.368 1.9s-1.77 1.437-2.485 2.037c-.357.3-.673.568-.92.786a7 7 0 0 0-.563.538 2.463 2.463 0 0 0 3.745 3.2 7 7 0 0 0 .443-.64c.176-.278.393-.632.632-1.032.48-.8 1.061-1.798 1.623-2.773s1.108-1.927 1.508-2.636l.484-.853.182-.322a.82.82 0 0 0-1.225-1.047"/>`,
  'regular': `<path d="M22.962 21.869a1 1 0 0 0 1.344-.3 10.01 10.01 0 0 0 .3-10.665 1 1 0 1 0-1.72 1.021 8.01 8.01 0 0 1-.24 8.528 1 1 0 0 0 .316 1.416m-14.424.163a1 1 0 0 1-.83-.44A10 10 0 0 1 17.948 6.19a1 1 0 1 1-.387 1.962A8.008 8.008 0 0 0 8 16a7.96 7.96 0 0 0 1.366 4.473 1 1 0 0 1-.828 1.559m12.98-14.156a.82.82 0 0 0-.526.177l-1.056.842c-.638.507-1.494 1.192-2.368 1.9s-1.77 1.437-2.485 2.037c-.357.3-.673.568-.92.786a7 7 0 0 0-.563.538 2.463 2.463 0 0 0 3.745 3.2 7 7 0 0 0 .443-.64c.176-.278.393-.632.632-1.032.48-.8 1.061-1.798 1.623-2.773s1.108-1.927 1.508-2.636l.484-.853.182-.322a.82.82 0 0 0-.7-1.224M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2M4 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12S4 22.627 4 16"/>`
} as const;

export default function GaugeIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'gaugeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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