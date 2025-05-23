import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.685 2.445a.75.75 0 0 0-1.37 0l-1.55 3.486-.013.03-.437.984a.75.75 0 1 0 1.37.61L3.932 7h2.136l.247.555a.75.75 0 1 0 1.37-.61l-.437-.984-.014-.03zM5 4.597l.401.903H4.6zM10 5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm0 6.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm0 6.5a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zM3.75 9h1.625a1.875 1.875 0 0 1 1.61 2.835A1.875 1.875 0 0 1 5.626 15H3.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 3.75 9m.75 1.5v.75h.875a.375.375 0 0 0 0-.75zm0 2.25v.75h1.125a.375.375 0 0 0 0-.75zm-.17 5.134c-.196.24-.33.62-.33 1.116s.134.876.33 1.116c.18.22.461.384.92.384.457 0 .738-.164.92-.386.16-.195.372-.364.625-.364h.142c.513 0 .907.481.656.929a2.7 2.7 0 0 1-.262.385c-.486.594-1.205.936-2.081.936s-1.594-.34-2.08-.934c-.47-.574-.67-1.32-.67-2.066s.2-1.492.67-2.066C3.656 16.34 4.375 16 5.25 16c.876 0 1.595.342 2.08.936q.15.183.263.385c.251.448-.143.929-.656.929h-.142c-.253 0-.466-.169-.626-.364-.18-.222-.462-.386-.919-.386-.459 0-.74.164-.92.384"/>`,
  'regular': `<path d="M5.685 2.445a.75.75 0 0 0-1.37 0l-1.55 3.486-.013.03-.437.984a.75.75 0 1 0 1.37.61L3.932 7h2.136l.247.555a.75.75 0 1 0 1.37-.61l-.437-.984-.014-.03zM5 4.597l.401.903H4.6zM9.75 5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm-6-9h1.625a1.875 1.875 0 0 1 1.61 2.835A1.875 1.875 0 0 1 5.626 15H3.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 3.75 9m.75 1.5v.75h.875a.375.375 0 0 0 0-.75zm0 2.25v.75h1.125a.375.375 0 0 0 0-.75zm-.17 5.134c-.196.24-.33.62-.33 1.116s.134.876.33 1.116c.18.22.461.384.92.384.457 0 .738-.164.92-.386.16-.195.372-.364.625-.364h.142c.513 0 .907.481.656.929a2.7 2.7 0 0 1-.262.385c-.486.594-1.205.936-2.081.936s-1.594-.34-2.08-.934c-.47-.574-.67-1.32-.67-2.066s.2-1.492.67-2.066C3.656 16.34 4.375 16 5.25 16c.876 0 1.595.342 2.08.936q.15.183.263.385c.251.448-.143.929-.656.929h-.142c-.253 0-.466-.169-.626-.364-.18-.222-.462-.386-.919-.386-.459 0-.74.164-.92.384"/>`
} as const;

export default function TextListAbcUppercaseLtrIcon({ 
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

  const gradientId = 'textlistabcuppercaseltricon_gradient';
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