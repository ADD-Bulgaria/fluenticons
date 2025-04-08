
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L4 5.06v6.44a.5.5 0 0 0 .5.5h6.44l7.56 7.56V20a.5.5 0 0 1-.5.5h-1.25a.75.75 0 1 0 0 1.5H18a2 2 0 0 0 1.804-1.135l.916.915a.75.75 0 0 0 1.06-1.06zM18.5 15.318l1.361 1.362a.75.75 0 0 0 .14-.435V13.75a.75.75 0 0 0-1.5 0zM12.712 9.53l2.47 2.47H19.5a.5.5 0 0 0 .5-.5V10h-6c-.49 0-.94-.177-1.288-.47M12 8c0 .49.177.94.47 1.288L5.306 2.124Q5.632 2.002 6 2h6zm1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-8 5.75a.75.75 0 0 0-1.5 0v2.495a.75.75 0 0 0 1.5 0zm4.75 6.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L4 5.06v6.19a.75.75 0 0 0 1.5 0V6.56l13 13V20a.5.5 0 0 1-.5.5h-1.25a.75.75 0 1 0 0 1.5H18a2 2 0 0 0 1.804-1.135l.916.915a.75.75 0 0 0 1.06-1.06l-1.986-1.987-.027-.026zM12 8c0 .493.179.944.475 1.293l.232.232c.349.296.8.475 1.293.475h4.5v1.25a.75.75 0 0 0 1.5 0v-1.5a2 2 0 0 0-.586-1.336l-5.829-5.828q-.023-.022-.049-.04l-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.108-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6q-.368.002-.694.124L6.682 3.5H12zm1.5-3.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zm5 10.698 1.361 1.36a.75.75 0 0 0 .14-.434V13.75a.75.75 0 0 0-1.5 0zm-13.75-2.32a.75.75 0 0 1 .75.75v2.496a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75m5.5 7.5a.75.75 0 1 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function DocumentSplitHintOffIcon({ 
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

  const gradientId = 'documentsplithintofficon_gradient';
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