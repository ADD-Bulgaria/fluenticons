
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.25 22h4.56A6.48 6.48 0 0 1 11 17.5c0-.621.087-1.222.25-1.791v-6.2l-.961.96-.085.073a.75.75 0 0 1-1.049-1.05l.073-.083 2.242-2.242.052-.048.055-.041.076-.046.112-.047.096-.025.092-.011h.094l.092.011.063.015.1.036.061.03.067.041.062.05.038.035 2.242 2.242.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08-.962-.96v3.554A6.48 6.48 0 0 1 18 11.02V4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M8.25 22h4.56a6.5 6.5 0 0 1-1.078-1.5H8.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .75.75v6.826a6.6 6.6 0 0 1 1.5-.057V4.25A2.25 2.25 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22m3-6.291a6.5 6.5 0 0 1 1.5-2.646V9.508l.961.961a.75.75 0 0 0 .977.073l.084-.073a.75.75 0 0 0 .073-.976l-.073-.084-2.242-2.242-.038-.036-.062-.049-.067-.041-.06-.03-.101-.036-.063-.015-.092-.011h-.094l-.091.011-.097.025-.112.047-.076.046-.107.089-2.242 2.242a.75.75 0 0 0 .976 1.133l.085-.073.96-.96zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"/>`
} as const;

export default function PhoneUpdateCheckmarkIcon({ 
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

  const gradientId = 'phoneupdatecheckmarkicon_gradient';
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