
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.25C2 6.56 2.56 6 3.25 6h25.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 8.5 2 7.94 2 7.25m13.308 9.387c1.209.62 2.655 1.363 4.715 1.363 1.8 0 3.183-.582 4.298-1.052q.23-.098.446-.186c1.181-.482 2.205-.794 3.711-.459a1.25 1.25 0 0 0 .544-2.44c-2.234-.497-3.826.024-5.2.584l-.49.203h-.001c-1.126.469-2.04.85-3.308.85-1.426 0-2.404-.487-3.622-1.112l-.05-.025C15.145 13.743 13.698 13 11.638 13s-3.507.743-4.715 1.363l-.05.025C5.656 15.013 4.678 15.5 3.25 15.5a1.25 1.25 0 1 0 0 2.5c2.06 0 3.507-.743 4.715-1.363l.05-.025c1.217-.625 2.195-1.112 3.622-1.112 1.426 0 2.405.487 3.622 1.112zm-13.077 8.39a1.25 1.25 0 0 0 2.037 1.448l.05-.066a7 7 0 0 1 .921-.955c.648-.547 1.399-.954 2.146-.954.343 0 .482.082.563.142.13.098.245.243.485.581l.029.04c.205.29.526.743 1 1.098.547.408 1.22.639 2.058.639 1.583 0 2.755-.83 3.587-1.42l.083-.06c.931-.658 1.502-1.02 2.227-1.02.705 0 1.214.343 2.079.997l.075.057c.785.595 1.908 1.446 3.512 1.446 1.529 0 3.19-.774 4.328-1.408a21 21 0 0 0 2.091-1.344h.001l.001-.001a1.25 1.25 0 0 0-1.508-1.994 11 11 0 0 1-.5.352c-.325.22-.78.512-1.302.803-1.106.616-2.277 1.092-3.11 1.092-.706 0-1.215-.343-2.08-.997l-.075-.057C20.144 22.851 19.021 22 17.417 22c-1.583 0-2.755.83-3.587 1.42l-.083.06c-.931.658-1.501 1.02-2.227 1.02-.342 0-.481-.082-.562-.142-.13-.098-.246-.243-.486-.581l-.028-.04c-.205-.29-.526-.743-1-1.098-.547-.408-1.22-.639-2.059-.639-1.614 0-2.93.843-3.76 1.546a9.3 9.3 0 0 0-1.359 1.432l-.033.046-.001.001z"/>`,
  'regular': `<path d="M29 8H3c-.55 0-1-.45-1-1s.45-1 1-1h26c.55 0 1 .45 1 1s-.45 1-1 1m-8.896 9.5c-2.028 0-3.457-.72-4.725-1.36l-.024-.012C14.146 15.523 13.101 15 11.552 15s-2.595.523-3.804 1.128l-.023.012C6.466 16.78 5.027 17.5 3 17.5c-.55 0-.999-.45-.999-1s.45-1 1-1c1.548 0 2.607-.53 3.826-1.14C8.085 13.72 9.524 13 11.552 13s3.457.72 4.726 1.36l.023.012c1.209.605 2.255 1.128 3.803 1.128 1.349 0 2.367-.417 3.448-.86l.056-.023c1.487-.609 3.164-1.296 5.609-.767.54.12.879.65.759 1.19s-.65.88-1.189.76c-1.838-.4-3.037.09-4.426.66l-.021.009c-1.164.477-2.488 1.021-4.236 1.021zm-.357 7.533c.91.679 1.949 1.447 3.478 1.447v.02c2.659 0 5.997-2.415 6.367-2.694.45-.33.54-.958.21-1.397a1.005 1.005 0 0 0-1.4-.21c-.86.64-3.478 2.295-5.177 2.295-.865 0-1.522-.483-2.276-1.038l-.013-.01c-.91-.678-1.96-1.446-3.478-1.446-1.51 0-2.595.748-3.56 1.413l-.019.014-.022.015c-.82.562-1.535 1.052-2.417 1.052-.681 0-.87-.255-1.267-.794l-.032-.044C9.66 22.998 8.93 22 7.222 22c-2.855 0-4.89 2.72-5.024 2.898l-.003.006a.98.98 0 0 0 .22 1.387c.45.319 1.079.219 1.399-.22l.012-.016c.15-.19 1.623-2.07 3.396-2.07.682 0 .87.256 1.267.795l.033.044c.48.658 1.21 1.656 2.918 1.656 1.51 0 2.595-.748 3.56-1.413l.019-.014c.83-.569 1.569-1.067 2.439-1.067s1.529.479 2.289 1.047"/>`
} as const;

export default function LineStyleSketchIcon({ 
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

  const gradientId = 'linestylesketchicon_gradient';
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