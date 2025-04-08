import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.243 13.149H7.758L10 6.744zm.7 2 .328.935 1.569-1.57-3.764-10.751c-.357-1.017-1.795-1.017-2.15 0L4.055 17.67a1 1 0 1 0 1.888.661l1.114-3.182zm.254 2.423 5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.7 2.7 0 0 1-1.247.707l-1.83.457q-.075.02-.15.027c-.59.204-2.979.574-3.827-.088-.574-.448-.46-1.334-.218-1.818.04-.078-.02-.18-.105-.166-.66.103-1.243.45-1.827.799-.783.468-1.57.936-2.549.815s-1.468-.726-1.71-1.255c-.099-.216.18-.401.388-.287.469.255 1.106.496 1.631.38.375-.084.904-.458 1.496-.877 1.066-.753 2.337-1.653 3.292-1.268.84.337 1.46 1.15 1.03 2.113-.052.118 0 .264.127.293.423.097.778.066 1.133-.105l.428-1.712c.118-.472.362-.903.706-1.247"/>`,
  'regular': `<path d="M9.998 5.715 7.233 13.5h5.53zm3.575 10.067L13.295 15H6.7l-1.244 3.504a.75.75 0 0 1-1.414-.502L9.16 3.592c.28-.79 1.396-.79 1.676 0l3.912 11.015zm-8.588 4.592c-.525.117-1.162-.123-1.631-.38-.209-.113-.487.072-.388.288.242.529.731 1.133 1.71 1.255.98.121 1.766-.347 2.55-.815.583-.348 1.165-.696 1.826-.799.086-.013.144.088.105.166-.242.484-.356 1.37.218 1.818.848.662 3.237.292 3.828.088q.073-.007.148-.027l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.903-5.902a2.286 2.286 0 0 0-3.233-3.232l-5.902 5.902a2.7 2.7 0 0 0-.706 1.247l-.428 1.712c-.355.17-.71.202-1.133.105-.126-.03-.18-.175-.127-.293.43-.962-.19-1.776-1.03-2.113-.955-.385-2.226.515-3.292 1.268-.592.42-1.12.793-1.496.876"/>`
} as const;

export default function DrawTextIcon({ 
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

  const gradientId = 'drawtexticon_gradient';
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