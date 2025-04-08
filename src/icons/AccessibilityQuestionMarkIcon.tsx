
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.5A2.25 2.25 0 1 0 12 2a2.25 2.25 0 0 0 0 4.5M6.15 4.178a2.266 2.266 0 0 0-2.96 1.184 2.24 2.24 0 0 0 1.18 2.954L7.394 9.6a1 1 0 0 1 .61.92v3.04l-1.88 5.457a2.25 2.25 0 1 0 4.256 1.465l.145-.422a6.5 6.5 0 0 1 5.479-9.041v-.5a1 1 0 0 1 .609-.921l3.019-1.282a2.24 2.24 0 0 0 1.18-2.954 2.266 2.266 0 0 0-2.96-1.184l-1.607.682c-.34.144-.578.423-.694.73a3.794 3.794 0 0 1-7.099 0 1.28 1.28 0 0 0-.695-.73zM11 17.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m4.75 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M14.5 16a.5.5 0 1 0 1 0 1 1 0 1 1 2 0c0 .37-.082.58-.366.898l-.116.125-.264.27C16.212 17.86 16 18.27 16 19a.5.5 0 1 0 1 0c0-.37.083-.58.366-.898l.116-.125.264-.27c.543-.567.754-.977.754-1.707a2 2 0 0 0-4 0"/>`,
  'regular': `<path d="M11.468 6.403a1.5 1.5 0 1 1 1.064 0 2.25 2.25 0 0 1-1.064 0M9 5q.001.202.026.399L6.15 4.178a2.266 2.266 0 0 0-2.96 1.184 2.24 2.24 0 0 0 1.18 2.954l3.634 1.542v3.701l-1.88 5.458a2.25 2.25 0 1 0 4.256 1.465l.145-.422a6.5 6.5 0 0 1-.496-3.169L8.96 19.993a.75.75 0 0 1-1.418-.488l1.893-5.497a1.3 1.3 0 0 0 .068-.407V9.693c0-.502-.3-.955-.762-1.151L4.956 6.935a.74.74 0 0 1-.39-.977.766.766 0 0 1 .998-.4l4.971 2.11q.24.102.487.169a3 3 0 0 0 1.956 0q.248-.066.488-.168l4.97-2.11a.766.766 0 0 1 1 .399.74.74 0 0 1-.391.977l-3.78 1.605a1.25 1.25 0 0 0-.762 1.15v1.623a6.5 6.5 0 0 1 1.5-.294V9.856l3.628-1.54a2.24 2.24 0 0 0 1.18-2.954 2.266 2.266 0 0 0-2.96-1.184l-2.877 1.22Q15 5.204 15 5a3 3 0 1 0-6 0m2 12.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0m4.75 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M14.5 16a.5.5 0 0 0 1 0 1 1 0 0 1 2 0c0 .37-.082.58-.366.898l-.116.125-.264.27C16.212 17.86 16 18.27 16 19a.5.5 0 0 0 1 0c0-.37.083-.58.366-.898l.116-.125.264-.27c.543-.567.754-.977.754-1.707a2 2 0 1 0-4 0"/>`
} as const;

export default function AccessibilityQuestionMarkIcon({ 
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

  const gradientId = 'accessibilityquestionmarkicon_gradient';
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