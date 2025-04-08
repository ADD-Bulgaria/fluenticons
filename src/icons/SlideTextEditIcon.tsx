import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.754 4a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 5.754 24h7.661l.106-.423c.162-.648.497-1.24.97-1.712l7.902-7.903A3.29 3.29 0 0 1 26 13.261V7.75A3.75 3.75 0 0 0 22.25 4zM7 9.728C7 9.326 7.326 9 7.728 9h5.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 9.772zm0 4.044v-.044c0-.402.326-.728.728-.728h10.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 13.772m0 3.956c0-.402.326-.728.728-.728h7.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 17.772zm16.1-3.059-7.903 7.903a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233"/>`,
  'regular': `<path d="M7 9.728C7 9.326 7.326 9 7.728 9h5.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 9.772zm0 4c0-.402.326-.728.728-.728h10.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 13.772zM7.728 17a.73.73 0 0 0-.728.728v.044c0 .402.326.728.728.728h7.544a.73.73 0 0 0 .728-.728v-.044a.73.73 0 0 0-.728-.728zM2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v5.51a3.3 3.3 0 0 0-1.5-.253V7.75a2.25 2.25 0 0 0-2.25-2.25H5.755a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25h8.228c-.21.33-.365.694-.461 1.077l-.106.423H5.754a3.75 3.75 0 0 1-3.75-3.75zM23.1 14.67l-7.903 7.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233"/>`
} as const;

export default function SlideTextEditIcon({ 
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

  const gradientId = 'slidetextediticon_gradient';
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