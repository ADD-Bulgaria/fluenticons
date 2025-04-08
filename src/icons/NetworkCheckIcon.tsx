
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m10.05 15.42 6.256-8.476a.694.694 0 0 1 1.235.57l-.03.098-3.87 9.8a2.07 2.07 0 1 1-3.737-1.766l.07-.115zl6.257-8.477zm2.05-4.549-1.226 1.66a3.33 3.33 0 0 0-2.29 3.025.75.75 0 0 1-1.5-.064A4.82 4.82 0 0 1 9.14 11.74a4.8 4.8 0 0 1 2.962-.87m4.168 2.752c.279.586.435 1.22.462 1.866a.75.75 0 0 1-1.376.444zm-2.234-5.37-.969 1.311a6.22 6.22 0 0 0-4.736 1.02 6.2 6.2 0 0 0-2.419 3.39.75.75 0 0 1-1.442-.412 7.7 7.7 0 0 1 3-4.207 7.72 7.72 0 0 1 6.566-1.102m3.51 2.138q.376.401.703.865a7.7 7.7 0 0 1 1.096 2.288.75.75 0 0 1-1.44.417 6.2 6.2 0 0 0-.885-1.845l-.102-.138zM15.98 5.852l-.088.054q-.184.123-.336.295l-.097.12-.54.732a9.14 9.14 0 0 0-8.261 1.146 9.1 9.1 0 0 0-3.278 4.172.75.75 0 1 1-1.398-.544A10.6 10.6 0 0 1 5.799 6.97 10.64 10.64 0 0 1 15.98 5.852m2.629 1.562a10.7 10.7 0 0 1 2.022 2.171c.49.702.892 1.451 1.199 2.235a.75.75 0 0 1-1.397.547 9.2 9.2 0 0 0-1.03-1.921 9.2 9.2 0 0 0-1.297-1.484l.381-.964c.076-.19.115-.388.122-.584"/>`,
  'regular': `<path d="m10.05 15.42 6.256-8.476a.694.694 0 0 1 1.235.57l-.03.098-3.87 9.8a2.07 2.07 0 1 1-3.737-1.766l.07-.115zl6.257-8.477zm3.8-2.623-2.594 3.514-.04.063a.57.57 0 0 0 .223.775l.067.032a.57.57 0 0 0 .698-.238l.041-.083zm-1.75-1.926-1.226 1.66a3.33 3.33 0 0 0-2.29 3.025.75.75 0 0 1-1.5-.064A4.82 4.82 0 0 1 9.14 11.74a4.8 4.8 0 0 1 2.962-.87m4.168 2.752c.279.586.435 1.22.462 1.866a.75.75 0 0 1-1.376.444zm-2.234-5.37-.969 1.311a6.22 6.22 0 0 0-4.736 1.02 6.2 6.2 0 0 0-2.419 3.39.75.75 0 0 1-1.442-.412 7.7 7.7 0 0 1 3-4.207 7.72 7.72 0 0 1 6.566-1.102m3.51 2.138q.376.401.703.865a7.7 7.7 0 0 1 1.096 2.288.75.75 0 0 1-1.44.417 6.2 6.2 0 0 0-.885-1.845l-.102-.138zM15.98 5.852l-.088.054q-.184.123-.336.295l-.097.12-.54.732a9.14 9.14 0 0 0-8.261 1.146 9.1 9.1 0 0 0-3.278 4.172.75.75 0 1 1-1.398-.544A10.6 10.6 0 0 1 5.799 6.97 10.64 10.64 0 0 1 15.98 5.852m2.629 1.562a10.7 10.7 0 0 1 2.022 2.171c.49.702.892 1.451 1.199 2.235a.75.75 0 0 1-1.397.547 9.2 9.2 0 0 0-1.03-1.921 9.2 9.2 0 0 0-1.297-1.484l.381-.964c.076-.19.115-.388.122-.584"/>`
} as const;

export default function NetworkCheckIcon({ 
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

  const gradientId = 'networkcheckicon_gradient';
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