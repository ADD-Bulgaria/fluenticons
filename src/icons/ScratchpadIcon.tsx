import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.782 2C19.239 2.056 20 3.21 20 4.177l.004 4.084A4.24 4.24 0 0 0 16.25 6c-1.044 0-2 .376-2.74 1H8.25a.75.75 0 0 0 0 1.5h4.125c-.21.467-.337.97-.368 1.5H8.25a.75.75 0 0 0 0 1.5H12v.668a1.7 1.7 0 0 0-.59-.16L11.25 12c-.698 0-1.3.409-1.582 1H8.25a.75.75 0 0 0 0 1.5H9.5c0 3.004 1.976 5.53 4.76 6.361l.24.067v.322c0 .268.06.522.168.749L6.252 22c-1.053 0-2.152-.84-2.246-2.027L4 19.812V4.186c0-.925.816-2.09 2.078-2.18L6.253 2zm3.468 11a.75.75 0 0 1 .743.648l.007.102v.75c0 2.921-2.178 5.25-5 5.603v1.147a.75.75 0 0 1-1.493.102l-.007-.102v-1.147c-2.745-.344-4.882-2.557-4.995-5.367L10.5 14.5v-.75a.75.75 0 0 1 1.493-.102l.007.102v.75c0 2.347 1.903 4.15 4.25 4.15 2.276 0 4.134-1.695 4.245-3.938l.005-.212v-.75a.75.75 0 0 1 .75-.75m-5-6a3.25 3.25 0 0 1 3.25 3.25v4a3.25 3.25 0 0 1-6.5 0v-4A3.25 3.25 0 0 1 16.25 7"/>`,
  'regular': `<path d="M17.783 2.007c1.243 0 2.217 1 2.217 2.243v3.995q-.48-.882-1.5-1.597V4.257c0-.414-.303-.75-.717-.75H6.257a.75.75 0 0 0-.75.75l-.007 15.5a.75.75 0 0 0 .757.743h1.356c.753.002 1.52.007 2.38.005l1.39-.006.41.002 1.52-.003c.541.265 1.072.39 1.188.433q-.03.726.173 1.07h-3.587l-1.59.006c-1.16 0-2.167-.007-3.24-.007A2.25 2.25 0 0 1 4 19.757l.007-15.5a2.25 2.25 0 0 1 2.25-2.25zM21.25 13a.75.75 0 0 1 .743.649l.007.101v.75c0 2.922-2.178 5.25-5 5.604v1.146a.75.75 0 0 1-1.493.102l-.007-.102v-1.146c-2.745-.344-4.882-2.558-4.995-5.368L10.5 14.5v-.75a.75.75 0 0 1 1.493-.101l.007.101v.75c0 2.348 1.903 4.15 4.25 4.15 2.276 0 4.134-1.695 4.245-3.938l.005-.212v-.75a.75.75 0 0 1 .75-.75m-5-6a3.25 3.25 0 0 1 3.25 3.25v4a3.25 3.25 0 1 1-6.5 0v-4A3.25 3.25 0 0 1 16.25 7m0 1.5a1.75 1.75 0 0 0-1.75 1.75v4a1.75 1.75 0 1 0 3.5 0v-4a1.75 1.75 0 0 0-1.75-1.75M9.665 13q-.054.054-.115.25a1.7 1.7 0 0 0-.051.447v.803H8.25a.75.75 0 0 1-.102-1.493L8.25 13zM8.25 10h3.754l-.008 1.5H8.25a.75.75 0 0 1-.102-1.493zm5.25-3q-.465.396-.65.65-.134.181-.331.538l-.169.312h-4.1a.75.75 0 0 1-.102-1.493L8.25 7z"/>`
} as const;

export default function ScratchpadIcon({ 
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

  const gradientId = 'scratchpadicon_gradient';
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