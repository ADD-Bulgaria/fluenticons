import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.488 8.511a3.5 3.5 0 0 1 .837 1.363l.548 1.682a.664.664 0 0 0 1.254 0l.548-1.682a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.683-.547a3.47 3.47 0 0 1-2.198-2.196l-.547-1.682a.665.665 0 0 0-1.255 0l-.547 1.682-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M17 4h1.287L17 4.44a2.17 2.17 0 0 0-1.5 2.06 2.17 2.17 0 0 0 1.45 2l1.71.56c.29.093.554.254.77.47 0 .036.04.072.084.111a.5.5 0 0 1 .076.079q.106.131.184.28H11a1 1 0 1 0 0 2h9.45a2.16 2.16 0 0 0 3.3 1.08 1.9 1.9 0 0 0-.25.9c0 .383.118.757.34 1.07.224.313.538.55.9.68l1 .31q.08.035.14.1a.3.3 0 0 1 .09.15l.3.91a2 2 0 0 0 .73.967V20h-6.25a3.25 3.25 0 0 0-3.25 3.25V29H8.25A3.25 3.25 0 0 1 5 25.75V7.25A3.25 3.25 0 0 1 8.25 4H10V3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0zm-7 12a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H11a1 1 0 0 0-1 1m1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm8.707 8.707a1 1 0 0 1-.207.159V23.25c0-.69.56-1.25 1.25-1.25h5.664z"/>`,
  'regular': `<path d="M20.488 8.511a3.5 3.5 0 0 1 .837 1.363l.548 1.682a.664.664 0 0 0 1.254 0l.548-1.682a3.47 3.47 0 0 1 2.197-2.196l1.684-.547a.665.665 0 0 0 0-1.254l-.034-.008-1.683-.547a3.47 3.47 0 0 1-2.198-2.196l-.547-1.682a.665.665 0 0 0-1.255 0l-.547 1.682-.014.042a3.47 3.47 0 0 1-2.15 2.154l-1.684.547a.665.665 0 0 0 0 1.254l1.684.546c.513.171.979.46 1.36.842m9.333 4.847.918.298.019.004a.362.362 0 0 1 0 .684l-.919.299a1.9 1.9 0 0 0-1.198 1.197l-.299.918a.363.363 0 0 1-.684 0l-.299-.918a1.89 1.89 0 0 0-1.198-1.202l-.919-.298a.362.362 0 0 1 0-.684l.919-.299a1.9 1.9 0 0 0 1.18-1.197l.299-.918a.363.363 0 0 1 .684 0l.298.918a1.89 1.89 0 0 0 1.199 1.197M17 4h1.287L17 4.44A2.17 2.17 0 0 0 15.56 6H8.25C7.56 6 7 6.56 7 7.25v18.5c0 .69.56 1.25 1.25 1.25h9.25v-3.75A3.25 3.25 0 0 1 20.75 20H25v-4.19l.74.23q.08.035.14.1a.3.3 0 0 1 .09.15l.3.91a2 2 0 0 0 .73.967V21a1 1 0 0 1-.293.707l-7 7A1 1 0 0 1 19 29H8.25A3.25 3.25 0 0 1 5 25.75V7.25A3.25 3.25 0 0 1 8.25 4H10V3a1 1 0 1 1 2 0v1h3V3a1 1 0 1 1 2 0zm2.5 22.086L23.586 22H20.75c-.69 0-1.25.56-1.25 1.25zM11 10h8.774q.077.144.126.3l.55 1.7H11a1 1 0 1 1 0-2m-1 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H11a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"/>`
} as const;

export default function NotepadSparkleIcon({ 
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

  const gradientId = 'notepadsparkleicon_gradient';
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