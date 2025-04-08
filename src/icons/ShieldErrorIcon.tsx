import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M16 8a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10A.5.5 0 0 1 16 8m1 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.668-20.874a.5.5 0 0 0-.664 0C13.5 4.053 10.46 5.277 7.922 6.02c-1.466.43-2.969.78-4.484.984A.5.5 0 0 0 3 7.5V16c0 3.94 2.102 7.189 4.728 9.559 2.622 2.367 5.824 3.91 8.164 4.43a.5.5 0 0 0 .216 0c2.34-.52 5.542-2.063 8.165-4.43C26.898 23.189 29 19.939 29 16V7.5a.506.506 0 0 0-.442-.497c-1.514-.204-3.015-.554-4.48-.983-2.538-.743-5.579-1.967-7.746-3.894M28 16c0 3.56-1.898 6.561-4.398 8.816-2.46 2.22-5.448 3.667-7.602 4.171-2.153-.504-5.142-1.95-7.603-4.17C5.898 22.56 4 19.56 4 16V7.932a35 35 0 0 0 4.203-.952C10.669 6.258 13.7 5.065 16 3.159c2.299 1.906 5.331 3.1 7.797 3.82 1.887.553 3.47.838 4.203.953z"/>`
} as const;

export default function ShieldErrorIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'shielderroricon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}