import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.679 5.332a6.25 6.25 0 0 1 4.642 0l15.007 6.003A4.25 4.25 0 0 1 44 15.281v9.338A12.96 12.96 0 0 0 35 21a12.97 12.97 0 0 0-9.75 4.401v-3.335l9.502-4.171a1.25 1.25 0 0 0-1.005-2.29L24 19.885l-9.747-4.28a1.25 1.25 0 0 0-1.005 2.29l9.502 4.171v7.572A13 13 0 0 0 22 34c0 3.454 1.347 6.593 3.544 8.921a6.25 6.25 0 0 1-3.865-.253L6.672 36.665A4.25 4.25 0 0 1 4 32.719V15.28a4.25 4.25 0 0 1 2.672-3.946zM46 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-12.293 4.707 8-8a1 1 0 0 0-1.414-1.414L33 36.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0"/>`,
  'regular': `<path d="M14.253 15.605a1.25 1.25 0 0 0-1.005 2.29l9.502 4.17v7.573a13 13 0 0 1 2.5-4.237v-3.335l9.502-4.172a1.25 1.25 0 1 0-1.005-2.289L24 19.885zm8.354 24.742c.385.154.79.241 1.196.263a13 13 0 0 0 1.741 2.311 6.25 6.25 0 0 1-3.865-.253L6.672 36.665A4.25 4.25 0 0 1 4 32.719V15.28a4.25 4.25 0 0 1 2.672-3.946l15.007-6.003a6.25 6.25 0 0 1 4.642 0l15.007 6.003A4.25 4.25 0 0 1 44 15.281v9.338a13 13 0 0 0-2.5-1.88v-7.458a1.75 1.75 0 0 0-1.1-1.625L25.393 7.653a3.75 3.75 0 0 0-2.786 0L7.6 13.656a1.75 1.75 0 0 0-1.1 1.625v17.438c0 .715.436 1.359 1.1 1.625zM46 34c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-12.293 4.707 8-8a1 1 0 0 0-1.414-1.414L33 36.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0"/>`
} as const;

export default function CubeCheckmarkIcon({ 
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

  const gradientId = 'cubecheckmarkicon_gradient';
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