import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v3.02a1.5 1.5 0 0 0-1.125.88 1.5 1.5 0 0 0-2.79.104l-.335.955-.334-.955a1.5 1.5 0 0 0-2.791-.104 1.5 1.5 0 0 0-2.79.104L5 14.389V12.5a1.5 1.5 0 0 0-1-1.415V3.5A1.5 1.5 0 0 1 5.5 2zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25zM11.75 18a.5.5 0 0 0 .472-.335l1.75-5a.5.5 0 1 0-.944-.33l-1.278 3.652-1.278-3.652a.5.5 0 1 0-.944.33l1.75 5a.5.5 0 0 0 .472.335m4.972-5.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33l.233-.665h2.09l.233.665a.5.5 0 1 0 .944-.33zM16.945 16h-1.39l.695-1.986zM3.5 12a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 .5-.5m3.75 0a.5.5 0 0 1 .472.335l1.75 5a.5.5 0 1 1-.944.33L8.295 17h-2.09l-.233.665a.5.5 0 1 1-.944-.33l1.75-5A.5.5 0 0 1 7.25 12m0 2.014L6.555 16h1.39z"/>`,
  'regular': `<path d="M6 2a2 2 0 0 0-2 2v7.086A1.5 1.5 0 0 1 5 12.5V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v3.67c.228-.343.59-.58 1-.65V7.415a1.5 1.5 0 0 0-.44-1.06L11.646 2.44a1.5 1.5 0 0 0-1.06-.44zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207zM11.75 18a.5.5 0 0 0 .472-.335l1.75-5a.5.5 0 1 0-.944-.33l-1.278 3.652-1.278-3.652a.5.5 0 1 0-.944.33l1.75 5a.5.5 0 0 0 .472.335m4.972-5.665a.5.5 0 0 0-.944 0l-1.75 5a.5.5 0 1 0 .944.33l.233-.665h2.09l.233.665a.5.5 0 1 0 .944-.33zM16.945 16h-1.39l.695-1.986zM3.5 12a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-3 0V16a.5.5 0 1 1 1 0v.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 1 .5-.5m3.75 0a.5.5 0 0 1 .472.335l1.75 5a.5.5 0 1 1-.944.33L8.295 17h-2.09l-.233.665a.5.5 0 1 1-.944-.33l1.75-5A.5.5 0 0 1 7.25 12m0 2.014L6.555 16h1.39z"/>`
} as const;

export default function DocumentJavaIcon({ 
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

  const gradientId = 'documentjavaicon_gradient';
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