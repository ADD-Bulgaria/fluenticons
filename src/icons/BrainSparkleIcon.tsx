
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m14.878.282.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM17.502 12a1.33 1.33 0 0 1-.746-.23c-.22-.16-.38-.371-.48-.621l-.26-.802a.5.5 0 0 0-.14-.22.6.6 0 0 0-.22-.14l-.762-.25c-.27-.1-.49-.261-.65-.481s-.24-.481-.24-.752c0-.19.04-.38.12-.55q-.24-.06-.45-.21a1.5 1.5 0 0 1-.521-.692l-.36-1.092c-.09-.23-.18-.36-.29-.47a1.3 1.3 0 0 0-.471-.291l-1.061-.35a1.4 1.4 0 0 1-.471-.267v12.67a2.973 2.973 0 0 0 4.888-1.64l.037-.187a3.25 3.25 0 0 0 2.56-3.498 1.5 1.5 0 0 1-.483.073M9.5 2.462a2.423 2.423 0 0 0-3.8 1.486l-.125.627-.406.081A2.7 2.7 0 0 0 3 7.302V7.5c0 .726.31 1.38.805 1.837a3.248 3.248 0 0 0 .77 6.088l.037.185A2.973 2.973 0 0 0 9.5 17.251z"/>`,
  'regular': `<path d="m14.878.282.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.071.348.021.006a.423.423 0 0 1 0 .798l-1.071.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.2 2.2 0 0 0-.532-.867 2.2 2.2 0 0 0-.866-.536l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0m4.905 7.931-.766-.248a1.58 1.58 0 0 1-.998-.999l-.25-.764a.302.302 0 0 0-.57 0l-.248.764a1.58 1.58 0 0 1-.984.999l-.765.248a.303.303 0 0 0 0 .57l.765.249a1.58 1.58 0 0 1 1 1.002l.248.764a.302.302 0 0 0 .57 0l.249-.764a1.58 1.58 0 0 1 .999-.999l.765-.248a.303.303 0 0 0 0-.57zM16.97 11.89a1.46 1.46 0 0 0 1.013.038q.016.158.016.32a3.25 3.25 0 0 1-2.575 3.178l-.037.185A2.973 2.973 0 0 1 10 16.678a2.973 2.973 0 0 1-5.388-1.068l-.037-.185a3.248 3.248 0 0 1-.77-6.088A2.5 2.5 0 0 1 3 7.5v-.198a2.7 2.7 0 0 1 2.169-2.646l.406-.08.125-.628a2.423 2.423 0 0 1 4.3-1 2.4 2.4 0 0 1 .293-.318l-.033.045c-.17.24-.26.52-.26.821s.09.581.26.821q.104.147.24.265v10.445a1.973 1.973 0 0 0 3.907.387l.103-.512a.5.5 0 0 1 .392-.392l.291-.059a2.25 2.25 0 0 0 1.778-2.562M9.5 15.027V4.423a1.423 1.423 0 0 0-2.819-.279l-.19.954a.5.5 0 0 1-.393.392l-.733.147A1.7 1.7 0 0 0 4 7.302V7.5A1.5 1.5 0 0 0 5.5 9a.5.5 0 0 1 0 1h-.252a2.248 2.248 0 0 0-.441 4.451l.291.059a.5.5 0 0 1 .392.392l.103.512a1.973 1.973 0 0 0 3.907-.387"/>`
} as const;

export default function BrainSparkleIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'brainsparkleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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