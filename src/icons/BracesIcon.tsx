import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 6a5 5 0 0 0-5 5v8.05c0 .767-.068 1.34-.376 1.846-.293.483-.946 1.13-2.598 1.68a1.5 1.5 0 0 0 0 2.847c1.648.55 2.266 1.182 2.558 1.727.334.624.416 1.43.416 2.733V37a5 5 0 0 0 5 5h.5a1.5 1.5 0 0 0 0-3H14a2 2 0 0 1-2-2v-7.117c0-1.28-.043-2.79-.772-4.15a5.5 5.5 0 0 0-1.457-1.724 5.7 5.7 0 0 0 1.417-1.556c.755-1.243.812-2.52.812-3.403V11a2 2 0 0 1 2-2h.5a1.5 1.5 0 0 0 0-3zm20 0a5 5 0 0 1 5 5v8.05c0 .767.069 1.34.376 1.846.293.483.946 1.13 2.598 1.68a1.5 1.5 0 0 1 0 2.847c-1.648.55-2.266 1.182-2.558 1.727-.334.624-.416 1.43-.416 2.733V37a5 5 0 0 1-5 5h-.5a1.5 1.5 0 0 1 0-3h.5a2 2 0 0 0 2-2v-7.117c0-1.28.043-2.79.772-4.15a5.5 5.5 0 0 1 1.457-1.724 5.7 5.7 0 0 1-1.417-1.556C36.057 21.21 36 19.934 36 19.05V11a2 2 0 0 0-2-2h-.5a1.5 1.5 0 0 1 0-3z"/>`,
  'regular': `<path d="M14.25 6.004a4.75 4.75 0 0 0-4.75 4.75v8.225c0 .873-.019 1.527-.31 2.119-.258.526-.832 1.18-2.362 1.73a1.25 1.25 0 0 0 .003 2.354c1.52.54 2.07 1.18 2.335 1.789.314.725.334 1.625.334 3.005v7.278a4.75 4.75 0 0 0 4.75 4.75h.5a1.25 1.25 0 1 0 0-2.5h-.5a2.25 2.25 0 0 1-2.25-2.25v-7.402c0-1.215.001-2.625-.54-3.875a4.96 4.96 0 0 0-1.542-1.97c.692-.526 1.185-1.132 1.516-1.807.567-1.153.567-2.347.566-3.15v-8.296a2.25 2.25 0 0 1 2.25-2.25h.5a1.25 1.25 0 1 0 0-2.5zm19.5 0a4.75 4.75 0 0 1 4.75 4.75v8.225c0 .873.019 1.527.31 2.119.258.526.832 1.18 2.362 1.73a1.25 1.25 0 0 1-.003 2.354c-1.52.54-2.07 1.18-2.335 1.789-.314.725-.334 1.625-.334 3.005v7.278a4.75 4.75 0 0 1-4.75 4.75h-.5a1.25 1.25 0 1 1 0-2.5h.5a2.25 2.25 0 0 0 2.25-2.25v-7.402c0-1.215-.001-2.625.54-3.875a4.96 4.96 0 0 1 1.542-1.97c-.692-.526-1.185-1.132-1.516-1.807-.567-1.153-.567-2.347-.566-3.15v-8.296a2.25 2.25 0 0 0-2.25-2.25h-.5a1.25 1.25 0 1 1 0-2.5z"/>`
} as const;

export default function BracesIcon({ 
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

  const gradientId = 'bracesicon_gradient';
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