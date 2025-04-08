
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4m6.328.17A7.6 7.6 0 0 0 20 9.053v4.006a5 5 0 0 0-.75-.059h-3.5a4.75 4.75 0 0 0-2.257 8.93Q12.766 22 12 22c-4.418 0-8-1.79-8-4V9.053a7.6 7.6 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5s4.63-.482 6.328-1.33M23 17.75A3.75 3.75 0 0 0 19.25 14l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 20l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21.5l.2-.005A3.75 3.75 0 0 0 23 17.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 20l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 17.75"/>`,
  'regular': `<path d="M4 6v12c0 .69.315 1.293.774 1.78.455.482 1.079.883 1.793 1.203C7.996 21.623 9.917 22 12 22q.767 0 1.499-.066a4.8 4.8 0 0 1-1.623-1.434c-1.87-.015-3.527-.362-4.696-.886-.598-.268-1.036-.568-1.315-.864-.275-.29-.365-.543-.365-.75V8.392c.32.22.68.417 1.067.59C7.996 9.623 9.917 10 12 10s4.004-.377 5.433-1.018c.386-.173.746-.37 1.067-.59V13h.75q.383 0 .75.059V6c0-.69-.315-1.293-.774-1.78-.455-.482-1.079-.883-1.793-1.202C16.004 2.377 14.083 2 12 2s-4.004.377-5.433 1.018c-.714.32-1.338.72-1.793 1.202C4.315 4.707 4 5.31 4 6m1.5 0c0-.207.09-.46.365-.75.279-.296.717-.596 1.315-.864C8.375 3.851 10.08 3.5 12 3.5s3.625.35 4.82.886c.598.268 1.036.568 1.315.864.275.29.365.543.365.75s-.09.46-.365.75c-.279.296-.717.596-1.315.864-1.195.535-2.899.886-4.82.886s-3.625-.35-4.82-.886c-.598-.268-1.036-.568-1.315-.864C5.59 6.46 5.5 6.207 5.5 6M23 17.75A3.75 3.75 0 0 0 19.25 14l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 20l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V21.5l.2-.005A3.75 3.75 0 0 0 23 17.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 20l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 17.75"/>`
} as const;

export default function DatabaseLinkIcon({ 
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

  const gradientId = 'databaselinkicon_gradient';
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