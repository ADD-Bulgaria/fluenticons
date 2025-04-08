import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39.884 14h-3.172l1.75-2.241a.464.464 0 0 0-.08-.652l-4.014-3.136L29.658 14h-3.173l5.913-7.569L30.052 4.6a.464.464 0 0 0-.651.08L22.118 14H18.96l8.47-10.86a2.964 2.964 0 0 1 4.162-.511l8.33 6.508a2.964 2.964 0 0 1 .51 4.16zm-22.29-1.5 1.953-2.5H9.25A4.25 4.25 0 0 0 5 14.25v21.5A6.25 6.25 0 0 0 11.25 42h25.5A6.25 6.25 0 0 0 43 35.75v-13.5A6.25 6.25 0 0 0 36.75 16H9.25a1.75 1.75 0 1 1 0-3.5zM32.25 28h4.5a1.25 1.25 0 1 1 0 2.5h-4.5a1.25 1.25 0 1 1 0-2.5"/>`,
  'regular': `<path d="M36.712 14h3.172l.549-.702a2.964 2.964 0 0 0-.51-4.161l-8.331-6.508a2.964 2.964 0 0 0-4.161.51l-.367.47.009.007L18.96 14h3.158l7.283-9.321a.464.464 0 0 1 .651-.08l2.346 1.832L26.485 14h3.173l4.71-6.03 4.015 3.137c.202.158.238.45.08.652zM9.25 10h10.297l-1.953 2.5H9.25a1.75 1.75 0 1 0 0 3.5h27.5A6.25 6.25 0 0 1 43 22.25v13.5A6.25 6.25 0 0 1 36.75 42h-25.5A6.25 6.25 0 0 1 5 35.75v-21.5A4.25 4.25 0 0 1 9.25 10M7.5 35.75a3.75 3.75 0 0 0 3.75 3.75h25.5a3.75 3.75 0 0 0 3.75-3.75v-13.5a3.75 3.75 0 0 0-3.75-3.75H9.25a4.2 4.2 0 0 1-1.75-.376zM32.25 28a1.25 1.25 0 1 0 0 2.5h4.5a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function WalletCreditCardIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'walletcreditcardicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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