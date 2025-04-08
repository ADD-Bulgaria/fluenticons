import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 2a.5.5 0 0 0-.5.5v2.6c0 1.377.927 2.536 2.19 2.89-.22 2.74-1.012 4.785-1.661 6.046.184.216.357.377.492.49.519.434.979 1.141.979 2.023A2.44 2.44 0 0 1 11.524 18H17a1.5 1.5 0 0 0 1.5-1.5v-.307c0-.348-.119-.669-.302-.932-.54-.777-2.069-3.29-2.389-7.272A3 3 0 0 0 18 5.1V2.5a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 .002V3.5l-.004-.754a.75.75 0 0 0-.75-.746h-.492a.75.75 0 0 0-.75.746L13 3.503a.5.5 0 0 1-1-.003v-.75a.75.75 0 0 0-.75-.75zm-4 3a3 3 0 0 0-2.236 5H4a1 1 0 1 0 0 2h.52c-.372 1.798-1.353 2.836-1.9 3.293-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451 0-.52-.274-.966-.62-1.256-.547-.457-1.528-1.495-1.9-3.293H9a1 1 0 1 0 0-2h-.264A3 3 0 0 0 6.5 5"/>`,
  'regular': `<path d="M10 3a1 1 0 0 1 1-1h.5c.385 0 .737.145 1.002.384A1.5 1.5 0 0 1 13.506 2h.99c.385 0 .737.145 1.003.384A1.5 1.5 0 0 1 16.5 2h.5a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-1.95 2.44c.284 4.043 1.7 6.585 2.187 7.35.16.252.263.553.263.877v.333A1.5 1.5 0 0 1 17 18h-5.476a2.44 2.44 0 0 0 .435-1H17a.5.5 0 0 0 .5-.5v-.333a.64.64 0 0 0-.107-.34c-.573-.9-2.155-3.774-2.369-8.304A.5.5 0 0 1 15.518 7 1.5 1.5 0 0 0 17 5.5V3h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 .003V4.5l-.005-1.002a.5.5 0 0 0-.5-.498h-.99a.5.5 0 0 0-.5.498L13 4.502a.5.5 0 0 1-1-.003v-1a.5.5 0 0 0-.5-.5H11v2.5A1.5 1.5 0 0 0 12.482 7a.5.5 0 0 1 .494.523c-.158 3.34-1.06 5.779-1.752 7.191a3 3 0 0 0-.203-.188 4 4 0 0 1-.55-.558c.588-1.278 1.288-3.315 1.479-6.029A2.505 2.505 0 0 1 10 5.5zM4.5 8a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.893a.5.5 0 0 0-.496.56c.302 2.47 1.609 3.888 2.34 4.5.175.146.263.33.263.489a.45.45 0 0 1-.451.451H3.45a.45.45 0 0 1-.45-.451c0-.16.088-.343.262-.489.732-.612 2.04-2.03 2.341-4.5a.5.5 0 0 0-.496-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8A2 2 0 0 1 4.5 8m2-3a3 3 0 0 0-2.817 4.034A1.5 1.5 0 0 0 4 12h.52c-.372 1.798-1.353 2.836-1.9 3.293-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451 0-.52-.274-.966-.62-1.256-.547-.457-1.528-1.495-1.9-3.293H9a1.5 1.5 0 0 0 .317-2.966A3 3 0 0 0 6.5 5"/>`
} as const;

export default function ChessIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'chessicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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