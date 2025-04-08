
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.601A5.5 5.5 0 0 1 17 9.601V6a3 3 0 0 0-3-3zm3.354 3.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362 1.412-1.412a.5.5 0 0 1 .708 0m-.708 5a.5.5 0 0 1 .708.708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 0 1 .674-.738l.397.363zM11 8a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 0 1zm-.366 5.92a2 2 0 0 0 1.43-2.478l-.156-.557q.383-.296.822-.5l.337.358a2 2 0 0 0 2.91 0l.322-.343q.448.21.835.518l-.126.422a2 2 0 0 0 1.456 2.519l.35.082a4.6 4.6 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.432 2.478l.156.556q-.383.296-.822.5l-.337-.358a2 2 0 0 0-2.909 0l-.32.348a4.4 4.4 0 0 1-.836-.518l.126-.423a2 2 0 0 0-1.456-2.52l-.349-.082a4.6 4.6 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M9.354 6.396a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.691.015l-.75-.685a.5.5 0 1 1 .674-.738l.397.362 1.412-1.412a.5.5 0 0 1 .708 0m0 5.708a.5.5 0 0 0-.708-.708l-1.412 1.412-.397-.362a.5.5 0 0 0-.674.738l.75.685a.5.5 0 0 0 .69-.015zM11 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.601a5.5 5.5 0 0 0-1-.393V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3.208q.148.52.393 1H6a3 3 0 0 1-3-3zm7.634 7.92a2 2 0 0 0 1.43-2.478l-.156-.557q.383-.296.822-.5l.337.358a2 2 0 0 0 2.91 0l.322-.343q.448.21.835.518l-.126.422a2 2 0 0 0 1.456 2.519l.35.082a4.6 4.6 0 0 1 .01 1.017l-.46.118a2 2 0 0 0-1.432 2.478l.156.556q-.383.296-.822.5l-.337-.358a2 2 0 0 0-2.909 0l-.32.348a4.4 4.4 0 0 1-.836-.518l.126-.423a2 2 0 0 0-1.456-2.52l-.349-.082a4.6 4.6 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`
} as const;

export default function TaskListSquareSettingsIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'tasklistsquaresettingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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