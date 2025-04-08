import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.985 3.165a1 1 0 0 0-1.973-.33l-.86 5.163L3.998 8A1 1 0 0 0 4 10l3.817-.002-.667 4L3 14a1 1 0 1 0 0 2l3.817-.002-.807 4.838a1 1 0 1 0 1.973.329l.862-5.167 2.33-.002c.17-.72.461-1.394.85-2l-2.847.001.667-4 4.976-.003-.287 1.721a6.5 6.5 0 0 1 2.138-.662l.176-1.06 4.153-.003a1 1 0 0 0-.002-2l-3.817.002.804-4.827a1 1 0 1 0-1.972-.33l-.86 5.159-4.975.003zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.353a.5.5 0 0 0-.708.707l1.647 1.646-1.647 1.647a.5.5 0 0 0 .708.707l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.707L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.707L17.5 16.793z"/>`,
  'regular': `<path d="M10.987 2.89a.75.75 0 1 0-1.474-.28L8.494 7.999 3.75 8a.75.75 0 1 0 0 1.5l4.46-.002-.946 5-4.514.002a.75.75 0 0 0 0 1.5l4.23-.002-.967 5.116a.75.75 0 1 0 1.474.278l1.02-5.395h2.668q.19-.795.56-1.501l-2.944.001.946-5 5.474-.002-.394 2.083a6.5 6.5 0 0 1 1.62-.491l.3-1.593 4.513-.002a.75.75 0 1 0 0-1.5l-4.229.002.966-5.104a.75.75 0 0 0-1.474-.28l-1.018 5.385-5.474.002zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.353a.5.5 0 0 0-.708.707l1.647 1.646-1.647 1.647a.5.5 0 0 0 .708.707l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.707L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.707L17.5 16.793z"/>`
} as const;

export default function NumberSymbolDismissIcon({ 
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

  const gradientId = 'numbersymboldismissicon_gradient';
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