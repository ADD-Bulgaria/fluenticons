import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m28 29.768 13.866 13.866a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L13.232 15H9a5.25 5.25 0 0 0-5.25 5.25v7.5C3.75 30.65 6.1 33 9 33h4.702a4.75 4.75 0 0 1 3.173 1.215l8.206 7.366C26.208 42.594 28 41.794 28 40.28zm0-7.071-9.959-9.96 7.04-6.319C26.208 5.408 28 6.207 28 7.721zm8.186 8.185-1.85-1.85A11.4 11.4 0 0 0 35.5 24c0-2.478-.787-4.45-1.58-5.808a11 11 0 0 0-1.08-1.544 8 8 0 0 0-.426-.468l-.017-.016h.001a1.25 1.25 0 0 1 1.703-1.83c.168.166 0 0 0 0l.001.002.002.001.005.005.014.013.042.04q.051.05.137.14c.113.117.269.287.452.505.366.436.847 1.072 1.326 1.893a13.96 13.96 0 0 1 .106 13.95m4.822 4.823-1.845-1.845c1.208-2.336 2.347-5.653 2.347-9.86 0-4.5-1.304-7.982-2.6-10.334a18.5 18.5 0 0 0-1.772-2.663 13 13 0 0 0-.715-.812l-.032-.033-.006-.005a1.25 1.25 0 0 1 1.727-1.808c.446.469.001 0 .001 0l.001.002.003.002.006.006.018.018.06.059q.074.075.201.211a15 15 0 0 1 .682.791A21 21 0 0 1 41.1 12.46C42.559 15.107 44.01 19 44.01 24s-1.451 8.893-2.91 11.54q-.045.083-.092.165"/>`,
  'regular': `<path d="m28 29.768 13.866 13.866a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L13.232 15H9a5.25 5.25 0 0 0-5.25 5.25v7.5C3.75 30.65 6.1 33 9 33h4.702a4.75 4.75 0 0 1 3.173 1.215l8.206 7.366C26.208 42.594 28 41.794 28 40.28zm-2.5-2.5v11.33l-6.955-6.243a7.25 7.25 0 0 0-4.843-1.855H9a2.75 2.75 0 0 1-2.75-2.75v-7.5A2.75 2.75 0 0 1 9 17.5h4.702c.613 0 1.218-.078 1.803-.228zm-5.689-12.76-1.77-1.77 7.04-6.32C26.208 5.408 28 6.207 28 7.721v14.976l-2.5-2.5V9.402zm16.375 16.374-1.851-1.85A11.4 11.4 0 0 0 35.5 24c0-2.478-.787-4.45-1.58-5.808a11 11 0 0 0-1.08-1.544 8 8 0 0 0-.426-.468l-.017-.016h.001a1.25 1.25 0 0 1 1.703-1.83l-.851.916c.85-.916.851-.915.851-.915h.001l.002.002.005.005.014.013a4 4 0 0 1 .179.18c.113.117.269.287.452.505.366.436.847 1.072 1.326 1.893a13.96 13.96 0 0 1 .106 13.95m4.833 4.833-1.846-1.845C40.371 31.548 41.5 28.238 41.5 24c0-4.553-1.302-8.034-2.594-10.37a18 18 0 0 0-1.766-2.636 12 12 0 0 0-.71-.797l-.032-.032-.003-.003-.002-.002a1.25 1.25 0 0 1 1.711-1.822l-.854.912.855-.912.001.001.003.003.006.006.019.017.06.059q.074.075.202.209c.17.18.404.44.682.782a20.4 20.4 0 0 1 2.016 3.005C42.552 15.06 44 18.953 44 24s-1.448 8.941-2.906 11.58l-.02.036z"/>`
} as const;

export default function SpeakerOffIcon({ 
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

  const gradientId = 'speakerofficon_gradient';
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