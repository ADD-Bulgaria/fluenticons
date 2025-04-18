import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.408 2.852A1.33 1.33 0 0 1 9.65 2h8.515c.927 0 1.571.922 1.252 1.792L17.326 9.5h4.837c1.178 0 1.777 1.416.957 2.262l-1.312 1.352a7.5 7.5 0 0 0-8.652 8.916l-3.37 3.473c-1.14 1.175-3.106.117-2.753-1.482l1.66-7.521H5.918a1.917 1.917 0 0 1-1.787-2.61zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M8.407 2.852A1.33 1.33 0 0 1 9.65 2h8.516c.926 0 1.57.922 1.251 1.792L17.324 9.5h4.838c1.178 0 1.777 1.416.957 2.262l-1.312 1.352a7.6 7.6 0 0 0-2.011-.081L21.768 11H16.25a.75.75 0 0 1-.705-1.008l2.38-6.492h-8.16L5.53 14.433a.417.417 0 0 0 .389.567h3.708a.75.75 0 0 1 .732.912l-1.861 8.433c-.01.047-.002.069.004.08a.14.14 0 0 0 .058.057c.032.017.061.02.08.018.013-.002.036-.007.07-.041l4.305-4.438a7.6 7.6 0 0 0 .141 2.009l-3.37 3.473c-1.14 1.175-3.106.117-2.753-1.482l1.66-7.521H5.918a1.917 1.917 0 0 1-1.788-2.61zM27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"/>`
} as const;

export default function FlashCheckmarkIcon({ 
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

  const gradientId = 'flashcheckmarkicon_gradient';
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