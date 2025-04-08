import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.25C2 6.56 2.56 6 3.25 6h25.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 8.5 2 7.94 2 7.25m0 6c0-.69.56-1.25 1.25-1.25h25.5a1.25 1.25 0 0 1 1.213 1.554 2 2 0 0 0-.469-.054h-8.377c-.796 0-1.533.377-2 1H3.25c-.69 0-1.25-.56-1.25-1.25M17.335 18H3.25a1.25 1.25 0 1 0 0 2.5h12.845zm-2.825 6c-.142 1.273.845 2.493 2.238 2.493L3.25 26.5a1.25 1.25 0 1 1 0-2.5zm6.61-9h8.382a.5.5 0 0 1 .427.76L26.75 21h2.491a.75.75 0 0 1 .52 1.29l-8.747 8.427c-.757.73-1.984-.055-1.638-1.05L21 25h-4.251a.75.75 0 0 1-.672-1.083l4.147-8.361A1 1 0 0 1 21.12 15"/>`,
  'regular': `<path d="M2 7a1 1 0 0 1 1-1h26a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h26a1 1 0 0 1 .848 1.53 2 2 0 0 0-.354-.03h-8.377c-.552 0-1.075.181-1.5.5H3a1 1 0 0 1-1-1m15.335 5H3a1 1 0 1 0 0 2h13.343zm-2.825 6a2.26 2.26 0 0 0 .83 2H3a1 1 0 1 1 0-2zm6.61-9h8.382a.5.5 0 0 1 .427.76L26.75 21h2.491a.75.75 0 0 1 .52 1.29l-8.747 8.427c-.757.73-1.984-.055-1.638-1.05L21 25h-4.251a.75.75 0 0 1-.672-1.083l4.147-8.361A1 1 0 0 1 21.12 15"/>`
} as const;

export default function TextGrammarLightningIcon({ 
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

  const gradientId = 'textgrammarlightningicon_gradient';
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