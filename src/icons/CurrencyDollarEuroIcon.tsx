
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 2a1 1 0 0 0-1 1v.112A4.5 4.5 0 0 0 2 7.5v.384a4.88 4.88 0 0 0 2.796 4.415l.704.332v6.14A2.5 2.5 0 0 1 4 16.48v-.845a1 1 0 1 0-2 0v.845a4.5 4.5 0 0 0 3.5 4.389v.124a1 1 0 0 0 2 0v-.124A4.5 4.5 0 0 0 11 16.48v-.372A4.88 4.88 0 0 0 8.209 11.7l-.709-.335V5.208A2.5 2.5 0 0 1 9 7.5v.865a1 1 0 1 0 2 0V7.5a4.5 4.5 0 0 0-3.5-4.388V3a1 1 0 0 0-1-1M4 7.5a2.5 2.5 0 0 1 1.5-2.292v5.206A2.88 2.88 0 0 1 4 7.884zm3.5 11.271v-5.189c.92.501 1.5 1.468 1.5 2.525v.372a2.5 2.5 0 0 1-1.5 2.292M15 12q0-.498.043-.975H16a1 1 0 0 0 0-2h-.577a7.9 7.9 0 0 1 .979-2.125c.85-1.268 1.916-1.9 2.962-1.9.378 0 .785.117 1.067.31a1 1 0 1 0 1.13-1.65C20.904 3.21 20.09 3 19.364 3c-1.917 0-3.533 1.159-4.623 2.786-.619.923-1.094 2.025-1.39 3.239H12a1 1 0 1 0 0 2h1.036Q13 11.505 13 12v.027h-1a1 1 0 1 0 0 2h1.16c.255 1.588.804 3.03 1.58 4.187C15.833 19.84 17.448 21 19.365 21c.697 0 1.535-.174 2.222-.67a1 1 0 0 0-1.172-1.621c-.254.183-.644.291-1.05.291-1.046 0-2.112-.632-2.962-1.9-.553-.824-.98-1.876-1.212-3.075H16a1 1 0 0 0 0-2h-1z"/>`,
  'regular': `<path d="M6.252 2.002a.75.75 0 0 0-.75.75v.313A4.25 4.25 0 0 0 2 7.25v.541a4.75 4.75 0 0 0 2.668 4.27l.834.406v6.908A2.75 2.75 0 0 1 3.5 16.728v-.98a.75.75 0 0 0-1.5 0v.98a4.25 4.25 0 0 0 3.502 4.185v.334a.75.75 0 0 0 1.5 0v-.335a4.25 4.25 0 0 0 3.498-4.184v-.524a4.75 4.75 0 0 0-2.668-4.27l-.83-.404V4.604A2.75 2.75 0 0 1 9 7.25v1a.75.75 0 1 0 1.5 0v-1a4.25 4.25 0 0 0-3.498-4.184v-.314a.75.75 0 0 0-.75-.75M3.5 7.25c0-1.26.847-2.322 2.002-2.648v6.196l-.176-.086A3.25 3.25 0 0 1 3.5 7.792zm3.502 12.124v-6.175l.172.084A3.25 3.25 0 0 1 9 16.203v.525a2.75 2.75 0 0 1-1.998 2.646M14.5 12q0-.254.011-.501h1.737a.75.75 0 1 0 .001-1.5h-1.567c.247-1.323.73-2.49 1.367-3.404C16.994 5.24 18.226 4.5 19.5 4.5c.467 0 .973.136 1.337.376a.75.75 0 0 0 .826-1.253C21.019 3.2 20.216 3 19.5 3c-1.901 0-3.544 1.106-4.681 2.737-.815 1.169-1.395 2.637-1.66 4.26h-1.408a.75.75 0 1 0-.001 1.5h1.26a13 13 0 0 0 0 1.003h-1.26a.75.75 0 0 0 0 1.5h1.41c.264 1.624.844 3.093 1.659 4.262C15.956 19.892 17.599 21 19.5 21c.695 0 1.517-.169 2.182-.63a.75.75 0 0 0-.856-1.232c-.343.238-.838.361-1.326.361-1.274 0-2.506-.74-3.45-2.095-.638-.914-1.121-2.081-1.368-3.404h1.567a.75.75 0 1 0 0-1.5H14.51a11 11 0 0 1-.011-.5"/>`
} as const;

export default function CurrencyDollarEuroIcon({ 
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

  const gradientId = 'currencydollareuroicon_gradient';
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