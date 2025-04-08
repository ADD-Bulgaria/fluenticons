import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><path d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><path fill-opacity=".2" d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><path fill-opacity=".2" d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><path fill-opacity=".2" d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><path fill-opacity=".2" d="M26.457 43.983a4.5 4.5 0 0 0 4.038-3.471l2.332-10.082a.5.5 0 0 1 .142-.25c3.66-3.494 5.531-7.407 5.531-11.68C38.5 10.492 32.008 4 24 4S9.5 10.492 9.5 18.5c0 4.273 1.872 8.186 5.534 11.68a.5.5 0 0 1 .142.25l2.327 10.078.09.335a4.5 4.5 0 0 0 4.294 3.153h4.224z"/><rect width="2.487" height="17.115" x="22.754" y="20.274" rx="1.243"/><rect width="2.486" height="6.013" x="22.754" y="11" rx="1.243"/><path d="M15.368 17.13a1.243 1.243 0 1 1 1.758-1.758l2.494 2.494a1.243 1.243 0 1 1-1.758 1.758zm17.264 0a1.243 1.243 0 1 0-1.758-1.758l-2.494 2.494a1.243 1.243 0 0 0 1.758 1.758zm-15.71 20.861h14.156l.573-2.48H16.35z"/>`,
  'filled': `<path d="M24 4C15.992 4 9.5 10.492 9.5 18.5c0 4.239 1.82 8.054 4.718 10.704.45.411.751.875.873 1.352l1.265 4.944h6.394v-14a1.25 1.25 0 0 1 2.5 0v14h6.396l1.266-4.948c.122-.476.423-.94.873-1.35A14.47 14.47 0 0 0 38.5 18.5C38.5 10.492 32.008 4 24 4m7.006 34H16.995l.62 2.427A4.75 4.75 0 0 0 22.219 44h3.565a4.75 4.75 0 0 0 4.602-3.572zM25.25 12.25v3.5a1.25 1.25 0 1 1-2.5 0v-3.5a1.25 1.25 0 1 1 2.5 0m7.382 3.116a1.25 1.25 0 0 1 0 1.767l-2.497 2.497a1.25 1.25 0 0 1-1.769-1.768l2.498-2.496a1.25 1.25 0 0 1 1.768 0m-13 2.496a1.25 1.25 0 1 1-1.768 1.768l-2.498-2.497a1.25 1.25 0 1 1 1.768-1.767z"/>`,
  'regular': `<path d="M24 6.5c-6.627 0-12 5.373-12 12 0 3.508 1.504 6.663 3.905 8.859.717.655 1.338 1.522 1.608 2.577L18.68 34.5h4.07v-13a1.25 1.25 0 0 1 2.5 0v13h4.071l1.17-4.568c.27-1.054.89-1.92 1.606-2.575A11.97 11.97 0 0 0 36 18.5c0-6.627-5.373-12-12-12m-3.962 33.308a2.25 2.25 0 0 0 2.18 1.692h3.565a2.25 2.25 0 0 0 2.18-1.692L28.68 37h-9.36zM9.5 18.5C9.5 10.492 15.992 4 24 4s14.5 6.492 14.5 14.5c0 4.237-1.82 8.052-4.715 10.701-.45.412-.75.875-.873 1.351l-2.527 9.876A4.75 4.75 0 0 1 25.783 44h-3.565a4.75 4.75 0 0 1-4.602-3.573l-2.525-9.871c-.122-.477-.423-.94-.873-1.352A14.47 14.47 0 0 1 9.5 18.5m15.75-6.25a1.25 1.25 0 1 0-2.5 0v3.5a1.25 1.25 0 1 0 2.5 0zm7.382 3.116a1.25 1.25 0 0 1 0 1.767l-2.497 2.497a1.25 1.25 0 0 1-1.769-1.768l2.498-2.496a1.25 1.25 0 0 1 1.768 0m-13 2.496a1.25 1.25 0 1 1-1.768 1.768l-2.498-2.497a1.25 1.25 0 1 1 1.768-1.767z"/>`
} as const;

export default function LightbulbFilamentIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
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

  const gradientId = 'lightbulbfilamenticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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