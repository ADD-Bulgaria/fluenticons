import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v4.762a3.28 3.28 0 0 0-2.61.95l-5.903 5.903a3.7 3.7 0 0 0-.931 1.57c-.345-.536-.87-.915-1.412-1.133-.691-.278-1.385-.16-1.936.035a5.5 5.5 0 0 0-.729.326.5.5 0 0 1-.089.07L5.693 19.77c-.467.275-.907.365-1.298.335a1.9 1.9 0 0 1-.9-.311c-.387-.255-.496-.683-.496-1.005V6.25m16.1 6.42-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.428 1.712c-.355.17-.71.202-1.133.105-.126-.03-.18-.175-.127-.293.43-.962-.19-1.776-1.03-2.113-.955-.385-2.226.515-3.292 1.268-.592.42-1.12.793-1.496.876-.525.117-1.162-.123-1.631-.38-.209-.113-.487.072-.388.288.242.529.731 1.133 1.71 1.255.98.121 1.766-.347 2.55-.815.583-.348 1.165-.696 1.826-.799.086-.013.144.088.105.166-.242.484-.356 1.37.218 1.818.848.662 3.237.292 3.828.088q.073-.007.148-.027l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.903-5.902a2.286 2.286 0 0 0-3.233-3.232"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v13.004a.75.75 0 0 0 1.5 0V6.25c0-.966.783-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v4.982c.478-.19.993-.263 1.5-.22V6.25A3.25 3.25 0 0 0 17.75 3zm6.947 15.572 5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.7 2.7 0 0 1-1.247.707l-1.83.457q-.075.02-.15.027c-.59.204-2.979.574-3.827-.088-.574-.448-.46-1.334-.218-1.818.04-.078-.02-.18-.105-.166-.66.103-1.243.45-1.827.799-.783.468-1.57.936-2.549.815s-1.468-.726-1.71-1.255c-.099-.216.18-.401.388-.287.469.255 1.106.496 1.631.38.375-.084.904-.458 1.496-.877 1.066-.753 2.337-1.653 3.292-1.268.84.337 1.46 1.15 1.03 2.113-.052.118 0 .264.127.293.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247"/>`
} as const;

export default function DrawShapeIcon({ 
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

  const gradientId = 'drawshapeicon_gradient';
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