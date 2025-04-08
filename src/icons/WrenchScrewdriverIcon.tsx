import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M22 3a1 1 0 0 0-.928.629l-1 2.5a1 1 0 0 0 0 .742L21 9.193V16h5V9.193l.928-2.322a1 1 0 0 0 0-.742l-1-2.5A1 1 0 0 0 25 3zm-4 16.5v4a5.5 5.5 0 1 0 11 0v-4z"/><path d="M28 16a1 1 0 0 1 1 1v3H18v-3a1 1 0 0 1 1-1zM8.577 3.525A1 1 0 0 1 9 4.341V9a1 1 0 0 0 2 0V4.341a1 1 0 0 1 1.333-.942A7.002 7.002 0 0 1 13 16.326V26a3 3 0 1 1-6 0v-9.674A7.002 7.002 0 0 1 7.667 3.4a1 1 0 0 1 .91.126"/>`,
  'filled': `<path d="M21.072 3.629A1 1 0 0 1 22 3h3a1 1 0 0 1 .928.629l1 2.5a1 1 0 0 1 0 .742L26 9.193V16h2a1 1 0 0 1 1 1v3H18v-3a1 1 0 0 1 1-1h2V9.193l-.928-2.322a1 1 0 0 1 0-.742zM8.577 3.525A1 1 0 0 1 9 4.341V9a1 1 0 0 0 2 0V4.341a1 1 0 0 1 1.333-.942A7.002 7.002 0 0 1 13 16.326V26a3 3 0 1 1-6 0v-9.674a7.002 7.002 0 0 1 .667-12.928 1 1 0 0 1 .91.127M18 22v1.5a5.5 5.5 0 1 0 11 0V22z"/>`,
  'light': `<path d="M21.5 3h4a.5.5 0 0 1 .447.276l1.5 3a.5.5 0 0 1 0 .448L26 9.618V16h2.5a.5.5 0 0 1 .5.5v7a5.5 5.5 0 1 1-11 0v-7a.5.5 0 0 1 .5-.5H21V9.618l-1.447-2.894a.5.5 0 0 1 0-.448l1.5-3A.5.5 0 0 1 21.5 3M25 16V9.5a.5.5 0 0 1 .053-.224L26.44 6.5 25.191 4h-3.382l-1.25 2.5 1.388 2.776A.5.5 0 0 1 22 9.5V16zm-6 1v3h9v-3zm0 4v2.5a4.5 4.5 0 1 0 9 0V21zM7.777 3.582A.5.5 0 0 1 8 3.998V9a2 2 0 1 0 4 0V3.998a.5.5 0 0 1 .692-.461A7.002 7.002 0 0 1 13 16.327V26a3 3 0 1 1-6 0v-9.674a7.002 7.002 0 0 1 .308-12.79.5.5 0 0 1 .47.046M7 4.802a6.002 6.002 0 0 0 .692 10.738.5.5 0 0 1 .308.462V26a2 2 0 1 0 4 0v-9.998a.5.5 0 0 1 .308-.462A6.002 6.002 0 0 0 13 4.803V9a3 3 0 1 1-6 0z"/>`,
  'regular': `<path d="M21 3a1 1 0 0 0-.928.629l-1 2.5a1 1 0 0 0 0 .742L20 9.193V16h-1a1 1 0 0 0-1 1v6.5a5.5 5.5 0 1 0 11 0V17a1 1 0 0 0-1-1h-1V9.193l.928-2.322a1 1 0 0 0 0-.742l-1-2.5A1 1 0 0 0 26 3zm4 13h-3V9a1 1 0 0 0-.072-.371l-.85-2.129.6-1.5h3.646l.6 1.5-.851 2.129A1 1 0 0 0 25 9zm-5 2h7v2h-7zM8.577 3.525A1 1 0 0 1 9 4.341V9a1 1 0 0 0 2 0V4.341a1 1 0 0 1 1.333-.942A7.002 7.002 0 0 1 13 16.326V26a3 3 0 1 1-6 0v-9.674a7.002 7.002 0 0 1 .667-12.928 1 1 0 0 1 .91.127M7 5.999a5.003 5.003 0 0 0 1.333 8.716A1 1 0 0 1 9 15.66V26a1 1 0 1 0 2 0V15.659a1 1 0 0 1 .667-.943A5.003 5.003 0 0 0 13 5.999V9a3 3 0 1 1-6 0zM20 22h7v1.5a3.5 3.5 0 1 1-7 0z"/>`
} as const;

export default function WrenchScrewdriverIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'wrenchscrewdrivericon_gradient';
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