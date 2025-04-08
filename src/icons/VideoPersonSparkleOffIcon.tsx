import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.854 6.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.543.543 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796L17.987.363a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.544.544 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M8.682 5.5 7.182 4h4.89Q12 4.228 12 4.469c.001.318.099.629.28.89q.043.074.093.141zm.319 4.561A3 3 0 0 0 11.939 13l1 1H8.75l-.144.006A1.75 1.75 0 0 0 7 15.75l-.001 2.754H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h.19zm9.943 9.944 1.775 1.776a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l.98.98A2.25 2.25 0 0 0 2 6.25v11.505a2.25 2.25 0 0 0 2.25 2.25zm1.551-2.691 1.322 1.32c.115-.27.178-.567.178-.88v-3.82a1.29 1.29 0 0 1-1.5-.315zm-9.941-9.942 4.075 4.075a3 3 0 0 0-4.075-4.075"/>`,
  'regular': `<path d="M15.854 6.146a2.84 2.84 0 0 1 .685 1.114l.448 1.377a.543.543 0 0 0 1.026 0l.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.544.544 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.798-1.796L17.987.363a.544.544 0 0 0-1.027 0l-.448 1.377-.011.034a2.84 2.84 0 0 1-1.759 1.762l-1.378.448a.544.544 0 0 0 0 1.025l1.378.448c.42.14.8.376 1.113.689m7.163 3.819.766.248.015.004a.303.303 0 0 1 .147.46.3.3 0 0 1-.147.11l-.765.248a1.58 1.58 0 0 0-1 .999l-.248.764a.302.302 0 0 1-.57 0l-.249-.764a1.58 1.58 0 0 0-.999-1.002l-.765-.249a.303.303 0 0 1-.147-.46.3.3 0 0 1 .147-.11l.765-.248a1.58 1.58 0 0 0 .984-.999l.249-.764a.302.302 0 0 1 .57 0l.249.764a1.58 1.58 0 0 0 .999.999M8.682 5.5 7.182 4h4.89Q12 4.228 12 4.469c.001.318.099.629.28.89q.043.074.093.141zm.319 4.561A3 3 0 0 0 11.939 13l1 1H8.75l-.144.006A1.75 1.75 0 0 0 7 15.75l-.001 2.754H4.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h.19zm9.943 9.944 1.775 1.776a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06l.98.98A2.25 2.25 0 0 0 2 6.25v11.505a2.25 2.25 0 0 0 2.25 2.25zM14.439 15.5l1.056 1.055-.001 1.949H8.499L8.5 15.75l.007-.057a.25.25 0 0 1 .243-.193zM13.5 10q0 .15-.028.29l1.157 1.157a3 3 0 0 0-4.075-4.075l1.156 1.156q.14-.027.29-.028a1.5 1.5 0 0 1 1.5 1.5m6.995 7.314 1.322 1.32c.115-.27.178-.567.178-.88v-3.82a1.29 1.29 0 0 1-1.5-.315z"/>`
} as const;

export default function VideoPersonSparkleOffIcon({ 
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

  const gradientId = 'videopersonsparkleofficon_gradient';
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