import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 8c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3m4.69.016c.47-.235.927-.534 1.31-.896v2.989a2.97 2.97 0 0 0-1.873.866l-.6.6a1.98 1.98 0 0 0-.576 1.517l-.119-.004a1.98 1.98 0 0 0-1.4.58l-.6.6a2.99 2.99 0 0 0-.772 2.893l-.76.764-.05.052C6.29 17.792 4 16.53 4 15V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9s3.438-.358 4.69-.984m4.508 2.838a.5.5 0 1 0-.707-.708l-1.186 1.186-.035.053a2 2 0 0 0-2.436.3l-.6.6a.98.98 0 0 0 0 1.386l1.442 1.439a.98.98 0 0 0 1.387 0l.6-.6a2 2 0 0 0 .3-2.437.4.4 0 0 0 .053-.035zm-5.671 3.521a.98.98 0 0 0-1.386 0l-.6.6a2 2 0 0 0-.3 2.437.4.4 0 0 0-.053.035l-1.182 1.185a.5.5 0 0 0 .707.707l1.185-1.186.036-.053a2 2 0 0 0 2.436-.3l.6-.6a.98.98 0 0 0 0-1.387z"/>`,
  'regular': `<path d="M4 5c0-1.007.875-1.755 1.9-2.223A10.2 10.2 0 0 1 10 2a10.2 10.2 0 0 1 4.1.777C15.125 3.245 16 3.993 16 5v5.109a3 3 0 0 0-1 .258V6.7q-.421.31-.9.525A10.2 10.2 0 0 1 10 8a10.2 10.2 0 0 1-4.1-.777A5 5 0 0 1 5 6.7V15c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 17h.021q.018.081.039.161l-.76.764q-.03.03-.058.061a10.2 10.2 0 0 1-3.342-.763C4.875 16.755 4 16.007 4 15zm1 0c0 .374.356.875 1.318 1.313A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.682-.687C14.644 5.875 15 5.373 15 5c0-.374-.356-.875-1.318-1.313A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.682.687C5.356 4.125 5 4.626 5 5m14.198 5.854a.5.5 0 1 0-.707-.708l-1.186 1.186-.035.053a2 2 0 0 0-2.436.3l-.6.6a.98.98 0 0 0 0 1.386l1.442 1.439a.98.98 0 0 0 1.387 0l.6-.6a2 2 0 0 0 .3-2.437.4.4 0 0 0 .053-.035zm-5.671 3.521a.98.98 0 0 0-1.386 0l-.6.6a2 2 0 0 0-.3 2.437.4.4 0 0 0-.053.035l-1.182 1.185a.5.5 0 0 0 .707.707l1.185-1.186.036-.053a2 2 0 0 0 2.436-.3l.6-.6a.98.98 0 0 0 0-1.387z"/>`
} as const;

export default function DatabasePlugConnectedIcon({ 
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

  const gradientId = 'databaseplugconnectedicon_gradient';
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