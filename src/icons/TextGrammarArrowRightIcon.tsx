
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993zm0 6a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11zm0 4h8.498a6.5 6.5 0 0 1 1.312-2H3l-.117.007A1 1 0 0 0 3 15m0 2h8.019a6.6 6.6 0 0 0 .155 2H3a1 1 0 0 1-.117-1.993zm9 .5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.35 2.854-.07.057a.5.5 0 0 1-.637-.057l-.058-.07a.5.5 0 0 1 .058-.638L19.289 18H14.5l-.09-.008A.5.5 0 0 1 14 17.5l.008-.09A.5.5 0 0 1 14.5 17h4.789l-1.646-1.646-.058-.07a.5.5 0 0 1 .765-.638l2.516 2.517.05.066.035.061.029.08.014.086-.002.11-.019.085-.023.059-.044.077-.04.05z"/>`,
  'regular': `<path d="M2.75 5h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493zm18.5 4H2.75l-.102.007A.75.75 0 0 0 2.75 10.5h18.5l.102-.007A.75.75 0 0 0 21.25 9m-18.5 5.5h8.982A6.5 6.5 0 0 1 12.81 13H2.75l-.102.007A.75.75 0 0 0 2.75 14.5m0 2.5h8.269a6.6 6.6 0 0 0 .057 1.5H2.75a.75.75 0 0 1-.102-1.493zm9.25.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m6.35 2.854-.07.057a.5.5 0 0 1-.637-.057l-.058-.07a.5.5 0 0 1 .058-.638L19.289 18H14.5l-.09-.008A.5.5 0 0 1 14 17.5l.008-.09A.5.5 0 0 1 14.5 17h4.789l-1.646-1.646-.058-.07a.5.5 0 0 1 .765-.638l2.516 2.517.05.066.035.061.029.08.014.086-.002.11-.019.085-.023.059-.044.077-.04.05z"/>`
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