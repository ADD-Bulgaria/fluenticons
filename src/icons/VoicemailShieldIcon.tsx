import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-2q0 .192.035.373a13.4 13.4 0 0 0 3.711-1.35A2 2 0 0 0 19 16m-2 0q.002.537.135 1.033a2 2 0 0 0-.635 1.46v4.025c0 1.957.509 3.74 1.548 5.292l.13.19H5.25A3.25 3.25 0 0 1 2 24.75V7.25A3.25 3.25 0 0 1 5.25 4h21.5A3.25 3.25 0 0 1 30 7.25v8.889q-.269-.076-.533-.162a13.8 13.8 0 0 1-3.359-1.642 2 2 0 0 0-1.607-.272A4 4 0 0 0 21 12H11a4 4 0 1 0 3.465 2h3.07A4 4 0 0 0 17 16m14.57 2a15 15 0 0 1-2.57-.598 15.3 15.3 0 0 1-3.723-1.818.5.5 0 0 0-.554 0A15.1 15.1 0 0 1 18.429 18a.5.5 0 0 0-.429.494v4.024q.002 2.529 1.295 4.457a8.7 8.7 0 0 0 1.878 1.996q1.484 1.165 3.648 1.996a.5.5 0 0 0 .358 0C29.694 29.235 32 26.4 32 22.518v-4.024a.5.5 0 0 0-.43-.494"/>`,
  'regular': `<path d="M15 16a4 4 0 1 1-4-4h10c1.506 0 2.819.833 3.5 2.063a2 2 0 0 0-.608.272q-.564.375-1.146.689a2 2 0 0 0-3.711 1.35q-.405.081-.817.14c-.419.06-.792.247-1.083.519a4 4 0 0 1 .4-3.033h-3.07c.34.588.535 1.271.535 2m-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M28 7.25v8.148a13.4 13.4 0 0 0 2 .741V7.25A3.25 3.25 0 0 0 26.75 4H5.25A3.25 3.25 0 0 0 2 7.25v17.5A3.25 3.25 0 0 0 5.25 28h12.929l-.13-.19a9 9 0 0 1-.936-1.81H5.25C4.56 26 4 25.44 4 24.75V7.25C4 6.56 4.56 6 5.25 6h21.5c.69 0 1.25.56 1.25 1.25M31.57 18a15 15 0 0 1-2.57-.598 15.3 15.3 0 0 1-3.723-1.818.5.5 0 0 0-.554 0A15.1 15.1 0 0 1 18.429 18a.5.5 0 0 0-.429.494v4.024q.002 2.529 1.295 4.457a8.7 8.7 0 0 0 1.878 1.996q1.484 1.165 3.648 1.996a.5.5 0 0 0 .358 0C29.694 29.235 32 26.4 32 22.518v-4.024a.5.5 0 0 0-.43-.494"/>`
} as const;

export default function VoicemailShieldIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'voicemailshieldicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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