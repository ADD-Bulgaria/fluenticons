import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.707 3.293a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 1.414 1.414L11 5.414l1.293 1.293a1 1 0 1 0 1.414-1.414zm2.766 6.44a.5.5 0 0 1 .768.147l1.109 2.106-3.557 3.557a1 1 0 0 0 1.414 1.414l3.118-3.118 1.164 2.213a2.5 2.5 0 0 0 3.84.733l.322-.276a1 1 0 0 0-1.302-1.518l-.322.276a.5.5 0 0 1-.768-.147l-1.453-2.761 2.901-2.902a1 1 0 0 0-1.414-1.414l-2.463 2.463-.82-1.558a2.5 2.5 0 0 0-3.839-.733l-.322.276a1 1 0 1 0 1.302 1.518zM3.045 13.715c.87-.017 1.777-.075 2.605-.254 1.076-.232 2.189-.705 2.872-1.737.613-.928.642-2.058.054-2.912-.6-.872-1.69-1.242-2.861-.977A5.2 5.2 0 0 0 3.56 8.842c-.874.694-1.701 1.807-2.257 3.581-.4 1.281-.408 2.434.003 3.374.421.96 1.22 1.56 2.13 1.812 1.763.486 3.939-.296 5.317-2.036a1 1 0 0 0-1.568-1.242c-.967 1.222-2.356 1.587-3.217 1.35q-.602-.167-.83-.686c-.118-.27-.19-.685-.093-1.28m3.884-3.769c.075.11.14.35-.075.674-.265.4-.772.702-1.627.886a9.6 9.6 0 0 1-1.46.181c.341-.622.71-1.02 1.037-1.28a3.2 3.2 0 0 1 1.353-.621c.508-.115.709.069.772.16"/>`,
  'regular': `<path d="M10.988 4.18a.75.75 0 0 0-.976 0l-1.75 1.5a.75.75 0 1 0 .976 1.14L10.5 5.737l1.262 1.081a.75.75 0 0 0 .976-1.138zm2.572 5.363a.75.75 0 0 1 1.152.22l1.195 2.27-3.687 3.687a.75.75 0 1 0 1.06 1.06l3.358-3.357 1.322 2.512a2.25 2.25 0 0 0 3.456.66l.322-.276a.75.75 0 1 0-.976-1.138l-.322.276a.75.75 0 0 1-1.152-.22l-1.54-2.925L20.78 9.28a.75.75 0 0 0-1.06-1.06l-2.703 2.702-.977-1.857a2.25 2.25 0 0 0-3.456-.66l-.322.276a.75.75 0 1 0 .976 1.138zM3.586 13.47c.926-.013 1.892-.064 2.76-.252 1.05-.226 2.087-.678 2.717-1.631.564-.852.581-1.871.057-2.632-.533-.774-1.51-1.122-2.6-.875a5 5 0 0 0-2.075 1.01c-.825.67-1.628 1.732-2.153 3.409-.39 1.244-.387 2.33-.007 3.199.387.883 1.12 1.437 1.968 1.67 1.65.456 3.727-.274 5.054-1.95a.75.75 0 0 0-1.176-.93c-1.019 1.286-2.505 1.704-3.479 1.435-.465-.129-.808-.405-.993-.827-.156-.357-.227-.887-.073-1.626m4.299-3.665c.139.203.192.554-.073.954-.317.479-.9.802-1.782.993-.579.125-1.232.181-1.923.205.393-.827.857-1.356 1.283-1.702a3.5 3.5 0 0 1 1.462-.712c.591-.134.903.074 1.033.262"/>`
} as const;

export default function MathFormatLinearIcon({ 
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

  const gradientId = 'mathformatlinearicon_gradient';
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