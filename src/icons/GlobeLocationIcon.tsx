import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.904 16.5h3.618q-.021.248-.022.5c0 1.201.457 2.361 1.272 3.488-.54.959-1.157 1.511-1.772 1.511-1.197 0-2.4-2.094-3.038-5.204zm-.23-1.5h4.2a5.52 5.52 0 0 1 2.627-2.901v-.098q0-1.03-.076-2h-6.85l-.033.488A26 26 0 0 0 8.674 15M18 11.5a5.48 5.48 0 0 1 3.935 1.658A10.1 10.1 0 0 0 21.802 10h-4.87l.038.657q.022.463.029.934.488-.09 1.001-.091M3.066 16.501h4.306c.364 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.952-4.814zm-.867-6.5h4.87a28 28 0 0 0 .033 4.42l.057.58H2.456a10.05 10.05 0 0 1-.258-5m12.745-7.424-.108-.17A10.03 10.03 0 0 1 21.373 8.5h-4.59c-.316-2.416-.957-4.492-1.838-5.923m-5.902-.133.122-.037C8.283 3.757 7.628 5.736 7.28 8.06l-.062.44H2.63a10.03 10.03 0 0 1 6.413-6.057M12 2.002c1.319 0 2.646 2.542 3.214 6.183l.047.315H8.739C9.28 4.691 10.644 2.002 12 2.002M22.5 17a4.5 4.5 0 0 0-9 0c0 1.863 1.42 3.815 4.2 5.9a.5.5 0 0 0 .6 0c2.78-2.085 4.2-4.037 4.2-5.9m-6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"/>`,
  'regular': `<path d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002q0 .587-.067 1.157a5.5 5.5 0 0 0-1.434-1.058V12c0-.689-.081-1.359-.236-2h-3.358q.075.778.09 1.591a5.5 5.5 0 0 0-1.496.508V12q-.001-1.038-.104-2.001H8.603a19 19 0 0 0 .135 5h4.137a5.5 5.5 0 0 0-.352 1.5H9.06c.652 2.415 1.786 4.002 2.94 4.002.454 0 .906-.247 1.326-.694.361.616.832 1.222 1.399 1.818-.867.245-1.781.376-2.726.376C6.476 22.001 2 17.523 2 12 1.999 6.476 6.476 1.998 12 1.998M7.508 16.5H4.786a8.53 8.53 0 0 0 4.094 3.41c-.522-.82-.953-1.846-1.27-3.015zm-.414-6.501H3.736l-.005.017A8.5 8.5 0 0 0 3.5 12a8.5 8.5 0 0 0 .544 3h3.173A20 20 0 0 1 7 12c0-.684.032-1.354.095-2.001m1.787-5.91-.023.008A8.53 8.53 0 0 0 4.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41m3.12-.591-.117.005C10.62 3.62 9.397 5.621 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59.106.175c.67 1.112 1.177 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.339-4.29zM22.5 17a4.5 4.5 0 0 0-9 0c0 1.863 1.419 3.815 4.2 5.9a.5.5 0 0 0 .6 0c2.78-2.085 4.2-4.037 4.2-5.9m-6 0a1.5 1.5 0 1 1 2.999 0 1.5 1.5 0 0 1-3 0"/>`
} as const;

export default function GlobeLocationIcon({ 
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

  const gradientId = 'globelocationicon_gradient';
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