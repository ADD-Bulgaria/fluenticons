
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M8 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779A6 6 0 1 0 8 1"/><path d="M8 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779A6 6 0 1 0 8 1"/><path d="M6.5 5.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM6 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 8"/><path fill-rule="evenodd" d="M13.925 10.212a1.5 1.5 0 0 1 1.026-.192l.773.133a2 2 0 0 1 1.467 1.114l1.2 2.527c.56 1.19.687 2.186.568 3.002a3.5 3.5 0 0 1-.82 1.803 1.15 1.15 0 0 1-1.01.397 1.4 1.4 0 0 1-.902-.494l-.818-.97A1.5 1.5 0 0 0 14.263 17h-3.526a1.5 1.5 0 0 0-1.146.533l-.818.969c-.23.272-.553.457-.902.494a1.15 1.15 0 0 1-1.01-.396 3.5 3.5 0 0 1-.82-1.805c-.12-.815.008-1.811.569-3v-.002l1.199-2.526a2 2 0 0 1 1.467-1.114l.773-.133a1.5 1.5 0 0 1 1.026.192l.125.075c.233.14.5.213.77.213h1.06a1.5 1.5 0 0 0 .77-.213z" clip-rule="evenodd"/><path d="M13.25 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"/>`,
  'filled': `<path d="M2 7a6 6 0 1 1 11.554 2.275 3 3 0 0 0-.143.079l-.125.075a.5.5 0 0 1-.257.071h-1.058a.5.5 0 0 1-.257-.071l-.125-.075a2.5 2.5 0 0 0-1.71-.32l-.772.134a3 3 0 0 0-2.202 1.67l-.87 1.833a6 6 0 0 1-1.039-.476l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 2 7m4-1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3A.5.5 0 0 0 6 6m.5 1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm8.45 2.52a1.5 1.5 0 0 0-1.025.192l-.125.075a1.5 1.5 0 0 1-.77.213h-1.06a1.5 1.5 0 0 1-.77-.213l-.125-.075a1.5 1.5 0 0 0-1.026-.192l-.773.133a2 2 0 0 0-1.467 1.114l-1.2 2.527c-.56 1.19-.687 2.185-.568 3.001a3.5 3.5 0 0 0 .82 1.804c.272.316.65.436 1.01.397a1.4 1.4 0 0 0 .902-.494l.818-.97A1.5 1.5 0 0 1 10.737 17h3.526a1.5 1.5 0 0 1 1.146.533l.818.969c.23.272.553.456.902.494.361.04.738-.081 1.01-.397.342-.395.7-.989.82-1.804s-.008-1.812-.569-3l-1.199-2.528a2 2 0 0 0-1.467-1.114zM12.5 14a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"/>`,
  'regular': `<path d="M6.5 5.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM6 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 8M2 7a6 6 0 1 1 11.554 2.275 3 3 0 0 0-.143.079l-.125.075a.5.5 0 0 1-.257.071h-.698a5 5 0 1 0-8.632.052.5.5 0 0 1 .051.393l-.509 1.78 1.658-.552a.5.5 0 0 1 .426.052q.533.338 1.143.536l-.432.91a6 6 0 0 1-1.04-.476l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 2 7m11.25 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m.675-3.038a1.5 1.5 0 0 1 1.026-.192l.773.133a2 2 0 0 1 1.467 1.114l1.2 2.527c.56 1.19.687 2.185.568 3.001a3.5 3.5 0 0 1-.82 1.804 1.15 1.15 0 0 1-1.01.397 1.4 1.4 0 0 1-.902-.494l-.818-.97A1.5 1.5 0 0 0 14.263 17h-3.526a1.5 1.5 0 0 0-1.146.533l-.818.969c-.23.272-.553.456-.902.494a1.15 1.15 0 0 1-1.01-.397 3.5 3.5 0 0 1-.82-1.804c-.12-.816.008-1.812.569-3l1.199-2.528a2 2 0 0 1 1.467-1.114l.773-.133a1.5 1.5 0 0 1 1.026.192l.125.075c.233.14.5.213.77.213h1.06a1.5 1.5 0 0 0 .77-.213zm.856.794a.5.5 0 0 0-.342.063l-.124.075a2.5 2.5 0 0 1-1.286.356h-1.058a2.5 2.5 0 0 1-1.285-.356l-.125-.075a.5.5 0 0 0-.342-.063l-.773.133a1 1 0 0 0-.734.557L7.514 14.22c-.492 1.043-.57 1.84-.484 2.43a2.5 2.5 0 0 0 .587 1.295.15.15 0 0 0 .146.056.4.4 0 0 0 .246-.145l.818-.969a2.5 2.5 0 0 1 1.91-.888h3.526a2.5 2.5 0 0 1 1.91.888l.818.97a.4.4 0 0 0 .246.144c.06.007.105-.01.146-.056.244-.283.5-.705.587-1.295s.008-1.386-.484-2.43l-1.198-2.525a1 1 0 0 0-.734-.557z"/>`
} as const;

export default function GameChatIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'gamechaticon_gradient';
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