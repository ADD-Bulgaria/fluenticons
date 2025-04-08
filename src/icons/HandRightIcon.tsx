import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 3v9.25a.75.75 0 0 1-1.5 0V4.5a1 1 0 1 0-2 0v8.25a.75.75 0 0 1-1.5 0V6.997a1 1 0 1 0-2 0V17.25c0 2.519.982 5.295 1.644 6.89.487 1.172 1.639 1.857 2.855 1.857h3.595a3.25 3.25 0 0 0 2.914-1.81l.695-1.406q.44-.889 1.028-1.688l2.79-3.785 2.632-1.675A.75.75 0 0 0 24.5 15c0-.487-.214-.889-.549-1.17-.31-.26-.699-.396-1.066-.466-.733-.14-1.622-.059-2.417.16-.722.183-1.423.525-1.968.837V4.5a1 1 0 1 0-2 0v7.75a.75.75 0 0 1-1.5 0V3a1 1 0 1 0-2 0"/>`,
  'regular': `<path d="M14 4.26v7.99a.75.75 0 0 0 1.5 0V5.763c0-.4.325-.76.751-.763.383-.002.75.363.75.795v8.955a.75.75 0 0 0 1.245.563l.186-.166c.24-.215.398-.357.629-.49.266-.154.657-.305 1.377-.416.664-.102 1.346-.012 1.829.25.35.19.606.469.697.894l-2.144 1.5a1 1 0 0 0-.117.102l-2.535 2.704a12.8 12.8 0 0 0-2.128 3.07l-.377.762a1.75 1.75 0 0 1-1.568.974h-3.867c-.562 0-1.055-.262-1.326-.694a21 21 0 0 1-1.556-2.977c-.493-1.188-.846-2.443-.846-3.576V8.27c0-.424.32-.77.75-.77s.75.343.75.77v4.48a.75.75 0 0 0 1.5 0V5.795c0-.445.332-.795.747-.795.421 0 .753.35.753.795v6.455a.75.75 0 1 0 1.5 0V4.272c0-.427.32-.772.752-.772.44 0 .748.332.748.76m2.242-.76a2.2 2.2 0 0 0-.822.158Zm-.822.158A2.21 2.21 0 0 0 13.251 2c-1.1 0-1.912.742-2.167 1.658a2.2 2.2 0 0 0-.837-.158C8.887 3.5 8 4.644 8 5.795v.33A2.3 2.3 0 0 0 7.25 6C5.91 6 5 7.102 5 8.27v8.98c0 1.414.432 2.878.96 4.151a22 22 0 0 0 1.67 3.198c.572.912 1.572 1.398 2.598 1.398h3.867a3.25 3.25 0 0 0 2.913-1.81l.377-.762c.49-.99 1.122-1.902 1.877-2.708l2.482-2.647 2.436-1.706c.2-.14.32-.37.32-.614 0-1.239-.639-2.101-1.518-2.578-.838-.454-1.87-.552-2.771-.413-.736.113-1.272.276-1.71.497v-7.46c0-1.173-.955-2.304-2.26-2.296"/>`
} as const;

export default function HandRightIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'handrighticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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