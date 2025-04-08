
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.906 16.5h2.17q-.075.49-.076 1c0 1.653.617 3.162 1.633 4.309q-.313.189-.631.19c-1.197 0-2.401-2.094-3.038-5.204zm-.23-1.5h2.822a6.52 6.52 0 0 1 3.996-3.685A26 26 0 0 0 15.426 10H8.577l-.033.489A26 26 0 0 0 8.676 15m8.824-4c1.733 0 3.308.678 4.473 1.784a10.2 10.2 0 0 0-.17-2.784h-4.87l.039.657.014.363q.255-.02.514-.02M3.067 16.501h4.306c.365 2.082.983 3.854 1.792 5.093a10.03 10.03 0 0 1-5.951-4.814zm-.867-6.5h4.87a28 28 0 0 0 .033 4.42l.057.58H2.458a10.05 10.05 0 0 1-.258-5m12.746-7.424-.108-.17A10.03 10.03 0 0 1 21.374 8.5h-4.591c-.316-2.416-.957-4.492-1.837-5.923m-5.903-.133.122-.037c-.88 1.35-1.535 3.329-1.883 5.654l-.061.44H2.63a10.03 10.03 0 0 1 6.413-6.057m2.959-.442c1.318 0 2.645 2.542 3.214 6.183l.046.315H8.741c.54-3.809 1.904-6.498 3.26-6.498M12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M15 19.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.5 3.5 0 0 1 17.5 21a3.5 3.5 0 0 1-2.5-1.05"/>`,
  'regular': `<path d="M12.002 1.999c5.523 0 10.001 4.478 10.001 10.002q0 .395-.03.783a6.5 6.5 0 0 0-1.474-1.052 8.5 8.5 0 0 0-.233-1.733h-3.358q.048.504.073 1.021a6.5 6.5 0 0 0-1.49.296A19 19 0 0 0 15.4 10H8.605a19 19 0 0 0 .135 5h2.758q-.298.714-.422 1.5H9.063c.598 2.215 1.601 3.735 2.654 3.97a6.5 6.5 0 0 0 1.066 1.502q-.387.03-.781.03C6.478 22.002 2 17.524 2 12.001 2 6.477 6.478 1.999 12.002 1.999M7.51 16.501H4.787a8.53 8.53 0 0 0 4.095 3.41c-.523-.82-.954-1.846-1.27-3.015zM7.095 10H3.737l-.004.017a8.5 8.5 0 0 0-.233 1.984c0 1.056.193 2.067.545 3h3.173a21 21 0 0 1-.123-5m1.788-5.91-.023.008A8.53 8.53 0 0 0 4.252 8.5H7.3c.313-1.752.86-3.278 1.583-4.41m3.119-.591-.116.005C10.62 3.62 9.398 5.622 8.83 8.5h6.343c-.566-2.87-1.783-4.869-3.045-4.995zm3.12.59.106.175c.67 1.112 1.178 2.572 1.475 4.237h3.048a8.53 8.53 0 0 0-4.338-4.29zM12 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 14c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M15 19.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.5 3.5 0 0 1 17.5 21a3.5 3.5 0 0 1-2.5-1.05"/>`
} as const;

export default function GlobeSyncIcon({ 
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

  const gradientId = 'globesyncicon_gradient';
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