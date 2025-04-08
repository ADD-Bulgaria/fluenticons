
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 16a1 1 0 0 1 .993.884L13 17v1.584l.293-.29a1 1 0 0 1 1.32-.084l.094.083a1 1 0 0 1 .083 1.32l-.083.095-2 2-.044.041-.068.055-.111.072-.113.053-.105.036-.118.024-.089.01h-.119l-.058-.005-.116-.02-.108-.033-.081-.034-.098-.052-.096-.067a1 1 0 0 1-.09-.08l-2-2a1 1 0 0 1 1.32-1.498l.094.083.293.293V17a1 1 0 0 1 .883-.994zm6.293-6.707a1 1 0 0 1 1.32-.083l.094.083 2 2 .041.044.055.068.072.111.054.113.035.106.025.117.01.09v.118l-.006.058-.02.116-.033.108-.034.082-.052.097-.074.105-.073.082-2 2a1 1 0 0 1-1.498-1.32l.084-.095.29-.292H17a1 1 0 0 1-.994-.884L16 12a1 1 0 0 1 .883-.993l.117-.006h1.585l-.292-.293a1 1 0 0 1-.084-1.32zm-14 0a1 1 0 0 1 1.497 1.32l-.083.095-.293.293H7a1 1 0 0 1 .993.883L8 12a1 1 0 0 1-.884.993L7 13H5.415l.292.292a1 1 0 0 1 .083 1.32l-.083.095a1 1 0 0 1-1.32.083l-.094-.083-2-2-.097-.112-.072-.111-.053-.113-.035-.105-.025-.118-.008-.063L2 11.98l.004-.07.016-.111.03-.112.043-.11.053-.098.067-.096a1 1 0 0 1 .08-.09zM12 9.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m-.149-7.238.074-.009.13-.001.12.014.137.034.111.044.098.052.104.074.082.073 2 2a1 1 0 0 1-1.32 1.498l-.094-.083L13 5.415V7a1 1 0 0 1-.884.994L12 8a1 1 0 0 1-.993-.883L11 7V5.414l-.293.294a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.095 2-2 .112-.096.11-.072.114-.053.105-.036z"/>`,
  'regular': `<path d="M12 16.5a.75.75 0 0 1 .744.648l.007.102v2.188l.72-.718a.75.75 0 0 1 .976-.073l.084.073a.75.75 0 0 1 .072.976l-.072.084-2 2-.038.036-.072.055-.095.055-.087.035-.102.026-.085.011h-.103l-.12-.018-.068-.02-.059-.022-.07-.035-.052-.032-.031-.022a1 1 0 0 1-.079-.069l-2-2a.75.75 0 0 1 .977-1.133l.084.073.72.719v-2.19a.75.75 0 0 1 .648-.742zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m6.72.47a.75.75 0 0 1 .977-.073l.084.072 2 2 .036.039.055.072.055.095.035.086.026.103.01.084v.103l-.017.12-.02.068-.022.059-.035.07-.032.052-.028.038-.063.072-2 2a.75.75 0 0 1-1.133-.976l.072-.085.719-.72H17.25a.75.75 0 0 1-.744-.647L16.501 12a.75.75 0 0 1 .648-.743l.102-.007h2.189l-.72-.72a.75.75 0 0 1-.072-.976zm-14.5 0a.75.75 0 0 1 1.134.976l-.073.084-.72.72h2.19a.75.75 0 0 1 .743.648L7.5 12a.75.75 0 0 1-.649.743l-.101.007H4.56l.72.72a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.977.073l-.084-.073-2-2-.09-.11-.055-.095-.036-.086-.026-.103-.011-.09v-.093l.018-.125.02-.067.022-.06.035-.07.032-.052.023-.03a1 1 0 0 1 .068-.08zM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-.136-8.488.067-.009.087-.003.06.004.094.016.068.019.059.022.07.036.052.032.038.027.072.063 2 2a.75.75 0 0 1-.977 1.134l-.084-.073-.72-.72v2.19a.75.75 0 0 1-.648.743l-.101.007a.75.75 0 0 1-.744-.648l-.006-.102V4.56l-.72.72a.75.75 0 0 1-.977.073L9.47 5.28a.75.75 0 0 1-.072-.976l.072-.085 2-2 .11-.09.095-.055.087-.035z"/>`
} as const;

export default function DragIcon({ 
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

  const gradientId = 'dragicon_gradient';
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