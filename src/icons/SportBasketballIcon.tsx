import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.434 12.866c-1.285-.383-2.765-.897-4.16-2.077L13.063 12l6.52 6.521a9.94 9.94 0 0 0 2.153-4.225l-.007-.007-.008-.009c-.34-.34-.779-.587-1.339-.804a18 18 0 0 0-1.426-.456zm.09-8.448-4.246 4.246c-.92-1.126-1.35-2.332-1.706-3.526l-.137-.468a20 20 0 0 0-.512-1.593 6.4 6.4 0 0 0-.515-1.06 9.98 9.98 0 0 1 7.115 2.401m1.06 1.06-4.245 4.246c1.124.92 2.33 1.349 3.524 1.705l.468.137c.538.157 1.09.317 1.593.511.363.141.721.307 1.06.517a9.98 9.98 0 0 0-2.4-7.115M9.72 2.28l-.015-.014A9.94 9.94 0 0 0 5.48 4.418l6.522 6.522 1.21-1.211c-1.18-1.396-1.694-2.876-2.077-4.162l-.154-.522a18 18 0 0 0-.456-1.426c-.217-.56-.464-.999-.804-1.339m-7.589 8.108A9.95 9.95 0 0 1 4.42 5.479L10.94 12l-1.088 1.09c-1.474-1.193-3.191-1.616-4.662-1.911q-.31-.062-.6-.118c-.608-.118-1.149-.223-1.645-.367a5 5 0 0 1-.813-.305m-.13 1.574a9.97 9.97 0 0 0 2.418 6.56l4.365-4.365c-1.142-.873-2.498-1.229-3.89-1.509l-.542-.106c-.623-.12-1.258-.243-1.826-.408a8 8 0 0 1-.525-.172m7.846 3.252-4.367 4.368a9.97 9.97 0 0 0 6.757 2.415 6 6 0 0 1-.367-.931c-.166-.534-.29-1.125-.41-1.7l-.106-.498c-.277-1.274-.629-2.533-1.507-3.654m4.047 6.606a9.94 9.94 0 0 0 4.628-2.238l-6.521-6.521-1.087 1.087c1.183 1.439 1.608 3.032 1.906 4.401l.119.559c.117.559.22 1.053.363 1.512.157.504.342.896.592 1.2"/>`,
  'regular': `<path d="M12.941 21.956a9.96 9.96 0 0 0 6.13-2.885c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0-3.905 10.237 0 14.142a9.98 9.98 0 0 0 7.687 2.91.75.75 0 0 0 .325-.025M3.577 10.854a8.46 8.46 0 0 1 1.905-4.31L10.94 12l-1.088 1.088c-1.052-.85-2.224-1.308-3.341-1.608-.65-.174-1.296-.3-1.887-.413l-.016-.004q-.55-.103-1.03-.209m-.069 1.52q.4.083.8.16l.014.002c.603.117 1.202.233 1.799.393.953.256 1.861.616 2.662 1.228l-3.3 3.3a8.47 8.47 0 0 1-1.975-5.083m6.339 2.84c.675.862 1.04 1.806 1.297 2.773.125.47.221.928.318 1.392l.084.395q.075.36.165.721a8.47 8.47 0 0 1-5.168-1.977zm3.393 5.196a16 16 0 0 1-.228-.95l-.077-.367c-.098-.469-.205-.98-.341-1.492-.301-1.128-.762-2.337-1.68-3.454L12 13.061l5.457 5.457a8.46 8.46 0 0 1-4.217 1.892M13.06 12l1.212-1.211c1.114.942 2.28 1.46 3.365 1.826.447.152.897.282 1.311.403l.46.134c.35.106.671.208.964.321a8.45 8.45 0 0 1-1.854 3.984zm6.777-.285-.502-.147a29 29 0 0 1-1.217-.374c-.944-.32-1.888-.74-2.781-1.47l3.18-3.181a8.47 8.47 0 0 1 1.983 5.382q-.332-.112-.663-.21m-2.38-6.233-3.181 3.181c-.73-.893-1.151-1.837-1.47-2.781a28 28 0 0 1-.374-1.218v-.001l-.148-.5q-.098-.332-.209-.663a8.47 8.47 0 0 1 5.382 1.982m-6.073.88c.367 1.085.884 2.252 1.827 3.366L12 10.94 6.543 5.482a8.45 8.45 0 0 1 3.984-1.854c.113.293.215.613.32.964l.135.46c.12.414.25.863.402 1.31"/>`
} as const;

export default function SportBasketballIcon({ 
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

  const gradientId = 'sportbasketballicon_gradient';
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