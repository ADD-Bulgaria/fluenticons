
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 2.75a.75.75 0 0 0-1.434-.307l-.002.003-.011.024-.056.108a4 4 0 0 1-.238.385c-.217.312-.524.662-.906.901a.75.75 0 1 0 .794 1.272q.188-.117.353-.248V7.25a.75.75 0 1 0 1.5 0zM19.5 18H11l-.117.007A1 1 0 0 0 11 20h8.5l.116-.007A1 1 0 0 0 19.5 18m0-6.5H11l-.117.007A1 1 0 0 0 11 13.5h8.5l.116-.007A1 1 0 0 0 19.5 11.5m0-6.5H11l-.117.007A1 1 0 0 0 11 7h8.5l.116-.007A1 1 0 0 0 19.5 5M5.15 10.52c-.3-.053-.676.066-.87.26a.75.75 0 0 1-1.06-1.06c.556-.556 1.43-.812 2.192-.677.397.07.805.254 1.115.605.316.358.473.825.473 1.352 0 .62-.271 1.08-.606 1.42-.278.283-.63.511-.906.689l-.08.051a6 6 0 0 0-.481.34H6.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75c0-1.313.984-1.953 1.575-2.337l.06-.04c.318-.205.533-.345.69-.504.134-.136.175-.238.175-.369 0-.223-.061-.318-.098-.36a.42.42 0 0 0-.251-.12M2.97 21.28s.093.084.004.005l.006.005.013.013a1.4 1.4 0 0 0 .15.125c.095.071.227.158.397.243.341.17.83.33 1.46.33.64 0 1.196-.182 1.601-.54.408-.36.61-.858.595-1.36a1.78 1.78 0 0 0-.426-1.1c.259-.306.412-.686.426-1.102a1.73 1.73 0 0 0-.595-1.36C6.196 16.182 5.64 16 5 16c-.63 0-1.119.158-1.46.33a2.6 2.6 0 0 0-.51.334l-.037.033-.013.013-.006.005-.002.003H2.97l-.001.002a.75.75 0 0 0 1.048 1.072l.026-.02a1 1 0 0 1 .166-.101c.159-.08.42-.17.79-.17.36 0 .536.099.608.163a.23.23 0 0 1 .088.187.33.33 0 0 1-.123.23c-.089.078-.263.17-.573.17a.75.75 0 0 0 0 1.5c.31 0 .484.09.573.167.091.08.121.166.123.231a.23.23 0 0 1-.088.188c-.072.063-.247.163-.608.163a1.75 1.75 0 0 1-.79-.17 1 1 0 0 1-.192-.122.75.75 0 0 0-1.048 1.072m.002-4.562c.007-.005.2-.166 0 0"/>`,
  'regular': `<path d="M6 2.75a.75.75 0 0 0-1.434-.307l-.002.003-.011.024-.056.108a4 4 0 0 1-.238.385c-.217.312-.524.662-.906.901a.75.75 0 1 0 .794 1.272q.188-.117.353-.248V7.25a.75.75 0 1 0 1.5 0zm14.5 16a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 .75-.75m0-6.506a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 .75-.75m0-6.494a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 .75-.75M5.15 10.52c-.3-.053-.676.066-.87.26a.75.75 0 0 1-1.06-1.06c.556-.556 1.43-.812 2.192-.677.397.07.805.254 1.115.605.316.358.473.825.473 1.352 0 .62-.271 1.08-.606 1.42-.278.283-.63.511-.906.689l-.08.051a6 6 0 0 0-.481.34H6.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75c0-1.313.984-1.953 1.575-2.337l.06-.04c.318-.205.533-.345.69-.504.134-.136.175-.238.175-.369 0-.223-.061-.318-.098-.36a.42.42 0 0 0-.251-.12M2.97 21.28s.093.084.004.005l.006.005.013.013a1.4 1.4 0 0 0 .15.125c.095.071.227.158.397.243.341.17.83.33 1.46.33.64 0 1.196-.182 1.601-.54.408-.36.61-.858.595-1.36a1.78 1.78 0 0 0-.426-1.1c.259-.306.412-.686.426-1.102a1.73 1.73 0 0 0-.595-1.36C6.196 16.182 5.64 16 5 16c-.63 0-1.119.158-1.46.33a2.6 2.6 0 0 0-.51.334l-.037.033-.013.013-.006.005-.002.003H2.97l-.001.002a.75.75 0 0 0 1.048 1.072l.026-.02a1 1 0 0 1 .166-.101c.159-.08.42-.17.79-.17.36 0 .536.099.608.163a.23.23 0 0 1 .088.187.33.33 0 0 1-.123.23c-.089.078-.263.17-.573.17a.75.75 0 0 0 0 1.5c.31 0 .484.09.573.167.091.08.121.166.123.231a.23.23 0 0 1-.088.188c-.072.063-.247.163-.608.163a1.75 1.75 0 0 1-.79-.17 1 1 0 0 1-.192-.122.75.75 0 0 0-1.048 1.072m.002-4.562c.007-.005.2-.166 0 0"/>`
} as const;

export default function TextNumberListLtrIcon({ 
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

  const gradientId = 'textnumberlistltricon_gradient';
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