import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 14.003c-5.308 0-10.243.961-13.868 2.62-3.52 1.61-6.29 4.136-6.125 7.463l.007.087.56 4.646a4.75 4.75 0 0 0 5.48 4.12l5.112-.833a4.25 4.25 0 0 0 3.478-3.336l.935-4.533a.2.2 0 0 1 .022-.058c.754-.259 2.265-.659 4.4-.659 2.134 0 3.645.4 4.399.66q.01.012.022.057l.935 4.533a4.25 4.25 0 0 0 3.478 3.336l5.111.834a4.75 4.75 0 0 0 5.481-4.12l.56-4.646.007-.088c.166-3.327-2.606-5.853-6.125-7.463-3.625-1.659-8.56-2.62-13.869-2.62"/>`,
  'regular': `<path d="M10.132 16.623c3.625-1.659 8.56-2.62 13.868-2.62s10.244.961 13.869 2.62c3.519 1.61 6.29 4.136 6.125 7.463q-.002.045-.008.088l-.559 4.645a4.75 4.75 0 0 1-5.48 4.12l-5.112-.833a4.25 4.25 0 0 1-3.478-3.336l-.935-4.533a.2.2 0 0 0-.022-.058c-.754-.259-2.265-.659-4.4-.659-2.134 0-3.645.4-4.4.66a.2.2 0 0 0-.02.057l-.936 4.533a4.25 4.25 0 0 1-3.478 3.336l-5.112.834a4.75 4.75 0 0 1-5.48-4.121l-.56-4.646-.007-.087c-.166-3.327 2.606-5.853 6.125-7.463m-3.63 7.3.553 4.597a2.25 2.25 0 0 0 2.597 1.952l5.111-.834a1.75 1.75 0 0 0 1.432-1.373l.936-4.533c.168-.815.725-1.595 1.637-1.91.97-.335 2.764-.802 5.232-.802s4.262.467 5.233.802c.911.315 1.469 1.095 1.637 1.91l.935 4.533a1.75 1.75 0 0 0 1.432 1.373l5.112.834a2.25 2.25 0 0 0 2.596-1.952l.553-4.598c.06-1.673-1.368-3.516-4.67-5.026-3.221-1.474-7.783-2.393-12.828-2.393s-9.606.919-12.828 2.393c-3.301 1.51-4.73 3.353-4.67 5.026"/>`
} as const;

export default function CallEndIcon({ 
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

  const gradientId = 'callendicon_gradient';
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