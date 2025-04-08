import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2H6a2 2 0 0 0-2 2v8h.602l1.294-2.953c.583-1.329 2.39-1.388 3.1-.204l.029.048.085.176 1.728 4.314.346-.51a1.75 1.75 0 0 1 1.24-.85l.054-.008.184-.013h2.035a1.75 1.75 0 0 1 .263 3.48l-.052.008-.177.012h-1.04l-1.665 2.603c-.664 1.188-2.351 1.177-3.027.043l-.028-.046-.083-.172-1.462-3.653-.078.178a1.75 1.75 0 0 1-1.317 1.024l-.056.009-.193.014H4V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-1.996zm2 6.5a.5.5 0 0 1-.5-.5V2.5l6 6zM5.255 13H2.75l-.103.007-.01.002A.75.75 0 0 0 2.75 14.5h2.995l.111-.008.012-.002.046-.01a.75.75 0 0 0 .518-.429l1.035-2.362 2.337 5.835.049.101.005.01a.75.75 0 0 0 1.306-.041l1.979-3.094h1.554l.103-.007.01-.002A.75.75 0 0 0 14.697 13h-2l-.106.007-.01.002a.75.75 0 0 0-.546.389l-1.427 2.1L8.195 9.47l-.05-.103-.006-.01a.75.75 0 0 0-1.327.09zm.49 1.5H4Z"/>`,
  'regular': `<path d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v5.25a.75.75 0 0 1-1.5 0V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.75a.75.75 0 0 1 1.5 0V20a.5.5 0 0 0 .5.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zM2.75 13h2.505l1.557-3.551a.75.75 0 0 1 1.327-.091l.006.01.05.103 2.413 6.027 1.427-2.1a.75.75 0 0 1 .545-.389l.01-.002.107-.007h2a.75.75 0 0 1 .113 1.492l-.01.001-.103.007h-1.554l-1.979 3.094a.75.75 0 0 1-1.306.04l-.005-.009-.05-.101-2.336-5.835-1.035 2.362a.75.75 0 0 1-.564.439l-.012.002-.11.008H2.75a.75.75 0 0 1-.113-1.492l.01-.001z"/>`
} as const;

export default function DocumentCatchUpIcon({ 
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

  const gradientId = 'documentcatchupicon_gradient';
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