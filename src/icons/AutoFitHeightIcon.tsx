
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm4.355 10.701.098.085.799.8v-1.957l-.002-.026V9.414l-.8.8-.097.085-.008.006a1 1 0 0 1-1.399-1.4l.006-.007.084-.098 2.355-2.357c.179-.273.504-.443.86-.443.323 0 .619.14.805.368l.005.007.046.064L15.465 8.8l.085.098.005.008a1 1 0 0 1 .01 1.177l-.006.008-.099.117-.106.091-.007.006a1 1 0 0 1-1.177.01l-.009-.007-.11-.093-.801-.801v1.957l.002.026v3.19l.794-.795a1 1 0 0 1 1.303-.097l.007.006.098.085.007.006a1 1 0 0 1 .096 1.302l-.005.008-.085.098-2.354 2.356a1.02 1.02 0 0 1-.86.444c-.356 0-.681-.17-.86-.443l-2.348-2.35a1 1 0 0 1 1.302-1.512zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M5.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm3.472 11.219a.75.75 0 0 1 .976-.073l.084.073 1.22 1.221v-3.07l-.002-.026V8.56l-1.22 1.221-.084.073a.75.75 0 0 1-1.049-1.05l.073-.084 2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075 2.367 2.37.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08L13 8.56v3.07l.002.026v3.784l1.221-1.221a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .072.976l-.072.085-2.367 2.37a.77.77 0 0 1-.664.35.77.77 0 0 1-.664-.35l-2.367-2.37a.75.75 0 0 1 0-1.061M5 20.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function AutoFitHeightIcon({ 
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

  const gradientId = 'autofitheighticon_gradient';
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