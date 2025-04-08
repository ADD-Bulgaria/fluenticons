import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M14.839 41.523 27.153 6H31v.002a5.75 5.75 0 0 1 4.847 2.873l7.65 13.25a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42H17v-.002a5.8 5.8 0 0 1-2.161-.475"/><path d="M14.839 41.523 27.153 6H31v.002a5.75 5.75 0 0 1 4.847 2.873l7.65 13.25a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42H17v-.002a5.8 5.8 0 0 1-2.161-.475"/><path fill-opacity=".5" d="M14.839 41.523 27.153 6H31v.002a5.75 5.75 0 0 1 4.847 2.873l7.65 13.25a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42H17v-.002a5.8 5.8 0 0 1-2.161-.475"/><path d="m21 38 6-28 .03-.016a4.5 4.5 0 0 1 4.172-3.974L31 6.002V6H15.977a3.75 3.75 0 0 0-3.247 1.875l-8.228 14.25a3.75 3.75 0 0 0 0 3.75l7.65 13.25q.247.425.554.796a4.5 4.5 0 0 0 8.267-1.926z"/><path fill-opacity=".4" d="m21 38 6-28 .03-.016a4.5 4.5 0 0 1 4.172-3.974L31 6.002V6H15.977a3.75 3.75 0 0 0-3.247 1.875l-8.228 14.25a3.75 3.75 0 0 0 0 3.75l7.65 13.25q.247.425.554.796a4.5 4.5 0 0 0 8.267-1.926z"/>`,
  'filled': `<path d="M25.463 6a7.5 7.5 0 0 0-1.63 2.965l-8.036 28.44a1.25 1.25 0 0 0 2.406.68l8.036-28.44A5.005 5.005 0 0 1 30.965 6a5.75 5.75 0 0 1 4.882 2.874l7.65 13.25a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42h-9.489a7.5 7.5 0 0 0 1.63-2.965L32.2 10.59a1.25 1.25 0 1 0-2.406-.68l-8.037 28.447A5.005 5.005 0 0 1 17.034 42a5.75 5.75 0 0 1-4.882-2.874l-7.65-13.25a3.75 3.75 0 0 1 0-3.75l8.228-14.25A3.75 3.75 0 0 1 15.977 6z"/>`,
  'regular': `<path d="M15.977 8.5c-.446 0-.859.238-1.082.625l-8.227 14.25a1.25 1.25 0 0 0 0 1.25l7.924 13.726a2.298 2.298 0 0 0 4.202-.524l8.005-28.334A4.798 4.798 0 0 1 35.573 8.4l7.925 13.726a3.75 3.75 0 0 1 0 3.75l-8.228 14.25A3.75 3.75 0 0 1 32.022 42H25.25a1.25 1.25 0 0 1 0-2.5h6.772c.446 0 .859-.238 1.082-.625l8.228-14.25a1.25 1.25 0 0 0 0-1.25L33.407 9.649a2.298 2.298 0 0 0-4.202.524L21.2 38.507a4.798 4.798 0 0 1-8.773 1.094L4.502 25.875a3.75 3.75 0 0 1 0-3.75l8.228-14.25A3.75 3.75 0 0 1 15.977 6h6.773a1.25 1.25 0 1 1 0 2.5z"/>`
} as const;

export default function AgentsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'agentsicon_gradient';
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