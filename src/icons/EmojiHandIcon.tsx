
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.5 18.26c1.373-.936 2.6-1.256 3.665-1.196a4 4 0 0 1 1.803.54 3.5 3.5 0 0 1 .632.477l.047.049.018.018.008.009.003.003.002.002.001.002a1.25 1.25 0 0 1-.326 1.93l-.001.002-.012.006-.073.044a8 8 0 0 0-.321.209c-.286.195-.706.504-1.21.944-1.01.88-2.358 2.28-3.656 4.328q-.088.14-.183.277l-.111.228C17.656 27.784 15.863 29 13.819 29h-3.042a5.25 5.25 0 0 1-4.814-3.155l-1.36-3.128A7.25 7.25 0 0 1 4 19.824V7.25a1.25 1.25 0 1 1 2.5 0v9a.75.75 0 0 0 1.5 0V5.75a1.25 1.25 0 1 1 2.5 0v9.5a.75.75 0 0 0 1.5 0v-11a1.25 1.25 0 1 1 2.5 0v11a.75.75 0 0 0 1.5 0v-9.5a1.25 1.25 0 1 1 2.5 0zM30 44.87c-7.988 0-14.517-6.243-14.975-14.116 2.099-.368 4.062-1.67 5.405-3.634.06-.08.11-.16.15-.25l.05-.1q.037-.052.07-.105t.07-.105c1.21-1.9 2.45-3.17 3.28-3.89.45-.38.81-.65 1.03-.8l.082-.052.188-.123q.014-.014.03-.015c.84-.48 1.41-1.3 1.58-2.27.17-.96-.11-1.93-.75-2.67-.03-.03-.09-.1-.09-.1l-.04-.05-.07-.07a5.2 5.2 0 0 0-1.01-.77l-.029-.016A15 15 0 0 1 30 14.87c8.284 0 15 6.716 15 15s-6.716 15-15 15m0-8.5a6.47 6.47 0 0 1-5.453-2.932 1.25 1.25 0 1 0-2.095 1.364A8.97 8.97 0 0 0 30 38.87a8.97 8.97 0 0 0 7.547-4.068 1.25 1.25 0 1 0-2.095-1.364A6.47 6.47 0 0 1 30 36.37m6-9.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-10 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`,
  'regular': `<path d="M11 7.75a.75.75 0 0 0-1.5 0v9a1.25 1.25 0 1 1-2.5 0v-7.5a.75.75 0 0 0-1.5 0v10.574c0 .79.163 1.57.478 2.295l1.36 3.127a3.75 3.75 0 0 0 3.44 2.254h3.04c1.427 0 2.803-.858 3.73-2.214 2.668-3.904 6.158-6.306 7.852-7.323-.274-.451-.64-.841-1.092-.996-.461-.157-1.46-.211-3.271 1.255A1.25 1.25 0 0 1 19 17.25v-9.5a.75.75 0 0 0-1.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-9a.75.75 0 0 0-1.5 0v9a1.25 1.25 0 1 1-2.5 0zm10.5 7.21c1.33-.63 2.538-.727 3.617-.358 1.512.517 2.328 1.816 2.702 2.581.567 1.16-.076 2.306-.912 2.793-1.424.83-4.785 3.049-7.296 6.72C18.349 28.547 16.276 30 13.82 30h-3.042a6.25 6.25 0 0 1-5.73-3.756l-1.362-3.128A8.25 8.25 0 0 1 3 19.824V9.25a3.25 3.25 0 0 1 4.39-3.045 3.25 3.25 0 0 1 4-1.5 3.25 3.25 0 0 1 5.72 0A3.25 3.25 0 0 1 21.5 7.75zm-6.38 16.937C16.051 39.286 22.358 45 30 45c8.285 0 15-6.716 15-15s-6.715-15-15-15q-.578 0-1.145.043c.355.482.601.935.761 1.262.198.404.321.805.382 1.195H30c6.904 0 12.5 5.596 12.5 12.5S36.904 42.5 30 42.5c-6.529 0-11.889-5.006-12.451-11.389a8.4 8.4 0 0 1-2.43.786m7.698 1.305a1.25 1.25 0 0 1 1.73.366A6.47 6.47 0 0 0 30 36.5a6.47 6.47 0 0 0 5.452-2.932 1.25 1.25 0 1 1 2.096 1.364A8.97 8.97 0 0 1 30 39a8.97 8.97 0 0 1-7.548-4.068 1.25 1.25 0 0 1 .366-1.73M34 29a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-6-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function EmojiHandIcon({ 
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

  const gradientId = 'emojihandicon_gradient';
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