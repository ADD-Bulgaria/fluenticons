import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M8.244 4.343c.33-.22.756.024.756.42 0 .175-.09.337-.235.435a13.1 13.1 0 0 0-3.567 3.567.53.53 0 0 1-.435.235c-.396 0-.64-.427-.42-.756a14.1 14.1 0 0 1 3.901-3.901m.521 22.46c.145.097.235.26.235.434 0 .396-.427.64-.756.42a14.1 14.1 0 0 1-3.901-3.901c-.22-.33.024-.756.42-.756.175 0 .337.09.435.235a13.1 13.1 0 0 0 3.567 3.567M29.052 20a.514.514 0 0 1-.487-.651C28.849 18.28 29 17.158 29 16s-.151-2.28-.435-3.349a.514.514 0 0 1 .487-.651c.218 0 .412.143.469.354a14.06 14.06 0 0 1-.001 7.291.48.48 0 0 1-.468.355m-25.617-.651A13 13 0 0 1 3 16c0-1.158.151-2.28.435-3.349A.514.514 0 0 0 2.948 12a.48.48 0 0 0-.469.354A14 14 0 0 0 2 16c0 1.261.167 2.483.48 3.645.056.212.25.355.468.355a.514.514 0 0 0 .487-.651M12 2.949c0 .334.327.573.651.486A13 13 0 0 1 16 3c1.158 0 2.28.151 3.349.435A.514.514 0 0 0 20 2.948a.48.48 0 0 0-.355-.469A14 14 0 0 0 16 2c-1.261 0-2.483.167-3.645.48a.48.48 0 0 0-.355.468M27.237 9c.396 0 .64-.427.42-.756a14.1 14.1 0 0 0-3.901-3.901c-.33-.22-.756.024-.756.42 0 .175.09.337.235.435a13.1 13.1 0 0 1 3.567 3.567c.098.145.26.235.435.235m-.24 14.182A.5.5 0 0 1 27.38 23h.007a.5.5 0 0 1 .382.818c-.809.981-1.62 1.895-2.476 2.702l.13.133a14.4 14.4 0 0 1 1.919 2.494 12 12 0 0 1 .576 1.064l.03.065.008.019.002.005.001.002-.459.198.46-.197a.5.5 0 0 1-.92.394v-.002l-.005-.012-.024-.051-.1-.207a11 11 0 0 0-.424-.76 13.4 13.4 0 0 0-1.941-2.478C22.5 28.906 20.156 30 17 30v-.5.5h-.062l-.155-.006a9 9 0 0 1-.541-.044 8 8 0 0 1-1.65-.35C13.402 29.202 12 28.331 12 26.5s1.402-2.703 2.592-3.1a8 8 0 0 1 1.65-.35 9 9 0 0 1 .696-.05H17l.001.5V23c3.33 0 5.815 1.324 7.561 2.836.828-.776 1.625-1.67 2.436-2.654m-3.193 3.322C22.204 25.15 19.974 24 17 24h-.039l-.13.005c-.115.006-.28.017-.479.039a7 7 0 0 0-1.444.305c-1.06.354-1.908.983-1.908 2.151s.848 1.797 1.908 2.15a7 7 0 0 0 1.444.306 8 8 0 0 0 .609.043h.032l.006.001c2.807 0 4.914-.935 6.805-2.496"/>`
} as const;

export default function LassoIcon({ 
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

  const gradientId = 'lassoicon_gradient';
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