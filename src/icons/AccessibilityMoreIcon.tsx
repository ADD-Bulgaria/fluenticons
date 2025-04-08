
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.877 19.017c.125.364.142.736.084 1.091A2.5 2.5 0 0 0 15.5 18c-.99 0-1.84.583-2.244 1.419l-1.02-2.961a.25.25 0 0 0-.472 0l-.57 1.652A2.5 2.5 0 0 0 10.5 18 2.5 2.5 0 0 0 8 20.5c0 .555.188 1.064.495 1.479-.32.035-.652.009-.977-.103a2.25 2.25 0 0 1-1.395-2.86l1.879-5.457V10.52a1 1 0 0 0-.61-.921L4.37 8.316a2.24 2.24 0 0 1-1.181-2.954 2.265 2.265 0 0 1 2.96-1.184l1.607.682c.34.145.578.423.695.731a3.795 3.795 0 0 0 7.098 0c.117-.308.354-.586.695-.731l1.606-.682a2.265 2.265 0 0 1 2.96 1.184 2.24 2.24 0 0 1-1.18 2.954l-3.02 1.281a1 1 0 0 0-.608.92v3.042zM12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5M10.5 19a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001m5 0a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001m5 0a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3.001"/>`,
  'regular': `<path d="m11.068 13.87-1.484 4.309c.284-.112.59-.179.915-.179.243 0 .473.046.695.11l.805-2.339 1.256 3.647a2.5 2.5 0 0 1 1.182-1.174l-1.507-4.375c-.304-.884-1.558-.888-1.863 0zm9.744-8.508a2.265 2.265 0 0 0-2.961-1.184l-2.876 1.221Q15 5.203 15 5a3 3 0 1 0-5.974.399L6.15 4.178a2.265 2.265 0 0 0-2.96 1.184 2.24 2.24 0 0 0 1.18 2.954l3.634 1.542v3.701l-1.88 5.457a2.25 2.25 0 0 0 1.396 2.86c.325.112.657.138.977.103a2.48 2.48 0 0 1-.495-1.479l.004-.043a.75.75 0 0 1-.463-.952l1.893-5.497a1.3 1.3 0 0 0 .068-.407V9.692c0-.502-.3-.955-.762-1.151L4.957 6.934a.74.74 0 0 1-.391-.977.765.765 0 0 1 .999-.399l4.97 2.11q.24.102.488.168.462.161.978.163c.343 0 .67-.057.977-.163q.248-.067.488-.169l4.97-2.11a.766.766 0 0 1 1 .399.74.74 0 0 1-.391.977l-3.78 1.605a1.25 1.25 0 0 0-.762 1.151v3.924q0 .21.068.407l1.386 4.024a2.495 2.495 0 0 1 2.004 2.062 2.2 2.2 0 0 0-.084-1.091l-1.874-5.443V9.855l3.628-1.54a2.24 2.24 0 0 0 1.18-2.953M12.53 6.403a2.25 2.25 0 0 1-1.063 0 1.5 1.5 0 1 1 1.064 0zM12 20.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 .001m3.5 1.5a1.5 1.5 0 1 0-.001-3.001 1.5 1.5 0 0 0 0 3.001m5 0a1.5 1.5 0 1 0-.001-3.001 1.5 1.5 0 0 0 0 3.001"/>`
} as const;

export default function AccessibilityMoreIcon({ 
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

  const gradientId = 'accessibilitymoreicon_gradient';
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