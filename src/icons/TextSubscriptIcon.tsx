import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.76 5.65a1 1 0 0 0-1.52-1.3L10 10.462 4.76 4.35a1 1 0 1 0-1.52 1.302L8.684 12l-5.442 6.35a1 1 0 0 0 1.518 1.3L10 13.538l5.07 5.914c.148-.829.52-1.472.942-1.973L11.317 12zm1.976 9.1c-.387 0-.736.365-.736.773a1 1 0 1 1-2 0c0-1.365 1.102-2.773 2.736-2.773.93 0 1.843.435 2.36 1.23.548.842.546 1.918-.052 2.936-.306.522-.722.908-1.105 1.21-.193.152-.39.293-.568.419l-.078.055a17 17 0 0 0-.426.307 4 4 0 0 0-.41.343h1.994a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1c0-1.517.902-2.367 1.664-2.941.161-.121.328-.239.48-.346l.073-.051c.177-.126.335-.24.482-.355.295-.233.494-.438.621-.654.27-.46.177-.714.1-.832-.108-.165-.352-.321-.684-.321"/>`,
  'regular': `<path d="M16.488 4.43a.75.75 0 0 1 .082 1.058L10.988 12l5.032 5.871a3.9 3.9 0 0 0-.682 1.51L10 13.151l-5.43 6.336a.75.75 0 0 1-1.14-.976L9.013 12 3.431 5.488a.75.75 0 0 1 1.139-.976L10 10.848l5.43-6.336a.75.75 0 0 1 1.058-.081m1.262 11.093c0-.528.444-1.023.986-1.023.407 0 .735.19.893.434.136.21.218.566-.093 1.095-.15.255-.376.482-.682.724-.152.12-.316.237-.493.363l-.074.052c-.152.107-.315.222-.472.34-.744.56-1.565 1.346-1.565 2.742 0 .414.336.75.75.75h3.451a.75.75 0 0 0 0-1.5h-2.513c.16-.282.423-.525.779-.793.137-.103.279-.203.432-.312l.078-.054c.178-.127.37-.264.557-.41.372-.295.76-.658 1.045-1.142.557-.948.546-1.921.058-2.672C20.42 13.4 19.59 13 18.736 13c-1.478 0-2.486 1.278-2.486 2.523a.75.75 0 0 0 1.5 0"/>`
} as const;

export default function TextSubscriptIcon({ 
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

  const gradientId = 'textsubscripticon_gradient';
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