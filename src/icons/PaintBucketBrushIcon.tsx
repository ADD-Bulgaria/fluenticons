import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 1.75a.75.75 0 0 0-1.5 0v1.403c-.282.11-.546.278-.774.506l-6.567 6.567a2.25 2.25 0 0 0 0 3.182l4.925 4.925a2.25 2.25 0 0 0 3.182 0l6.567-6.567a2.25 2.25 0 0 0 0-3.182l-4.925-4.925a2.24 2.24 0 0 0-.908-.553zM9 5.006V7.25a.75.75 0 0 0 1.5 0V4.872l4.772 4.772a.75.75 0 0 1 0 1.061l-.295.295H3.007zm6.99 15c-.327-.328-.445-.606-.479-.83-.034-.23.01-.484.142-.776.283-.621.872-1.223 1.455-1.806 1.816-1.817 3.654-3.284 5.128-4.177.743-.45 1.357-.731 1.807-.852.25-.067.386-.07.451-.064.006.066.003.202-.064.451-.12.45-.402 1.064-.852 1.807-.892 1.474-2.36 3.312-4.176 5.128-.583.583-1.185 1.173-1.807 1.455-.292.133-.546.176-.776.142-.223-.033-.502-.151-.83-.479m.057-4.473-.039.039c-.534.534-1.314 1.314-1.72 2.207-.169.37-.286.785-.288 1.23a3.2 3.2 0 0 0-2.515.944 2.65 2.65 0 0 0-.656 1.096c-.042.13-.077.264-.105.37l-.017.065c-.033.126-.06.22-.094.304a.94.94 0 0 1-.33.428c-.213.163-.582.358-1.248.557a.757.757 0 0 0-.316 1.254c1.195 1.204 2.498 1.88 3.808 1.964 1.323.084 2.541-.447 3.524-1.437a3.26 3.26 0 0 0 .935-2.559 3 3 0 0 0 1.23-.287c.894-.407 1.673-1.186 2.207-1.721l.04-.039c1.877-1.877 3.428-3.809 4.398-5.412.483-.797.845-1.549 1.018-2.195.156-.583.236-1.377-.306-1.92-.542-.541-1.336-.461-1.919-.305-.646.174-1.398.535-2.195 1.018-1.603.97-3.534 2.522-5.412 4.399m-1.053 5.485a1.755 1.755 0 0 1 0 2.471c-.725.731-1.54 1.052-2.373.999-.594-.038-1.25-.267-1.94-.752q.285-.152.508-.324c.43-.33.665-.696.811-1.065.069-.172.115-.339.15-.474l.023-.085c.027-.104.049-.187.077-.273.06-.187.135-.34.292-.497a1.725 1.725 0 0 1 2.452 0"/>`,
  'regular': `<path d="M10.5 1.75a.75.75 0 0 0-1.5 0v1.403c-.282.11-.546.278-.774.506l-6.567 6.567a2.25 2.25 0 0 0 0 3.182l4.925 4.925a2.25 2.25 0 0 0 3.182 0l6.567-6.567a2.25 2.25 0 0 0 0-3.182l-4.925-4.925a2.24 2.24 0 0 0-.908-.553zM9 5.006V7.25a.75.75 0 0 0 1.5 0V4.872l4.772 4.772a.75.75 0 0 1 0 1.061l-.295.295H3.007zM2.872 12.5h10.605l-4.772 4.772a.75.75 0 0 1-1.06 0zm13.118 7.506c-.327-.328-.445-.606-.479-.83-.034-.23.01-.484.142-.776.283-.621.872-1.223 1.455-1.806 1.816-1.817 3.654-3.284 5.128-4.177.743-.45 1.357-.731 1.807-.852.25-.067.386-.07.451-.064.006.066.003.202-.064.451-.12.45-.402 1.064-.852 1.807-.892 1.474-2.36 3.312-4.176 5.128-.583.583-1.185 1.173-1.807 1.455-.292.133-.546.176-.776.142-.223-.033-.502-.151-.83-.479m.057-4.473-.039.039c-.534.534-1.314 1.314-1.72 2.207-.169.37-.286.785-.288 1.23a3.2 3.2 0 0 0-2.515.944 2.65 2.65 0 0 0-.656 1.096c-.042.13-.077.264-.105.37l-.017.065c-.033.126-.06.22-.094.304a.94.94 0 0 1-.33.428c-.213.163-.582.358-1.248.557a.757.757 0 0 0-.316 1.254c1.195 1.204 2.498 1.88 3.808 1.964 1.323.084 2.541-.447 3.524-1.437a3.26 3.26 0 0 0 .935-2.559 3 3 0 0 0 1.23-.287c.894-.407 1.673-1.186 2.207-1.721l.04-.039c1.877-1.877 3.428-3.809 4.398-5.412.483-.797.845-1.549 1.018-2.195.156-.583.236-1.377-.306-1.92-.542-.541-1.336-.461-1.919-.305-.646.174-1.398.535-2.195 1.018-1.603.97-3.534 2.522-5.412 4.399m-1.053 5.485a1.755 1.755 0 0 1 0 2.471c-.725.731-1.54 1.052-2.373.999-.594-.038-1.25-.267-1.94-.752q.285-.152.508-.324c.43-.33.665-.696.811-1.065.069-.172.115-.339.15-.474l.023-.085c.027-.104.049-.187.077-.273.06-.187.135-.34.292-.497a1.725 1.725 0 0 1 2.452 0"/>`
} as const;

export default function PaintBucketBrushIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'paintbucketbrushicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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