import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.695 4.222c-.23-.554-.891-.791-1.384-.45a10 10 0 0 0-2.54 2.539c-.342.493-.104 1.154.45 1.384.471.195 1.009.005 1.31-.407a8 8 0 0 1 1.756-1.756c.412-.3.603-.838.408-1.31m3.062-.127c-.505.079-1.02-.167-1.215-.638-.229-.554.07-1.19.66-1.297a10 10 0 0 1 3.591.001c.59.107.89.743.66 1.297-.195.471-.71.717-1.214.638a8 8 0 0 0-2.482 0m9.015 3.6c-.472.196-1.009.006-1.31-.406a8 8 0 0 0-1.755-1.755c-.412-.3-.602-.838-.407-1.31.23-.554.891-.791 1.384-.45.99.687 1.851 1.547 2.538 2.538.341.493.104 1.154-.45 1.384m.767 6.759c-.471-.195-.717-.71-.638-1.214a8 8 0 0 0 0-2.483c-.08-.504.166-1.019.637-1.214.554-.23 1.19.07 1.297.66a10 10 0 0 1 0 3.59c-.106.59-.742.89-1.296.66M9.541 20.543c.195-.472.71-.717 1.214-.639a8 8 0 0 0 2.246.034v2.012a10 10 0 0 1-2.8-.11c-.59-.108-.89-.743-.66-1.297m-5.322-4.24c.472-.196 1.01-.005 1.31.407a8 8 0 0 0 1.757 1.757c.412.301.603.838.408 1.31-.23.554-.891.791-1.384.45a10 10 0 0 1-2.54-2.54c-.342-.494-.105-1.155.45-1.385m-.765-6.761c.471.195.717.71.638 1.214a8 8 0 0 0 0 2.485c.078.504-.167 1.019-.639 1.214-.554.23-1.19-.07-1.296-.66a10 10 0 0 1 0-3.593c.107-.59.743-.89 1.297-.66m11.032 2.508a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7"/>`,
  'regular': `<path d="M7.587 3.963c-.171-.414-.665-.591-1.04-.347a10.05 10.05 0 0 0-2.93 2.931c-.246.376-.069.87.346 1.04.354.147.759.004.972-.315a8.6 8.6 0 0 1 2.337-2.337c.319-.213.462-.618.315-.972m2.759-.302c-.377.074-.765-.11-.911-.465-.172-.414.052-.888.49-.98a10 10 0 0 1 4.147-.001c.438.092.662.566.49.98a.806.806 0 0 1-.91.465 8.5 8.5 0 0 0-3.306.001m9.69 3.925c-.354.147-.758.003-.972-.315a8.6 8.6 0 0 0-2.339-2.338c-.318-.213-.462-.618-.315-.972.171-.414.665-.591 1.04-.347 1.17.762 2.17 1.762 2.933 2.931.245.376.068.87-.346 1.041m.768 6.978c-.354-.147-.539-.535-.465-.911a8.5 8.5 0 0 0 0-3.309c-.074-.376.11-.764.465-.91.414-.172.888.051.98.49a10 10 0 0 1 0 4.15c-.092.438-.566.661-.98.49m-11.37 6.24c.146-.354.534-.54.91-.465a8.5 8.5 0 0 0 2.657.103v1.509a10.1 10.1 0 0 1-3.077-.167c-.439-.092-.662-.566-.49-.98M3.96 16.41c.354-.147.759-.003.972.315a8.6 8.6 0 0 0 2.338 2.34c.319.213.462.618.315.972-.171.414-.665.59-1.04.346a10.05 10.05 0 0 1-2.932-2.933c-.244-.375-.067-.869.347-1.04m-.765-6.975c.354.147.54.535.465.91a8.5 8.5 0 0 0 0 3.306c.073.376-.112.764-.466.911-.414.172-.888-.052-.98-.49a10 10 0 0 1 0-4.147c.093-.438.567-.662.981-.49m11.29 2.615a.75.75 0 0 1 .826.198l6.365 7.057a.75.75 0 0 1-.738 1.23l-3.537-.878-2.03 3.015a.75.75 0 0 1-1.372-.42l.005-9.502a.75.75 0 0 1 .48-.7"/>`
} as const;

export default function CircleHintCursorIcon({ 
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

  const gradientId = 'circlehintcursoricon_gradient';
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