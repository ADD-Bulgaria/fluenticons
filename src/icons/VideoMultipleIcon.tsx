import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.75 9a6.25 6.25 0 0 0-6.25 6.25v12.5A6.25 6.25 0 0 0 14.75 34h12A6.25 6.25 0 0 0 33 27.75v-12.5A6.25 6.25 0 0 0 26.75 9zM6.5 15.25q0-.258.016-.512A6.24 6.24 0 0 0 4 19.75v8C4 33.687 8.813 38.5 14.75 38.5h7.5a6.24 6.24 0 0 0 5.012-2.516q-.255.015-.512.016h-12a8.25 8.25 0 0 1-8.25-8.25zm37.499-.994c0-2.611-2.924-4.157-5.081-2.686l-3.915 2.67v14.522l3.915 2.67c2.157 1.47 5.08-.075 5.08-2.686z"/>`,
  'regular': `<path d="M8.5 15.25A6.25 6.25 0 0 1 14.75 9h12.5a6.25 6.25 0 0 1 6.25 6.25v.012l5.416-3.692c2.157-1.471 5.08.074 5.08 2.685v14.49c0 2.612-2.923 4.157-5.08 2.686L33.5 27.739v.011A6.25 6.25 0 0 1 27.25 34h-12.5a6.25 6.25 0 0 1-6.25-6.25zm25 9.463 6.824 4.652a.75.75 0 0 0 1.172-.62v-14.49a.75.75 0 0 0-1.172-.62L33.5 18.287zM14.75 11.5A3.75 3.75 0 0 0 11 15.25v12.5a3.75 3.75 0 0 0 3.75 3.75h12.5A3.75 3.75 0 0 0 31 27.75v-12.5a3.75 3.75 0 0 0-3.75-3.75zM6.5 15.25q0-.258.016-.512A6.24 6.24 0 0 0 4 19.75v8C4 33.687 8.813 38.5 14.75 38.5h8a6.24 6.24 0 0 0 5.012-2.516q-.255.015-.512.016h-12.5a8.25 8.25 0 0 1-8.25-8.25z"/>`
} as const;

export default function VideoMultipleIcon({ 
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

  const gradientId = 'videomultipleicon_gradient';
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