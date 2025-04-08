
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.023 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.262q-1.193.24-2.592.24c-3.42 0-5.944-1.073-7.486-3.237a2.75 2.75 0 0 1-.51-1.596v-.92A2.25 2.25 0 0 1 4.253 14zm5.477-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-5.877c-1.047 0-1.864.818-1.853 1.955a.5.5 0 0 0 1-.01c-.006-.579.36-.945.853-.945.473 0 .854.392.854.95 0 .192-.055.342-.224.561l-.094.116-.1.113-.264.29-.137.158c-.383.456-.535.792-.535 1.31a.5.5 0 1 0 1 0c0-.203.059-.36.24-.59l.084-.105.101-.115.266-.29.135-.156c.378-.45.528-.783.528-1.292 0-1.104-.822-1.95-1.854-1.95M10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25m0-5.877c-1.047 0-1.864.818-1.853 1.955a.5.5 0 0 0 1-.01c-.006-.579.36-.945.853-.945.473 0 .854.392.854.95 0 .192-.055.342-.224.561l-.094.116-.1.113-.264.29-.137.158c-.383.456-.535.792-.535 1.31a.5.5 0 1 0 1 0c0-.203.059-.36.24-.59l.084-.105.101-.115.266-.29.135-.156c.378-.45.528-.783.528-1.292 0-1.104-.822-1.95-1.854-1.95M12.023 14a6.5 6.5 0 0 0-.709 1.5H4.253a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46 1.253 1.469 3.22 2.214 5.957 2.214q.896 0 1.68-.106c.246.495.553.954.912 1.367q-1.193.24-2.592.24c-3.145 0-5.532-.906-7.098-2.74a3.75 3.75 0 0 1-.898-2.435v-.578A2.25 2.25 0 0 1 4.253 14zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`
} as const;

export default function PersonQuestionMarkIcon({ 
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

  const gradientId = 'personquestionmarkicon_gradient';
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