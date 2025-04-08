
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m12.897 3.62-.002-.002-.002-.004-.006-.01a1 1 0 0 0-.056-.081 2 2 0 0 0-.134-.161 2.1 2.1 0 0 0-.514-.397c-.476-.266-1.155-.425-2.068-.258-1.091.2-1.63.97-1.875 1.597A3.6 3.6 0 0 0 8 5.459V6.75a2.5 2.5 0 0 0 2.5 2.5h.25a2.5 2.5 0 0 0 2.5-2.5v-.5a.75.75 0 0 0-.75-.75h-1.25a.75.75 0 0 0 0 1.5h.469a1 1 0 0 1-.969.75h-.25a1 1 0 0 1-1-1V5.501l.002-.034q.002-.05.015-.148a2 2 0 0 1 .119-.471c.13-.333.341-.592.75-.667.597-.11.917.01 1.064.091a.6.6 0 0 1 .17.134.75.75 0 0 0 1.277-.786m-8.461.99.057-.045.017-.014.017-.016a1 1 0 0 1 .198-.14c.135-.078.313-.145.525-.145.161 0 .26.049.324.104a.53.53 0 0 1 .163.276.57.57 0 0 1-.056.444c-.05.074-.153.176-.43.176a.75.75 0 1 0 0 1.5c.25 0 .356.084.405.143.064.075.11.2.1.358a.6.6 0 0 1-.148.363c-.069.073-.174.136-.358.136-.407 0-.673-.24-.748-.307l-.014-.012a.75.75 0 1 0-.976 1.138c-.014-.011.178.175.472.342.296.168.729.339 1.266.339 1.256 0 1.941-.986 2.002-1.9A2 2 0 0 0 6.862 6l.07-.099c.33-.498.394-1.11.258-1.642-.2-.787-.876-1.509-1.94-1.509-1.052 0-1.764.696-1.686.64a.75.75 0 1 0 .872 1.22M21 7a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0zm-4 2.995A1 1 0 0 0 16 9c-.552 0-1 .446-1 .995v10.01c0 .55.448.995 1 .995s1-.446 1-.995zM13 13a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm-4 2.994A.997.997 0 0 0 8 15c-.552 0-1 .445-1 .994v4.012c0 .549.448.994 1 .994s1-.445 1-.994zm-4 2.99A.99.99 0 0 0 4 18c-.552 0-1 .44-1 .984v1.032c0 .544.448.984 1 .984s1-.44 1-.984z"/>`,
  'regular': `<path d="M12.896 3.619a.75.75 0 0 1-1.277.787l-.015-.018a.6.6 0 0 0-.154-.116c-.147-.082-.467-.2-1.065-.091-.408.075-.619.334-.749.667A2.1 2.1 0 0 0 9.5 5.5v1.25a1 1 0 0 0 1 1h.25a1 1 0 0 0 .969-.75h-.469a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08q.005-.1.026-.263a3.6 3.6 0 0 1 .209-.814c.245-.627.784-1.396 1.875-1.597.913-.167 1.592-.008 2.068.258.23.129.399.275.514.397a2 2 0 0 1 .19.242l.006.01.002.004zm-8.403.946-.057.045a.75.75 0 1 1-.872-1.22c-.078.056.634-.64 1.686-.64 1.064 0 1.74.723 1.94 1.51A2.07 2.07 0 0 1 6.862 6c.306.403.42.895.39 1.35-.06.914-.746 1.9-2.002 1.9-.537 0-.97-.17-1.266-.339-.294-.167-.486-.353-.472-.342a.75.75 0 0 1 .976-1.138l.014.012c.075.067.341.307.748.307.184 0 .29-.063.358-.136a.6.6 0 0 0 .147-.363.5.5 0 0 0-.099-.358c-.05-.06-.155-.143-.406-.143a.75.75 0 1 1 0-1.5c.278 0 .382-.102.43-.176a.57.57 0 0 0 .057-.444.53.53 0 0 0-.163-.276.48.48 0 0 0-.324-.104c-.212 0-.39.067-.525.144a1.2 1.2 0 0 0-.198.141l-.017.016zM11.75 12a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 20.25v-7.5a.75.75 0 0 1 .75-.75m4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 20.25V9.75a.75.75 0 0 1 .75-.75m-12 9a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 20.25v-1.5a.75.75 0 0 1 .75-.75M19.743 6a.75.75 0 0 1 .75.64l.007.102v13.501a.75.75 0 0 1-1.492.116L19 20.258V6.757A.75.75 0 0 1 19.743 6M7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 20.249V15.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function Cellular3gIcon({ 
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

  const gradientId = 'cellular3gicon_gradient';
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