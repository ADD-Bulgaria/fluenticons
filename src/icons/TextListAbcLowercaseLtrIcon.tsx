import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.622 3.75c-.501 0-.755.145-.83.234a.75.75 0 1 1-1.146-.968c.489-.578 1.28-.766 1.976-.766.582 0 1.141.162 1.576.463.431.299.799.786.799 1.412v.056L7 4.25v3a.75.75 0 0 1-1.33.474C5.33 7.901 4.943 8 4.535 8h-.161a1.875 1.875 0 0 1 0-3.75h1.122v-.125c0-.004 0-.018-.018-.047a.5.5 0 0 0-.135-.132 1.3 1.3 0 0 0-.722-.196m-.247 2a.375.375 0 1 0 0 .75h.16c.46 0 .844-.32.941-.75zM9 6a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m0 6.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M9 19a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M3.75 9a.75.75 0 0 1 .75.75v.642c.281-.097.579-.142.875-.142a2.375 2.375 0 1 1 0 4.75c-.372 0-.747-.07-1.087-.227A.75.75 0 0 1 3 14.25v-4.5A.75.75 0 0 1 3.75 9m.75 3.625c0 .364.116.559.234.667.128.118.339.208.641.208a.875.875 0 0 0 0-1.75c-.302 0-.513.09-.641.208-.118.108-.234.303-.234.667M4 19.25c0-.406.122-.71.302-.906.17-.186.459-.344.948-.344.452 0 .73.136.902.299a.75.75 0 0 0 1.03-1.09c-.49-.464-1.156-.709-1.932-.709-.844 0-1.556.29-2.052.828-.486.528-.698 1.223-.698 1.922s.212 1.394.698 1.922c.496.539 1.208.828 2.052.828.776 0 1.442-.245 1.933-.709a.75.75 0 0 0-1.03-1.09c-.173.163-.451.299-.903.299-.49 0-.777-.158-.948-.344-.18-.195-.302-.5-.302-.906"/>`,
  'regular': `<path d="M4.622 3.75c-.501 0-.755.145-.83.234a.75.75 0 1 1-1.146-.968c.489-.578 1.28-.766 1.976-.766.582 0 1.141.162 1.576.463.431.299.799.786.799 1.412v.056L7 4.25v3a.75.75 0 0 1-1.33.474C5.33 7.901 4.943 8 4.535 8h-.161a1.875 1.875 0 0 1 0-3.75h1.122v-.125c0-.004 0-.018-.018-.047a.5.5 0 0 0-.135-.132 1.3 1.3 0 0 0-.722-.196m-.247 2a.375.375 0 1 0 0 .75h.16c.46 0 .844-.32.941-.75zM9 5.75A.75.75 0 0 1 9.75 5h9.5a.75.75 0 0 1 0 1.5h-9.5A.75.75 0 0 1 9 5.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75m0 6.5a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75M3.75 9a.75.75 0 0 1 .75.75v.642c.281-.097.579-.142.875-.142a2.375 2.375 0 1 1 0 4.75c-.372 0-.747-.07-1.087-.227A.75.75 0 0 1 3 14.25v-4.5A.75.75 0 0 1 3.75 9m.75 3.625c0 .364.116.559.234.667.128.118.339.208.641.208a.875.875 0 0 0 0-1.75c-.302 0-.513.09-.641.208-.118.108-.234.303-.234.667M4 19.25c0-.406.122-.71.302-.906.17-.186.459-.344.948-.344.452 0 .73.136.902.299a.75.75 0 0 0 1.03-1.09c-.49-.464-1.156-.709-1.932-.709-.844 0-1.556.29-2.052.828-.486.528-.698 1.223-.698 1.922s.212 1.394.698 1.922c.496.539 1.208.828 2.052.828.776 0 1.442-.245 1.933-.709a.75.75 0 0 0-1.03-1.09c-.173.163-.451.299-.903.299-.49 0-.777-.158-.948-.344-.18-.195-.302-.5-.302-.906"/>`
} as const;

export default function TextListAbcLowercaseLtrIcon({ 
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

  const gradientId = 'textlistabclowercaseltricon_gradient';
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