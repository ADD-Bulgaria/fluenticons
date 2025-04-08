
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.876 8.661c.387.216.848.339 1.37.339.847 0 1.555-.307 2.047-.844.481-.526.703-1.216.703-1.906a.75.75 0 0 0-1.5 0c0 .377-.12.686-.31.894-.18.196-.472.356-.94.356-.449 0-.73-.162-.914-.37A1.46 1.46 0 0 1 11 6.29V4.25A2.25 2.25 0 0 1 13.25 2h3.185c.509 0 1.007.141 1.44.408l2.768 1.703A.75.75 0 0 1 21 4.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-.25v9.533c.92.088 1.618.366 2.047.964.257.359.36.76.408 1.129.045.352.045.736.045 1.09v.034a.75.75 0 0 1-.75.75h-3.252v-.774c0-.572.002-2.208-1.5-3.169v-2.804a.75.75 0 0 0-1.5 0v2.266a5 5 0 0 0-.697-.022q-.04 0-.064.003h-.025l-.003.001a.75.75 0 1 0 .082 1.498h.003l.013-.001.05-.002c.041-.002.093-.003.141-.003.432 0 .715.073.901.17l.033.017c1.039.484 1.066 1.439 1.066 2.07V22H5.833a3.833 3.833 0 0 1-1.97-7.123.75.75 0 0 1 .772 1.287A2.333 2.333 0 0 0 5.833 20.5c.319 0 .517-.083.649-.176.139-.098.248-.238.331-.407a1.9 1.9 0 0 0 .187-.69v-.035l.004-.143a14 14 0 0 1 .26-2.187c.26-1.291.797-2.968 1.952-4.139.848-.86 1.309-2.119 1.547-3.364q.069-.358.113-.698"/>`,
  'regular': `<path d="M13.25 2h3.185c.509 0 1.007.141 1.44.408l2.768 1.703A.75.75 0 0 1 21 4.75v1.5a2.25 2.25 0 0 1-2.25 2.25h-.25v9.047c.997.134 1.695.555 2.095 1.275.223.403.318.84.362 1.243.043.391.043.8.043 1.16v.025a.75.75 0 0 1-.75.75H5.833a3.833 3.833 0 0 1-1.97-7.123.75.75 0 0 1 .772 1.287A2.333 2.333 0 0 0 5.833 20.5c.319 0 .517-.083.649-.176.139-.098.248-.238.331-.407a1.9 1.9 0 0 0 .187-.69v-.035l.004-.143a14 14 0 0 1 .26-2.187c.26-1.291.797-2.968 1.952-4.139.848-.86 1.309-2.119 1.547-3.364C11 8.13 11 7.008 11 6.5V4.25A2.25 2.25 0 0 1 13.25 2m-5.5 17.25.75.026v.006l-.001.01-.002.028-.007.09a3.5 3.5 0 0 1-.293 1.09h7.25c-.09-.494-.34-1.006-1.013-1.32l-.033-.016a1.7 1.7 0 0 0-.45-.116 5 5 0 0 0-.701-.055l-.283.004-.141.002h-.06a.75.75 0 1 1-.028-1.499l.062-.001.143-.002.307-.004c.235 0 .495.016.75.047v-2.287a.75.75 0 0 1 1.5 0v2.804c1.065.682 1.374 1.703 1.463 2.443h2.524a5 5 0 0 0-.021-.27c-.033-.301-.094-.52-.183-.68-.13-.234-.433-.55-1.533-.55a.75.75 0 0 1-.75-.75V7.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 0 .75-.75V5.17l-2.411-1.485a1.25 1.25 0 0 0-.654-.185h-3.186a.75.75 0 0 0-.749.75v2.232a.92.92 0 0 0 .205.554c.101.114.26.214.545.214.287 0 .453-.101.556-.219A.88.88 0 0 0 14 6.45a.75.75 0 0 1 1.5 0c0 .554-.177 1.125-.566 1.569-.4.457-.984.731-1.684.731q-.47-.002-.855-.154a14 14 0 0 1-.158 1.045c-.262 1.366-.801 2.968-1.953 4.136-.845.856-1.308 2.18-1.549 3.38a13 13 0 0 0-.235 2.06v.059zm8.5 2.75v-.75Z"/>`
} as const;

export default function AnimalDogIcon({ 
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

  const gradientId = 'animaldogicon_gradient';
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