
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.444 4.952a.5.5 0 0 0-.728-.163l-.385.275a1 1 0 0 1-1.162-1.627l.385-.276a2.5 2.5 0 0 1 3.636.817l.508.91 1.595-1.595a1 1 0 1 1 1.414 1.414L18.71 6.704l.793 1.42a.5.5 0 0 0 .751.145l.365-.295a1 1 0 0 1 1.26 1.553l-.364.295a2.5 2.5 0 0 1-3.759-.723l-.516-.925-1.534 1.533a1 1 0 1 1-1.414-1.414l1.935-1.935zm-7.048 9.186c-1.416.276-3.002.345-4.53.36-.273 1.11-.16 1.897.097 2.429.302.623.885 1.064 1.708 1.27 1.7.423 4.174-.25 5.827-2.134a1 1 0 1 1 1.504 1.318c-2.098 2.393-5.32 3.378-7.815 2.756-1.274-.318-2.412-1.076-3.023-2.338-.607-1.253-.612-2.828.01-4.626.84-2.423 2.118-3.941 3.407-4.886a8.2 8.2 0 0 1 3.218-1.416c1.626-.333 3.085.124 3.9 1.194.828 1.088.8 2.567-.092 3.787-.98 1.338-2.58 1.968-4.211 2.286M9.2 8.83A6.2 6.2 0 0 0 6.764 9.9c-.721.529-1.491 1.333-2.13 2.584 1.207-.03 2.36-.11 3.379-.31 1.455-.283 2.446-.773 2.98-1.503.43-.589.346-1.09.115-1.394-.245-.32-.848-.664-1.908-.447"/>`,
  'regular': `<path d="M15.662 4.83a.75.75 0 0 0-1.091-.245l-.385.276a.75.75 0 1 1-.872-1.221l.385-.275a2.25 2.25 0 0 1 3.273.735l.669 1.199L19.72 3.22a.75.75 0 1 1 1.06 1.06L18.4 6.66l.885 1.587a.75.75 0 0 0 1.128.217l.364-.296a.75.75 0 0 1 .945 1.165l-.364.295a2.25 2.25 0 0 1-3.383-.65l-.677-1.215L15.28 9.78a.75.75 0 1 1-1.06-1.061L16.538 6.4zm-7.314 9.063c-1.452.283-3.093.346-4.676.356-.343 1.249-.238 2.158.066 2.787.341.703.993 1.184 1.873 1.403 1.798.449 4.367-.263 6.075-2.212a.75.75 0 1 1 1.128.989c-2.042 2.33-5.171 3.276-7.566 2.678-1.218-.303-2.286-1.021-2.86-2.204-.569-1.175-.586-2.678.023-4.435.823-2.377 2.071-3.852 3.318-4.766a7.9 7.9 0 0 1 3.12-1.373c1.555-.319 2.907.125 3.65 1.101.755.99.741 2.347-.094 3.488-.924 1.262-2.448 1.874-4.057 2.188m.802-5.308a6.4 6.4 0 0 0-2.534 1.113c-.824.604-1.697 1.546-2.386 3.044 1.362-.021 2.677-.097 3.83-.322 1.478-.288 2.544-.796 3.135-1.601.488-.668.418-1.291.112-1.693-.316-.415-1.026-.772-2.157-.54"/>`
} as const;

export default function MathFormatProfessionalIcon({ 
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

  const gradientId = 'mathformatprofessionalicon_gradient';
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