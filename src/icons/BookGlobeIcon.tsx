import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm6.551 1.868a4.75 4.75 0 0 0-2.9 3.882h2.107c.041-1.25.236-2.397.547-3.283q.11-.314.246-.6m3.34-.116q.172.335.304.715c.31.886.505 2.033.547 3.283h2.357a4.75 4.75 0 0 0-3.208-3.998m-.65 3.998c-.04-1.112-.216-2.085-.461-2.788-.143-.406-.295-.682-.427-.84a.7.7 0 0 0-.103-.106.7.7 0 0 0-.103.105c-.132.16-.284.435-.427.841-.245.703-.42 1.676-.46 2.788zm-1.954 1.5c.068.903.225 1.693.433 2.288.143.406.295.682.427.84a.7.7 0 0 0 .103.106.7.7 0 0 0 .103-.105c.132-.16.284-.435.427-.841.208-.595.365-1.385.433-2.288zm-1.504 0H7.73a4.76 4.76 0 0 0 2.828 3.395 6 6 0 0 1-.252-.612c-.269-.767-.45-1.728-.522-2.783m4.102 3.51a4.76 4.76 0 0 0 3.136-3.51h-2.304c-.071 1.055-.253 2.016-.522 2.783-.09.257-.193.502-.31.727m-1.604-.256.004.001Z"/>`,
  'regular': `<path d="M12.04 6.017a4.75 4.75 0 1 0 .335-.012h-.01a1.4 1.4 0 0 0-.326.012m-1.622 1.835c-.226.677-.368 1.506-.407 2.398h-1.1a3.5 3.5 0 0 1 1.507-2.398m-.374 3.898a8.4 8.4 0 0 0 .379 1.91 3.5 3.5 0 0 1-1.405-1.91zm3.966 2.1.003-.008c.22-.587.373-1.306.443-2.092h1.276a3.5 3.5 0 0 1-1.722 2.1m-1.061-2.1a6.6 6.6 0 0 1-.34 1.565c-.118.313-.24.514-.336.623l-.023.025-.023-.025c-.097-.11-.218-.31-.335-.623-.154-.41-.276-.947-.341-1.565zm.039-1.5h-1.476c.042-.828.185-1.547.38-2.065.117-.313.238-.514.335-.623l.023-.025.023.025c.097.11.218.31.335.623.195.518.338 1.237.38 2.065m1.501 0c-.043-.978-.21-1.88-.475-2.588a3.5 3.5 0 0 1 1.825 2.588zm-2.182-2.76-.004.002zm-.113 0 .003.002-.004-.003zM6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 4.5V18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1m-6.697 9.509.004.002Z"/>`
} as const;

export default function BookGlobeIcon({ 
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

  const gradientId = 'bookglobeicon_gradient';
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