
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.75A2.75 2.75 0 0 1 6.75 3h5.5A2.75 2.75 0 0 1 15 5.75v6.5A2.75 2.75 0 0 1 12.25 15h-5.5A2.75 2.75 0 0 1 4 12.25zm.194 9.245a6.4 6.4 0 0 0-1.091.479C2.603 15.762 2 16.25 2 17s.603 1.238 1.103 1.526c.556.32 1.311.583 2.179.794 1.734.421 4.085.676 6.657.68l-.716.717a.75.75 0 0 0 1.06 1.06l1.997-1.997a.75.75 0 0 0 0-1.06l-1.996-2a.75.75 0 1 0-1.062 1.06l.72.72c-2.49-.004-4.717-.252-6.305-.638-.807-.196-1.406-.418-1.786-.636A1.4 1.4 0 0 1 3.538 17c.046-.048.137-.125.313-.226.38-.218.98-.44 1.786-.636q.343-.084.723-.158a3.74 3.74 0 0 1-2.166-.985m9.829.56c1.688.094 3.184.301 4.34.583.807.196 1.406.418 1.786.636.175.101.266.178.313.226l-.015.014c-.102.097-.291.225-.6.365-.615.279-1.543.536-2.722.734a.75.75 0 1 0 .249 1.48c1.238-.209 2.31-.493 3.092-.848.389-.176.746-.387 1.017-.646.272-.26.517-.63.517-1.099 0-.75-.603-1.238-1.103-1.526-.556-.32-1.311-.583-2.179-.794-.925-.225-2.025-.402-3.241-.52a3.77 3.77 0 0 1-1.454 1.395m6.486 1.387.002-.003zM20 5.246a.75.75 0 0 0-1.218-.586l-2.783 2.226v4.225l2.783 2.221A.75.75 0 0 0 20 12.746z"/>`,
  'regular': `<path d="M4 5.75A2.75 2.75 0 0 1 6.75 3h6.5A2.75 2.75 0 0 1 16 5.75v.541l1.99-1.522c.823-.63 2.01-.043 2.01.993v6.476c0 1.036-1.187 1.622-2.01.993L16 11.71v.541A2.75 2.75 0 0 1 13.25 15h-6.5A2.75 2.75 0 0 1 4 12.25zM6.75 4.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25zM16 9.82l2.5 1.912V6.268L16 8.179zm2.363 6.318c-.95-.232-2.13-.413-3.458-.522a3.77 3.77 0 0 0 1.508-1.35c.847.109 1.624.249 2.305.414.868.211 1.623.474 2.179.794.5.288 1.103.776 1.103 1.526 0 .47-.245.839-.517 1.099-.271.259-.628.47-1.017.646-.782.355-1.854.64-3.092.848a.75.75 0 0 1-.249-1.48c1.179-.198 2.107-.455 2.721-.734.31-.14.5-.268.6-.365l.01-.008.006-.006a1.4 1.4 0 0 0-.313-.226c-.38-.218-.98-.44-1.786-.636m2.146.804.002-.003zM3.103 15.474a6.4 6.4 0 0 1 1.091-.48c.58.541 1.333.9 2.166.986q-.38.075-.723.158c-.807.196-1.406.418-1.786.636a1.4 1.4 0 0 0-.313.226c.046.048.137.125.313.226.38.218.98.44 1.786.636 1.588.387 3.815.634 6.304.638l-.719-.72a.75.75 0 1 1 1.062-1.06l1.997 2a.75.75 0 0 1 0 1.06l-1.998 1.997a.75.75 0 0 1-1.06-1.06l.716-.717c-2.572-.004-4.923-.259-6.657-.68-.868-.211-1.623-.474-2.179-.794C2.603 18.238 2 17.75 2 17s.603-1.238 1.103-1.526"/>`
} as const;

export default function VideoSwitchIcon({ 
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

  const gradientId = 'videoswitchicon_gradient';
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