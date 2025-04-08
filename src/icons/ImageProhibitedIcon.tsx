import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1.5a4 4 0 0 1-2.248-.691l5.557-5.557A4 4 0 0 1 6.5 10.5M3.191 8.748a4 4 0 0 1 5.557-5.557zm13.313-.496a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0M6.5 13a6.5 6.5 0 0 0 5.478-10h5.772A3.25 3.25 0 0 1 21 6.25v11.5c0 .627-.178 1.213-.485 1.71l-6.939-6.812-.128-.117a2.25 2.25 0 0 0-2.889-.006l-.135.123-6.939 6.811A3.24 3.24 0 0 1 3 17.75v-5.772A6.47 6.47 0 0 0 6.5 13m7-4.748a2.252 2.252 0 1 0 4.504 0 2.252 2.252 0 0 0-4.504 0m-1.942 5.395-.083.07-6.928 6.802A3.24 3.24 0 0 0 6.25 21h11.5c.625 0 1.208-.176 1.703-.481l-6.928-6.801-.093-.078a.75.75 0 0 0-.874.007"/>`,
  'regular': `<path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1.5a4 4 0 0 1-2.248-.691l5.557-5.557A4 4 0 0 1 6.5 10.5M3.191 8.748a4 4 0 0 1 5.557-5.557zM4.5 12.687a6.5 6.5 0 0 1-1.5-.709v5.772A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-5.772c.297.463.536.967.709 1.5h5.063c.966 0 1.75.784 1.75 1.75v11.5q-.002.315-.104.595l-5.822-5.702-.128-.116a2.25 2.25 0 0 0-3.02.116l-5.823 5.7a1.8 1.8 0 0 1-.103-.593zm8.025 1.028L18.33 19.4a1.8 1.8 0 0 1-.581.099H6.25q-.308-.002-.582-.099l5.807-5.686.084-.071a.75.75 0 0 1 .966.07m4.98-4.963a2.252 2.252 0 1 0-4.505 0 2.252 2.252 0 0 0 4.504 0m-3.005 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0"/>`
} as const;

export default function ImageProhibitedIcon({ 
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

  const gradientId = 'imageprohibitedicon_gradient';
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