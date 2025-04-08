import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.445 2.168a1 1 0 0 1 1.11 0c2.916 1.944 6.76 3.859 11.545 4.337a1 1 0 0 1 .9.995V16c0 3.88-2.124 7.17-4.701 9.546-2.572 2.372-5.737 3.971-8.115 4.417l-.184.034-.184-.034c-2.378-.446-5.543-2.045-8.115-4.417C5.124 23.17 3 19.88 3 16V7.5a1 1 0 0 1 .9-.995c4.785-.478 8.63-2.393 11.545-4.337M17.25 22.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M14 13a2 2 0 1 1 4 0c0 .732-.415 1.202-1.213 2.012l-.046.047C16.022 15.789 15 16.826 15 18.5a1 1 0 1 0 2 0c0-.79.433-1.293 1.213-2.085l.084-.085C18.998 15.62 20 14.606 20 13a4 4 0 0 0-8 0 1 1 0 1 0 2 0"/>`,
  'regular': `<path d="M17.25 22.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M14 13a2 2 0 1 1 4 0c0 .732-.415 1.202-1.213 2.012l-.046.047C16.022 15.789 15 16.826 15 18.5a1 1 0 1 0 2 0c0-.79.433-1.293 1.213-2.085l.084-.085C18.998 15.62 20 14.606 20 13a4 4 0 0 0-8 0 1 1 0 1 0 2 0m2.555-10.832a1 1 0 0 0-1.11 0C12.53 4.112 8.685 6.027 3.901 6.505A1 1 0 0 0 3 7.5V16c0 3.88 2.124 7.17 4.701 9.546 2.572 2.372 5.737 3.971 8.115 4.417l.184.034.184-.034c2.378-.446 5.543-2.045 8.115-4.417C26.876 23.17 29 19.88 29 16V7.5a1 1 0 0 0-.9-.995c-4.785-.478-8.63-2.393-11.545-4.337M5 16V8.388c4.496-.616 8.166-2.38 11-4.194 2.834 1.814 6.504 3.578 11 4.194V16c0 3.12-1.715 5.916-4.057 8.076-2.275 2.098-5.007 3.47-6.943 3.884-1.936-.415-4.668-1.786-6.943-3.884C6.715 21.916 5 19.12 5 16"/>`
} as const;

export default function ShieldQuestionIcon({ 
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

  const gradientId = 'shieldquestionicon_gradient';
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