import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25 9.5v12.25A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V9.5zm-8.006 2.734q-1.196 0-1.898.639-.703.639-.703 1.729 0 .627.319 1.116.32.49.87.77a2.33 2.33 0 0 0-1.02.838 2.17 2.17 0 0 0-.363 1.23q0 1.12.765 1.782T17 21q1.266 0 2.027-.66.762-.658.762-1.783 0-.68-.36-1.22-.36-.538-1.029-.849.558-.28.88-.77.322-.489.322-1.116 0-1.09-.704-1.729-.702-.639-1.904-.639m-5.03.088h-.182l-3.328 1.225v1.201l2.092-.715v6.85h1.418zm5.024 4.752q.62 0 1 .39.377.39.377 1.022 0 .651-.36 1.014T17 19.863t-1.01-.375-.367-1.002q0-.638.372-1.025.373-.387.993-.387m.006-3.697q.544 0 .867.36t.323.917q0 .585-.32.932-.319.346-.864.346t-.864-.346q-.32-.345-.32-.932 0-.592.317-.934.316-.343.861-.343M21.75 3A3.25 3.25 0 0 1 25 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3z"/>`,
  'regular': `<path d="M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zm1.75 6.503h-19V21.75c0 .966.784 1.75 1.75 1.75h15.5a1.75 1.75 0 0 0 1.75-1.75zm-6.506 2.731q1.201 0 1.904.639.704.639.704 1.729 0 .627-.323 1.116a2.24 2.24 0 0 1-.879.77q.669.31 1.029.85.36.539.36 1.219 0 1.125-.762 1.784Q18.266 21 17 21q-1.271 0-2.036-.662-.765-.663-.765-1.781 0-.686.364-1.23a2.33 2.33 0 0 1 1.019-.839 2.2 2.2 0 0 1-.87-.77 2 2 0 0 1-.32-1.116q0-1.09.704-1.729.703-.639 1.898-.639m-5.03.088v8.56h-1.418v-6.849l-2.092.715v-1.201l3.328-1.225zm5.024 4.752q-.621 0-.993.387t-.372 1.025q0 .627.366 1.002t1.011.375 1.005-.363.36-1.014q0-.633-.378-1.022-.378-.39-.999-.39m.006-3.697q-.544 0-.861.343t-.317.934q0 .585.32.932.319.346.864.346t.864-.346q.32-.345.32-.932 0-.556-.323-.917-.322-.36-.867-.36M21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.753h19V6.25a1.75 1.75 0 0 0-1.75-1.75"/>`
} as const;

export default function CalendarDateIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'calendardateicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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