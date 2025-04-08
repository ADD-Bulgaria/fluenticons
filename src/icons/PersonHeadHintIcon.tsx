
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.047 9c.466 0 .826.415.703.864a7 7 0 0 1-.66 1.59c-.23.405-.777.443-1.107.114-.26-.261-.293-.669-.12-.995a5.5 5.5 0 0 0 .395-.954c.109-.353.42-.619.79-.619m0-2c.466 0 .826-.414.703-.863a7 7 0 0 0-.66-1.59c-.23-.405-.778-.443-1.107-.114-.261.261-.293.669-.12.995q.241.454.395.954c.109.353.42.618.79.618m-5.046-5.046c0-.466.414-.826.863-.703a7 7 0 0 1 1.591.66c.405.23.443.778.114 1.108-.26.26-.669.293-.995.12a5.5 5.5 0 0 0-.955-.396c-.353-.109-.618-.42-.618-.79m-2 0c0 .369-.266.68-.62.789a5.5 5.5 0 0 0-.953.395c-.326.173-.734.14-.995-.12-.33-.33-.291-.878.114-1.108a7 7 0 0 1 1.59-.659c.45-.124.864.237.864.703M5.91 4.545c.23-.405.778-.443 1.108-.113.26.26.293.668.12.995q-.242.454-.396.955c-.109.353-.42.618-.79.618-.465 0-.826-.414-.702-.863a7 7 0 0 1 .66-1.592M5.954 9c-.466 0-.827.415-.703.864a7 7 0 0 0 .66 1.592c.23.404.778.442 1.108.113.26-.26.293-.669.12-.995a5.5 5.5 0 0 1-.397-.955C6.635 9.266 6.323 9 5.954 9m11.8 5a2.25 2.25 0 0 1 2.25 2.249v.918a2.75 2.75 0 0 1-.513 1.6C17.945 20.93 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 6.253 14zM12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>`,
  'regular': `<path d="M18.047 9c.466 0 .826.415.703.864a7 7 0 0 1-.66 1.59c-.23.405-.777.443-1.107.114-.26-.261-.293-.669-.12-.995a5.5 5.5 0 0 0 .395-.954c.109-.353.42-.619.79-.619m0-2c.466 0 .826-.414.703-.863a7 7 0 0 0-.66-1.59c-.23-.405-.778-.443-1.107-.114-.261.261-.293.669-.12.995q.241.454.395.954c.109.353.42.618.79.618m-5.046-5.046c0-.466.414-.826.863-.703a7 7 0 0 1 1.591.66c.405.23.443.778.114 1.108-.26.26-.669.293-.995.12a5.5 5.5 0 0 0-.955-.396c-.353-.109-.618-.42-.618-.79m-2 0c0 .369-.266.68-.62.789a5.5 5.5 0 0 0-.953.395c-.326.173-.734.14-.995-.12-.33-.33-.291-.878.114-1.108a7 7 0 0 1 1.59-.659c.45-.124.864.237.864.703M5.91 4.545c.23-.405.778-.443 1.108-.113.26.26.293.668.12.995q-.242.454-.396.955c-.109.353-.42.618-.79.618-.465 0-.826-.414-.702-.863a7 7 0 0 1 .66-1.592M5.954 9c-.466 0-.827.415-.703.864a7 7 0 0 0 .66 1.592c.23.404.778.442 1.108.113.26-.26.293-.669.12-.995a5.5 5.5 0 0 1-.397-.955C6.635 9.266 6.323 9 5.954 9m11.8 5a2.25 2.25 0 0 1 2.25 2.249v.575c0 .895-.32 1.76-.902 2.439C17.532 21.096 15.146 22 12 22c-3.145 0-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 6.253 14zm0 1.5h-11.5a.75.75 0 0 0-.75.749v.578c0 .535.192 1.053.54 1.46 1.253 1.468 3.22 2.214 5.957 2.214 2.739 0 4.706-.746 5.963-2.214a2.25 2.25 0 0 0 .54-1.463v-.575a.75.75 0 0 0-.748-.749M9.5 8a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>`
} as const;

export default function PersonHeadHintIcon({ 
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

  const gradientId = 'personheadhinticon_gradient';
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