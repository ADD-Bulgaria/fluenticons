import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 2a8 8 0 0 1 7.996 8.254 5.5 5.5 0 0 0-7.742 7.742 8 8 0 0 1-3.867-.857l-.121-.064-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083.91-3.644-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8m9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.646-1.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L12.207 14.5zm1.853.646.647-.646a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L15.207 15H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1z" opacity=".99"/>`,
  'regular': `<path d="M10 2a8 8 0 0 1 7.996 8.254 5.5 5.5 0 0 0-1.008-.66 7 7 0 1 0-13.094 3.83.5.5 0 0 1 .063.273l-.014.094-.756 3.021 3.024-.754a.5.5 0 0 1 .188-.01l.091.021.087.039c.92.517 1.947.82 3.017.88q.276.543.66 1.008a8 8 0 0 1-3.867-.857l-.121-.064-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083.91-3.644-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10a8 8 0 0 1 8-8m9 12.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-5.646-1.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L12.207 14.5zm1.853.646.647-.646a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 0 0 .708-.707L15.207 15H17v.5a.5.5 0 0 0 1 0V15a1 1 0 0 0-1-1z" opacity=".99"/>`
} as const;

export default function ChatArrowDoubleBackIcon({ 
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

  const gradientId = 'chatarrowdoublebackicon_gradient';
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