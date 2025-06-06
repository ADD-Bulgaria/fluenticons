import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.08 6.63c-.07-.1-.15-.19-.23-.27h-.01a2.85 2.85 0 0 0-1.11-.69l-1.38-.45c-.1-.04-.2-.11-.26-.2a.5.5 0 0 1-.1-.31.5.5 0 0 1 .1-.31c.06-.09.15-.16.26-.2l1.38-.45c.42-.14.79-.38 1.1-.69.29-.3.52-.67.67-1.07v-.03l.45-1.38c.04-.1.11-.2.2-.26a.5.5 0 0 1 .31-.1c.11 0 .22.04.31.1s.16.15.2.26l.45 1.38c.14.42.38.8.69 1.11.31.32.69.55 1.11.69l1.38.45h.03c.1.04.19.11.26.2s.1.2.1.31a.5.5 0 0 1-.1.31c-.06.09-.15.16-.26.2l-1.38.45c-.42.14-.8.38-1.11.69-.32.31-.55.69-.69 1.11l-.46 1.38v.03c-.04.09-.11.17-.19.23a.5.5 0 0 1-.31.1.5.5 0 0 1-.31-.1.52.52 0 0 1-.2-.26l-.45-1.38c-.1-.31-.25-.6-.45-.85m7.7 3.8-.77-.24c-.24-.08-.45-.21-.62-.38-.17-.18-.3-.39-.38-.62l-.25-.76a.33.33 0 0 0-.11-.15.27.27 0 0 0-.34 0c-.05.04-.09.09-.11.15l-.25.76c-.07.23-.2.44-.37.61s-.38.3-.61.38l-.77.25c-.06.02-.11.06-.15.11a.27.27 0 0 0 0 .34c.04.05.09.09.15.11l.77.25c.23.07.45.21.62.38s.3.39.38.62l.25.76c.02.06.06.11.11.15a.27.27 0 0 0 .34 0c.05-.04.09-.09.11-.15l.25-.76c.08-.24.21-.45.38-.62.18-.17.39-.3.62-.38l.77-.25c.06-.02.11-.06.15-.11s.05-.11.05-.17-.01-.12-.05-.17-.106-.08-.17-.11m-4.24 2.28.26.8c.05.14.12.25.2.37v6.08c0 1.24-1.01 2.25-2.25 2.25H6.25C5.01 22.21 4 21.2 4 19.96V4.46c0-1.24 1.01-2.25 2.25-2.25h8.26c-.07.04-.15.08-.22.11l-1.42.46c-.4.15-.75.4-.99.75a2 2 0 0 0-.38 1.18c0 .43.13.84.37 1.18.078.112.178.202.275.289l.045.041H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h7.24l.035.058a1 1 0 0 1 .085.162l.46 1.41c.14.4.4.74.75.99.35.24.76.37 1.18.37 0 .37.11.73.33 1.04s.52.53.91.67zm-11.79 5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75m0-5h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75"/>`,
  'regular': `<path d="M16.25 11h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75m0 4.5h-8.5c-.41 0-.75.34-.75.75s.34.75.75.75h8.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75M7 7.25c0 .41.34.75.75.75h7.45l-.09-.28q-.075-.21-.21-.39c-.04-.05-.07-.09-.11-.13-.15-.15-.33-.26-.52-.32L13.1 6.5H7.75c-.41 0-.75.34-.75.75m12.8 6.04-.26-.79-.8-.29c-.09-.03-.16-.08-.24-.12v7.66c0 .41-.34.75-.75.75H6.25c-.41 0-.75-.34-.75-.75V4.25c0-.41.34-.75.75-.75h5.53c.03-.06.05-.13.09-.19.24-.34.58-.6.99-.74l1.41-.46c.07-.03.15-.07.22-.11H6.25C5.01 2 4 3.01 4 4.25v15.5C4 20.99 5.01 22 6.25 22h11.5c1.24 0 2.25-1.01 2.25-2.25v-6.08a1.7 1.7 0 0 1-.2-.38m-3.95-7.14c.08.08.16.17.23.27.2.25.35.54.45.85l.45 1.38c.04.11.11.2.2.26.09.07.2.1.31.1a.5.5 0 0 0 .31-.1c.08-.06.15-.14.19-.23v-.03l.46-1.38c.14-.42.37-.8.69-1.11.31-.31.69-.55 1.11-.69l1.38-.45c.11-.04.2-.11.26-.2a.5.5 0 0 0 .1-.31.5.5 0 0 0-.1-.31.63.63 0 0 0-.26-.2h-.03l-1.38-.45c-.42-.14-.8-.37-1.11-.69a2.85 2.85 0 0 1-.69-1.11L17.97.37a.52.52 0 0 0-.2-.26c-.09-.06-.2-.1-.31-.1a.5.5 0 0 0-.31.1c-.09.06-.16.16-.2.26l-.45 1.38v.03c-.15.4-.38.77-.67 1.07-.31.31-.68.55-1.1.69l-1.38.45c-.11.04-.2.11-.26.2a.5.5 0 0 0-.1.31c0 .11.03.22.1.31.06.09.16.16.26.2l1.38.45c.42.14.8.38 1.11.69zm7.93 4.07c.064 0 .13.06.17.11s.05.11.05.17-.01.12-.05.17-.09.09-.15.11l-.77.25c-.23.08-.44.21-.62.38-.17.17-.3.38-.38.62l-.25.76c-.02.06-.06.11-.11.15a.27.27 0 0 1-.34 0 .33.33 0 0 1-.11-.15l-.25-.76c-.08-.23-.21-.45-.38-.62s-.39-.31-.62-.38l-.77-.25a.33.33 0 0 1-.15-.11.27.27 0 0 1 0-.34c.04-.05.09-.09.15-.11l.77-.25c.23-.08.44-.21.61-.38s.3-.38.37-.61l.25-.76c.02-.06.06-.11.11-.15a.27.27 0 0 1 .34 0c.05.04.09.09.11.15l.25.76c.08.23.21.44.38.62.17.17.38.3.62.38z"/>`
} as const;

export default function DocumentOnePageSparkleIcon({ 
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

  const gradientId = 'documentonepagesparkleicon_gradient';
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