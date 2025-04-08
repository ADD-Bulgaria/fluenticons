import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39.646 20.429a11.3 11.3 0 0 0-2.941-1.396c-1.053-.326-2.153-.283-3.044-1.015-.784-.645-1.824-2.1-1.824-5.47 0-2.111-.67-3.765-1.722-5.021C29.083 6.292 27.74 5.506 26.472 5c-1.27-.506-2.523-.754-3.445-.876A12 12 0 0 0 21.433 4c-3.522 0-7.347.807-10.538 3.183-2.549 1.93-4.15 4.483-5.157 6.974-1.005 2.488-1.433 4.958-1.613 6.791-.66 6.735.747 14.526 6.36 18.887C14.486 42.945 19.88 44 25.52 44c5.184 0 9.785-1.158 13.123-3.627 3.388-2.505 5.355-6.278 5.356-11.184 0-4.601-2.151-7.28-4.353-8.76"/>`,
  'regular': `<path d="M39.646 20.429a11.3 11.3 0 0 0-2.941-1.396c-1.053-.326-2.153-.283-3.044-1.015-.784-.645-1.824-2.1-1.824-5.47 0-2.111-.67-3.765-1.722-5.021C29.083 6.292 27.74 5.506 26.472 5c-1.27-.506-2.523-.754-3.445-.876A12 12 0 0 0 21.433 4c-3.522 0-7.347.807-10.538 3.183-2.549 1.93-4.15 4.483-5.157 6.974-1.005 2.488-1.433 4.958-1.613 6.791-.66 6.735.747 14.526 6.36 18.887C14.486 42.945 19.88 44 25.52 44c5.184 0 9.785-1.158 13.123-3.627 3.388-2.505 5.355-6.278 5.356-11.184 0-4.601-2.151-7.28-4.353-8.76M12.018 37.86c-4.834-3.756-5.974-10.868-5.405-16.669.165-1.682.555-3.9 1.443-6.099C10.346 9.424 15.391 6.5 21.43 6.5c.424.004.848.047 1.268.103.793.106 1.83.314 2.849.72 1.021.407 1.966.99 2.65 1.808.666.795 1.14 1.878 1.14 3.416 0 3.926 1.24 6.171 2.737 7.402 1.206.992 2.479 1.035 3.892 1.472.63.195 1.462.53 2.285 1.083 5.436 3.652 3.565 12.413-1.095 15.86-2.766 2.045-6.78 3.136-11.636 3.136-5.399 0-10.134-1.023-13.502-3.64"/>`
} as const;

export default function ShapeOrganicIcon({ 
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

  const gradientId = 'shapeorganicicon_gradient';
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