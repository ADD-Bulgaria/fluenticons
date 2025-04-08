import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m21.945 14.472.021.062.023.1.01.1v6.516a.75.75 0 0 1-.65.743l-.1.007H2.75a.75.75 0 0 1-.743-.648L2 21.25v-6.5l.002-.052.01-.086a1 1 0 0 1 .047-.153l2.76-6.019a.75.75 0 0 1 .573-.43l.108-.007 2.54-.001-.79 1.37-.067.13H5.98L3.918 14H20.07l-2.027-4.346.862-1.497q.101.076.172.184l.053.095zm-8.58-12.416.092.045 5.188 3.003c.328.19.458.591.319.933l-.045.092L16.112 11h1.138a.75.75 0 0 1 .102 1.494l-.102.007-2.002-.001v.003h-4.079l-.003-.003H6.75a.75.75 0 0 1-.102-1.492l.102-.007L8.573 11l-.182-.105a.75.75 0 0 1-.318-.933l.044-.092 4.317-7.496c.19-.329.59-.46.931-.32m-.01 1.72L9.789 9.97 11.567 11h2.817l2.865-4.973z"/>`,
  'regular': `<path d="M20.498 15.5H3.5v5h16.998zm1.447-1.028.021.062.023.1.01.1v6.516a.75.75 0 0 1-.65.743l-.1.007H2.75a.75.75 0 0 1-.743-.648L2 21.25v-6.5l.002-.052.01-.086a1 1 0 0 1 .047-.153l2.76-6.019a.75.75 0 0 1 .573-.43l.108-.007 2.54-.001-.79 1.37-.067.13H5.98L3.918 14H20.07l-2.027-4.346.862-1.497q.101.076.172.184l.053.095zm-8.58-12.416.092.045 5.188 3.003c.328.19.458.591.319.933l-.045.092L16.112 11h1.138a.75.75 0 0 1 .102 1.494l-.102.007-2.002-.001v.003h-4.079l-.003-.003H6.75a.75.75 0 0 1-.102-1.492l.102-.007L8.573 11l-.182-.105a.75.75 0 0 1-.318-.933l.044-.092 4.317-7.496c.19-.329.59-.46.931-.32m-.01 1.72L9.789 9.97 11.567 11h2.817l2.865-4.973z"/>`
} as const;

export default function VoteIcon({ 
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

  const gradientId = 'voteicon_gradient';
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