import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v12.568a12.7 12.7 0 0 1-2.277-.96q-1.006-.54-2.03-1.299a2.84 2.84 0 0 0-3.385 0l-.06.044a1.25 1.25 0 0 0-.498-.103h-13.5a1.25 1.25 0 1 0 0 2.5h9.086q-1.256.302-2.503.3A2.83 2.83 0 0 0 24 28.125V30.5h-3.75a1.25 1.25 0 1 0 0 2.5H24v.9c0 2.077.41 4.024 1.252 5.805Q25.827 40.92 26.65 42h-14.4A6.25 6.25 0 0 1 6 35.75zm11 3.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-18c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m22.556 11.023q.222.064.444.123 1.57.405 3.167.404c.46 0 .833.37.833.825V33.9c0 5.501-3.286 9.543-9.695 12.043a.84.84 0 0 1-.61 0C33.013 44.897 30.877 43.58 29.3 42a12 12 0 0 1-.382-.4 11.1 11.1 0 0 1-1.86-2.75Q26.002 36.614 26 33.9v-5.775a.83.83 0 0 1 .833-.825c2.96 0 5.843-1.038 8.667-3.135a.84.84 0 0 1 1 0q1.132.84 2.278 1.455 1.379.74 2.778 1.153m-7.248-4.214.09.122Z"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h14.4a13 13 0 0 1-1.493-2.5H12.25a3.75 3.75 0 0 1-3.75-3.75v-23.5a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v11.485q.111.063.223.123 1.148.614 2.277.96V12.25A6.25 6.25 0 0 0 35.75 6zM42 26.896q1.57.405 3.167.404c.46 0 .833.37.833.825V33.9c0 5.501-3.286 9.543-9.695 12.043a.84.84 0 0 1-.61 0C33.013 44.897 30.877 43.58 29.3 42a12 12 0 0 1-.382-.4 11.3 11.3 0 0 1-1.524-2.1q-.18-.32-.335-.65Q26 36.614 26 33.9v-5.775a.83.83 0 0 1 .833-.825c2.96 0 5.843-1.038 8.667-3.135a.84.84 0 0 1 1 0q1.132.84 2.278 1.455.36.193.722.364a14.3 14.3 0 0 0 2.5.912M29.336 25c1.617-.39 3.25-1.173 4.912-2.397a1.25 1.25 0 0 0-.498-.103h-13.5a1.25 1.25 0 1 0 0 2.5zM24 33v-2.5h-3.75a1.25 1.25 0 1 0 0 2.5zm-7-17.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-18c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function TextBulletListSquareShieldIcon({ 
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

  const gradientId = 'textbulletlistsquareshieldicon_gradient';
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