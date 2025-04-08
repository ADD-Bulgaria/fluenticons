import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v7.498A6.5 6.5 0 0 1 11.19 22H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-8.493 9c.04-1.415.248-2.669.553-3.585.171-.513.364-.893.554-1.134.195-.247.329-.281.386-.281s.191.034.386.281c.19.241.383.62.554 1.134.305.916.513 2.17.553 3.585zm-.396-3.9a6 6 0 0 1 .368-.887A5.505 5.505 0 0 0 1.022 17h2.985c.04-1.5.26-2.866.604-3.9m3.778 0a6 6 0 0 0-.368-.887A5.5 5.5 0 0 1 11.978 17H8.993c-.04-1.5-.26-2.866-.604-3.9m.604 4.9h2.985a5.5 5.5 0 0 1-3.957 4.787 6 6 0 0 0 .368-.886c.345-1.035.564-2.4.604-3.901m-2.107 4.719c-.195.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584-.171.514-.364.894-.554 1.135M1.022 18a5.505 5.505 0 0 0 3.957 4.787 6 6 0 0 1-.368-.886c-.345-1.035-.564-2.4-.604-3.901z"/>`,
  'regular': `<path d="M4 4a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.414.586l5.828 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-6.81a6.5 6.5 0 0 0 1.078-1.5H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.076a6.5 6.5 0 0 0-1.5.422zm10 4.5h3.38L13.5 4.62V8a.5.5 0 0 0 .5.5m-8.44 4.916c-.305.915-.513 2.17-.553 3.584h2.986c-.04-1.415-.248-2.669-.553-3.585-.171-.513-.364-.893-.554-1.134C6.69 12.034 6.557 12 6.5 12s-.191.034-.386.281c-.19.241-.383.62-.554 1.134m-.58-1.203a6 6 0 0 0-.369.886c-.345 1.035-.564 2.4-.604 3.901H1.022a5.505 5.505 0 0 1 3.957-4.787m3.409.886a6 6 0 0 0-.368-.886A5.5 5.5 0 0 1 11.978 17H8.993c-.04-1.5-.26-2.866-.604-3.9m3.589 4.9H8.993c-.04 1.5-.26 2.866-.604 3.9a6 6 0 0 1-.368.887A5.5 5.5 0 0 0 11.978 18m-5.092 4.719c-.195.247-.329.281-.386.281s-.191-.034-.386-.281c-.19-.241-.383-.62-.554-1.135-.305-.915-.513-2.17-.553-3.584h2.986c-.04 1.415-.248 2.669-.553 3.584-.171.514-.364.894-.554 1.135m-1.907.068A5.505 5.505 0 0 1 1.022 18h2.985c.04 1.5.26 2.866.604 3.9.108.323.23.622.368.887"/>`
} as const;

export default function DocumentGlobeIcon({ 
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

  const gradientId = 'documentglobeicon_gradient';
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