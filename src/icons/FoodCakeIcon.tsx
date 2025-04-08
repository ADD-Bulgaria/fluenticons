import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 7c1.714 0 2-1.34 2-2.444C14 3.45 13.262 1.5 12 1.5s-2 1.951-2 3.056S10.286 7 12 7m-8.5 3.25A2.25 2.25 0 0 1 5.75 8h12.5a2.25 2.25 0 0 1 2.25 2.25v.875l-3.634 2.726a1.25 1.25 0 0 1-1.384.077l-2.04-1.2a2.75 2.75 0 0 0-2.884.06l-1.761 1.136a1.25 1.25 0 0 1-1.35.003L3.5 11.408zm0 2.938V18.5h-.75a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-.75V13l-2.734 2.05a2.75 2.75 0 0 1-3.044.171l-2.04-1.2a1.25 1.25 0 0 0-1.311.027l-1.76 1.136a2.75 2.75 0 0 1-2.971.008z"/>`,
  'regular': `<path d="M12 1c-.95 0-1.585.682-1.937 1.282-.361.619-.563 1.374-.563 1.968 0 .494.063 1.174.432 1.746C10.343 6.63 11.039 7 12 7s1.658-.37 2.068-1.004c.37-.572.432-1.252.432-1.746 0-.594-.202-1.35-.563-1.968C13.586 1.682 12.95 1 12 1m-1 3.25c0-.31.121-.805.358-1.21.248-.424.487-.54.642-.54s.394.116.642.54c.237.405.358.9.358 1.21 0 .41-.062.73-.193.932-.09.14-.27.318-.807.318-.538 0-.717-.178-.807-.318C11.063 4.98 11 4.66 11 4.25m9.5 6v8.25h.75a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.75v-8.25A2.25 2.25 0 0 1 5.75 8h12.5a2.25 2.25 0 0 1 2.25 2.25m-15.5 0v2.091l2.447 1.58a1.25 1.25 0 0 0 1.356 0l1.747-1.128a2.75 2.75 0 0 1 2.9-.05l2.009 1.199a1.25 1.25 0 0 0 1.359-.05L19 12.36v-2.11a.75.75 0 0 0-.75-.75H5.75a.75.75 0 0 0-.75.75m12.68 4.87a2.75 2.75 0 0 1-2.99.11l-2.008-1.2a1.25 1.25 0 0 0-1.319.023l-1.747 1.128a2.75 2.75 0 0 1-2.982 0L5 14.126V18.5h14v-4.307z"/>`
} as const;

export default function FoodCakeIcon({ 
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

  const gradientId = 'foodcakeicon_gradient';
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