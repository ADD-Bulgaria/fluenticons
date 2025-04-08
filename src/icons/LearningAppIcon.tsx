
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 2H17a2.5 2.5 0 0 1 2.5 2.5v6.813a6.5 6.5 0 0 0-8.187 8.187H4.5a1 1 0 0 0 1 1h6.232A6.5 6.5 0 0 0 12.81 22H5.5A2.5 2.5 0 0 1 3 19.5v-15A2.5 2.5 0 0 1 5.5 2M7 5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm16 12.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.086-2.403 2.806 1.84q.131.084.205.223.075.136.075.298a.65.65 0 0 1-.072.298.6.6 0 0 1-.198.226l-2.807 1.915a.6.6 0 0 1-.158.077.55.55 0 0 1-.395-.023.7.7 0 0 1-.193-.135.7.7 0 0 1-.13-.2.6.6 0 0 1-.047-.237v-3.758a.62.62 0 0 1 .367-.57.55.55 0 0 1 .547.045"/>`,
  'regular': `<path d="M5.5 2A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h7.31a6.5 6.5 0 0 1-1.078-1.5H5.5a1 1 0 0 1-1-1h6.813a6.5 6.5 0 0 1-.294-1.5H4.5V4.5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v6.519q.782.061 1.5.294V4.5A2.5 2.5 0 0 0 17 2zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.086-2.403 2.806 1.84q.131.084.205.223.075.136.075.298a.65.65 0 0 1-.072.298.6.6 0 0 1-.198.226l-2.807 1.915a.6.6 0 0 1-.158.077.55.55 0 0 1-.395-.023.7.7 0 0 1-.193-.135.7.7 0 0 1-.13-.2.6.6 0 0 1-.047-.237v-3.758a.62.62 0 0 1 .367-.57.55.55 0 0 1 .547.045M6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1.5 1.5h7v-1h-7z"/>`
} as const;

export default function LearningAppIcon({ 
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

  const gradientId = 'learningappicon_gradient';
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