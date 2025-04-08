import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.41 4.406c.24-.529.855-.77 1.288-.598.571.228.805.964.499 1.452-.164.262-.422.535-.774.846-.219.193-.421.357-.638.533-.16.13-.33.267-.518.427C11.535 7.684 10.5 8.628 10.5 10a1 1 0 0 0 1 1h4.25a1 1 0 1 0 0-2h-2.644q.189-.184.451-.406c.122-.103.27-.224.426-.351.255-.207.532-.434.764-.638.402-.355.828-.778 1.145-1.283.994-1.587.232-3.7-1.452-4.372-1.576-.628-3.24.282-3.85 1.63a1 1 0 1 0 1.82.826M3 2a1 1 0 0 1 1 1v2.5h3V3.002a1 1 0 0 1 2 0v6.993a1 1 0 1 1-2 0V7.5H4V10a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1m14.557 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1-6a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M11.93 4.351c.305-.657 1.119-1.022 1.768-.768.782.304 1.089 1.26.673 1.908-.196.306-.493.61-.874.938-.233.201-.458.38-.693.566-.17.135-.347.275-.537.432-.415.342-.847.73-1.176 1.173-.336.453-.591 1-.591 1.65 0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.459l.005-.006c.215-.29.53-.584.926-.91.14-.115.3-.243.467-.376.264-.21.545-.434.788-.643.418-.36.844-.777 1.157-1.264.96-1.499.214-3.49-1.391-4.116-1.479-.576-3.078.251-3.674 1.536a.75.75 0 0 0 1.361.63M2.75 2a.75.75 0 0 1 .75.75V5.5h4V2.752a.75.75 0 0 1 1.5 0v7.492a.75.75 0 0 1-1.5 0V7h-4v3.25a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 2.75 2m14.807 3.462a.75.75 0 0 1 .693-.463h3.002a.75.75 0 0 1 .53 1.28l-1.5 1.501a.75.75 0 0 1-1.062 0l-1.5-1.5a.75.75 0 0 1-.163-.818M2.75 19a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 14.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function TextHeader2LinesCaretIcon({ 
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

  const gradientId = 'textheader2linescareticon_gradient';
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