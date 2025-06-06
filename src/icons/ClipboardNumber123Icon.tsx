import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.83 4h1.67A3.5 3.5 0 0 1 27 7.5v12.003c-1.452-.053-3.01.504-4.299 1.838l-.077.084a4.7 4.7 0 0 0-.629-.686 4.9 4.9 0 0 0-3.514-1.233c-1.198.06-2.342.545-3.32 1.4-.407-.718-1.105-1.14-1.653-1.297-.82-.237-2.17-.151-3.017 1.037-.34.476-.793.976-1.264 1.254a2.5 2.5 0 0 0 1.275 4.652V29c0 .356.074.694.208 1H8.5A3.5 3.5 0 0 1 5 26.5v-19A3.5 3.5 0 0 1 8.5 4h1.67A3 3 0 0 1 13 2h6c1.306 0 2.418.835 2.83 2M19 4h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2m-1.769 19.768c.533-.568 1.038-.747 1.424-.766.403-.02.762.127 1.01.348.256.229.334.474.322.634-.008.116-.076.38-.585.654-1.877 1.009-2.873 1.984-3.39 2.803a3.4 3.4 0 0 0-.46 1.07 2.2 2.2 0 0 0-.051.507q0 .03.003.053l.002.022v.01l.001.005v.005a1 1 0 0 0 .995.887H21a1 1 0 1 0 0-2h-2.893c.409-.43 1.094-.984 2.242-1.6.972-.523 1.567-1.328 1.633-2.276.064-.904-.372-1.718-.985-2.266a3.42 3.42 0 0 0-2.441-.854c-.967.048-1.942.498-2.784 1.397a1 1 0 0 0 1.46 1.367m10.612-.355c-.393-.426-1.508-.795-2.624.36a1 1 0 1 1-1.438-1.39c1.884-1.951 4.331-1.628 5.532-.326.6.65.94 1.645.463 2.627-.15.31-.365.58-.635.815.27.235.485.507.636.816.476.982.136 1.978-.464 2.628-1.201 1.303-3.649 1.625-5.533-.33a1 1 0 0 1 1.44-1.388c1.116 1.158 2.23.788 2.623.362.197-.214.161-.343.134-.398-.055-.113-.344-.48-1.435-.712a1 1 0 0 1 0-1.956c1.092-.232 1.38-.599 1.436-.712.026-.054.063-.182-.135-.396m-13.84-1.177c0-.689-.52-1.073-.911-1.186-.39-.113-1.001-.065-1.38.467-.39.548-.99 1.241-1.721 1.674a1 1 0 0 0 1.018 1.721 6.4 6.4 0 0 0 .993-.73V29a1 1 0 1 0 2 0z"/>`,
  'regular': `<path d="M21.83 4A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h2.21a2.5 2.5 0 0 1-.208-1v-1H8.5A1.5 1.5 0 0 1 7 26.5v-19A1.5 1.5 0 0 1 8.5 6h1.67A3 3 0 0 0 13 8h6a3 3 0 0 0 2.83-2h1.67A1.5 1.5 0 0 1 25 7.5v12.321a5.3 5.3 0 0 1 2-.318V7.5A3.5 3.5 0 0 0 23.5 4zM12 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m5.231 18.768c.533-.568 1.038-.747 1.424-.766.403-.02.762.127 1.01.348.256.229.334.474.322.634-.008.116-.076.38-.585.654-1.877 1.009-2.873 1.984-3.39 2.803a3.4 3.4 0 0 0-.46 1.07 2.2 2.2 0 0 0-.051.507q0 .03.003.053l.002.022v.01l.001.005v.005a1 1 0 0 0 .995.887H21a1 1 0 1 0 0-2h-2.893c.409-.43 1.094-.984 2.242-1.6.972-.523 1.567-1.328 1.633-2.276.064-.904-.372-1.718-.985-2.266a3.42 3.42 0 0 0-2.441-.854c-.967.048-1.942.498-2.784 1.397a1 1 0 0 0 1.46 1.367m10.612-.355c-.393-.426-1.508-.795-2.624.36a1 1 0 1 1-1.438-1.39c1.884-1.951 4.331-1.628 5.532-.326.6.65.94 1.645.463 2.627-.15.31-.365.58-.635.815.27.235.485.507.636.816.476.982.136 1.978-.464 2.628-1.201 1.303-3.649 1.625-5.533-.33a1 1 0 0 1 1.44-1.388c1.116 1.158 2.23.788 2.623.362.197-.214.161-.343.134-.398-.055-.113-.344-.48-1.435-.712a1 1 0 0 1 0-1.956c1.092-.232 1.38-.599 1.436-.712.026-.054.063-.182-.135-.396m-13.84-1.177c0-.689-.52-1.073-.911-1.186-.39-.113-1.001-.065-1.38.467-.39.548-.99 1.241-1.721 1.674a1 1 0 0 0 1.018 1.721 6.4 6.4 0 0 0 .993-.73V29a1 1 0 1 0 2 0z"/>`
} as const;

export default function ClipboardNumber123Icon({ 
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

  const gradientId = 'clipboardnumber123icon_gradient';
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