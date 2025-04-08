import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.5 5h3.25L9 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 8 4.5V1H4.5A1.5 1.5 0 0 0 3 2.5v11A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V6zm-1.65 5.15c.05.04.09.1.11.16.03.06.04.12.04.19s-.01.13-.04.19c-.02.06-.06.12-.11.16-.04.05-.1.09-.16.11-.06.03-.12.04-.19.04s-.13-.01-.19-.04a.36.36 0 0 1-.16-.11l-.65-.64-.65.64c-.04.05-.1.09-.16.11-.06.03-.12.04-.19.04s-.13-.01-.19-.04a.36.36 0 0 1-.16-.11.36.36 0 0 1-.11-.16.4.4 0 0 1-.04-.19c0-.07.01-.13.04-.19.02-.06.06-.12.11-.16l.64-.65-.64-.65A.47.47 0 0 1 5 9.5c0-.13.05-.26.15-.35.09-.1.22-.15.35-.15s.26.05.35.15l.65.64.65-.64c.09-.1.22-.15.35-.15s.26.05.35.15c.1.09.15.22.15.35s-.05.26-.15.35l-.64.65zM12 12H9.5a.47.47 0 0 1-.35-.15.47.47 0 0 1-.15-.35c0-.13.05-.26.15-.35.09-.1.22-.15.35-.15H12z"/>`,
  'regular': `<path d="m7.207 10.5.647-.646a.5.5 0 1 0-.708-.708l-.646.647-.646-.647a.5.5 0 1 0-.708.708l.647.646-.647.646a.501.501 0 0 0 .708.708l.646-.647.646.647a.5.5 0 1 0 .708-.708zM3.586 1.586A2 2 0 0 1 5 1h3.586a1.5 1.5 0 0 1 1.06.439l2.915 2.915A1.5 1.5 0 0 1 13 5.414V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 .586-1.414M12 11V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1H9.5a.5.5 0 0 1 0-1zM9.5 5h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5"/>`
} as const;

export default function DocumentContractIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentcontracticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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