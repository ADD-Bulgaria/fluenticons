import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m14.712 2.289-.087-.078a1 1 0 0 0-1.327.078l-.078.087a1 1 0 0 0 .078 1.326l1.299 1.297H8.999l-.24.004A6.997 6.997 0 0 0 2 11.993a6.94 6.94 0 0 0 1.189 3.899.999.999 0 0 0 1.626-1.163l-.135-.218A4.997 4.997 0 0 1 9 6.998h5.595l-1.297 1.297-.078.087a.999.999 0 0 0 1.492 1.326l3.006-3.003.077-.087a1 1 0 0 0-.078-1.326zm6.075 5.771A.999.999 0 0 0 19 8.677c0 .209.064.402.172.561.435.658.72 1.424.803 2.25a6.5 6.5 0 0 1 1.982 1.281 6.96 6.96 0 0 0-1.17-4.712zM9.415 16.99h1.605a6.6 6.6 0 0 0 .151 1.998H9.405l1.304 1.303.077.087a1 1 0 0 1-1.397 1.41l-.095-.084L6.29 18.7l-.077-.087a1 1 0 0 1-.006-1.231l.083-.095 3.005-3.003.088-.078c.36-.284.87-.286 1.232-.006l.095.084.077.087a1 1 0 0 1 .006 1.231l-.083.095zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.885-3.487a.5.5 0 0 0-.562.263 4.8 4.8 0 0 1-.613.828c-.334.373-.744.739-1.164.949a.5.5 0 1 0 .448.894c.489-.244.926-.616 1.276-.977v4.53a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.385-.487"/>`,
  'regular': `<path d="m14.61 2.47-.077-.067a.75.75 0 0 0-.983.067l-.068.078a.755.755 0 0 0 .068.987l1.971 1.977H8.5l-.233.004C4.785 5.639 2 8.51 2 12.036c0 1.69.64 3.23 1.692 4.39l.072.069a.751.751 0 0 0 1.08-1.033l-.2-.231A5 5 0 0 1 3.5 12.035c0-2.771 2.239-5.018 5-5.018h6.881l-1.832 1.84-.067.078a.755.755 0 0 0 .068.987.75.75 0 0 0 1.06 0l3.182-3.193.067-.078a.755.755 0 0 0-.067-.987zm5.62 5.101a.751.751 0 0 0-1.05 1.066 5 5 0 0 1 1.31 3.09c.539.28 1.032.632 1.47 1.044q.04-.363.04-.736a6.5 6.5 0 0 0-1.697-4.395zM8.558 17.054h2.457a6.6 6.6 0 0 0 .07 1.505h-2.52l1.9 1.906.066.077a.755.755 0 0 1-.067.987.75.75 0 0 1-.976.073l-.084-.073-3.182-3.193-.067-.077a.755.755 0 0 1-.006-.902l.073-.085 3.182-3.194.077-.067a.75.75 0 0 1 .899-.006l.084.073.068.077a.755.755 0 0 1 .005.902l-.073.085zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.885-3.487a.5.5 0 0 0-.562.263 4.8 4.8 0 0 1-.613.828c-.334.373-.744.739-1.164.949a.5.5 0 1 0 .448.894c.489-.244.926-.616 1.276-.977v4.53a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.385-.487"/>`
} as const;

export default function ArrowRepeat1Icon({ 
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

  const gradientId = 'arrowrepeat1icon_gradient';
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