
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.695 4.222c-.23-.554-.891-.791-1.384-.45a10 10 0 0 0-2.54 2.539c-.342.493-.104 1.154.45 1.384.471.195 1.009.005 1.31-.407a8 8 0 0 1 1.756-1.756c.412-.3.603-.838.408-1.31m3.062-.127c-.505.079-1.02-.167-1.215-.638-.229-.554.07-1.19.66-1.297a10 10 0 0 1 3.591.001c.59.107.89.743.66 1.297-.195.471-.71.717-1.214.638a8 8 0 0 0-2.482 0m9.015 3.6c-.472.196-1.009.006-1.31-.406a8 8 0 0 0-1.755-1.755c-.412-.3-.602-.838-.407-1.31.23-.554.891-.791 1.384-.45.99.687 1.851 1.547 2.538 2.538.341.493.104 1.154-.45 1.384M12.78 21.97a6.5 6.5 0 0 1-1.29-1.986 8 8 0 0 1-.736-.08c-.504-.078-1.019.167-1.214.639-.23.554.07 1.19.66 1.296a10 10 0 0 0 2.58.13m7.2-10.48c.74.306 1.412.745 1.985 1.287a10.2 10.2 0 0 0-.131-2.574c-.107-.59-.743-.89-1.297-.66-.471.195-.716.71-.638 1.214q.057.362.08.733M4.218 16.302c.472-.195 1.01-.004 1.31.408a8 8 0 0 0 1.757 1.757c.412.301.603.838.408 1.31-.23.554-.891.791-1.384.45a10 10 0 0 1-2.54-2.54c-.342-.494-.105-1.155.45-1.385m-.765-6.76c.471.195.717.71.638 1.214a8 8 0 0 0 0 2.485c.078.504-.167 1.019-.639 1.214-.554.23-1.19-.07-1.296-.66a10 10 0 0 1 0-3.593c.107-.59.743-.89 1.297-.66M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`,
  'regular': `<path d="M7.587 3.963c-.171-.414-.665-.591-1.04-.347a10.05 10.05 0 0 0-2.93 2.931c-.246.376-.069.869.346 1.04.354.147.759.004.972-.315a8.6 8.6 0 0 1 2.337-2.337c.319-.213.462-.618.315-.972m2.759-.302c-.377.074-.765-.11-.911-.465-.172-.414.052-.888.49-.98a10 10 0 0 1 4.147-.001c.438.092.662.566.49.98a.806.806 0 0 1-.91.465 8.5 8.5 0 0 0-3.306 0m9.69 3.925c-.354.147-.758.003-.972-.315a8.6 8.6 0 0 0-2.339-2.338c-.318-.213-.462-.618-.315-.972.171-.414.665-.591 1.04-.347 1.17.762 2.17 1.762 2.933 2.931.245.376.068.87-.346 1.041M12.782 21.97a6.5 6.5 0 0 1-1.051-1.474 8.5 8.5 0 0 1-1.386-.157c-.376-.074-.764.11-.91.465-.172.414.051.888.49.98a10 10 0 0 0 2.857.186m7.715-10.24c.54.281 1.036.636 1.474 1.05a10.1 10.1 0 0 0-.186-2.857c-.092-.438-.566-.661-.98-.49-.355.147-.54.535-.465.911q.134.676.157 1.386M3.96 16.41c.354-.147.759-.003.972.315a8.6 8.6 0 0 0 2.338 2.34c.319.213.462.618.315.972-.171.414-.665.59-1.04.346a10.05 10.05 0 0 1-2.932-2.933c-.244-.375-.067-.869.347-1.04m-.765-6.975c.354.147.54.535.465.91a8.5 8.5 0 0 0 0 3.306c.073.376-.112.764-.466.91-.414.172-.888-.051-.98-.49a10 10 0 0 1 0-4.146c.093-.438.567-.662.981-.49M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.707l1.647 1.647-1.647 1.646a.5.5 0 0 0 .708.707l1.646-1.646 1.646 1.646a.5.5 0 0 0 .708-.707L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`
} as const;

export default function CircleHintDismissIcon({ 
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

  const gradientId = 'circlehintdismissicon_gradient';
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