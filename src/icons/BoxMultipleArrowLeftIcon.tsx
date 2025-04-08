
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.3 2.33a3.75 3.75 0 0 0-2.6 0L9.393 3.922A1.75 1.75 0 0 0 8.25 5.563v2.793a4.75 4.75 0 0 1 2.397.235l4.306 1.592c.514.19.946.523 1.258.944a6.5 6.5 0 0 1 1.289-.128c1.625 0 3.11.596 4.25 1.582V5.563a1.75 1.75 0 0 0-1.143-1.641zm-4.53 4.878a.75.75 0 1 1 .49-1.418l2.658.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zm2.837 3.913c.2.074.382.183.538.318a6.5 6.5 0 0 0-2.68 1.95.75.75 0 0 0-.733-.14L9 14.198l-2.74-.948a.75.75 0 1 0-.49 1.418l2.48.857v2.7a.75.75 0 0 0 1.5 0v-2.7l1.789-.62A6.5 6.5 0 0 0 11 17.5c0 1.3.381 2.51 1.037 3.524l-1.737.643a3.75 3.75 0 0 1-2.6 0l-4.307-1.592a1.75 1.75 0 0 1-1.143-1.642v-5.67a1.75 1.75 0 0 1 1.143-1.641L7.7 9.529a3.75 3.75 0 0 1 2.6 0zM23 17.499a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 1 0 0-1h-4.793l1.647-1.646a.5.5 0 0 0-.708-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 18z"/>`,
  'regular': `<path d="M15.78 3.737a2.25 2.25 0 0 0-1.56 0L9.913 5.33a.25.25 0 0 0-.163.234v2.793a4.8 4.8 0 0 0-1.5 0V5.563a1.75 1.75 0 0 1 1.143-1.641L13.7 2.33a3.75 3.75 0 0 1 2.6 0l4.307 1.592a1.75 1.75 0 0 1 1.143 1.641v7.018a6.5 6.5 0 0 0-1.5-.973V5.563a.25.25 0 0 0-.163-.234zm-1.173 7.384c.2.074.382.183.538.318a6.5 6.5 0 0 0-1.589.893L9.78 10.936a2.25 2.25 0 0 0-1.56 0l-4.307 1.592a.25.25 0 0 0-.163.234v5.67a.25.25 0 0 0 .163.235l4.307 1.592a2.25 2.25 0 0 0 1.56 0l1.592-.589q.257.721.665 1.353l-1.737.643a3.75 3.75 0 0 1-2.6 0l-4.307-1.592a1.75 1.75 0 0 1-1.143-1.642v-5.67a1.75 1.75 0 0 1 1.143-1.641L7.7 9.529a3.75 3.75 0 0 1 2.6 0zm-2.875 2.129a.75.75 0 0 1 .733.138 6.5 6.5 0 0 0-.926 1.516l-1.79.62v2.7a.75.75 0 0 1-1.5 0v-2.7l-2.48-.857a.75.75 0 0 1 .49-1.418l2.74.948zm.037-5.583a.75.75 0 1 1 .49-1.418l2.659.92a.25.25 0 0 0 .163 0l2.65-.92a.75.75 0 1 1 .492 1.418l-2.65.919a1.75 1.75 0 0 1-1.145 0zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.5.5a.5.5 0 1 0 0-1h-4.793l1.647-1.646a.5.5 0 0 0-.708-.707l-2.5 2.5a.5.5 0 0 0 0 .707l2.5 2.5a.5.5 0 0 0 .708-.708L15.707 18z"/>`
} as const;

export default function BoxMultipleArrowLeftIcon({ 
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

  const gradientId = 'boxmultiplearrowlefticon_gradient';
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