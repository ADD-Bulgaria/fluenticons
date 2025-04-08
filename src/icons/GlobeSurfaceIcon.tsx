import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.427 22.354c.543-1.177.984-2.66 1.26-4.354h-7.374c.276 1.694.717 3.177 1.26 4.354C14.591 24.56 15.593 25 16 25s1.41-.441 2.427-2.646m1.176 2.042c.977-1.593 1.723-3.818 2.108-6.396h4.54a11.03 11.03 0 0 1-6.648 6.396M21.929 16h4.89a11 11 0 0 0 0-4h-4.89a28 28 0 0 1 0 4M12 14q0 1.028.076 2h7.848a26 26 0 0 0 0-4h-7.848q-.075.972-.076 2m-2 0q0 1.021.07 2H5.182a11.1 11.1 0 0 1 0-4h4.89q-.07.979-.071 2m2.397 10.396A11.03 11.03 0 0 1 5.75 18h4.54c.384 2.578 1.13 4.803 2.107 6.396M19.687 10c-.276-1.694-.717-3.177-1.26-4.354C17.409 3.44 16.407 3 16 3c-.406 0-1.41.441-2.427 2.646-.543 1.177-.984 2.66-1.26 4.354zm6.563 0h-4.54c-.384-2.578-1.13-4.803-2.107-6.396A11.03 11.03 0 0 1 26.25 10m-15.96 0H5.75a11.03 11.03 0 0 1 6.647-6.396C11.42 5.197 10.674 7.422 10.29 10M5 21h.642c.49.724 1.056 1.395 1.683 2h-1.57l-1.43 5h23.35l-1.43-5h-1.57a12.6 12.6 0 0 0 1.683-2H27a1 1 0 0 1 .962.725l2 7A1 1 0 0 1 29 30H3a1 1 0 0 1-.962-1.275l2-7A1 1 0 0 1 5 21"/>`,
  'regular': `<path d="M17.715 20.95C16.87 22.808 16.115 23 16 23s-.871-.193-1.715-2.05c-.37-.814-.684-1.814-.91-2.95h5.25c-.226 1.136-.54 2.136-.91 2.95M18.91 16h-5.82a22 22 0 0 1 0-4h5.82a22 22 0 0 1 0 4m1.75 2h3.404a9.03 9.03 0 0 1-4.838 4.405c.63-1.173 1.128-2.684 1.433-4.405m4.117-2h-3.86a24 24 0 0 0 0-4h3.86a9 9 0 0 1 0 4m-13.695 0H7.223a9 9 0 0 1 0-4h3.86a24 24 0 0 0 0 4m-3.146 2h3.405c.305 1.721.802 3.232 1.433 4.405A9.03 9.03 0 0 1 7.936 18m6.35-10.95C15.128 5.192 15.885 5 16 5s.871.193 1.715 2.05c.37.814.684 1.814.91 2.95h-5.25c.226-1.136.54-2.136.91-2.95M20.658 10c-.305-1.721-.802-3.232-1.433-4.405A9.03 9.03 0 0 1 24.065 10zM7.936 10a9.03 9.03 0 0 1 4.838-4.405c-.63 1.173-1.128 2.684-1.433 4.405zM27 14c0-6.075-4.925-11-11-11S5 7.925 5 14s4.925 11 11 11 11-4.925 11-11M5 21h.642c.49.724 1.056 1.395 1.683 2h-1.57l-1.43 5h23.35l-1.43-5h-1.57a12.6 12.6 0 0 0 1.683-2H27a1 1 0 0 1 .962.725l2 7A1 1 0 0 1 29 30H3a1 1 0 0 1-.962-1.275l2-7A1 1 0 0 1 5 21"/>`
} as const;

export default function GlobeSurfaceIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'globesurfaceicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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