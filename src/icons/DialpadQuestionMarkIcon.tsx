import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.5 6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m-6.496 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4.996 0c.301 0 .582.089.817.242a6.5 6.5 0 0 0-1.526 2.58A1.5 1.5 0 0 1 12 12.75m4.996-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-8.492 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m9.992-5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M7.004 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-6.125 2.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0m-1.229-4.547c-.01-1.136.806-1.954 1.854-1.954 1.031 0 1.853.846 1.853 1.95 0 .509-.15.841-.528 1.292l-.135.155-.265.29-.101.116-.085.104c-.18.232-.24.387-.24.59a.5.5 0 1 1-1 0c0-.517.152-.853.536-1.31l.136-.157.265-.29.1-.113.093-.116c.169-.22.224-.37.224-.561 0-.558-.38-.95-.853-.95-.494 0-.86.366-.854.945a.5.5 0 1 1-1 .01"/>`,
  'regular': `<path d="M12 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.25 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m-6.246 3.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.996 0c.297 0 .57.104.784.277a6.5 6.5 0 0 0-1.336 2.095A1.25 1.25 0 0 1 12 12.75m4.996-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8.254 9a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m9.992-5a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M7.004 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 7.751a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249m0-5.877c-1.048 0-1.864.817-1.854 1.954a.5.5 0 0 0 1-.01c-.005-.578.36-.944.854-.944.472 0 .853.392.853.95 0 .192-.055.342-.224.561l-.094.116-.099.113-.265.29-.136.157c-.384.457-.535.793-.535 1.31a.5.5 0 0 0 1 0c0-.203.058-.358.239-.59l.085-.104.1-.115.266-.29.135-.156c.378-.45.528-.783.528-1.292 0-1.104-.822-1.95-1.853-1.95"/>`
} as const;

export default function DialpadQuestionMarkIcon({ 
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

  const gradientId = 'dialpadquestionmarkicon_gradient';
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