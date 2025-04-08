
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 5.998v13l-4.25.001a1.75 1.75 0 0 1-1.745-1.606l-.006-.144v-9.5a1.75 1.75 0 0 1 1.607-1.744l.143-.006zM16.75 6a1.75 1.75 0 0 1 1.745 1.607l.006.143v9.5a1.75 1.75 0 0 1-1.607 1.744l-.143.006-4.252-.001v-13zm-1.5 9.5h-1l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1l.102-.007a.75.75 0 0 0-.102-1.493m-5.5 0h-1l-.102.007a.75.75 0 0 0 0 1.486L8.75 17h1l.101-.007A.75.75 0 0 0 9.75 15.5m11.366-7.461.06.09.045.093.582 1.456a2.75 2.75 0 0 1-.244 2.515l-.109.156-.151.202a1.25 1.25 0 0 0-.207 1.077l.046.137.583 1.457a.75.75 0 0 1-1.349.649l-.044-.092-.583-1.457a2.75 2.75 0 0 1 .244-2.514l.11-.157.151-.202a1.25 1.25 0 0 0 .206-1.077l-.045-.137-.583-1.456a.75.75 0 0 1 1.288-.74m-17.549 0 .06.09.045.093.583 1.456a2.75 2.75 0 0 1-.244 2.515l-.11.156-.151.202a1.25 1.25 0 0 0-.206 1.077l.045.137.583 1.457a.75.75 0 0 1-1.349.649l-.044-.092-.582-1.457a2.75 2.75 0 0 1 .244-2.514l.109-.157.151-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.583-1.456a.75.75 0 0 1 1.288-.74"/>`,
  'regular': `<path d="M16.75 5.996a1.75 1.75 0 0 1 1.745 1.607l.006.143v9.504a1.75 1.75 0 0 1-1.607 1.744l-.143.006H7.249a1.75 1.75 0 0 1-1.744-1.607l-.006-.143V7.746a1.75 1.75 0 0 1 1.607-1.744l.143-.006zm-5.25 1.5H7.25a.25.25 0 0 0-.244.193l-.007.057v9.504a.25.25 0 0 0 .193.243l.057.007H11.5zm5.25 0H12.5V17.5h4.25a.25.25 0 0 0 .244-.192l.007-.057V7.746a.25.25 0 0 0-.193-.243zm-1.5 7.51a.75.75 0 0 1 .102 1.494l-.102.006h-1a.75.75 0 0 1-.102-1.493l.102-.006zm-5.5 0a.75.75 0 0 1 .1 1.494l-.102.006H8.75a.75.75 0 0 1-.102-1.493l.102-.006zm11.366-6.968.06.091.045.092.582 1.456a2.75 2.75 0 0 1-.244 2.515l-.109.157-.151.201a1.25 1.25 0 0 0-.207 1.078l.046.137.583 1.456a.75.75 0 0 1-1.349.65l-.044-.093-.583-1.456a2.75 2.75 0 0 1 .244-2.515l.11-.157.151-.201a1.25 1.25 0 0 0 .206-1.078l-.045-.136-.583-1.457a.75.75 0 0 1 1.288-.74m-17.549 0 .06.091.045.092.583 1.456a2.75 2.75 0 0 1-.244 2.515l-.11.157-.151.201a1.25 1.25 0 0 0-.206 1.078l.045.136.583 1.457a.75.75 0 0 1-1.349.649l-.044-.092-.582-1.456a2.75 2.75 0 0 1 .244-2.515l.109-.157.151-.201a1.25 1.25 0 0 0 .207-1.078l-.046-.137-.583-1.456a.75.75 0 0 1 1.288-.74"/>`
} as const;

export default function DualScreenVibrateIcon({ 
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

  const gradientId = 'dualscreenvibrateicon_gradient';
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