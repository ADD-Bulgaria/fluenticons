
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.213 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354h1.268l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l2.219-2.265a5.5 5.5 0 0 1 6.221-6.35l.237-.243.003-.004c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594.003-.008A1.062 1.062 0 0 0 12.462 2zM17 18.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`,
  'regular': `<path d="M6.192 2.77c.13-.456.547-.77 1.021-.77h5.25c.724 0 1.236.71 1.007 1.398l-.003.008L12.207 7h2.563c.946 0 1.407 1.144.766 1.811l-.003.004-.237.242a5.6 5.6 0 0 0-1.374-.027l.894-.912a.06.06 0 0 0 .017-.032.1.1 0 0 0-.007-.044.1.1 0 0 0-.025-.034q-.006-.007-.031-.008H11.5a.5.5 0 0 1-.471-.666l1.493-4.254a.062.062 0 0 0-.06-.08H7.213a.06.06 0 0 0-.06.045l-2.25 7.874c-.01.04.019.08.06.08h1.908a.5.5 0 0 1 .485.62l-1.325 5.3a.1.1 0 0 0-.003.03q0 .006.003.011.005.013.03.03a.1.1 0 0 0 .042.01l.01-.004a.1.1 0 0 0 .024-.018l.003-.004 2.88-2.939a5.6 5.6 0 0 0 .055 1.373l-2.219 2.265c-.754.782-2.059.06-1.795-.996l1.17-4.679H4.963a1.062 1.062 0 0 1-1.021-1.354zM17 18.243a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`
} as const;

export default function FlashAddIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'flashaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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