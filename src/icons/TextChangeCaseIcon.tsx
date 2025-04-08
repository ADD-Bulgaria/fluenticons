import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.514 2.75a1 1 0 0 1 .928.666l5.5 15.5a1 1 0 0 1-1.884.668L19.786 16H12.83l-1.397 3.611a1 1 0 0 1-1.866-.722l6-15.5a1 1 0 0 1 .947-.639m-.055 3.875L13.605 14h5.471zM8.25 20.26a1 1 0 0 1-.956-.707c-.891.463-1.738.707-2.544.707-1.97 0-3.5-1.4-3.5-3.5 0-.922.32-1.737.91-2.352s1.437-1.015 2.47-1.14a7.7 7.7 0 0 1 2.596.135c-.046-.338-.162-.579-.337-.748-.23-.224-.604-.367-1.189-.396-.946-.047-1.552.091-1.878.32a1 1 0 1 1-1.148-1.637c.717-.504 1.673-.712 2.83-.69h.005l.29.01c1.026.05 1.87.373 2.47.945.601.574.933 1.376.976 2.337v.006l.005.21v5.5a1 1 0 0 1-.865.991l-.008.001-.119.008zm-3.38-4.97c-.58.07-.981.255-1.237.507-.25.247-.383.58-.383 1 0 .492.159.861.41 1.107.253.247.624.393 1.09.393.609 0 1.397-.284 2.362-.922l.137-.093v-1.771l-.122-.037a5.8 5.8 0 0 0-2.257-.184"/>`,
  'regular': `<path d="M16.51 3a.75.75 0 0 1 .697.5l5.5 15.5a.75.75 0 0 1-1.414.5l-1.42-4h-7.117l-1.557 4.02a.75.75 0 1 1-1.398-.54l6-15.5a.75.75 0 0 1 .71-.48m-.04 2.907L13.335 14h6.005zM5.5 10.5l.287.01c1.96.098 3.128 1.226 3.209 3.045L9 13.76v5.5a.75.75 0 0 1-.648.743l-.102.007a.75.75 0 0 1-.743-.648L7.5 19.26l-.001-.104c-.988.565-1.901.854-2.749.854-1.838 0-3.25-1.294-3.25-3.25 0-1.724 1.188-3.005 3.16-3.244a7.5 7.5 0 0 1 2.839.21c-.01-1.108-.556-1.655-1.786-1.717-.962-.047-1.639.088-2.035.365a.75.75 0 1 1-.861-1.228c.658-.461 1.554-.665 2.683-.645m2 4.823-.303-.09a6.1 6.1 0 0 0-2.356-.193c-1.232.15-1.84.805-1.84 1.756 0 1.096.712 1.75 1.75 1.75.68 0 1.518-.315 2.501-.964l.248-.169z"/>`
} as const;

export default function TextChangeCaseIcon({ 
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

  const gradientId = 'textchangecaseicon_gradient';
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