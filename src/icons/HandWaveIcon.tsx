import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.94 2.66a1 1 0 1 0-1.88.68l2.25 6.233a.68.68 0 0 1-1.273.478L4.932 4.638a1 1 0 0 0-1.864.725l3.159 8.122c-1.702-.184-2.917.25-3.65.668a1.12 1.12 0 0 0-.565 1.136c.059.417.339.767.727.937 1.336.585 4.386 2.088 6.998 4.58 1.026.978 2.522 1.471 3.963 1.04l2.799-.838c.83-.249 1.524-.886 1.775-1.762.3-1.047.726-2.82.726-4.496 0-1.15-.403-2.585-.77-3.67-.728-2.145-1.542-4.265-2.285-6.407a1 1 0 0 0-1.89.655l.994 2.864a.701.701 0 0 1-1.323.466l-1.784-4.994a1 1 0 0 0-1.883.673l1.618 4.53a.703.703 0 0 1-1.323.475zm10.694-.337a.75.75 0 0 1 1.044-.189c.808.561 1.478 1.544 1.898 2.627.424 1.094.63 2.384.413 3.619a.75.75 0 1 1-1.478-.26c.16-.912.013-1.923-.334-2.817-.35-.906-.869-1.6-1.355-1.937a.75.75 0 0 1-.188-1.043m-.335 1.916A.75.75 0 0 0 17.2 5.262c.418.448.799.99.799 1.988a.75.75 0 0 0 1.5 0c0-1.5-.623-2.39-1.201-3.011"/>`,
  'regular': `<path d="M18.634 2.322a.75.75 0 0 1 1.044-.188c.808.561 1.478 1.544 1.898 2.627.424 1.094.63 2.384.413 3.618a.75.75 0 1 1-1.478-.258c.16-.913.013-1.924-.334-2.818-.35-.906-.869-1.6-1.355-1.937a.75.75 0 0 1-.188-1.044m-9.046.551a2.048 2.048 0 0 0-3.721 1.13 2.015 2.015 0 0 0-1.929 2.649l1.96 5.921a4.8 4.8 0 0 0-1.788.2 3.9 3.9 0 0 0-1.764 1.154 1.41 1.41 0 0 0-.271 1.42c.153.433.494.78.911.97 1.415.642 4.274 2.118 6.752 4.487 1.025.98 2.521 1.473 3.963 1.042l2.587-.775a2.67 2.67 0 0 0 1.892-2.183c.144-1.051.32-2.641.32-4.138 0-1.764-.456-3.708-1-5.41a37 37 0 0 0-1.625-4.151 2.05 2.05 0 0 0-2.277-1.142c-.29.058-.551.171-.778.326l-.155-.486a2 2 0 0 0-3.077-1.014m-1.156 1 .404 1.176q.014.05.032.1l1.673 4.846a.75.75 0 0 0 1.166.35l.016-.013a.75.75 0 0 0 .236-.827L10.272 4.61a.5.5 0 0 1 .964-.265l.724 2.267q.018.075.042.151l.87 2.703.163.513a.75.75 0 1 0 1.43-.457l-.165-.513-.89-2.786a.61.61 0 0 1 .482-.704.55.55 0 0 1 .62.299c.41.889 1.037 2.346 1.559 3.98.525 1.643.93 3.416.93 4.953 0 1.396-.166 2.91-.307 3.935-.06.44-.381.813-.836.949l-2.588.774c-.844.253-1.796-.02-2.495-.688-2.65-2.535-5.681-4.094-7.169-4.77a.3.3 0 0 1-.098-.072c.232-.255.572-.52 1.059-.676.51-.163 1.233-.224 2.244.038a.75.75 0 0 0 .9-.962L5.362 6.181a.515.515 0 0 1 .979-.324l1.438 4.346.258.785a.75.75 0 1 0 1.426-.474l-.259-.781-1.81-5.51a.547.547 0 0 1 1.038-.35m9.867.366A.75.75 0 0 0 17.2 5.26c.418.449.799.99.799 1.99a.75.75 0 0 0 1.5 0c0-1.502-.623-2.391-1.201-3.012"/>`
} as const;

export default function HandWaveIcon({ 
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

  const gradientId = 'handwaveicon_gradient';
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