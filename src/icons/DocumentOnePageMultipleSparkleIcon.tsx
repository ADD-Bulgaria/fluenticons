
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM6.25 2h8.958c-.215.255-.5.452-.818.559l-1.34.44A1.565 1.565 0 0 0 12 4.469c.001.367.14.736.369 1.031H7.747A.75.75 0 0 0 7 6.25c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .71-.518c.494.185.959.565 1.127 1.067l.41 1.45a1.55 1.55 0 0 0 1.46 1.05h.04v7.201a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25v-13A2.25 2.25 0 0 1 6.25 2M20 12.465l-.02-.066c-.116-.353-.547-.462-.906-.554q-.132-.032-.244-.066a1.3 1.3 0 0 1-.33-.177v5.648a3.25 3.25 0 0 1-3.25 3.25H6.63A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25zM13.754 14.5H7.747a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75M7.747 10a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75z"/>`,
  'regular': `<path d="M16.088 6.412a2.84 2.84 0 0 0-1.347-.955l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448A2.84 2.84 0 0 0 16.5 1.774l.011-.034.448-1.377a.544.544 0 0 1 1.027 0l.447 1.377a2.84 2.84 0 0 0 1.799 1.796l1.377.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.013.034a.544.544 0 0 1-1.013-.034l-.448-1.377a2.8 2.8 0 0 0-.45-.848m7.695 3.801-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.302.302 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.302.302 0 0 0 0-.57zM6.25 2h8.958c-.215.255-.5.452-.818.559l-1.34.44a1.6 1.6 0 0 0-.707.501H6.25a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.999a1.55 1.55 0 0 0 1.5 1.05v7.201a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25v-13A2.25 2.25 0 0 1 6.25 2m1.497 3.5h4.622c.168.216.384.392.631.499l1.4.46.064.023a.75.75 0 0 1-.71.518H7.746A.75.75 0 0 1 7 6.25c0-.414.334-.75.747-.75M20 12.465l-.021-.066c-.116-.353-.547-.462-.906-.554q-.132-.032-.244-.066a1.3 1.3 0 0 1-.33-.177v5.648a3.25 3.25 0 0 1-3.25 3.25H6.63A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25zM7 15.25c0-.414.334-.75.747-.75h6.006c.413 0 .747.336.747.75s-.334.75-.747.75H7.747A.75.75 0 0 1 7 15.25M7.747 10a.75.75 0 0 0-.747.75c0 .414.334.75.747.75h6.006a.75.75 0 0 0 .747-.75.75.75 0 0 0-.747-.75z"/>`
} as const;

export default function DocumentOnePageMultipleSparkleIcon({ 
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

  const gradientId = 'documentonepagemultiplesparkleicon_gradient';
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