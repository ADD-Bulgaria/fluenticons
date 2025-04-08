import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 2q-.706.002-1.376.135a.75.75 0 0 0-.59.593l-.36 1.859a.25.25 0 0 1-.327.189l-1.79-.618a.75.75 0 0 0-.808.212 7 7 0 0 0-1.383 2.391.75.75 0 0 0 .219.807L4.017 8.81a.25.25 0 0 1 0 .378l-1.432 1.243a.75.75 0 0 0-.22.806 7 7 0 0 0 1.384 2.391.75.75 0 0 0 .807.213l1.791-.618a.25.25 0 0 1 .327.189l.36 1.859a.75.75 0 0 0 .59.593 7 7 0 0 0 2.762-.002.75.75 0 0 0 .588-.593l.36-1.857a.25.25 0 0 1 .327-.19l1.785.617a.75.75 0 0 0 .807-.213 7 7 0 0 0 1.384-2.395.75.75 0 0 0-.22-.805l-1.426-1.238a.25.25 0 0 1 0-.378l1.426-1.238a.75.75 0 0 0 .22-.806 7 7 0 0 0-1.384-2.394.75.75 0 0 0-.808-.213l-1.784.616a.25.25 0 0 1-.327-.19l-.36-1.856a.75.75 0 0 0-.588-.593A7 7 0 0 0 9 2M7.251 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m6.16 5.784a.47.47 0 0 1 .53-.15l1.259.435a.454.454 0 0 0 .595-.344l.253-1.308a.47.47 0 0 1 .395-.383 4.5 4.5 0 0 1 1.114 0 .47.47 0 0 1 .395.383l.253 1.308a.455.455 0 0 0 .595.344l1.26-.435a.47.47 0 0 1 .528.15c.224.295.412.62.559.965.079.187.019.4-.134.533l-1.008.875a.455.455 0 0 0 0 .686l1.008.874a.47.47 0 0 1 .134.533q-.221.52-.559.966a.47.47 0 0 1-.528.15l-1.26-.435a.455.455 0 0 0-.595.343l-.253 1.309a.47.47 0 0 1-.395.383 4.5 4.5 0 0 1-1.114 0 .47.47 0 0 1-.395-.383l-.253-1.309a.454.454 0 0 0-.595-.343l-1.26.435a.47.47 0 0 1-.528-.15 4.5 4.5 0 0 1-.559-.966.47.47 0 0 1 .134-.533l1.008-.874a.455.455 0 0 0 0-.686l-1.007-.875a.47.47 0 0 1-.135-.533c.146-.346.335-.67.559-.965m4.84 2.716a1.25 1.25 0 1 0-2.502 0 1.25 1.25 0 0 0 2.501 0"/>`,
  'regular': `<path d="m8.406 3.532-.26 1.34a1.75 1.75 0 0 1-2.288 1.322l-1.294-.447q-.354.481-.598 1.033l1.035.898a1.75 1.75 0 0 1 0 2.643l-1.035.898q.244.552.598 1.034l1.294-.447a1.75 1.75 0 0 1 2.289 1.322l.26 1.34c.392.042.803.042 1.195 0l.26-1.34a1.75 1.75 0 0 1 2.288-1.322l1.288.444q.354-.482.599-1.036l-1.03-.893a1.75 1.75 0 0 1 0-2.643l1.03-.893a5.5 5.5 0 0 0-.6-1.036l-1.287.445a1.75 1.75 0 0 1-2.289-1.322l-.259-1.34a5.6 5.6 0 0 0-1.196 0m-.782-1.397a7 7 0 0 1 2.762.002.75.75 0 0 1 .588.593l.36 1.857a.25.25 0 0 0 .327.189l1.784-.616a.75.75 0 0 1 .808.213 7 7 0 0 1 1.383 2.394.75.75 0 0 1-.219.806L13.991 8.81a.25.25 0 0 0 0 .378l1.426 1.238c.23.199.317.517.22.805a7 7 0 0 1-1.384 2.395.75.75 0 0 1-.807.213l-1.785-.616a.25.25 0 0 0-.327.189l-.36 1.857a.75.75 0 0 1-.588.593 7 7 0 0 1-2.762.002.75.75 0 0 1-.59-.593l-.36-1.86a.25.25 0 0 0-.327-.188l-1.79.618a.75.75 0 0 1-.808-.213 7 7 0 0 1-1.383-2.39.75.75 0 0 1 .219-.807L4.017 9.19a.25.25 0 0 0 0-.378L2.585 7.568a.75.75 0 0 1-.22-.807 7 7 0 0 1 1.384-2.39.75.75 0 0 1 .808-.213l1.79.618a.25.25 0 0 0 .327-.19l.36-1.858a.75.75 0 0 1 .59-.593m6.317 12.499a.47.47 0 0 0-.53.15c-.223.295-.412.62-.558.965a.47.47 0 0 0 .135.533l1.007.875a.455.455 0 0 1 0 .686l-1.008.874a.47.47 0 0 0-.134.533q.221.52.559.966a.47.47 0 0 0 .528.15l1.26-.435a.455.455 0 0 1 .595.343l.253 1.309c.039.2.194.358.395.383a4.5 4.5 0 0 0 1.114 0 .47.47 0 0 0 .395-.383l.253-1.309a.455.455 0 0 1 .595-.343l1.26.435a.47.47 0 0 0 .528-.15q.338-.445.559-.966a.47.47 0 0 0-.134-.533l-1.008-.874a.455.455 0 0 1 0-.686l1.008-.875a.47.47 0 0 0 .134-.533 4.5 4.5 0 0 0-.559-.965.47.47 0 0 0-.529-.15l-1.259.435a.455.455 0 0 1-.595-.344l-.253-1.308a.47.47 0 0 0-.395-.383 4.5 4.5 0 0 0-1.114 0 .47.47 0 0 0-.395.383l-.253 1.308a.455.455 0 0 1-.595.344zM17 18.75a1.25 1.25 0 1 1 0-2.502 1.25 1.25 0 0 1 0 2.502M8 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/>`
} as const;

export default function SettingsCogMultipleIcon({ 
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

  const gradientId = 'settingscogmultipleicon_gradient';
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