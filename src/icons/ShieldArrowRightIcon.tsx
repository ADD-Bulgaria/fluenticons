
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.135 4.348a1.25 1.25 0 0 1 1.73 0c2.758 2.643 6.684 4.077 10.037 4.84 1.659.376 3.139.58 4.202.69a29 29 0 0 0 1.574.119l.101.003A1.25 1.25 0 0 1 42 11.25V21q0 1.474-.165 2.94A12.94 12.94 0 0 0 35 22c-7.18 0-13 5.82-13 13 0 3.318 1.243 6.345 3.289 8.642q-.452.156-.916.301a1.25 1.25 0 0 1-.746 0c-6.238-1.95-10.668-5.292-13.53-9.418C7.244 30.408 6 25.587 6 20.75v-9.5A1.25 1.25 0 0 1 7.22 10l.102-.003q.11-.004.328-.017c.29-.017.715-.048 1.246-.102a36 36 0 0 0 4.202-.69c3.352-.763 7.278-2.197 10.037-4.84M35 24c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11m-8 11a1 1 0 0 0 1 1h11.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L39.586 34H28a1 1 0 0 0-1 1"/>`,
  'regular': `<path d="M24.865 4.348a1.25 1.25 0 0 0-1.73 0c-2.759 2.643-6.685 4.077-10.037 4.84-1.66.376-3.139.58-4.202.69a30 30 0 0 1-1.246.102q-.213.014-.426.02H7.22A1.25 1.25 0 0 0 6 11.25v9.5c0 4.837 1.243 9.658 4.098 13.775 2.861 4.126 7.29 7.469 13.529 9.418.243.076.503.076.746 0q.465-.146.916-.3a13 13 0 0 1-1.654-2.327c-5.363-1.823-9.078-4.749-11.483-8.216C9.632 29.467 8.5 25.163 8.5 20.75v-8.325q.296-.024.651-.06a38 38 0 0 0 4.5-.74c3.22-.731 7.211-2.102 10.349-4.702 3.137 2.6 7.13 3.97 10.348 4.702a38 38 0 0 0 5.152.8V21q0 .89-.066 1.776c.845.306 1.649.698 2.401 1.164Q42 22.474 42 21v-9.75A1.25 1.25 0 0 0 40.78 10h-.004a15 15 0 0 1-.426-.02 29 29 0 0 1-1.246-.102 36 36 0 0 1-4.202-.69c-3.353-.763-7.279-2.197-10.037-4.84M35 24c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11m-8 11a1 1 0 0 0 1 1h11.586l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L39.586 34H28a1 1 0 0 0-1 1"/>`
} as const;

export default function ShieldArrowRightIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'shieldarrowrighticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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