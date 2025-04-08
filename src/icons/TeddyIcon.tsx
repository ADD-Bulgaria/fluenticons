import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.207 10.271a4 4 0 0 1 6.251-4.964c-2.833.703-5.144 2.55-6.251 4.964m11.335-4.963a4 4 0 0 1 6.251 4.964c-1.107-2.415-3.418-4.262-6.251-4.964M6.628 19.313C4.72 17.938 3.5 15.844 3.5 13.5 3.5 9.358 7.306 6 12 6s8.5 3.358 8.5 7.5c0 2.344-1.22 4.438-3.128 5.813a5.5 5.5 0 0 0-1.707-2.914 5.502 5.502 0 0 0-9.037 2.914m8.37-2.168a4.5 4.5 0 0 0-1.542-.904c-.161.436-.752.759-1.456.759s-1.294-.323-1.456-.76a4.5 4.5 0 0 0-3.003 3.647A9.3 9.3 0 0 0 12 21a9.3 9.3 0 0 0 4.459-1.113 4.5 4.5 0 0 0-1.46-2.742"/>`,
  'regular': `<path d="M17.5 3.875a4.125 4.125 0 0 1 2.697 7.246c.278.749.428 1.548.428 2.379 0 2.39-1.243 4.519-3.18 5.914q-.425.306-.89.562l-.037.02A9.44 9.44 0 0 1 12 21.125a9.44 9.44 0 0 1-4.518-1.129 9 9 0 0 1-.882-.55l-.045-.032c-1.937-1.395-3.18-3.524-3.18-5.914 0-.83.15-1.63.428-2.379a4.125 4.125 0 1 1 6.335-5.068A10 10 0 0 1 12 5.875q.961.001 1.862.178A4.12 4.12 0 0 1 17.5 3.875m-3.977 12.522c-.11.204-.3.374-.533.497-.276.146-.62.231-.99.231s-.714-.085-.99-.23a1.26 1.26 0 0 1-.532-.498 4.4 4.4 0 0 0-2.523 2.433A8.17 8.17 0 0 0 12 19.875a8.17 8.17 0 0 0 4.045-1.045 4.38 4.38 0 0 0-2.523-2.433M12 7.125c-4.116 0-7.375 2.9-7.375 6.375 0 1.799.87 3.44 2.282 4.608a5.626 5.626 0 0 1 10.186 0c1.412-1.168 2.282-2.81 2.282-4.608 0-3.475-3.26-6.375-7.375-6.375m-5.5-2a2.875 2.875 0 0 0-2.127 4.81c.968-1.614 2.57-2.882 4.509-3.547A2.88 2.88 0 0 0 6.5 5.125m11 0c-.975 0-1.858.49-2.382 1.263 1.94.665 3.541 1.933 4.509 3.547a2.875 2.875 0 0 0-2.127-4.81"/>`
} as const;

export default function TeddyIcon({ 
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

  const gradientId = 'teddyicon_gradient';
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