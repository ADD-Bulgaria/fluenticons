import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.866 3.734a2.75 2.75 0 0 0-3.732 0l-7.929 7.324A3.75 3.75 0 0 0 3 13.813v8.437A2.75 2.75 0 0 0 5.75 25h6.516a18 18 0 0 1-1.588-2.159c-.6-.974-1.178-2.191-1.178-3.37C9.5 16.992 11.523 15 14 15s4.5 1.993 4.5 4.47c0 1.18-.578 2.397-1.178 3.371-.508.825-1.1 1.583-1.588 2.159h6.516A2.75 2.75 0 0 0 25 22.25v-8.437a3.75 3.75 0 0 0-1.205-2.755zm-2.714 1.102a1.25 1.25 0 0 1 1.696 0l3.605 3.33c-1.646.149-3.077.76-4.343 1.3q-.42.181-.82.343c-1.014.41-1.92.697-2.841.696-.777 0-1.612-.205-2.562-.806zM17.5 19.47c0 1.78-1.804 4.07-2.822 5.221a.9.9 0 0 1-1.356 0c-1.018-1.15-2.822-3.441-2.822-5.22C10.5 17.553 12.067 16 14 16s3.5 1.554 3.5 3.47m-1.75 0c0-.958-.784-1.735-1.75-1.735s-1.75.777-1.75 1.735.784 1.735 1.75 1.735 1.75-.776 1.75-1.735"/>`,
  'regular': `<path d="M12.134 3.734a2.75 2.75 0 0 1 3.732 0l7.929 7.324A3.75 3.75 0 0 1 25 13.813v8.437A2.75 2.75 0 0 1 22.25 25h-6.456a20 20 0 0 0 1.138-1.5h5.318c.69 0 1.25-.56 1.25-1.25v-8.437a2.25 2.25 0 0 0-.723-1.653l-2.67-2.467c-2.006-.281-3.627.403-5.36 1.135q-.44.188-.895.372c-1.052.425-2.181.806-3.404.805-1.189 0-2.405-.36-3.695-1.259l-1.53 1.414a2.25 2.25 0 0 0-.723 1.653v8.437c0 .69.56 1.25 1.25 1.25h5.318a20 20 0 0 0 1.138 1.5H5.75A2.75 2.75 0 0 1 3 22.25v-8.437a3.75 3.75 0 0 1 1.205-2.755zm2.714 1.102a1.25 1.25 0 0 0-1.696 0L7.887 9.699c.95.6 1.785.806 2.561.806.921 0 1.828-.286 2.843-.696q.397-.162.82-.343c1.265-.54 2.696-1.151 4.342-1.3zM17.5 19.47c0 1.78-1.804 4.07-2.822 5.221a.9.9 0 0 1-1.356 0c-1.018-1.15-2.822-3.441-2.822-5.22C10.5 17.553 12.067 16 14 16s3.5 1.554 3.5 3.47m-1.75 0c0-.958-.784-1.735-1.75-1.735s-1.75.777-1.75 1.735.784 1.735 1.75 1.735 1.75-.776 1.75-1.735"/>`
} as const;

export default function MountainLocationBottomIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'mountainlocationbottomicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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