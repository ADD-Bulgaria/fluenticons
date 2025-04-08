import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21l-5.773.001A6.47 6.47 0 0 0 13 17.5c0-1.515-.519-2.91-1.39-4.013l.07.01.07.003h4.498l.102-.007a.75.75 0 0 0 0-1.486L16.248 12H12.5V6.75l-.007-.102a.75.75 0 0 0-1.486 0L11 6.75v6l.005.064A6.48 6.48 0 0 0 6.5 11a6.47 6.47 0 0 0-3.501 1.023L3 6.25A3.25 3.25 0 0 1 6.25 3zM6.5 14.003c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.317.677l-.1.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95"/>`,
  'regular': `<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21l-5.773.001a6.5 6.5 0 0 0 .71-1.5l5.063-.001a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v5.064a6.5 6.5 0 0 0-1.501.709L3 6.25A3.25 3.25 0 0 1 6.25 3zM6.5 14.003c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.317.677l-.1.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95M11.75 6a.75.75 0 0 1 .743.648l.007.102V12h3.748a.75.75 0 0 1 .102 1.493l-.102.007H11.75a.75.75 0 0 1-.743-.648L11 12.75v-6a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function ShiftsQuestionMarkIcon({ 
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

  const gradientId = 'shiftsquestionmarkicon_gradient';
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