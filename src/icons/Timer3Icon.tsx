import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.445 15.916a1.75 1.75 0 0 0 2.064.411A3 3 0 0 0 17 18c0 .62.188 1.195.51 1.673a1.75 1.75 0 0 0-2.498 1.778 8.5 8.5 0 1 1 5.381-9.303A4.6 4.6 0 0 0 19.25 12c-1.098 0-2.022.39-2.614.718a6.6 6.6 0 0 0-1.013.693l-.023.02-.009.008-.004.003-.003.003a1.75 1.75 0 0 0-.139 2.47m-4.188-7.268-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102a.75.75 0 0 0-1.486 0m7.995-3.464-.082-.061a.75.75 0 0 0-.903 1.193l1.149 1 .081.061a.75.75 0 0 0 .904-1.193zM15 3.25a.75.75 0 0 0-.75-.75h-4.5l-.102.007A.75.75 0 0 0 9.75 4h4.5l.102-.007A.75.75 0 0 0 15 3.25M18.25 18a.75.75 0 0 1 .75-.75c.527 0 1.058-.185 1.444-.473.39-.292.556-.623.556-.902 0-.65-.665-1.375-1.75-1.375-.516 0-1.013.19-1.405.406a4 4 0 0 0-.594.402l-.003.003a.75.75 0 0 1-.997-1.12v-.002l.003-.001.005-.005.015-.013a3 3 0 0 1 .226-.179c.148-.11.359-.253.62-.397.512-.284 1.265-.594 2.13-.594 1.676 0 3.25 1.178 3.25 2.875 0 .895-.52 1.626-1.158 2.104l-.03.021.03.021c.639.478 1.158 1.21 1.158 2.104 0 1.698-1.574 2.875-3.25 2.875-.865 0-1.618-.31-2.13-.594a5.6 5.6 0 0 1-.846-.576l-.015-.013-.005-.005-.002-.001-.002-.002a.75.75 0 0 1 .998-1.12l.003.003.02.016q.002.003.006.005.037.031.116.09c.105.079.26.185.452.29.392.217.89.407 1.405.407 1.085 0 1.75-.725 1.75-1.375 0-.28-.165-.61-.556-.902A2.48 2.48 0 0 0 19 18.75a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M20.393 12.148a8.5 8.5 0 1 0-5.383 9.304 1.75 1.75 0 0 1 .655-1.987 7 7 0 1 1 3.178-7.447q.199-.018.407-.018c.382 0 .768.05 1.143.148m-7.65-3.5a.75.75 0 0 0-1.493.102v4.5l.007.102a.75.75 0 0 0 1.493-.102v-4.5zm6.487-3.474-.083-.06a.75.75 0 0 0-.877 1.212l1.159.965.082.06a.75.75 0 0 0 .877-1.213zM15 3.25a.75.75 0 0 0-.75-.75h-4.5l-.102.007A.75.75 0 0 0 9.75 4h4.5l.102-.007A.75.75 0 0 0 15 3.25M18.25 18a.75.75 0 0 1 .75-.75c.527 0 1.058-.185 1.444-.473.39-.292.556-.623.556-.902 0-.65-.665-1.375-1.75-1.375-.516 0-1.013.19-1.405.406a4 4 0 0 0-.594.402l-.003.003a.75.75 0 0 1-.997-1.12v-.002l.003-.001.005-.005.015-.013a3 3 0 0 1 .226-.179c.148-.11.359-.253.62-.397.512-.284 1.265-.594 2.13-.594 1.676 0 3.25 1.178 3.25 2.875 0 .895-.52 1.626-1.158 2.104l-.03.021.03.021c.639.478 1.158 1.21 1.158 2.104 0 1.698-1.574 2.875-3.25 2.875-.865 0-1.618-.31-2.13-.594a5.6 5.6 0 0 1-.846-.576l-.015-.013-.005-.005-.002-.001-.002-.002a.75.75 0 0 1 .998-1.12l.003.003.02.016q.002.003.006.005.037.031.116.09c.105.079.26.185.452.29.392.217.89.407 1.405.407 1.085 0 1.75-.725 1.75-1.375 0-.28-.165-.61-.556-.902A2.48 2.48 0 0 0 19 18.75a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function Timer3Icon({ 
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

  const gradientId = 'timer3icon_gradient';
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