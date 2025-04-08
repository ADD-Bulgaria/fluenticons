import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 2.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-9.274 2.59-.86-2.027c-.432-1.02-1.51-1.54-2.518-1.218L5.77 2.44c-1.067.341-1.885 1.256-2.149 2.404q-.941 4.095 2.258 9.968 3.195 5.866 7.003 7.054c1.076.335 2.238.039 3.052-.778l.818-.822c.763-.765.874-2.012.259-2.915l-1.233-1.81c-.529-.778-1.468-1.108-2.33-.82l-2.276.758a8.7 8.7 0 0 1-2.27-2.595q-.91-1.563-1.085-3.177l1.894-1.798c.68-.646.889-1.685.514-2.568"/>`,
  'regular': `<path d="M15.5 2.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm4 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-9.072 2.879-.902-2.006a2.75 2.75 0 0 0-3.302-1.506l-1.167.352-.206.069a3.75 3.75 0 0 0-2.342 2.583c-.717 2.772.06 6.076 2.275 9.913 2.212 3.83 4.681 6.155 7.436 6.924a3.75 3.75 0 0 0 3.586-.89l.887-.839a2.75 2.75 0 0 0 .339-3.606l-1.281-1.775a2.75 2.75 0 0 0-3.034-1.02l-2.01.614c-.057.017-.19-.03-.433-.244-.347-.308-.755-.856-1.206-1.637-.62-1.075-.89-1.848-.845-2.245a.25.25 0 0 1 .077-.155l1.495-1.394a2.75 2.75 0 0 0 .633-3.138M5.49 3.905l1.167-.351a1.25 1.25 0 0 1 1.5.684l.902 2.006a1.25 1.25 0 0 1-.287 1.426L7.277 9.064a1.75 1.75 0 0 0-.545 1.085c-.09.802.268 1.831 1.037 3.162 1.14 1.975 2.201 2.916 3.371 2.567l2.015-.616a1.25 1.25 0 0 1 1.38.464l1.28 1.775a1.25 1.25 0 0 1-.154 1.64l-.886.839a2.25 2.25 0 0 1-2.152.533c-2.317-.647-4.506-2.707-6.54-6.23-2.036-3.526-2.725-6.455-2.122-8.786A2.25 2.25 0 0 1 5.33 3.96z"/>`
} as const;

export default function CallPauseIcon({ 
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

  const gradientId = 'callpauseicon_gradient';
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