import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.001 7.5a4.5 4.5 0 0 1 4.5-4.5h15a4.5 4.5 0 0 1 4.5 4.5v10a4.5 4.5 0 0 1-4.5 4.5h-6.309c-.6-1.316-1.876-2.17-3.192-2.422V18a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.5a2.5 2.5 0 0 0 1.001-2v-10a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v.314a6.5 6.5 0 0 0-2 1.062zm9.19 13.5a3 3 0 0 1 2.224 1h-.001a2.55 2.55 0 0 1 .627 1.873c-.135 2.074-.918 3.68-2.403 4.728C14.205 29.612 12.26 30 9.999 30c-2.248 0-4.156-.384-5.566-1.386-1.458-1.037-2.228-2.619-2.417-4.65C1.853 22.218 3.35 21 4.872 21zm6.309-7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M15 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>`,
  'regular': `<path d="M6.001 7.5a4.5 4.5 0 0 1 4.5-4.5h15a4.5 4.5 0 0 1 4.5 4.5v10a4.5 4.5 0 0 1-4.5 4.5h-6.309c-.6-1.316-1.876-2.17-3.192-2.422V18a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v1.5a2.5 2.5 0 0 0 1.001-2v-10a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v.314a6.5 6.5 0 0 0-2 1.062zM24 17h-5a1 1 0 0 0-1 1v2h7v-2a1 1 0 0 0-1-1m-6.585 5a2.55 2.55 0 0 1 .627 1.873c-.135 2.074-.918 3.68-2.403 4.728C14.206 29.612 12.262 30 10 30c-2.248 0-4.156-.384-5.566-1.386-1.458-1.037-2.228-2.619-2.417-4.65C1.854 22.218 3.35 21 4.872 21h10.319q.156 0 .313.017c.729.08 1.43.43 1.91.983M4.873 23c-.585 0-.897.43-.865.78.15 1.603.713 2.584 1.584 3.204C6.511 27.637 7.927 28 10 28c2.086 0 3.543-.368 4.486-1.033.89-.628 1.455-1.617 1.56-3.223.022-.333-.283-.744-.855-.744zM25 10.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 14a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-2 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0"/>`
} as const;

export default function VideoPeopleIcon({ 
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

  const gradientId = 'videopeopleicon_gradient';
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