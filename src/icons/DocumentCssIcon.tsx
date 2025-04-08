import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v10.035a3.5 3.5 0 0 1 2.377 1.471A2.95 2.95 0 0 1 8.95 14h.1c1.02 0 1.92.518 2.45 1.306A2.95 2.95 0 0 1 13.95 14h.1A2.95 2.95 0 0 1 17 16.95V17c0 .45-.17.86-.45 1.17.288.439.45.96.45 1.507v.373c0 .747-.278 1.43-.736 1.95H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m2.05 14A1.95 1.95 0 0 0 16 20.05v-.373a1.75 1.75 0 0 0-1.1-1.625l-.566-.226-.713-.428a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 14.05 15h-.1A1.95 1.95 0 0 0 12 16.95v.373a1.75 1.75 0 0 0 1.1 1.625l.566.226.713.428a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20a.75.75 0 0 0-1.5 0v.05A1.95 1.95 0 0 0 13.95 22zM11 20.05A1.95 1.95 0 0 1 9.05 22h-.1A1.95 1.95 0 0 1 7 20.05V20a.747.747 0 0 1 .75-.75.75.75 0 0 1 .75.75v.05a.45.45 0 0 0 .45.45h.1a.45.45 0 0 0 .45-.45v-.234a.25.25 0 0 0-.121-.214l-.713-.428-.566-.226A1.75 1.75 0 0 1 7 17.323v-.373A1.95 1.95 0 0 1 8.95 15h.1A1.95 1.95 0 0 1 11 16.95V17a.747.747 0 0 1-.75.75.75.75 0 0 1-.75-.75v-.05a.45.45 0 0 0-.45-.45h-.1a.45.45 0 0 0-.45.45v.234a.25.25 0 0 0 .121.214l.713.428.566.226a1.75 1.75 0 0 1 1.1 1.625zM5.95 22l.05-.05V22zm-1.124-.38A2.5 2.5 0 0 0 6 19.5a.75.75 0 1 0-1.5 0 1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0q.002.207.1.375A.75.75 0 0 0 6 17.5a2.5 2.5 0 0 0-5 0v2a2.5 2.5 0 0 0 3.826 2.12M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5"/>`,
  'regular': `<path d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v10.627a3.5 3.5 0 0 0-1.5-.592V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-1.736a2.94 2.94 0 0 0 .702-1.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zm-5.326 12c.203.86.976 1.5 1.898 1.5h.1A1.95 1.95 0 0 0 16 20.05v-.234a1.75 1.75 0 0 0-.85-1.5l-1.529-.918a.25.25 0 0 1-.121-.214v-.234a.45.45 0 0 1 .45-.45h.1a.45.45 0 0 1 .45.45V17a.75.75 0 0 0 1.5 0v-.05A1.95 1.95 0 0 0 14.05 15h-.1A1.95 1.95 0 0 0 12 16.95v.234c0 .614.322 1.184.85 1.5l1.529.918a.25.25 0 0 1 .121.214v.234a.45.45 0 0 1-.45.45h-.1a.45.45 0 0 1-.45-.45V20a.75.75 0 0 0-1.5 0v.05q0 .233.052.45M5.95 22l.05-.05V22zm1.297-1A1.94 1.94 0 0 1 7 20.05V20a.75.75 0 0 1 1.5 0v.05c0 .248.201.45.45.45h.1a.45.45 0 0 0 .45-.45v-.234a.25.25 0 0 0-.121-.214l-1.53-.918a1.75 1.75 0 0 1-.849-1.5v-.234A1.95 1.95 0 0 1 8.95 15h.1A1.95 1.95 0 0 1 11 16.95V17a.75.75 0 0 1-1.5 0v-.05a.45.45 0 0 0-.45-.45h-.1a.45.45 0 0 0-.45.45v.234a.25.25 0 0 0 .121.214l1.53.918c.527.316.849.886.849 1.5v.234a1.96 1.96 0 0 1-.247.95 1.95 1.95 0 0 1-1.703 1h-.1a1.95 1.95 0 0 1-1.703-1m-1.439-.538c.124-.296.192-.621.192-.962a.75.75 0 1 0-1.5 0 1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0q.002.207.1.375A.75.75 0 0 0 6 17.5a2.5 2.5 0 1 0-5 0v2a2.5 2.5 0 0 0 4.808.962"/>`
} as const;

export default function DocumentCssIcon({ 
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

  const gradientId = 'documentcssicon_gradient';
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