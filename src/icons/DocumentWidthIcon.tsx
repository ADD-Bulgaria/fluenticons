import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v3.517a1.75 1.75 0 0 0-1.488.495 1.73 1.73 0 0 0-.427 1.742l.055.153.042.092h-1.525c-.848 0-1.505.65-1.634 1.459l-.017.144-.006.147c0 .799.514 1.513 1.333 1.71l.157.03.166.01h1.515l-.017.034a1.77 1.77 0 0 0 .047 1.512l.09.162.098.143.123.138a1.72 1.72 0 0 0 1.488.485v3.527a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75v-3.528a1.72 1.72 0 0 0 1.488-.485l.123-.137.097-.143a1.79 1.79 0 0 0 .138-1.675l-.017-.034h1.515l.166-.01C8.42 13.6 9 12.848 9 11.999l-.006-.147c-.07-.875-.754-1.603-1.65-1.603H5.818l.042-.092a1.735 1.735 0 0 0-.372-1.895A1.75 1.75 0 0 0 4 7.766V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2zM4.781 8.968a.75.75 0 0 1 .073.977l-.073.084-1.221 1.22h3.784c.362 0 .656.335.656.75 0 .379-.247.693-.567.742l-.09.007H3.56l1.221 1.222a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.073-2.37-2.367A.77.77 0 0 1 1 12a.77.77 0 0 1 .35-.664l2.37-2.367a.75.75 0 0 1 1.061 0m14.438-.003a.75.75 0 0 1 .976-.073l.084.073 2.37 2.367a.77.77 0 0 1 .351.664.79.79 0 0 1-.276.611l-.075.053-2.37 2.367-.084.073a.75.75 0 0 1-.882.007l-.094-.08-.073-.084a.75.75 0 0 1-.007-.882l.08-.094 1.221-1.222h-3.784l-.089-.006c-.32-.05-.567-.364-.567-.744s.247-.693.567-.743l.09-.007h3.783l-1.221-1.22-.073-.083a.75.75 0 0 1 .073-.977"/>`,
  'regular': `<path d="m18.5 15.724.012.014a1.72 1.72 0 0 0 1.488.485v3.527a2.25 2.25 0 0 1-2.096 2.245L17.75 22H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75v-3.528a1.72 1.72 0 0 0 1.364-.372l.135-.125.001 4.025c0 .38.282.694.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102zM4.78 8.968a.75.75 0 0 1 .073.977l-.073.084-1.221 1.22h3.784c.362 0 .656.335.656.75 0 .379-.247.693-.567.742l-.09.007H3.56l1.221 1.222a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.073-2.37-2.367A.77.77 0 0 1 1 12a.77.77 0 0 1 .35-.664l2.37-2.367a.75.75 0 0 1 1.061 0m14.438-.003a.75.75 0 0 1 .976-.073l.084.073 2.37 2.367a.77.77 0 0 1 .351.664.79.79 0 0 1-.276.611l-.075.053-2.37 2.367-.084.073a.75.75 0 0 1-.882.007l-.094-.08-.073-.084a.75.75 0 0 1-.007-.882l.08-.094 1.221-1.222h-3.784l-.089-.006c-.32-.05-.567-.364-.567-.744s.247-.693.567-.743l.09-.007h3.783l-1.221-1.22-.073-.083a.75.75 0 0 1 .073-.977M17.75 2a2.25 2.25 0 0 1 2.245 2.096L20 4.25v3.517a1.75 1.75 0 0 0-1.362.38l-.139.127.001-4.024a.75.75 0 0 0-.648-.743L17.75 3.5H6.25a.75.75 0 0 0-.743.648L5.5 4.25v4.023l-.012-.012A1.75 1.75 0 0 0 4 7.766V4.25a2.25 2.25 0 0 1 2.096-2.245L6.25 2z"/>`
} as const;

export default function DocumentWidthIcon({ 
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

  const gradientId = 'documentwidthicon_gradient';
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