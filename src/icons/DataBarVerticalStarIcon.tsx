import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M27 7a3 3 0 1 0-6 0v7.223a9.03 9.03 0 0 1 6 .712zm-8 6v1.935A9 9 0 0 0 14 23a8.96 8.96 0 0 0 1.486 4.956A3 3 0 0 1 13 25V13a3 3 0 1 1 6 0m-8 6a3 3 0 1 0-6 0v6a3 3 0 1 0 6 0zm19.5 4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-8.212-4.862-.94 2.828h-2.994c-.731 0-1.03.938-.434 1.361l2.406 1.707-.929 2.792c-.228.687.555 1.267 1.146.848L23 25.931l2.457 1.743c.591.42 1.374-.16 1.146-.848l-.93-2.792 2.407-1.707c.597-.423.297-1.361-.434-1.361h-2.994l-.94-2.828c-.228-.684-1.196-.684-1.424 0"/>`,
  'regular': `<path d="M27 7a3 3 0 1 0-6 0v7.223A9 9 0 0 1 23 14V7a1 1 0 1 1 2 0v7.223c.701.16 1.372.4 2 .712zm-8 6v1.935c-.728.362-1.4.82-2 1.357V13a1 1 0 1 0-2 0v5.873A8.95 8.95 0 0 0 14 23a8.96 8.96 0 0 0 1.486 4.956A3 3 0 0 1 13 25V13a3 3 0 1 1 6 0m-8 6a3 3 0 1 0-6 0v6a3 3 0 1 0 6 0zm-3-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m22.5 5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-8.212-4.862-.94 2.828h-2.994c-.731 0-1.03.938-.434 1.361l2.406 1.707-.929 2.792c-.228.687.555 1.267 1.146.848L23 25.931l2.457 1.743c.591.42 1.374-.16 1.146-.848l-.93-2.792 2.407-1.707c.597-.423.297-1.361-.434-1.361h-2.994l-.94-2.828c-.228-.684-1.196-.684-1.424 0"/>`
} as const;

export default function DataBarVerticalStarIcon({ 
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

  const gradientId = 'databarverticalstaricon_gradient';
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