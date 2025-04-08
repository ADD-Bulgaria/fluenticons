import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-8 5.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0zM19.25 13a.75.75 0 0 1 .75.75v2.495a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75m-9 7.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75m13.75.75a.75.75 0 0 1 1.5 0V20a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H18a.5.5 0 0 0 .5-.5z"/>`,
  'regular': `<path d="M20 11.25a.75.75 0 0 1-1.5 0V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.25a.75.75 0 0 1-1.5 0V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.75zm-6.5-6.629V8a.5.5 0 0 0 .5.5h3.378zM4.75 13a.75.75 0 0 1 .75.75v2.495a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75m15.25.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0zm-10.5 7.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-4-2a.75.75 0 0 0-1.5 0V20a2 2 0 0 0 2 2h1.25a.75.75 0 0 0 0-1.5H6a.5.5 0 0 1-.5-.5zm13.75-.75a.75.75 0 0 0-.75.75V20a.5.5 0 0 1-.5.5h-1.25a.75.75 0 0 0 0 1.5H18a2 2 0 0 0 2-2v-.75a.75.75 0 0 0-.75-.75"/>`
} as const;

export default function DocumentSplitHintIcon({ 
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

  const gradientId = 'documentsplithinticon_gradient';
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