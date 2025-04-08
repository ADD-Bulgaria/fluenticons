import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.309 3.25A.75.75 0 0 0 8 3.75v9.364a15 15 0 0 0-1.617-2.78A10.8 10.8 0 0 0 4.849 8.65a7 7 0 0 0-.645-.5l-.044-.029-.015-.009-.005-.003-.002-.001h-.001A.752.752 0 0 0 3 8.75v12.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V8.75a.75.75 0 0 0-1.136-.643l-.002.001-.002.001-.005.003-.015.01a3 3 0 0 0-.192.13c-.123.09-.293.22-.497.398-.408.357-.953.903-1.534 1.683A15 15 0 0 0 20 13.114V3.75a.75.75 0 0 0-1.309-.5l-.002.002-.003.004-.012.013-.04.047-.147.174c-.125.15-.302.372-.516.657a26 26 0 0 0-1.619 2.443A25.5 25.5 0 0 0 14 11.896a25.5 25.5 0 0 0-2.352-5.306 26 26 0 0 0-1.619-2.443 18 18 0 0 0-.703-.878l-.012-.013-.003-.004z"/>`,
  'regular': `<path d="m9.309 3.25.002.002.003.004.012.013a6 6 0 0 1 .187.22c.125.152.302.373.516.658a26 26 0 0 1 1.619 2.443A25.5 25.5 0 0 1 14 11.896a25.5 25.5 0 0 1 2.352-5.306 26 26 0 0 1 1.619-2.443 18 18 0 0 1 .703-.878l.012-.013.003-.004.001-.001.001-.001a.75.75 0 0 1 1.309.5v9.364a15 15 0 0 1 1.617-2.78 10.8 10.8 0 0 1 1.534-1.684 7 7 0 0 1 .645-.5l.044-.029.015-.009.005-.003.002-.001h.001A.751.751 0 0 1 25 8.75v12.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V8.75a.75.75 0 0 1 1.136-.643l.002.001.002.001.005.003.015.01a3 3 0 0 1 .192.13c.123.09.293.22.497.398.408.357.953.903 1.534 1.683.536.72 1.101 1.637 1.617 2.781V3.75a.75.75 0 0 1 1.309-.5M4.5 10.406V21.25a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V10.406q-.318.343-.68.823c-1.023 1.374-2.226 3.64-2.83 7.148a.75.75 0 0 1-1.49-.127V5.99c-.265.394-.555.848-.852 1.357-1.157 1.978-2.424 4.761-2.906 8.013a.75.75 0 0 1-1.484 0c-.482-3.252-1.75-6.035-2.905-8.013A26 26 0 0 0 9.5 5.99v12.26a.75.75 0 0 1-1.49.127c-.604-3.509-1.807-5.774-2.83-7.148q-.362-.48-.68-.823"/>`
} as const;

export default function PlantGrassIcon({ 
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

  const gradientId = 'plantgrassicon_gradient';
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