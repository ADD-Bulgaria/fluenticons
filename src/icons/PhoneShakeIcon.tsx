
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.338 4.07a2.25 2.25 0 0 1 2.757 1.59l2.758 10.29a2.25 2.25 0 0 1-1.592 2.756l-4.595 1.23a2.25 2.25 0 0 1-2.755-1.592L6.156 8.058a2.25 2.25 0 0 1 1.59-2.755zm2.35 11.21a.75.75 0 0 0-.918-.531l-1.932.518-.096.033a.75.75 0 0 0 .484 1.415l1.932-.517.097-.033a.75.75 0 0 0 .434-.886m3.989-12.887a.75.75 0 0 1 1.018-.3c.319.175.754.51 1.183 1.031.432.525.765 1.144.956 1.86A4.9 4.9 0 0 1 21.72 7.9a4 4 0 0 1-.307.68.75.75 0 0 1-1.328-.69l.047-.09a3.4 3.4 0 0 0 .255-2.429 3.4 3.4 0 0 0-.665-1.294c-.295-.357-.582-.579-.745-.668a.75.75 0 0 1-.3-1.017m-1.178 2.05a.75.75 0 0 1 1.051-.141 2.6 2.6 0 0 1 .478.491c.188.249.334.525.416.831.117.437.093.872-.013 1.284l-.052.177a2 2 0 0 1-.048.131.75.75 0 0 1-1.417-.483l.05-.148q.008-.021.014-.05c.047-.183.058-.371.017-.523a.9.9 0 0 0-.163-.313 1.4 1.4 0 0 0-.158-.176l-.033-.028a.75.75 0 0 1-.142-1.051M2.538 15.412a.75.75 0 0 1 1.344.659l-.095.193a3.54 3.54 0 0 0-.168 2.335c.134.5.363.935.661 1.309.258.322.51.539.68.652l.067.042a.75.75 0 1 1-.75 1.299c-.315-.182-.745-.527-1.168-1.057a5 5 0 0 1-.939-1.857 5 5 0 0 1 .085-2.914c.1-.3.204-.524.283-.66m2.135 1.346a.75.75 0 0 1 1.418.477l-.049.148-.013.05a1.1 1.1 0 0 0-.016.524q.043.156.163.316c.06.079.118.14.158.178l.033.028a.75.75 0 0 1-.915 1.188 2.6 2.6 0 0 1-.475-.493 2.4 2.4 0 0 1-.413-.828 2.5 2.5 0 0 1 .01-1.282l.052-.176a2 2 0 0 1 .047-.13"/>`,
  'regular': `<path d="M18.677 2.393a.75.75 0 0 1 1.018-.3c.319.175.754.51 1.183 1.031.432.525.765 1.144.956 1.86A4.9 4.9 0 0 1 21.72 7.9a3.7 3.7 0 0 1-.307.68.75.75 0 0 1-1.328-.69l.047-.09a3.4 3.4 0 0 0 .255-2.429 3.4 3.4 0 0 0-.666-1.294c-.294-.357-.581-.579-.744-.668a.75.75 0 0 1-.3-1.017m-3.988 12.886a.75.75 0 0 0-.919-.53l-1.932.518-.096.032a.75.75 0 0 0 .484 1.416l1.932-.517.097-.033a.75.75 0 0 0 .434-.886m.406-9.618a2.25 2.25 0 0 0-2.757-1.59L7.746 5.302a2.25 2.25 0 0 0-1.59 2.755l2.755 10.286a2.25 2.25 0 0 0 2.755 1.592l4.595-1.23a2.25 2.25 0 0 0 1.592-2.756zm-2.368-.142a.75.75 0 0 1 .92.53l2.757 10.29a.75.75 0 0 1-.53.918l-4.596 1.23a.75.75 0 0 1-.919-.53L7.605 7.67a.75.75 0 0 1 .53-.918zm5.823-1.217a.75.75 0 1 0-.909 1.193l.033.028c.04.037.099.098.158.176a.9.9 0 0 1 .163.313 1.07 1.07 0 0 1-.03.573l-.05.148a.75.75 0 0 0 1.416.483 2 2 0 0 0 .048-.13l.052-.178c.106-.412.13-.847.013-1.284a2.4 2.4 0 0 0-.416-.83 2.6 2.6 0 0 0-.478-.492M2.538 15.412a.75.75 0 0 1 1.344.658l-.095.193a3.54 3.54 0 0 0-.168 2.335c.134.5.363.935.661 1.309.258.322.51.539.68.652l.067.042a.75.75 0 1 1-.75 1.299c-.315-.182-.745-.527-1.168-1.057a5 5 0 0 1-.939-1.857 5 5 0 0 1 .085-2.914c.1-.3.204-.524.283-.66m3.115.939a.75.75 0 0 0-.98.406q-.021.052-.047.13l-.051.176c-.104.41-.128.846-.01 1.282.08.304.225.58.412.828.17.227.342.391.475.493a.75.75 0 0 0 .915-1.188l-.033-.029a1.4 1.4 0 0 1-.158-.177 1 1 0 0 1-.163-.316 1.1 1.1 0 0 1 .03-.574l.048-.148a.75.75 0 0 0-.438-.883"/>`
} as const;

export default function PhoneShakeIcon({ 
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

  const gradientId = 'phoneshakeicon_gradient';
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