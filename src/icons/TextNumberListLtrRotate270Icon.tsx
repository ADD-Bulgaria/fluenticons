import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 18a.75.75 0 0 0-.307 1.434l.003.001.024.012q.036.017.108.056c.096.051.232.13.385.237.312.218.662.524.901.907a.75.75 0 1 0 1.272-.795 4 4 0 0 0-.248-.353H7.25a.75.75 0 0 0 0-1.5zM18 4.5V13l.007.117A1 1 0 0 0 20 13V4.5l-.007-.117A1 1 0 0 0 18 4.5m-6.5 0V13l.007.117A1 1 0 0 0 13.5 13V4.5l-.007-.117A1 1 0 0 0 11.5 4.5M5 4.5V13l.007.117A1 1 0 0 0 7 13V4.5l-.007-.117A1 1 0 0 0 5 4.5m5.52 14.349c-.053.3.066.676.26.87a.75.75 0 0 1-1.06 1.06c-.556-.555-.812-1.43-.677-2.191.07-.398.254-.806.605-1.116.358-.315.825-.473 1.352-.473.62 0 1.08.272 1.42.606.283.278.511.631.689.906l.051.08c.127.195.237.354.34.482V17.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75c-1.313 0-1.953-.984-2.337-1.576l-.04-.06c-.205-.317-.345-.533-.504-.69-.136-.133-.238-.174-.369-.174-.223 0-.318.06-.36.097a.42.42 0 0 0-.12.252m10.76 2.18s.084-.092.005-.004l.005-.005.013-.013a2 2 0 0 0 .125-.151c.071-.095.158-.226.243-.396.17-.342.33-.83.33-1.46 0-.64-.182-1.197-.54-1.602a1.73 1.73 0 0 0-1.36-.594 1.77 1.77 0 0 0-1.1.426 1.77 1.77 0 0 0-1.102-.426 1.73 1.73 0 0 0-1.36.594C16.182 17.804 16 18.36 16 19c0 .63.158 1.118.33 1.46a2.6 2.6 0 0 0 .334.51l.033.037.013.013.005.005.003.003.002.002a.75.75 0 0 0 1.072-1.049l-.02-.025a1 1 0 0 1-.101-.167 1.75 1.75 0 0 1-.17-.79c0-.36.099-.535.163-.608a.23.23 0 0 1 .187-.088.33.33 0 0 1 .23.124c.078.088.17.263.17.573a.75.75 0 0 0 1.5 0c0-.31.09-.485.167-.573a.33.33 0 0 1 .231-.124.23.23 0 0 1 .188.088c.063.073.163.248.163.609 0 .37-.092.63-.17.79a1 1 0 0 1-.122.191.75.75 0 0 0 1.072 1.049m-4.562-.001"/>`,
  'regular': `<path d="M2.75 18a.75.75 0 0 0-.307 1.434l.003.001.024.012q.036.017.108.056c.096.051.232.13.385.237.312.218.662.524.901.907a.75.75 0 1 0 1.272-.795 4 4 0 0 0-.248-.353H7.25a.75.75 0 0 0 0-1.5zm16-14.5a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m-6.506 0a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m-6.494 0a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 1.5 0v-9a.75.75 0 0 0-.75-.75m4.77 15.349c-.053.3.066.676.26.87a.75.75 0 0 1-1.06 1.06c-.556-.555-.812-1.43-.677-2.191.07-.398.254-.806.605-1.116.358-.315.825-.473 1.352-.473.62 0 1.08.272 1.42.606.283.278.511.631.689.906l.051.08c.127.195.237.354.34.482V17.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75c-1.313 0-1.953-.984-2.337-1.576l-.04-.06c-.205-.317-.345-.533-.504-.69-.136-.133-.238-.174-.369-.174-.223 0-.318.06-.36.097a.42.42 0 0 0-.12.252m10.76 2.18s.084-.092.005-.004l.005-.005.013-.013a2 2 0 0 0 .125-.151c.071-.095.158-.226.243-.396.17-.342.33-.83.33-1.46 0-.64-.182-1.197-.54-1.602a1.73 1.73 0 0 0-1.36-.594 1.77 1.77 0 0 0-1.1.426 1.77 1.77 0 0 0-1.102-.426 1.73 1.73 0 0 0-1.36.594C16.182 17.804 16 18.36 16 19c0 .63.158 1.118.33 1.46a2.6 2.6 0 0 0 .334.51l.033.037.013.013.005.005.003.003.002.002a.75.75 0 0 0 1.072-1.049l-.02-.025a1 1 0 0 1-.101-.167 1.75 1.75 0 0 1-.17-.79c0-.36.099-.535.163-.608a.23.23 0 0 1 .187-.088.33.33 0 0 1 .23.124c.078.088.17.263.17.573a.75.75 0 0 0 1.5 0c0-.31.09-.485.167-.573a.33.33 0 0 1 .231-.124.23.23 0 0 1 .188.088c.063.073.163.248.163.609 0 .37-.092.63-.17.79a1 1 0 0 1-.122.191.75.75 0 0 0 1.072 1.049m-4.562-.001"/>`
} as const;

export default function TextNumberListLtrRotate270Icon({ 
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

  const gradientId = 'textnumberlistltrrotate270icon_gradient';
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