import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.758 8.173A10 10 0 0 0 6 12a9.98 9.98 0 0 0 4 8 9.96 9.96 0 0 0 6 2c1.355 0 2.648-.27 3.827-.759l1.135 1.136A11.46 11.46 0 0 1 16 23.5c-2.199 0-4.253-.617-6-1.687V29a1 1 0 0 0 1.514.858L16 27.166l4.485 2.692A1 1 0 0 0 22 29v-5.586l6.293 6.293a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.415 1.414zM8.7 5.166 22.834 19.3A9.97 9.97 0 0 0 26 12c0-5.523-4.477-10-10-10a9.97 9.97 0 0 0-7.3 3.166"/>`,
  'regular': `<path d="M6.758 8.173 2.292 3.707a1 1 0 0 1 1.415-1.414l26 26a1 1 0 1 1-1.414 1.414L22 23.414V29a1 1 0 0 1-1.515.858L16 27.166l-4.486 2.692A1 1 0 0 1 10 29v-9a9.99 9.99 0 0 1-4-8c0-1.355.27-2.648.758-3.827m13.069 13.068A10 10 0 0 1 16 22a10 10 0 0 1-4-.832v6.066l3.485-2.092a1 1 0 0 1 1.03 0L20 27.234v-5.82zm-1.566-1.565L8.324 9.739a8 8 0 0 0 9.937 9.937M24 12a7.98 7.98 0 0 1-2.58 5.885l1.414 1.415A9.97 9.97 0 0 0 26 12c0-5.523-4.477-10-10-10a9.97 9.97 0 0 0-7.3 3.166l1.415 1.415A8 8 0 0 1 24 12"/>`
} as const;

export default function RibbonOffIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'ribbonofficon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}