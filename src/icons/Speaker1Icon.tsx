import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.081 6.419C26.208 5.408 28 6.207 28 7.72v32.56c0 1.514-1.792 2.313-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.216zm7.253 7.98a1.25 1.25 0 0 1 1.767-.064l.064.061-.064-.06h.001l.002.002.005.005.014.012.042.041q.051.05.137.139c.113.118.269.287.452.505.366.436.847 1.072 1.326 1.893A14 14 0 0 1 38 24c0 3.023-.963 5.426-1.92 7.068-.48.82-.96 1.457-1.326 1.893a10 10 0 0 1-.59.644l-.019.019-.022.021-.014.013-.005.005-.003.003.008-.008-.008.008a1.25 1.25 0 0 1-1.705-1.828l.002-.002.016-.016.085-.086a8 8 0 0 0 .34-.381c.29-.346.685-.866 1.081-1.545A11.5 11.5 0 0 0 35.5 24c0-2.477-.787-4.449-1.58-5.807-.396-.68-.79-1.2-1.08-1.545a8 8 0 0 0-.426-.467l-.017-.017.001.001a1.25 1.25 0 0 1-.064-1.765"/>`,
  'regular': `<path d="M25.081 6.419C26.208 5.408 28 6.207 28 7.72v32.56c0 1.514-1.792 2.313-2.919 1.302l-8.206-7.366A4.75 4.75 0 0 0 13.702 33H9a5.25 5.25 0 0 1-5.25-5.25v-7.5C3.75 17.35 6.1 15 9 15h4.702a4.75 4.75 0 0 0 3.173-1.216zm.419 2.983-6.955 6.244a7.25 7.25 0 0 1-4.843 1.854H9a2.75 2.75 0 0 0-2.75 2.75v7.5A2.75 2.75 0 0 0 9 30.5h4.702a7.25 7.25 0 0 1 4.843 1.855L25.5 38.6zm6.834 4.998a1.25 1.25 0 0 1 1.767-.066l.001.002.002.002.005.005.014.012.042.041q.051.05.137.139c.113.118.269.287.452.505.366.436.847 1.072 1.326 1.893A14 14 0 0 1 38 24c0 3.023-.963 5.426-1.92 7.068-.48.82-.96 1.457-1.326 1.893a10 10 0 0 1-.59.644l-.019.019-.022.021-.014.013-.005.005-.002.003H34.1a1.25 1.25 0 0 1-1.705-1.828l.002-.002.016-.016.085-.086c.078-.081.196-.209.34-.381.29-.346.685-.866 1.081-1.545A11.5 11.5 0 0 0 35.5 24c0-2.477-.787-4.449-1.58-5.807-.396-.68-.79-1.2-1.08-1.545a8 8 0 0 0-.426-.467l-.017-.017.001.001a1.25 1.25 0 0 1-.064-1.765m1.767-.066.064.062z"/>`
} as const;

export default function Speaker1Icon({ 
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

  const gradientId = 'speaker1icon_gradient';
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