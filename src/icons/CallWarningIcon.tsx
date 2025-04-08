import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.603 1.554 9.107 8.552A1 1 0 0 0 10.002 10h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0V3.495a.5.5 0 1 1 1 0M13.498 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M6.535 2.117c-1.04-.264-2.13-.152-2.984.326-.87.486-1.48 1.347-1.51 2.501-.046 1.802.371 4.22 2.027 7.058 1.635 2.803 3.44 4.482 4.938 5.481.946.631 1.991.648 2.884.236.88-.405 1.594-1.213 1.965-2.216a1.84 1.84 0 0 0-.12-1.536l-.954-1.703a2.5 2.5 0 0 0-3.074-1.113l-.666.254c-.323.124-.62.067-.788-.099-.565-.555-.969-1.309-1.152-2.12-.058-.256.06-.558.342-.771l.601-.454a2.5 2.5 0 0 0 .663-3.239l-.972-1.695a1.93 1.93 0 0 0-1.2-.91"/>`,
  'regular': `<path d="M12.603 1.554 9.107 8.552A1 1 0 0 0 10.002 10h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0V3.495a.5.5 0 1 1 1 0M13.498 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M3.55 2.443c.854-.478 1.943-.59 2.984-.327.507.129.94.457 1.2.91l.972 1.696a2.5 2.5 0 0 1-.663 3.239l-.601.454c-.283.213-.4.515-.342.77.183.812.587 1.566 1.152 2.121.169.166.465.223.788.1l.666-.255a2.5 2.5 0 0 1 3.074 1.113l.954 1.703c.263.47.306 1.03.12 1.536-.371 1.003-1.086 1.811-1.965 2.216-.893.412-1.938.395-2.884-.236-1.498-.999-3.303-2.679-4.938-5.481-1.656-2.84-2.073-5.257-2.026-7.058.03-1.154.64-2.015 1.509-2.501m.488.872c-.586.329-.978.882-.998 1.655-.042 1.614.328 3.848 1.89 6.528 1.56 2.671 3.259 4.239 4.63 5.153.64.427 1.314.435 1.91.16.611-.281 1.156-.87 1.446-1.655a.84.84 0 0 0-.055-.7l-.953-1.703a1.5 1.5 0 0 0-1.845-.668l-.666.254c-.58.222-1.324.193-1.846-.32-.714-.7-1.205-1.631-1.427-2.614-.163-.724.196-1.397.716-1.789l.6-.453a1.5 1.5 0 0 0 .398-1.944l-.971-1.695a.93.93 0 0 0-.578-.438c-.827-.21-1.649-.107-2.25.23"/>`
} as const;

export default function CallWarningIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'callwarningicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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