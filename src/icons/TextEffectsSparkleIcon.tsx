
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 15.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM13.61 2.468a3 3 0 0 0-4.367 1.35l-4.26 9.94-.053.124-1.687 3.936a3 3 0 0 0 5.515 2.364L9.693 18h4.615l.935 2.182a3 3 0 1 0 5.515-2.364l-1.687-3.936-.053-.125-.804-1.875-.14-.037q-.132-.032-.244-.066a1.33 1.33 0 0 1-.87-1.23 1.3 1.3 0 0 1 .18-.66 1.45 1.45 0 0 1-.68.16c-.238 0-.467-.057-.673-.158a2.6 2.6 0 0 1-.827-.525l2.237 5.22.018.041 1.705 3.98a1 1 0 1 1-1.838.787L15.627 16H8.374L6.92 19.394a1 1 0 1 1-1.838-.788l1.705-3.979q.007-.02.018-.041l4.22-9.848A1.5 1.5 0 0 1 11 4.47 1.565 1.565 0 0 1 12.05 3l1.34-.44q.113-.038.22-.09M9.232 14h5.538L12 7.54z"/>`,
  'regular': `<path d="M14.854 6.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.543.543 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796L16.987.363a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.544.544 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M12.001 2.5c.34 0 .67.069.97.196L12.05 3A1.565 1.565 0 0 0 11 4.469q0 .135.025.269l-4.22 9.848-.018.041-1.706 3.98a1 1 0 0 0 1.839.787L8.374 16h7.253l1.454 3.394a1 1 0 1 0 1.839-.788l-1.705-3.979-.018-.041-2.238-5.22c.255.232.531.416.828.525a1.54 1.54 0 0 0 1.075.106l.124.29a1.3 1.3 0 0 0-.026.262c-.004.443.242.864.61 1.102l.992 2.313.045.104 1.692 3.947a2.5 2.5 0 0 1-4.596 1.97L14.638 17.5H9.363L8.3 19.985a2.5 2.5 0 1 1-4.596-1.97l1.691-3.947.045-.104 4.264-9.949A2.5 2.5 0 0 1 12 2.5M14.77 14H9.23L12 7.539z"/>`
} as const;

export default function TextEffectsSparkleIcon({ 
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

  const gradientId = 'texteffectssparkleicon_gradient';
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