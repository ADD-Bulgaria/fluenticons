import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m22.188 34.919-5.868-6.92h-1.446l-7.22 6.571-.043.04a5.5 5.5 0 1 0 7.819 7.736zm10.525-10.904-6.71-5.69V17.19q.033-.171.05-.356c.16-1.885.774-3.89 1.59-5.667.814-1.772 1.872-3.411 2.992-4.531a9 9 0 1 1 12.728 12.728c-1.12 1.12-2.759 2.178-4.53 2.991-1.778.817-3.782 1.43-5.667 1.592q-.238.021-.453.068M31.25 13c-.69 0-1.25.56-1.25 1.25A5.75 5.75 0 0 0 35.75 20a1.25 1.25 0 1 0 0-2.5 3.25 3.25 0 0 1-3.25-3.25c0-.69-.56-1.25-1.25-1.25M9.8 5.38a5.25 5.25 0 0 1 7.26.158l5.406 5.406a5.25 5.25 0 0 1 1.538 3.712v3.785c0 .514.226 1.002.618 1.335l15.437 13.091.036.036a6.5 6.5 0 0 1-9.192 9.193l-.037-.036-13.095-15.442A1.75 1.75 0 0 0 16.436 26h-3.275a5.25 5.25 0 0 1-3.713-1.538l-5.91-5.91a5.25 5.25 0 0 1 .164-7.583zm.334 8.986a1.25 1.25 0 0 0-1.768 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768zm2.232-4a1.25 1.25 0 0 0 0 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768l-4-4a1.25 1.25 0 0 0-1.768 0"/>`,
  'regular': `<path d="M15.292 7.305a2.75 2.75 0 0 0-3.803-.082l-6.097 5.589a2.75 2.75 0 0 0-.087 3.972l5.91 5.91a2.75 2.75 0 0 0 1.946.806h3.275a4.25 4.25 0 0 1 3.242 1.5l13.026 15.362a4 4 0 0 0 5.657-5.657L23.005 21.683a4.25 4.25 0 0 1-1.501-3.242v-3.785a2.75 2.75 0 0 0-.806-1.944zM9.8 5.38a5.25 5.25 0 0 1 7.26.158l5.406 5.406a5.25 5.25 0 0 1 1.538 3.712v3.785c0 .353.106.693.299.979l1.057-.963c.382-.347.631-.914.692-1.623.162-1.885.775-3.89 1.592-5.667.813-1.772 1.871-3.411 2.991-4.531a9 9 0 1 1 12.728 12.728c-1.12 1.12-2.759 2.178-4.53 2.991-1.778.817-3.782 1.43-5.667 1.592-.708.06-1.276.31-1.623.692l-.517.568 9.033 7.66.036.036a6.5 6.5 0 0 1-9.192 9.193l-.037-.036-7.32-8.633-8.116 8.92-.04.042a5.5 5.5 0 1 1-7.736-7.819l9.324-8.484a1.8 1.8 0 0 0-.542-.086h-3.275a5.25 5.25 0 0 1-3.713-1.538l-5.91-5.91a5.25 5.25 0 0 1 .164-7.583zm19.318 18.209.576-.633c.893-.982 2.13-1.403 3.258-1.5 1.529-.131 3.25-.644 4.837-1.372 1.592-.732 2.956-1.638 3.806-2.488a6.5 6.5 0 0 0-9.192-9.192c-.85.85-1.756 2.214-2.487 3.807-.73 1.587-1.242 3.308-1.373 4.837-.097 1.128-.518 2.365-1.5 3.258l-.866.789zm-10.33 4.229-9.428 8.58a3 3 0 0 0 4.242 4.242l8.313-9.135zM33.5 13.75a1.25 1.25 0 1 0-2.5 0c0 2.9 2.35 5.25 5.25 5.25a1.25 1.25 0 1 0 0-2.5 2.75 2.75 0 0 1-2.75-2.75m-25.134.616a1.25 1.25 0 0 1 1.768 0l4 4a1.25 1.25 0 0 1-1.768 1.768l-4-4a1.25 1.25 0 0 1 0-1.768m5.768-4a1.25 1.25 0 0 0-1.768 1.768l4 4a1.25 1.25 0 0 0 1.768-1.768zm16.501-3.73.884.884z"/>`
} as const;

export default function SpatulaSpoonIcon({ 
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

  const gradientId = 'spatulaspoonicon_gradient';
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