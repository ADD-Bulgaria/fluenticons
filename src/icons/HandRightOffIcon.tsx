
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m19.283 20.344-.552.75a11 11 0 0 0-1.028 1.687l-.695 1.407a3.25 3.25 0 0 1-2.914 1.81H10.5c-1.216 0-2.368-.686-2.855-1.859C6.982 22.545 6 19.77 6 17.25V7.06L2.22 3.28a.75.75 0 1 1 1.06-1.06l22.5 22.5a.75.75 0 0 1-1.06 1.06zM8 9.061v3.689a.75.75 0 0 0 1.5 0v-2.19zm13.52 8.247-.437.593-4.986-4.986a.75.75 0 0 0 .403-.665V4.5a1 1 0 1 1 2 0v9.861c.545-.312 1.246-.654 1.968-.836.795-.22 1.684-.3 2.417-.16.367.07.755.206 1.066.466.335.28.549.682.549 1.169a.75.75 0 0 1-.347.633zM15 3v8.818l-2-2V3a1 1 0 1 1 2 0m-3.5 1.5v3.818l-2-2V4.5a1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.41 3.41c-.4.422-.63.993-.63 1.58v8.98c0 1.414.432 2.878.96 4.151a22 22 0 0 0 1.67 3.198c.572.912 1.572 1.398 2.597 1.398h3.867a3.25 3.25 0 0 0 2.914-1.81l.377-.762c.49-.99 1.122-1.902 1.877-2.708l.19-.203 5.267 5.267a.75.75 0 0 0 1.061-1.061zm15.112 17.232-.224.239a12.8 12.8 0 0 0-2.128 3.07l-.377.762a1.75 1.75 0 0 1-1.569.974h-3.867c-.56 0-1.054-.262-1.325-.694a21 21 0 0 1-1.556-2.977c-.493-1.188-.846-2.443-.846-3.576V8.27c0-.2.07-.382.19-.519L8 9.061v3.689a.75.75 0 0 0 1.5 0v-2.19l1.5 1.5v.19a.75.75 0 0 0 .92.73zM8.152 4.97 9.5 6.318v-.523c0-.445.332-.795.747-.795.421 0 .753.35.753.795v2.023l1.5 1.5V4.272c0-.427.32-.772.752-.772.44 0 .748.332.748.76v6.558l1.497 1.497.003-.065V5.763c0-.4.324-.76.75-.763.384-.002.75.363.75.795v8.023l1.378 1.378.054-.05c.24-.214.398-.356.629-.49.266-.153.656-.304 1.377-.415.663-.102 1.346-.012 1.829.25.35.19.606.469.697.894l-2.144 1.5a1 1 0 0 0-.117.102l-.258.276 1.06 1.06.239-.253 2.436-1.706c.2-.14.32-.37.32-.614 0-1.239-.639-2.101-1.518-2.578-.839-.454-1.87-.552-2.772-.413-.735.113-1.272.276-1.71.497v-7.46c0-1.173-.954-2.304-2.258-2.296a2.2 2.2 0 0 0-.822.158c-.249-.924-1.062-1.659-2.169-1.658-1.1 0-1.912.742-2.167 1.658a2.2 2.2 0 0 0-.837-.158c-1.029 0-1.786.654-2.095 1.47"/>`
} as const;

export default function HandRightOffIcon({ 
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

  const gradientId = 'handrightofficon_gradient';
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