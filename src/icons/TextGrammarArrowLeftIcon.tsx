import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 12a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m.78 2.589.07.057 2.516 2.517.04.05.044.077.023.059.02.085.002.11-.016.086-.029.08-.033.061-.051.066-2.516 2.517a.5.5 0 0 1-.765-.638l.058-.07L8.289 18H3.5a.5.5 0 0 1-.492-.41L3 17.5a.5.5 0 0 1 .41-.492L3.5 17h4.789l-1.646-1.646a.5.5 0 0 1-.058-.638l.058-.07a.5.5 0 0 1 .638-.057M12.982 17H21l.117.007A1 1 0 0 1 21 19h-8.174a6.5 6.5 0 0 0 .155-2m-.48-2H21a1 1 0 0 0 .117-1.993L21 13h-9.81a6.5 6.5 0 0 1 1.312 2M21 11a1 1 0 0 0 .117-1.993L21 9H3a1 1 0 0 0-.117 1.993L3 11zM3 5h18l.117.007A1 1 0 0 1 21 7H3l-.117-.007A1 1 0 0 1 3 5"/>`,
  'regular': `<path d="M6.5 12a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m.78 2.589.07.057 2.516 2.517.04.05.044.077.023.059.02.085.002.11-.016.086-.029.08-.033.061-.051.066-2.516 2.517a.5.5 0 0 1-.765-.638l.058-.07L8.289 18H3.5a.5.5 0 0 1-.492-.41L3 17.5a.5.5 0 0 1 .41-.492L3.5 17h4.789l-1.646-1.646a.5.5 0 0 1-.058-.638l.058-.07a.5.5 0 0 1 .638-.057M12.982 17h8.269l.102.007a.75.75 0 0 1-.102 1.493h-8.326a6.6 6.6 0 0 0 .057-1.5m-.713-2.5h8.982a.75.75 0 0 0 .102-1.493L21.25 13H11.19c.427.444.79.949 1.078 1.5M2.75 9h18.5l.102.007a.75.75 0 0 1-.102 1.493H2.75l-.102-.007A.75.75 0 0 1 2.75 9m0-4h18.5l.102.007A.75.75 0 0 1 21.25 6.5H2.75l-.102-.007A.75.75 0 0 1 2.75 5"/>`
} as const;

export default function TextGrammarArrowLeftIcon({ 
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

  const gradientId = 'textgrammararrowlefticon_gradient';
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