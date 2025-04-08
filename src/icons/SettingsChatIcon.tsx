import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.195 2.503a10.6 10.6 0 0 0-2.182-.253q-1.127.013-2.201.253a.75.75 0 0 0-.583.649l-.17 1.526a1.387 1.387 0 0 1-1.93 1.118l-1.4-.615a.75.75 0 0 0-.85.174 9.8 9.8 0 0 0-2.205 3.792.75.75 0 0 0 .272.826l1.243.914a1.38 1.38 0 0 1 0 2.226l-1.243.916a.75.75 0 0 0-.272.826 9.8 9.8 0 0 0 2.204 3.796.75.75 0 0 0 .849.175l1.406-.617a1.38 1.38 0 0 1 1.925 1.111l.17 1.524a.75.75 0 0 0 .571.647 9.5 9.5 0 0 0 1.375.223l.441-1.45a6.5 6.5 0 0 1-.614-2.763c0-.901.183-1.76.515-2.54a3 3 0 1 1 3.446-3.446 6.5 6.5 0 0 1 2.54-.515 6.5 6.5 0 0 1 1.943.296c.094-.158.22-.298.37-.41l1.242-.914a.75.75 0 0 0 .272-.826 9.8 9.8 0 0 0-2.205-3.792.75.75 0 0 0-.85-.174l-1.4.615a1.384 1.384 0 0 1-1.927-1.116l-.17-1.527a.75.75 0 0 0-.582-.649m5.09 9.792A5.5 5.5 0 0 0 17.5 12a5.5 5.5 0 0 0-4.812 8.169l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666a5.501 5.501 0 1 0 4.45-10.019M15.5 18.001h2a.5.5 0 1 1 0 1h-2a.5.5 0 1 1 0-1m4-1h-4a.499.499 0 1 1 0-1h4a.5.5 0 1 1 0 1"/>`,
  'regular': `<path d="M12.013 2.25c.734.008 1.465.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.4-.615a.75.75 0 0 1 .85.174 9.8 9.8 0 0 1 2.205 3.792.75.75 0 0 1-.272.825l-1.241.916a1.4 1.4 0 0 0-.37.409 6.5 6.5 0 0 0-1.52-.282 2.9 2.9 0 0 1 1-1.336l.798-.587a8.3 8.3 0 0 0-1.348-2.317l-.897.393a2.884 2.884 0 0 1-4.023-2.324l-.109-.976a9 9 0 0 0-1.334-.117 9 9 0 0 0-1.354.117l-.11.977A2.886 2.886 0 0 1 6.527 7.17l-.899-.394A8.3 8.3 0 0 0 4.28 9.092l.798.587a2.88 2.88 0 0 1 .001 4.643l-.799.588c.32.842.776 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.109.984q.472.08.946.103l.011.024-.441 1.45a9.5 9.5 0 0 1-1.375-.223.75.75 0 0 1-.572-.647l-.169-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.406.616a.75.75 0 0 1-.85-.175 9.8 9.8 0 0 1-2.203-3.796.75.75 0 0 1 .272-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826A9.8 9.8 0 0 1 4.88 5.355a.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.074-.238 2.201-.252m5.74 9.756a5.504 5.504 0 0 1 5.25 5.496 5.5 5.5 0 0 1-8.168 4.812l-2.187.666a.5.5 0 0 1-.624-.625l.665-2.186a5.501 5.501 0 0 1 5.063-8.163M17.502 18h-2a.5.5 0 0 0-.396.807.5.5 0 0 0 .395.194h2a.5.5 0 1 0 0-1m-2-1h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 0-.366.841.5.5 0 0 0 .365.16M12 8.25a3.75 3.75 0 0 1 3.677 3.01 6.5 6.5 0 0 0-1.43.612 2.25 2.25 0 1 0-2.375 2.374 6.5 6.5 0 0 0-.613 1.43A3.751 3.751 0 0 1 12 8.25"/>`
} as const;

export default function SettingsChatIcon({ 
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

  const gradientId = 'settingschaticon_gradient';
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