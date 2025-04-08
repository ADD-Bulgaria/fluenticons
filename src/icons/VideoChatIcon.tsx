import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 16.25A6.25 6.25 0 0 1 10.25 10h14.5A6.25 6.25 0 0 1 31 16.25v15.5a6.25 6.25 0 0 1-5.995 6.245A13 13 0 0 0 26 32.999C26 25.82 20.18 20 13 20a12.96 12.96 0 0 0-9 3.62zm34.907 19.168L33 31.339v-14.68l5.907-4.078c2.156-1.488 5.097.055 5.097 2.675v17.487c0 2.62-2.941 4.163-5.097 2.675M13 22c6.075 0 11 4.924 11 11 0 6.074-4.925 10.999-11 10.999-1.864 0-3.662-.466-5.26-1.338l-4.519 1.301a.956.956 0 0 1-1.184-1.184l1.303-4.516A10.95 10.95 0 0 1 2.001 33c0-6.075 4.925-10.999 11-10.999M17 30H9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2m-8 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M10.25 10A6.25 6.25 0 0 0 4 16.25v7.37a13 13 0 0 1 2.5-1.88v-5.49a3.75 3.75 0 0 1 3.75-3.75h15.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.74 3.75 13 13 0 0 1-.757 2.5h.747A6.25 6.25 0 0 0 32 31.75v-1.101l6.907 4.769c2.156 1.488 5.096-.055 5.096-2.675V15.256c0-2.62-2.94-4.163-5.096-2.675L32 17.351V16.25A6.25 6.25 0 0 0 25.75 10zM32 20.388l8.327-5.75a.75.75 0 0 1 1.176.618v17.487a.75.75 0 0 1-1.176.617L32 27.61zM13 22c6.075 0 11 4.924 11 11 0 6.074-4.925 10.999-11 10.999-1.864 0-3.662-.466-5.26-1.338l-4.519 1.301a.956.956 0 0 1-1.184-1.184l1.303-4.516A10.95 10.95 0 0 1 2.001 33c0-6.075 4.925-10.999 11-10.999m4 8H9a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2m-8 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`
} as const;

export default function VideoChatIcon({ 
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

  const gradientId = 'videochaticon_gradient';
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