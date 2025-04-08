import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 3.992a2.5 2.5 0 0 1 2.5 2.5v4a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0v-4a2.5 2.5 0 0 1 2.5-2.5zm.7 9.044-.098-.084-.008-.006a1 1 0 0 0-1.399 1.4l.006.007.085.098.8.799h-3.19l-.107.008-.01.002c-.464.072-.779.51-.779.99s.315.918.779.99l.01.002.108.008h3.19l-.802.802-.093.11-.006.008a1 1 0 0 0 .01 1.177l.005.007.091.106.117.099.008.006a1 1 0 0 0 1.177-.01l.008-.005.098-.085 2.36-2.358.065-.046.007-.005c.229-.186.368-.482.368-.805 0-.356-.17-.681-.443-.86zm-10.926 1.32-.085.098-.8.799h3.18c.53 0 .906.48.906 1 0 .48-.315.918-.78.99l-.009.002-.108.008h-3.19l.795.794a1 1 0 0 1 .096 1.303l-.005.007-.085.098-.006.007a1 1 0 0 1-1.303.096l-.007-.005-.098-.085-2.357-2.354a1.02 1.02 0 0 1-.443-.86c0-.356.17-.682.443-.86l2.35-2.348a1 1 0 0 1 1.511 1.302z"/>`,
  'regular': `<path d="M20 6.242a2.25 2.25 0 0 0-2.25-2.25H6.25A2.25 2.25 0 0 0 4 6.242v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 0 1.5 0zm-2.781 6.978a.75.75 0 0 1 .976-.073l.084.073 2.37 2.367a.77.77 0 0 1 .351.664.79.79 0 0 1-.276.611l-.075.053-2.37 2.367-.084.073a.75.75 0 0 1-.882.007l-.094-.08-.073-.084a.75.75 0 0 1-.007-.883l.08-.094L18.44 17h-3.784l-.089-.007c-.32-.05-.567-.363-.567-.743s.247-.694.567-.743l.09-.007h3.783l-1.221-1.22-.073-.084a.75.75 0 0 1 .073-.976m-10.438.003a.75.75 0 0 1 .073.976l-.073.084-1.221 1.22h3.784c.362 0 .656.336.656.75 0 .38-.247.693-.567.743l-.09.007H5.56l1.221 1.221a.75.75 0 0 1 .073.977l-.073.084a.75.75 0 0 1-.976.073l-.085-.073-2.37-2.367a.77.77 0 0 1-.35-.664.77.77 0 0 1 .35-.664l2.37-2.367a.75.75 0 0 1 1.061 0"/>`
} as const;

export default function ArrowAutofitWidthIcon({ 
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

  const gradientId = 'arrowautofitwidthicon_gradient';
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