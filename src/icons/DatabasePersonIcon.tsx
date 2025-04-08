import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 6.5c0 2.21-3.582 4-8 4s-8-1.79-8-4 3.582-4 8-4 8 1.79 8 4m-2.232 4.428C16.152 11.616 14.137 12 12 12c-2.392 0-4.63-.482-6.328-1.33A7.6 7.6 0 0 1 4 9.553V18.5c0 2.21 3.582 4 8 4q.829 0 1.61-.081a3.7 3.7 0 0 1-.61-2.044v-.103a2.77 2.77 0 0 1 2.773-2.772h.277a3.5 3.5 0 0 1 .882-5.63c.392-.197.73-.516.836-.942M21 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375c0 1.556-1.286 3.125-4.5 3.125S14 21.937 14 20.375v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M4 6.5c0-.69.315-1.293.774-1.78.455-.482 1.079-.883 1.793-1.202C7.996 2.877 9.917 2.5 12 2.5s4.004.377 5.433 1.018c.714.32 1.338.72 1.793 1.202.459.487.774 1.09.774 1.78v5.337a3.5 3.5 0 0 0-1.5-.337V8.892c-.32.22-.68.417-1.067.59-1.429.641-3.35 1.018-5.433 1.018s-4.004-.377-5.433-1.018a7 7 0 0 1-1.067-.59V18.5c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.195.535 2.9.886 4.82.886q.536 0 1.046-.035c.08.508.267 1.005.567 1.458q-.785.076-1.613.077c-2.083 0-4.004-.377-5.433-1.017-.714-.32-1.338-.72-1.793-1.203C4.315 19.793 4 19.19 4 18.5zm1.5 0c0 .207.09.46.365.75.279.296.717.596 1.315.864C8.375 8.649 10.08 9 12 9s3.625-.35 4.82-.886c.598-.269 1.036-.568 1.315-.864.275-.29.365-.543.365-.75s-.09-.46-.365-.75c-.279-.296-.717-.596-1.315-.864C15.625 4.351 13.92 4 12 4s-3.625.35-4.82.886c-.598.268-1.036.568-1.315.864-.275.29-.365.543-.365.75M21 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375c0 1.556-1.286 3.125-4.5 3.125S14 21.937 14 20.375v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function DatabasePersonIcon({ 
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

  const gradientId = 'databasepersonicon_gradient';
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