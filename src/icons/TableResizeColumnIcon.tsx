import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 25A3.75 3.75 0 0 1 3 21.25V6.75A3.75 3.75 0 0 1 6.75 3h.75v8.647l-1.058 1.19a1.75 1.75 0 0 0 0 2.326l1.058 1.19V25zM9 25v-7.168a1.75 1.75 0 0 0 2.428-2.082h5.145A1.75 1.75 0 0 0 19 17.832V25zm8.087-14.558A1.75 1.75 0 0 1 19 10.168V3H9v7.168a1.75 1.75 0 0 1 2.428 2.082h5.145a1.75 1.75 0 0 1 .514-1.808m4.471 4.72-1.058 1.19V25h.75A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3h-.75v8.647l1.053 1.185.002.002a1.75 1.75 0 0 1 .027 2.3l-.006.009zM9.42 13.25h9.16l-.89-1.002a.75.75 0 0 1 1.12-.996l1.998 2.247a.75.75 0 0 1 .013.987l-.01.012-2 2.25a.75.75 0 1 1-1.122-.996l.89-1.002H9.42l.89 1.002a.75.75 0 0 1-1.12.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996zm12.58.683v.14Z"/>`,
  'regular': `<path d="M9.42 13.25h9.16l-.89-1.002a.75.75 0 0 1 1.12-.996l1.998 2.247a.75.75 0 0 1 .013.987l-.01.012-2 2.25a.75.75 0 1 1-1.122-.996l.89-1.002H9.42l.89 1.002a.75.75 0 0 1-1.12.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996zm-6.42 8A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75zm1.5-14.5A2.25 2.25 0 0 1 6.75 4.5h.75v7.147l.942-1.06A1.8 1.8 0 0 1 9 10.168V4.5h10v5.668c.206.098.397.238.558.42l.942 1.06V4.5h.75a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25h-.75v-7.147l-.942 1.06a1.8 1.8 0 0 1-.558.419V23.5H9v-5.668a1.8 1.8 0 0 1-.558-.42l-.942-1.06V23.5h-.75a2.25 2.25 0 0 1-2.25-2.25z"/>`
} as const;

export default function TableResizeColumnIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'tableresizecolumnicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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