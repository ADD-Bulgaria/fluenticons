import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.724 14.5a2.5 2.5 0 0 0-.224-.371V13h3.75a.25.25 0 0 1 .25.25v1.25zm.256 3V16h3.52v1.25a.25.25 0 0 1-.25.25zm0 1.5h3.27A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75h-6.5c-.418 0-.802.146-1.103.39l-.549-.274a2.5 2.5 0 0 0-2.236 0L4 12.049V4a2 2 0 0 1 2-2h6v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-7.432l.03-.015a2.5 2.5 0 0 0 1.382-2.237zM13.5 2.5V8a.5.5 0 0 0 .5.5h5.5zM.98 15.603v4.145a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.341 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342v-4.146a1.5 1.5 0 0 0-.83-1.341l-3.5-1.75a1.5 1.5 0 0 0-1.341 0l-3.5 1.75a1.5 1.5 0 0 0-.83 1.342m1.777.77a.5.5 0 1 1 .447-.895l2.776 1.388 2.777-1.388a.5.5 0 1 1 .447.895L6.48 17.734v2.941a.5.5 0 0 1-1 0v-2.94z"/>`,
  'regular': `<path d="M17 13.25a1.75 1.75 0 0 0-1.75-1.75h-6.5c-.418 0-.802.147-1.103.391L9.865 13H10v.068l.598.299c.364.182.67.445.902.762V13h3.75a.25.25 0 0 1 .25.25v1.25h-3.776c.166.337.256.713.256 1.103V16h3.52v1.25a.25.25 0 0 1-.25.25h-3.27V19h3.27A1.75 1.75 0 0 0 17 17.25zm-5.135 7.25H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.4a2.5 2.5 0 0 0-.638.217L4 12.048V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-7.432l.03-.015a2.5 2.5 0 0 0 1.267-1.485M14 8.5h3.378L13.5 4.621V8a.5.5 0 0 0 .5.5M.98 19.748v-4.146a1.5 1.5 0 0 1 .83-1.341l3.5-1.75a1.5 1.5 0 0 1 1.341 0l3.5 1.75a1.5 1.5 0 0 1 .83 1.342v4.145a1.5 1.5 0 0 1-.83 1.342l-3.5 1.75a1.5 1.5 0 0 1-1.341 0l-3.5-1.75a1.5 1.5 0 0 1-.83-1.342m1.553-4.046a.5.5 0 0 0 .224.67l2.723 1.363v2.94a.5.5 0 0 0 1 0v-2.94l2.724-1.362a.5.5 0 1 0-.447-.895L5.98 16.866l-2.776-1.388a.5.5 0 0 0-.67.224"/>`
} as const;

export default function DocumentTableCubeIcon({ 
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

  const gradientId = 'documenttablecubeicon_gradient';
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