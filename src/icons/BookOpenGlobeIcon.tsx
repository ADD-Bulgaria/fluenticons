import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6c.494 0 .96-.12 1.37-.33A6.5 6.5 0 0 1 11 17.5a6.48 6.48 0 0 1 2-4.69V7a1 1 0 0 1 1-1h6v5.498a6.5 6.5 0 0 1 2 1.312V6a2 2 0 0 0-2-2h-6c-.768 0-1.47.289-2 .764A3 3 0 0 0 10 4zm7 3v10a1 1 0 0 1-1 1H4V6h6a1 1 0 0 1 1 1"/><path d="M16.007 17c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134.195-.247.329-.281.386-.281s.192.034.386.281c.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585zm-.395-3.9c.107-.323.23-.622.367-.887A5.5 5.5 0 0 0 12.023 17h2.984c.04-1.5.26-2.866.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 22.978 17h-2.985c-.04-1.5-.26-2.866-.604-3.9m.604 4.9h2.985a5.5 5.5 0 0 1-3.957 4.787c.138-.265.26-.564.368-.886.345-1.035.564-2.4.604-3.901m-2.107 4.719c-.194.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584-.171.514-.364.894-.554 1.135M12.023 18a5.5 5.5 0 0 0 3.956 4.787 6 6 0 0 1-.367-.886c-.346-1.035-.565-2.4-.605-3.901z"/>`,
  'regular': `<path d="M3.5 5.75a.25.25 0 0 1 .25-.25H10c.69 0 1.25.56 1.25 1.25v8.959a6.5 6.5 0 0 1 1.5-2.646V6.75c0-.69.56-1.25 1.25-1.25h6.25a.25.25 0 0 1 .25.25v5.982A6.5 6.5 0 0 1 22 12.81V5.75A1.75 1.75 0 0 0 20.25 4H14c-.788 0-1.499.331-2 .863A2.74 2.74 0 0 0 10 4H3.75A1.75 1.75 0 0 0 2 5.75v12.5c0 .966.784 1.75 1.75 1.75H10c.495 0 .96-.13 1.36-.36a6.5 6.5 0 0 1-.343-1.663A1.25 1.25 0 0 1 10 18.5H3.75a.25.25 0 0 1-.25-.25z"/><path d="M16.007 17c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134.195-.247.329-.281.386-.281s.192.034.386.281c.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585zm-.395-3.9c.107-.323.23-.622.367-.887A5.5 5.5 0 0 0 12.023 17h2.984c.04-1.5.26-2.866.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 22.978 17h-2.985c-.04-1.5-.26-2.866-.604-3.9m.604 4.9h2.985a5.5 5.5 0 0 1-3.957 4.787c.138-.265.26-.564.368-.886.345-1.035.564-2.4.604-3.901m-2.107 4.719c-.194.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584-.171.514-.364.894-.554 1.135M12.023 18a5.5 5.5 0 0 0 3.956 4.787 6 6 0 0 1-.367-.886c-.346-1.035-.565-2.4-.605-3.901z"/>`
} as const;

export default function BookOpenGlobeIcon({ 
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

  const gradientId = 'bookopenglobeicon_gradient';
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