import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path fill-opacity=".75" d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path fill-opacity=".7" d="m30 10-13.526 7.292a1 1 0 0 1-.948 0L2 10v12.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5z"/><path d="M2 9.5A4.5 4.5 0 0 1 6.5 5h19c1.414 0 2.675.652 3.5 1.671V10h1v.59l-13.526 7.292a1 1 0 0 1-.948 0L2 10.59z"/><path fill-opacity=".3" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10h-1V6.671A4.5 4.5 0 0 0 25.5 5z"/><path fill-opacity=".3" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10h-1V6.671A4.5 4.5 0 0 0 25.5 5z"/><path fill-opacity=".3" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10h-1V6.671A4.5 4.5 0 0 0 25.5 5z"/><path fill-opacity=".3" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5V10h-1V6.671A4.5 4.5 0 0 0 25.5 5z"/><circle cx="24.5" cy="13" r="3"/><path d="M19.729 5A5 5 0 0 1 29.5 6.5v2.657l2.308 2.596A.75.75 0 0 1 31.299 13h-13.6a.75.75 0 0 1-.508-1.247L19.5 9.156V6.5c0-.523.08-1.026.229-1.5"/>`,
  'filled': `<path d="M19.729 5A5 5 0 0 1 29.5 6.5v2.657l2.308 2.596A.75.75 0 0 1 31.299 13h-13.6a.75.75 0 0 1-.508-1.247L19.5 9.156V6.5c0-.523.08-1.026.229-1.5m4.77 11.5c-.55 0-1.053-.188-1.444-.5q-.24-.192-.417-.439a2.07 2.07 0 0 1-.383-1.061h4.49c-.075 1.079-.987 1.94-2.123 1.997q-.06.003-.122.003M18 6.5q.001-.776.175-1.5H6.5a4.5 4.5 0 0 0-4.496 4.303l1.476.82L16 16.864l4.39-2.364h-2.738l-.048-.003c-1.846-.118-2.793-2.325-1.534-3.74L18 8.585zm12 16v-8h-1.751l-.008.103C28.106 16.563 26.423 18 24.5 18a3.79 3.79 0 0 1-3.19-1.723l-4.836 2.604a1 1 0 0 1-.948 0L2.514 11.874 2 11.588V22.5A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5"/>`,
  'light': `<path d="M24.5 1.5a5 5 0 0 0-5 5v2.656l-2.31 2.597A.75.75 0 0 0 17.7 13h13.599a.75.75 0 0 0 .509-1.247L29.5 9.157V6.5a5 5 0 0 0-5-5m0 15c-1.192 0-2.168-.883-2.245-2h4.49c-.077 1.117-1.053 2-2.245 2M6.5 5h11.673a6.5 6.5 0 0 0-.155 1H6.5A3.5 3.5 0 0 0 3 9.5v.706l13 7.222 4.773-2.652c.041.352.133.686.267.996l-4.797 2.665a.5.5 0 0 1-.486 0L3 11.35V22.5A3.5 3.5 0 0 0 6.5 26h19a3.5 3.5 0 0 0 3.5-3.5v-8h1v8a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5v-13A4.5 4.5 0 0 1 6.5 5"/>`,
  'regular': `<path d="M19.729 5A5 5 0 0 1 29.5 6.5v2.657l2.308 2.596A.75.75 0 0 1 31.299 13h-13.6a.75.75 0 0 1-.508-1.247L19.5 9.156V6.5c0-.523.08-1.026.229-1.5m2.91 10.561a2.28 2.28 0 0 0 1.861.939c1.192 0 2.168-.883 2.245-2h-4.49c.027.392.165.755.384 1.061M6.5 7H18v-.5q.001-.776.174-1.5H6.5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-8h-1.75l-.008.103a3.6 3.6 0 0 1-.24 1.068V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5v-9.826l11.525 6.207a1 1 0 0 0 .948 0l4.836-2.604a3.54 3.54 0 0 1-.552-1.674l-.007-.103h-.36L16 16.864 4 10.403V9.5A2.5 2.5 0 0 1 6.5 7"/>`
} as const;

export default function MailAlertIcon({ 
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

  const gradientId = 'mailalerticon_gradient';
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