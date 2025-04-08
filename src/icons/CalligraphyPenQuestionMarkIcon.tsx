import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m.624 7.005a.625.625 0 1 0-1.249 0 .625.625 0 0 0 1.25 0m1.23-3.552c0-1.104-.823-1.95-1.854-1.95-1.048 0-1.864.818-1.853 1.955a.5.5 0 1 0 1-.01c-.006-.579.36-.945.853-.945.472 0 .853.392.853.95 0 .202-.07.315-.36.544l-.277.215C14.21 5.616 14 5.929 14 6.5a.5.5 0 0 0 .992.09l.011-.156c.017-.148.1-.254.346-.448l.277-.215c.513-.41.727-.732.727-1.318M14.5 11q.168 0 .335-.01a2.5 2.5 0 0 1-.198.425l-3.463 5.907a1.37 1.37 0 0 1-.674.58v-7.036a1 1 0 0 0 .456-1.16A5.48 5.48 0 0 0 14.5 11"/><path d="M9 5.5c0 1.35.486 2.587 1.294 3.544a1 1 0 0 0-.794 1.822v7.044a1.37 1.37 0 0 1-.694-.588l-3.463-5.907a2.5 2.5 0 0 1-.102-2.335L6.7 6h-.2A1.5 1.5 0 0 1 5 4.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h2.522A6 6 0 0 0 9 5.5"/>`,
  'regular': `<path d="M19 5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0m-4.5 1.88a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m0-4.877c1.031 0 1.853.846 1.853 1.95 0 .586-.214.908-.727 1.318l-.277.215c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 6.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544 0-.558-.382-.95-.854-.95-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01c-.01-1.137.806-1.955 1.854-1.955"/><path d="M14.845 10.99a5.6 5.6 0 0 1-1.085-.04l-3.26 5.561v-5.645a1 1 0 1 0-1 0v5.645L6.216 10.91a1.5 1.5 0 0 1-.062-1.4L7.816 6h1.206a5.6 5.6 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907a1.373 1.373 0 0 0 2.368 0l3.463-5.907q.12-.206.198-.426"/>`
} as const;

export default function CalligraphyPenQuestionMarkIcon({ 
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

  const gradientId = 'calligraphypenquestionmarkicon_gradient';
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