import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39 7.5a1.5 1.5 0 0 0-3 0v3.083a17.94 17.94 0 0 0-8.871-4.312c-.871-.153-1.629.549-1.629 1.433 0 .778.592 1.42 1.355 1.567 2.804.54 5.33 1.862 7.343 3.729H30.5a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5zM13.677 9.252c-.724.508-.764 1.54-.138 2.166.55.55 1.422.586 2.065.15a14.9 14.9 0 0 1 5.54-2.297c.764-.147 1.356-.79 1.356-1.567 0-.884-.758-1.586-1.629-1.433a17.9 17.9 0 0 0-7.194 2.981M38.73 26.855c.147-.764.79-1.355 1.567-1.355.884 0 1.586.757 1.433 1.628a17.9 17.9 0 0 1-2.981 7.195c-.508.724-1.54.764-2.166.138-.55-.55-.586-1.421-.15-2.065a14.9 14.9 0 0 0 2.297-5.541m-6.334 9.577c.644-.435 1.516-.399 2.066.15.626.626.586 1.658-.139 2.166a17.9 17.9 0 0 1-7.193 2.981c-.871.153-1.629-.549-1.629-1.433 0-.778.592-1.42 1.355-1.567a14.9 14.9 0 0 0 5.54-2.297m-11.25 2.297c.763.147 1.355.79 1.355 1.567 0 .884-.758 1.586-1.629 1.433a17.9 17.9 0 0 1-7.194-2.982c-.725-.508-.765-1.54-.14-2.165.55-.55 1.423-.586 2.066-.15a14.9 14.9 0 0 0 5.542 2.297m-9.578-6.334c.436.643.4 1.515-.15 2.065-.626.626-1.658.586-2.166-.139a17.9 17.9 0 0 1-2.98-7.193c-.153-.87.549-1.628 1.433-1.628.778 0 1.42.591 1.567 1.355a14.9 14.9 0 0 0 2.296 5.54m-2.295-11.25c-.148.763-.79 1.355-1.568 1.355-.884 0-1.586-.758-1.433-1.63a17.9 17.9 0 0 1 2.98-7.192c.509-.725 1.54-.764 2.167-.139.549.55.585 1.422.15 2.066a14.9 14.9 0 0 0-2.296 5.54"/>`,
  'regular': `<path d="M13.453 9.412c-.596.432-.63 1.29-.11 1.81.459.459 1.187.49 1.717.115a15.4 15.4 0 0 1 6.307-2.614c.64-.11 1.133-.647 1.133-1.295 0-.736-.63-1.319-1.356-1.203a17.9 17.9 0 0 0-7.691 3.187M25.5 7.428c0-.736.63-1.319 1.357-1.203a17.95 17.95 0 0 1 9.643 4.823V8.25a1.25 1.25 0 1 1 2.5 0v6.5c0 .69-.56 1.25-1.25 1.25h-6.5a1.25 1.25 0 1 1 0-2.5h4.152a15.47 15.47 0 0 0-8.768-4.777c-.64-.11-1.134-.647-1.134-1.295m13.778 19.205c.109-.64.646-1.134 1.294-1.134.736 0 1.319.63 1.203 1.357a17.9 17.9 0 0 1-3.187 7.691c-.432.597-1.29.63-1.81.11-.459-.459-.489-1.187-.115-1.716a15.4 15.4 0 0 0 2.615-6.308m-6.337 10.03c.529-.374 1.257-.344 1.715.115.521.52.487 1.378-.109 1.81a17.9 17.9 0 0 1-7.69 3.186c-.727.116-1.357-.467-1.357-1.202 0-.649.494-1.186 1.134-1.295a15.4 15.4 0 0 0 6.307-2.614m-11.574 2.614c.64.11 1.133.646 1.133 1.295 0 .735-.63 1.318-1.356 1.202a17.9 17.9 0 0 1-7.692-3.187c-.596-.432-.63-1.29-.11-1.81.46-.459 1.188-.49 1.717-.115a15.4 15.4 0 0 0 6.308 2.615m-10.03-6.338c.374.53.343 1.258-.115 1.716-.52.52-1.379.487-1.81-.11a17.9 17.9 0 0 1-3.186-7.69c-.116-.726.467-1.356 1.202-1.356.649 0 1.186.495 1.295 1.134a15.4 15.4 0 0 0 2.613 6.306M8.722 21.366c-.11.64-.646 1.133-1.294 1.133-.736 0-1.32-.63-1.203-1.356a17.9 17.9 0 0 1 3.186-7.69c.432-.596 1.29-.63 1.81-.11.459.459.49 1.187.115 1.717a15.4 15.4 0 0 0-2.614 6.306"/>`
} as const;

export default function ArrowClockwiseDashesIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'arrowclockwisedashesicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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