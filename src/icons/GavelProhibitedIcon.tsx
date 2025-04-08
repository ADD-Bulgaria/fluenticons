import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.666 7.59a1.5 1.5 0 0 1-.226-2.307l2.841-2.841a1.5 1.5 0 0 1 2.278.184l.473.656-4.733 4.732zm1.48.992 4.478-4.477 1.322 1.836a.5.5 0 0 0 .113.113l1.837 1.323-1.628 1.628a5.48 5.48 0 0 0-3.673 1.621l-.434-.649a.5.5 0 0 0-.137-.137zm7.435.524a5.5 5.5 0 0 1 2.323 1.074 1.5 1.5 0 0 0-.53-1.738l-.656-.473zm-6.277 3.588q.236-.677.629-1.26l-.548-.818-1.196-.801-5.775 5.775a1.412 1.412 0 1 0 1.997 1.996zM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 11 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18"/>`,
  'regular': `<path d="M6.44 5.283a1.5 1.5 0 0 0 .225 2.307l1.766 1.183-5.853 5.853a1.976 1.976 0 1 0 2.795 2.795l3.679-3.678a5.46 5.46 0 0 1 .855-2.27l-5.241 5.241a.977.977 0 0 1-1.381-1.38L9.278 9.34l.744.499a.5.5 0 0 1 .137.137l.436.65a5.5 5.5 0 0 1 .77-.647l-.375-.56a1.5 1.5 0 0 0-.411-.41L8.866 7.86l3.04-3.04 1.227 1.704q.144.198.34.34l1.705 1.229-.91.91a5.6 5.6 0 0 1 1.312.102l.42-.42.788.567c.118.085.187.21.204.342q.486.248.911.584a1.5 1.5 0 0 0-.53-1.737l-3.315-2.388a.5.5 0 0 1-.113-.113l-2.387-3.315a1.5 1.5 0 0 0-2.278-.184zm.782 1.476a.5.5 0 0 1-.076-.769l2.841-2.84a.5.5 0 0 1 .76.061l.567.79L8.02 7.293zM10 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 11 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18"/>`
} as const;

export default function GavelProhibitedIcon({ 
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

  const gradientId = 'gavelprohibitedicon_gradient';
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