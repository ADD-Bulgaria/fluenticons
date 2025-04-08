
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m13.883 8.828.027-.015q.037-.022.121-.066.169-.092.515-.256c.461-.216 1.15-.51 2.037-.805A23.6 23.6 0 0 1 24 6.5c3.09 0 5.643.594 7.417 1.186.887.295 1.576.59 2.037.805a12 12 0 0 1 .636.322l.025.014h.001l.001.001h.002a1.25 1.25 0 0 0 1.709-.444 1.26 1.26 0 0 0-.446-1.712l-.002-.002-.005-.003-.015-.008a6 6 0 0 0-.22-.12 14 14 0 0 0-.625-.311 22 22 0 0 0-2.307-.914A26 26 0 0 0 24 4c-3.41 0-6.232.656-8.208 1.314-.988.33-1.768.66-2.307.914a14 14 0 0 0-.845.43l-.015.01-.005.002-.002.002s.18-.1-.002 0a1.25 1.25 0 0 0 1.267 2.156M8 17.058a4.56 4.56 0 0 1 4.559-4.558H25.44A4.56 4.56 0 0 1 30 17.059V30.94a4.56 4.56 0 0 1-4.559 4.559H12.56A4.56 4.56 0 0 1 8 30.941zm24 10.496 6.14 5.041c1.142.938 2.86.125 2.86-1.352V16.758c0-1.478-1.718-2.29-2.86-1.353L32 20.445zM13.883 39.172a1.25 1.25 0 0 0-1.267 2.156c.289.158.002 0 .002 0l.002.002.005.003.015.008.049.028.17.093c.147.077.357.184.626.31.54.253 1.319.584 2.307.914A26 26 0 0 0 24 44c3.41 0 6.232-.656 8.208-1.314a22 22 0 0 0 2.307-.913 14 14 0 0 0 .796-.404l.05-.028.014-.008.005-.003.002-.002h.002a1.25 1.25 0 0 0-1.266-2.157v.001h-.002v.001l-.026.014-.12.066q-.17.092-.516.256c-.461.216-1.15.51-2.037.805A23.6 23.6 0 0 1 24 41.5c-3.09 0-5.643-.594-7.417-1.186a19 19 0 0 1-2.037-.805 12 12 0 0 1-.636-.322z"/>`,
  'regular': `<path d="m13.883 8.828.027-.015q.037-.022.121-.066.169-.092.515-.256c.461-.216 1.15-.51 2.037-.805A23.6 23.6 0 0 1 24 6.5c3.09 0 5.643.594 7.417 1.186.887.295 1.576.59 2.037.805a12 12 0 0 1 .636.322l.025.014h.001l.001.001h.002a1.25 1.25 0 0 0 1.709-.444 1.26 1.26 0 0 0-.446-1.712l-.002-.002-.005-.003-.015-.008a6 6 0 0 0-.22-.12 14 14 0 0 0-.625-.311 22 22 0 0 0-2.307-.914A26 26 0 0 0 24 4c-3.41 0-6.232.656-8.208 1.314-.988.33-1.768.66-2.307.914a14 14 0 0 0-.845.43l-.015.01-.005.002-.002.002s.18-.1-.002 0a1.25 1.25 0 0 0 1.267 2.156M12.56 12.5h13.88A4.56 4.56 0 0 1 31 17.059v1.517l5.618-3.271c1.5-.873 3.382.209 3.382 1.944v13.502c0 1.735-1.882 2.817-3.382 1.944L31 29.425v1.516a4.56 4.56 0 0 1-4.559 4.559H12.56A4.56 4.56 0 0 1 8 30.941V17.06a4.56 4.56 0 0 1 4.559-4.559M31 21.469v5.062l6.5 3.785V17.684zm-20.5-4.41V30.94a2.06 2.06 0 0 0 2.059 2.059H26.44a2.06 2.06 0 0 0 2.059-2.059V17.06A2.06 2.06 0 0 0 26.441 15H12.56a2.06 2.06 0 0 0-2.059 2.059m3.383 22.113a1.25 1.25 0 0 0-1.267 2.156c.289.158.002 0 .002 0l.002.002.005.003.015.008.049.028.17.093c.147.077.357.184.626.31.54.253 1.319.584 2.307.914A26 26 0 0 0 24 44c3.41 0 6.232-.656 8.208-1.314a22 22 0 0 0 2.307-.913 14 14 0 0 0 .796-.404l.05-.028.014-.008.005-.003.002-.002h.002a1.25 1.25 0 0 0-1.266-2.157v.001h-.002v.001l-.026.014-.12.066q-.17.092-.516.256c-.461.216-1.15.51-2.037.805A23.6 23.6 0 0 1 24 41.5c-3.09 0-5.643-.594-7.417-1.186a19 19 0 0 1-2.037-.805 12 12 0 0 1-.636-.322z"/>`
} as const;

export default function MeetNowIcon({ 
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

  const gradientId = 'meetnowicon_gradient';
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