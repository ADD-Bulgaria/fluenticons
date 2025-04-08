
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.836 2.034q.168.058.329.136l1.283.632a1.25 1.25 0 0 0 1.104 0l1.283-.632a2.75 2.75 0 0 1 3.682 1.253l.073.162.063.167.46 1.353c.125.368.414.656.781.781l1.354.46a2.75 2.75 0 0 1 1.581 3.819l-.631 1.283a1.25 1.25 0 0 0 0 1.104l.631 1.283a2.75 2.75 0 0 1-1.581 3.818l-1.354.46a1.25 1.25 0 0 0-.78.781l-.461 1.354a2.75 2.75 0 0 1-3.818 1.581l-1.283-.631a1.25 1.25 0 0 0-1.104 0l-1.283.631a2.75 2.75 0 0 1-3.818-1.581l-.46-1.354a1.25 1.25 0 0 0-.782-.78l-1.353-.461a2.75 2.75 0 0 1-1.582-3.818l.632-1.283a1.25 1.25 0 0 0 0-1.104l-.632-1.283a2.75 2.75 0 0 1 1.582-3.818l1.353-.46a1.25 1.25 0 0 0 .781-.782l.46-1.353a2.75 2.75 0 0 1 3.49-1.718m5.634 6.935-5.42 5.42-1.974-2.37a.75.75 0 1 0-1.152.96l2.5 3a.75.75 0 0 0 1.106.051l6-6a.75.75 0 1 0-1.06-1.06"/>`,
  'regular': `<path d="M9.836 2.034q.168.058.329.136l1.283.632a1.25 1.25 0 0 0 1.104 0l1.283-.632a2.75 2.75 0 0 1 3.682 1.253l.073.162.063.167.46 1.353c.125.368.414.656.781.781l1.354.46a2.75 2.75 0 0 1 1.581 3.819l-.631 1.283a1.25 1.25 0 0 0 0 1.104l.631 1.283a2.75 2.75 0 0 1-1.581 3.818l-1.354.46a1.25 1.25 0 0 0-.78.781l-.461 1.354a2.75 2.75 0 0 1-3.818 1.581l-1.283-.631a1.25 1.25 0 0 0-1.104 0l-1.283.631a2.75 2.75 0 0 1-3.818-1.581l-.46-1.354a1.25 1.25 0 0 0-.782-.78l-1.353-.461a2.75 2.75 0 0 1-1.582-3.818l.632-1.283a1.25 1.25 0 0 0 0-1.104l-.632-1.283a2.75 2.75 0 0 1 1.582-3.818l1.353-.46a1.25 1.25 0 0 0 .781-.782l.46-1.353a2.75 2.75 0 0 1 3.49-1.718m-2.07 2.2-.46 1.354a2.75 2.75 0 0 1-1.718 1.718l-1.353.46a1.25 1.25 0 0 0-.719 1.736l.632 1.283a2.75 2.75 0 0 1 0 2.43l-.632 1.282a1.25 1.25 0 0 0 .719 1.736l1.353.46a2.75 2.75 0 0 1 1.718 1.718l.46 1.354a1.248 1.248 0 0 0 1.736.719l1.283-.632a2.75 2.75 0 0 1 2.43 0l1.282.632q.074.035.15.061a1.25 1.25 0 0 0 1.586-.78l.46-1.354a2.75 2.75 0 0 1 1.718-1.718l1.354-.46q.075-.026.15-.062a1.25 1.25 0 0 0 .569-1.674l-.632-1.283a2.75 2.75 0 0 1 0-2.429l.632-1.283a1.25 1.25 0 0 0-.719-1.736l-1.354-.46a2.75 2.75 0 0 1-1.718-1.718l-.46-1.353-.029-.076-.033-.074-.062-.111a1.25 1.25 0 0 0-1.612-.458l-1.283.632a2.75 2.75 0 0 1-2.429 0l-1.283-.632a1.25 1.25 0 0 0-1.735.719M10.05 14.39l5.42-5.42a.75.75 0 0 1 1.133.977l-.073.084-6 6a.75.75 0 0 1-1.031.028l-.075-.078-2.5-3a.75.75 0 0 1 1.075-1.04l.077.08zl5.42-5.42z"/>`
} as const;

export default function CheckmarkStarburstIcon({ 
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

  const gradientId = 'checkmarkstarbursticon_gradient';
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