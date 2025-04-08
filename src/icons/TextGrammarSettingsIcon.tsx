
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.019 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.5 6.5 0 0 1-.155-2M21 11H3a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993zM3 15h8.498a6.5 6.5 0 0 1 1.312-2H3l-.117.007A1 1 0 0 0 3 15M21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5m-6.722 8.975-.198-.686a5.3 5.3 0 0 1 1.483-.912l.499.524a2 2 0 0 0 2.899 0l.493-.518a5.3 5.3 0 0 1 1.484.922l-.186.63a2 2 0 0 0 1.45 2.511l.539.13a5.7 5.7 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686a5.3 5.3 0 0 1-1.483.913l-.498-.525a2 2 0 0 0-2.9 0l-.493.518a5.3 5.3 0 0 1-1.484-.921l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.7 5.7 0 0 1-.006-1.808l.584-.144a2 2 0 0 0 1.441-2.497M17.5 19c.8 0 1.45-.672 1.45-1.5 0-.829-.65-1.5-1.45-1.5s-1.45.671-1.45 1.5c0 .828.65 1.5 1.45 1.5"/>`,
  'regular': `<path d="M11.019 17H2.75l-.102.007A.75.75 0 0 0 2.75 18.5h8.326a6.6 6.6 0 0 1-.057-1.5M2.75 13h10.06a6.5 6.5 0 0 0-1.078 1.5H2.75a.75.75 0 0 1-.102-1.493zm18.5-4H2.75l-.102.007A.75.75 0 0 0 2.75 10.5h18.5l.102-.007A.75.75 0 0 0 21.25 9m0-4H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h18.5l.102-.007A.75.75 0 0 0 21.25 5m-6.972 8.975a2 2 0 0 1-1.441 2.497l-.584.144a5.7 5.7 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.632c.44.386.94.699 1.484.921l.494-.518a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.923l-.493.519a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5 0-.829.65-1.5 1.45-1.5s1.45.671 1.45 1.5c0 .828-.65 1.5-1.45 1.5"/>`
} as const;

export default function TextGrammarSettingsIcon({ 
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

  const gradientId = 'textgrammarsettingsicon_gradient';
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