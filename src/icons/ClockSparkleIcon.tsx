import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M30 16c0 7.732-6.268 14-14 14-1.038 0-2.05-.113-3.024-.328l.134-.433a.37.37 0 0 1 .24-.23l.91-.3a2 2 0 0 0 .94-.69c.196-.304.3-.658.3-1.02a1.84 1.84 0 0 0-.34-1.07 1.9 1.9 0 0 0-.9-.68h-.07l-.87-.28a.6.6 0 0 1-.14-.09.34.34 0 0 1-.09-.15l-.3-.91a2 2 0 0 0-.69-.94 1.9 1.9 0 0 0-1.1-.38h-.012c-.152-.008-.42-.174-.477-.76l.489-.18a2.16 2.16 0 0 0 1.08-.81c.26-.364.4-.801.4-1.25a2.17 2.17 0 0 0-1.45-2h-.11l-1.62-.6a2 2 0 0 1-.76-.48 1.9 1.9 0 0 1-.48-.77L7.52 14a2.16 2.16 0 0 0-2.05-1.48c-.448 0-.886.14-1.25.4a2.16 2.16 0 0 0-.8 1l-.55 1.72c-.1.285-.26.544-.47.76a2 2 0 0 1-.383.307A14 14 0 0 1 2 16C2 8.268 8.268 2 16 2s14 6.268 14 14M15 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4V9a1 1 0 0 0-1-1M3.488 21.511a3.5 3.5 0 0 1 .837 1.363l.548 1.683a.664.664 0 0 0 1.254 0l.548-1.683a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.684-.547a3.47 3.47 0 0 1-2.197-2.196l-.547-1.683a.664.664 0 0 0-1.255 0l-.547 1.683-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.298a1.9 1.9 0 0 0-1.198 1.198l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.363.363 0 0 1 0-.684l.919-.298a1.9 1.9 0 0 0 1.18-1.198l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.198"/>`,
  'regular': `<path d="M15 8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4V9a1 1 0 0 0-1-1m15 8c0 7.732-6.268 14-14 14-1.038 0-2.05-.113-3.024-.328l.134-.433a.37.37 0 0 1 .24-.23l.91-.3a2 2 0 0 0 .94-.69q.015-.021.027-.043.384.024.773.024c6.627 0 12-5.373 12-12S22.627 4 16 4C10.487 4 5.842 7.718 4.436 12.784q-.112.06-.216.135a2.16 2.16 0 0 0-.8 1l-.55 1.72c-.1.285-.26.544-.47.76a2 2 0 0 1-.383.307Q2 16.354 2 16C2 8.268 8.268 2 16 2s14 6.268 14 14M3.488 21.511a3.5 3.5 0 0 1 .837 1.363l.548 1.683a.664.664 0 0 0 1.254 0l.548-1.683a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.684-.547a3.47 3.47 0 0 1-2.197-2.196l-.547-1.683a.664.664 0 0 0-1.255 0l-.547 1.683-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.298a1.9 1.9 0 0 0-1.198 1.198l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.363.363 0 0 1 0-.684l.919-.298a1.9 1.9 0 0 0 1.18-1.198l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.198"/>`
} as const;

export default function ClockSparkleIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'clocksparkleicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}