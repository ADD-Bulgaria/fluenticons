import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.6a5.5 5.5 0 0 0-1-.393V7H4v7a2 2 0 0 0 2 2h3.207q.149.524.393 1H6a3 3 0 0 1-3-3zm8.337 4a5.47 5.47 0 0 1 2.748-.985A.6.6 0 0 0 13.95 9h-4.4a.56.56 0 0 0-.506.306.46.46 0 0 0 .119.542v.004A.56.56 0 0 0 9.55 10zm-5.759-.89a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.4.84.84 0 0 0 .211.31q.142.135.32.212a1 1 0 0 0 .391.078.8.8 0 0 0 .391-.078 1.1 1.1 0 0 0 .32-.22A.97.97 0 0 0 7.5 9.5a1 1 0 0 0-.078-.39.9.9 0 0 0-.219-.32 1.1 1.1 0 0 0-.32-.211A1 1 0 0 0 6.5 8.5a.86.86 0 0 0-.391.08 1 1 0 0 0-.531.529M5.5 13.5a.97.97 0 0 1 .289-.703 1.1 1.1 0 0 1 .32-.218.84.84 0 0 1 .391-.08.9.9 0 0 1 .383.08q.178.076.32.21c.095.09.17.2.219.32a1.006 1.006 0 0 1-.531 1.313.8.8 0 0 1-.391.078 1 1 0 0 1-.391-.078 1.1 1.1 0 0 1-.32-.211.84.84 0 0 1-.211-.312 1.2 1.2 0 0 1-.078-.4M17 18.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`,
  'regular': `<path d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3.6a5.5 5.5 0 0 1-.393-1H6a2 2 0 0 1-2-2V7h12v2.207q.524.149 1 .393V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm10.085 3.015A.6.6 0 0 0 13.95 9h-4.4a.56.56 0 0 0-.505.306.46.46 0 0 0 .118.542v.004A.56.56 0 0 0 9.55 10h1.787a5.47 5.47 0 0 1 2.748-.985m-8.507.095a1 1 0 0 0-.078.39 1.2 1.2 0 0 0 .078.4.84.84 0 0 0 .211.31q.142.135.32.212a1 1 0 0 0 .391.078.8.8 0 0 0 .391-.078 1.1 1.1 0 0 0 .32-.22A.97.97 0 0 0 7.5 9.5a1 1 0 0 0-.078-.39.9.9 0 0 0-.219-.32 1.1 1.1 0 0 0-.32-.211A1 1 0 0 0 6.5 8.5a.86.86 0 0 0-.391.08 1 1 0 0 0-.531.529M5.5 13.5a.97.97 0 0 1 .289-.703 1.1 1.1 0 0 1 .32-.218.84.84 0 0 1 .391-.08.9.9 0 0 1 .383.08q.178.076.32.21c.095.09.17.2.219.32a1.006 1.006 0 0 1-.531 1.313.8.8 0 0 1-.391.078 1 1 0 0 1-.391-.078 1.1 1.1 0 0 1-.32-.211.84.84 0 0 1-.211-.312 1.2 1.2 0 0 1-.078-.4M17 18.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`
} as const;

export default function WindowBulletListAddIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'windowbulletlistaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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