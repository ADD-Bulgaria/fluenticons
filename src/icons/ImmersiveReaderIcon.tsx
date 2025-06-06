import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M4 5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h8.75a2.74 2.74 0 0 0 1.93-.79c.231.246.513.445.828.581A3.74 3.74 0 0 1 12.75 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8.75c1.39 0 2.602.755 3.25 1.878A3.75 3.75 0 0 1 19.25 4H28a2 2 0 0 1 2 2v11.435a7 7 0 0 0-.713-.677 5 5 0 0 0-.287-.217V6a1 1 0 0 0-1-1h-8.75a2.75 2.75 0 0 0-2.75 2.75v11.264a2.5 2.5 0 0 0-1 .208V7.75A2.75 2.75 0 0 0 12.75 5zm23.864 12.594a.75.75 0 0 0-.734 1.309l.006.003.045.029q.066.043.197.146c.17.14.408.362.647.681.473.63.975 1.662.975 3.238s-.502 2.608-.975 3.238a4 4 0 0 1-.647.68 3 3 0 0 1-.242.176l-.006.003a.75.75 0 0 0 .734 1.309l.002-.001.002-.001.004-.003.011-.006.014-.008.018-.01.098-.063c.08-.054.187-.13.312-.233.251-.204.577-.513.9-.944.652-.87 1.275-2.213 1.275-4.137s-.622-3.267-1.275-4.137a5.4 5.4 0 0 0-.9-.944 4 4 0 0 0-.442-.314l-.011-.006-.004-.003h-.002zM15.5 21.5a1 1 0 0 1 1-1h3l1.68-1.96c.454-.53 1.32-.209 1.32.487v7.946c0 .696-.866 1.016-1.32.488L19.5 25.5h-3a1 1 0 0 1-1-1zm8.857-1.636a.75.75 0 0 1 1.029-.257h.001l.002.002.004.002.008.005.023.015q.027.017.066.045.078.055.197.156c.155.134.353.334.548.607.396.555.765 1.393.765 2.561s-.369 2.006-.765 2.56a3.5 3.5 0 0 1-.549.608 3 3 0 0 1-.262.201l-.023.015-.008.005-.004.002-.002.001-.001.001c-.355.213-.843.113-1.03-.257-.29-.575.348-1.101.348-1.101.08-.069.194-.182.31-.346.23-.32.486-.857.486-1.689s-.256-1.369-.485-1.69a2 2 0 0 0-.397-.414l-.008-.005-.005-.003a.75.75 0 0 1-.248-1.024"/>`
} as const;

export default function ImmersiveReaderIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'immersivereadericon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}