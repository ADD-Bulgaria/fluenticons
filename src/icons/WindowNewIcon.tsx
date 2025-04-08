import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 17.975v-.136c1.174-.49 2-1.649 2-3V6.25A3.25 3.25 0 0 0 17.75 3h-8.5a3.25 3.25 0 0 0-3.093 2.25h-.201c-.912 0-1.688.321-2.222.954C3.216 6.817 3 7.634 3 8.5v8.75c0 1.06.383 2.014 1.11 2.7.726.683 1.733 1.045 2.89 1.045h3.92l4.076.005h.002c.976.005 1.943-.2 2.693-.68.78-.5 1.309-1.295 1.309-2.345M5.956 6.75H6v8.088a3.25 3.25 0 0 0 3.25 3.25h8.246c-.032.418-.242.73-.614.968-.433.278-1.09.448-1.878.444H15l-4.082-.005H7c-.843 0-1.46-.26-1.86-.637-.398-.374-.64-.918-.64-1.608V8.5c0-.635.16-1.067.38-1.329.205-.242.532-.421 1.076-.421m6.066-.25h4.728a.75.75 0 0 1 .75.75v4.729a.75.75 0 0 1-1.5 0V9.06l-5.22 5.22a.75.75 0 1 1-1.06-1.061L14.94 8h-2.918a.75.75 0 1 1 0-1.5"/>`,
  'regular': `<path d="M11.272 7.25a.75.75 0 0 1 .75-.75h4.728a.75.75 0 0 1 .75.75v4.729a.75.75 0 0 1-1.5 0V9.06l-5.22 5.22a.75.75 0 1 1-1.06-1.061L14.94 8h-2.918a.75.75 0 0 1-.75-.75m-5.115-2A3.25 3.25 0 0 1 9.25 3h8.5A3.25 3.25 0 0 1 21 6.25v8.588a3.25 3.25 0 0 1-2 3.001v.136c0 1.05-.53 1.845-1.309 2.344-.75.48-1.717.686-2.693.68h-.002l-4.077-.004H7c-1.157 0-2.164-.362-2.89-1.045-.727-.686-1.11-1.64-1.11-2.7V8.5c0-.865.216-1.683.734-2.296.534-.633 1.31-.954 2.222-.954zM6 6.75h-.044c-.544 0-.871.179-1.076.421-.22.262-.38.694-.38 1.329v8.75c0 .69.242 1.234.64 1.608.4.377 1.017.637 1.86.637h3.92L15 19.5h.004c.788.004 1.445-.166 1.878-.444.372-.238.582-.55.614-.968H9.25A3.25 3.25 0 0 1 6 14.838zM9.25 4.5A1.75 1.75 0 0 0 7.5 6.25v8.588c0 .967.784 1.75 1.75 1.75h8.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75z"/>`
} as const;

export default function WindowNewIcon({ 
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

  const gradientId = 'windownewicon_gradient';
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