import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.533c.324-.42.533-.92.533-1.5v-6.207l-.009.007c-.057-.664-.4-1.223-.836-1.65-.476-.466-1.11-.826-1.803-1.086a8.7 8.7 0 0 0-1.697-.437A11 11 0 0 0 6 11c-.695 0-1.37.065-2 .187V4a2 2 0 0 1 2-2zm-1 18.5c0 .563-.372 1.082-1 1.5-.912.607-2.364 1-4 1-2.05 0-3.812-.617-4.584-1.5-.268-.306-.416-.644-.416-1v-4.008c.31.27.663.493 1.017.67.576.288 1.25.509 1.983.65a10.5 10.5 0 0 0 2.214.186 10.7 10.7 0 0 0 1.826-.193q.087-.016.173-.036.408-.09.787-.21.527-.17.983-.397l.017-.008.018-.01c.342-.174.683-.391.982-.652zM6 17a9.4 9.4 0 0 1-2-.208c-1.766-.386-3-1.267-3-2.292s1.234-1.906 3-2.292A9.4 9.4 0 0 1 6 12c.523 0 1.026.04 1.5.114A7.7 7.7 0 0 1 9 12.5c1.214.456 2 1.182 2 2 0 .428-.215.83-.594 1.182l-.01.01-.052.047a3.8 3.8 0 0 1-.808.529A5 5 0 0 1 9 16.5a7 7 0 0 1-1.067.306 9 9 0 0 1-.553.098l-.02.002A10 10 0 0 1 6 17m7.5-14.5V8a.5.5 0 0 0 .5.5h5.5z"/>`,
  'regular': `<path d="M18.5 20a.5.5 0 0 1-.5.5h-6c0 .58-.21 1.08-.533 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v7.187a10.4 10.4 0 0 1 1.5-.176V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zm-3.092 17.06C9.564 22.466 7.907 23 6 23c-2.05 0-3.812-.617-4.584-1.5-.268-.306-.416-.644-.416-1v-4.008c.31.27.663.493 1.017.67C3.088 17.698 4.497 18 6 18c.514 0 1.017-.035 1.5-.104a9 9 0 0 0 1.5-.338q.527-.169.983-.396c.354-.177.707-.4 1.017-.67V20.5c0 .427-.214.83-.592 1.181M5.5 12.012Q5.746 12 6 12c.523 0 1.026.04 1.5.114A7.7 7.7 0 0 1 9 12.5c1.214.456 2 1.182 2 2s-.786 1.544-2 2a7.7 7.7 0 0 1-1.5.386A10 10 0 0 1 6 17c-2.761 0-5-1.12-5-2.5 0-1.025 1.234-1.906 3-2.292.467-.102.971-.17 1.5-.196"/>`
} as const;

export default function DocumentDatabaseIcon({ 
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

  const gradientId = 'documentdatabaseicon_gradient';
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