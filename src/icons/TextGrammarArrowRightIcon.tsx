import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 5H3a1 1 0 0 0-.117 1.993L3 7h18a1 1 0 0 0 .117-1.993zm0 6a1 1 0 0 0 .117-1.993L21 9H3a1 1 0 0 0-.117 1.993L3 11zm0 4h-8.498a6.5 6.5 0 0 0-1.312-2H21l.117.007A1 1 0 0 1 21 15m0 2h-8.019a6.6 6.6 0 0 1-.155 2H21a1 1 0 0 0 .117-1.993zm-9 .5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.35 2.854.07.057a.5.5 0 0 0 .637-.057l.058-.07a.5.5 0 0 0-.058-.638L4.711 18H9.5l.09-.008A.5.5 0 0 0 10 17.5l-.008-.09A.5.5 0 0 0 9.5 17H4.711l1.646-1.646.058-.07a.5.5 0 0 0-.765-.638l-2.516 2.517-.05.066-.034.061-.03.08-.015.086.003.11.019.085.023.059.044.077.04.05z"/>`,
  'regular': `<path d="M21.25 5H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zM2.75 9h18.5l.102.007a.75.75 0 0 1-.102 1.493H2.75l-.102-.007A.75.75 0 0 1 2.75 9m18.5 5.5h-8.982A6.5 6.5 0 0 0 11.19 13h10.06l.102.007a.75.75 0 0 1-.102 1.493m0 2.5h-8.269a6.6 6.6 0 0 1-.057 1.5h8.326a.75.75 0 0 0 .102-1.493zm-9.25.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.35 2.854.07.057a.5.5 0 0 0 .637-.057l.058-.07a.5.5 0 0 0-.058-.638L4.711 18H9.5l.09-.008A.5.5 0 0 0 10 17.5l-.008-.09A.5.5 0 0 0 9.5 17H4.711l1.646-1.646.058-.07a.5.5 0 0 0-.765-.638l-2.516 2.517-.05.066-.034.061-.03.08-.015.086.003.11.019.085.023.059.044.077.04.05z"/>`
} as const;

export default function TextGrammarArrowRightIcon({ 
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

  const gradientId = 'textgrammararrowrighticon_gradient';
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