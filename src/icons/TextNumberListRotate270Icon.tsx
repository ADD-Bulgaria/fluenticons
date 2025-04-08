
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 4a.75.75 0 0 0-.307 1.434l.003.002.024.011.108.056c.096.052.232.131.385.238.312.217.662.524.901.906a.75.75 0 1 0 1.272-.794 4 4 0 0 0-.248-.353H7.25a.75.75 0 1 0 0-1.5zM18 11v8.5l.007.117A1 1 0 0 0 20 19.5V11l-.007-.117A1 1 0 0 0 18 11m-6.5 0v8.5l.007.117A1 1 0 0 0 13.5 19.5V11l-.007-.117A1 1 0 0 0 11.5 11M6 10a1 1 0 0 0-1 1v8.5l.007.117A1 1 0 0 0 7 19.5V11l-.007-.117A1 1 0 0 0 6 10m4.52-5.15c-.053.3.066.676.26.87a.75.75 0 0 1-1.06 1.06c-.556-.556-.812-1.43-.677-2.192.07-.397.254-.805.605-1.115C10.006 3.157 10.473 3 11 3c.62 0 1.08.271 1.42.606.283.278.511.63.689.906l.051.08c.127.195.237.354.34.481V3.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75c-1.313 0-1.953-.984-2.337-1.575l-.04-.06c-.205-.318-.345-.533-.504-.69-.136-.134-.238-.175-.369-.175-.223 0-.318.061-.36.098a.42.42 0 0 0-.12.251m10.76 2.18s.084-.093.005-.004l.005-.006.013-.013a1.4 1.4 0 0 0 .125-.15c.071-.095.158-.227.243-.397.17-.341.33-.83.33-1.46 0-.64-.182-1.196-.54-1.601a1.73 1.73 0 0 0-1.36-.595 1.78 1.78 0 0 0-1.1.426 1.78 1.78 0 0 0-1.102-.426 1.73 1.73 0 0 0-1.36.595C16.182 3.804 16 4.36 16 5c0 .63.158 1.119.33 1.46a2.6 2.6 0 0 0 .334.51l.033.037.013.013.005.006.003.002v.001l.002.001a.75.75 0 0 0 1.072-1.048l-.02-.026a1 1 0 0 1-.101-.166A1.75 1.75 0 0 1 17.5 5c0-.36.099-.536.163-.608a.23.23 0 0 1 .187-.088.33.33 0 0 1 .23.123c.078.089.17.263.17.573a.75.75 0 0 0 1.5 0c0-.31.09-.484.167-.573a.32.32 0 0 1 .231-.123.23.23 0 0 1 .188.088c.063.072.163.247.163.608 0 .37-.092.631-.17.79a1 1 0 0 1-.122.192.75.75 0 0 0 1.072 1.048m-4.562-.002v.001"/>`,
  'regular': `<path d="M2.75 4a.75.75 0 0 0-.307 1.434l.003.002.024.011.108.056c.096.052.232.131.385.238.312.217.662.524.901.906a.75.75 0 1 0 1.272-.794 4 4 0 0 0-.248-.353H7.25a.75.75 0 1 0 0-1.5zm16 6a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m-6.506 0a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75M5.75 10a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m4.77-5.15c-.053.3.066.676.26.87a.75.75 0 0 1-1.06 1.06c-.556-.556-.812-1.43-.677-2.192.07-.397.254-.805.605-1.115C10.006 3.157 10.473 3 11 3c.62 0 1.08.271 1.42.606.283.278.511.63.689.906l.051.08c.127.195.237.354.34.481V3.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75c-1.313 0-1.953-.984-2.337-1.575l-.04-.06c-.205-.318-.345-.533-.504-.69-.136-.134-.238-.175-.369-.175-.223 0-.318.061-.36.098a.42.42 0 0 0-.12.251m10.76 2.18s.084-.093.005-.004l.005-.006.013-.013a1.4 1.4 0 0 0 .125-.15c.071-.095.158-.227.243-.397.17-.341.33-.83.33-1.46 0-.64-.182-1.196-.54-1.601a1.73 1.73 0 0 0-1.36-.595 1.78 1.78 0 0 0-1.1.426 1.78 1.78 0 0 0-1.102-.426 1.73 1.73 0 0 0-1.36.595C16.182 3.804 16 4.36 16 5c0 .63.158 1.119.33 1.46a2.6 2.6 0 0 0 .334.51l.033.037.013.013.005.006.003.002v.001l.002.001a.75.75 0 0 0 1.072-1.048l-.02-.026a1 1 0 0 1-.101-.166A1.75 1.75 0 0 1 17.5 5c0-.36.099-.536.163-.608a.23.23 0 0 1 .187-.088.33.33 0 0 1 .23.123c.078.089.17.263.17.573a.75.75 0 0 0 1.5 0c0-.31.09-.484.167-.573a.32.32 0 0 1 .231-.123.23.23 0 0 1 .188.088c.063.072.163.247.163.608 0 .37-.092.631-.17.79a1 1 0 0 1-.122.192.75.75 0 0 0 1.072 1.048m-4.562-.002v.001"/>`
} as const;

export default function TextNumberListRotate270Icon({ 
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

  const gradientId = 'textnumberlistrotate270icon_gradient';
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