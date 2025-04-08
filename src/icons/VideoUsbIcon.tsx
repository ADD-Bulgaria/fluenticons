import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 7A6.25 6.25 0 0 0 6 13.25v.809A5 5 0 0 1 6.75 14h5.5A4.75 4.75 0 0 1 17 18.75v3.127c1.21.86 2 2.273 2 3.873v6.584a4.75 4.75 0 0 1-.677 2.444L18.19 35h8.56A6.25 6.25 0 0 0 33 28.75v-15.5A6.25 6.25 0 0 0 26.75 7zM35 28.339l5.907 4.079c2.156 1.488 5.097-.055 5.097-2.675V12.256c0-2.62-2.941-4.163-5.097-2.675L35 13.66zM6.75 16A2.75 2.75 0 0 0 4 18.75v4.354a2.75 2.75 0 0 0-2 2.646v6.584c0 .499.135.988.392 1.415l2.572 4.288a.25.25 0 0 1 .036.129v3.084A2.75 2.75 0 0 0 7.75 44h3.5A2.75 2.75 0 0 0 14 41.25v-3.084a.25.25 0 0 1 .036-.13l2.572-4.287A2.75 2.75 0 0 0 17 32.334V25.75a2.75 2.75 0 0 0-2-2.646V18.75A2.75 2.75 0 0 0 12.25 16zm5.75 7h-6v-4.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25z"/>`,
  'regular': `<path d="M12.25 7A6.25 6.25 0 0 0 6 13.25v.809A5 5 0 0 1 6.75 14H8.5v-.75a3.75 3.75 0 0 1 3.75-3.75h15.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.75 3.75h-8.753a4.75 4.75 0 0 1-.674 2.278L18.19 35h9.56A6.25 6.25 0 0 0 34 28.75v-1.101l6.907 4.769c2.156 1.488 5.096-.055 5.096-2.675V12.256c0-2.62-2.94-4.163-5.096-2.675L34 14.351V13.25A6.25 6.25 0 0 0 27.75 7zM34 17.388l8.327-5.75a.75.75 0 0 1 1.176.618v17.487a.75.75 0 0 1-1.176.617L34 24.61zM6.75 16A2.75 2.75 0 0 0 4 18.75v4.354a2.75 2.75 0 0 0-2 2.646v6.584c0 .499.135.988.392 1.415l2.572 4.288a.25.25 0 0 1 .036.129v3.084A2.75 2.75 0 0 0 7.75 44h3.5A2.75 2.75 0 0 0 14 41.25v-3.084a.25.25 0 0 1 .036-.13l2.572-4.287A2.75 2.75 0 0 0 17 32.334V25.75a2.75 2.75 0 0 0-2-2.646V18.75A2.75 2.75 0 0 0 12.25 16zm5.75 7h-6v-4.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25z"/>`
} as const;

export default function VideoUsbIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'videousbicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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