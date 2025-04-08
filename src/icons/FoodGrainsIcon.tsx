
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.61 2.287a.93.93 0 0 0-1.22 0 7.2 7.2 0 0 0-2.487 5.282.5.5 0 0 0 .278.449 9 9 0 0 1 1.7 1.146q.386.33.704.681c.22.242.61.242.83 0q.319-.351.704-.68a9 9 0 0 1 1.7-1.146.5.5 0 0 0 .279-.449 7.2 7.2 0 0 0-2.487-5.283M12 18.043a8.16 8.16 0 0 1 8.17-4.06c.488.064.853.5.815 1.004A7.596 7.596 0 0 1 13.41 22h-2.82a7.596 7.596 0 0 1-7.574-7.013.94.94 0 0 1 .815-1.004 8.16 8.16 0 0 1 8.17 4.06m7.646-5.113c-1.847-.102-3.654.38-5.126 1.165-.882.47-1.69 1.075-2.322 1.771a.27.27 0 0 1-.396 0c-.63-.697-1.439-1.301-2.321-1.771-1.469-.783-3.27-1.264-5.112-1.165-.73-1.15-1.23-2.47-1.35-3.8a.96.96 0 0 1 .874-1.04c2.455-.205 4.504.28 6.342 1.837.83.703 1.386 1.547 1.766 2.267.379-.72.936-1.564 1.765-2.267 1.84-1.558 3.903-2.042 6.356-1.837a.96.96 0 0 1 .875 1.04c-.121 1.33-.621 2.651-1.35 3.8"/>`,
  'regular': `<path d="M11.39 2.287A7.23 7.23 0 0 0 9.02 9.07c-1.522-.876-3.2-1.14-5.128-.98a.96.96 0 0 0-.874 1.04c.157 1.726.952 3.438 2.06 4.776a9 9 0 0 0-1.249.077.94.94 0 0 0-.813 1.004A7.596 7.596 0 0 0 10.589 22h2.821a7.596 7.596 0 0 0 7.574-7.013.94.94 0 0 0-.814-1.004 9 9 0 0 0-1.234-.077c1.108-1.339 1.903-3.05 2.06-4.776a.96.96 0 0 0-.875-1.04c-1.928-.16-3.615.104-5.142.98a7.23 7.23 0 0 0-2.369-6.783.93.93 0 0 0-1.22 0m.61 9.44a5.74 5.74 0 0 1 0-7.953 5.74 5.74 0 0 1 0 7.952m0 5.607a9 9 0 0 0-4.234-2.978 1 1 0 0 0-.103-.085c-1.47-1-2.72-2.844-3.073-4.72 1.869-.062 3.336.387 4.675 1.521 1.025.869 1.48 1.928 1.817 2.715.088.204.167.39.247.548a.75.75 0 0 0 1.341 0q.118-.24.247-.548c.338-.787.792-1.847 1.817-2.715 1.339-1.133 2.817-1.583 4.69-1.521-.354 1.876-1.603 3.72-3.073 4.72a1 1 0 0 0-.096.077A9 9 0 0 0 12 17.334m.643 1.706c1.393-2.33 4.002-3.78 6.779-3.623A6.096 6.096 0 0 1 13.41 20.5h-2.82c-3 0-5.524-2.176-6.011-5.082 2.776-.158 5.385 1.291 6.778 3.622a.75.75 0 0 0 1.287 0"/>`
} as const;

export default function FoodGrainsIcon({ 
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

  const gradientId = 'foodgrainsicon_gradient';
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