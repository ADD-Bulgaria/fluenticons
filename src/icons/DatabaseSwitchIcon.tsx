import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4m6.328.17A7.6 7.6 0 0 0 20 9.053v6.469a1.75 1.75 0 0 0-1.832 2.482h-2.336a1.75 1.75 0 0 0-2.82-1.987l-2.5 2.5a1.75 1.75 0 0 0 0 2.476l1.001 1C7.322 21.867 4 20.127 4 18V9.053a7.6 7.6 0 0 0 1.672 1.117C7.37 11.018 9.608 11.5 12 11.5s4.63-.482 6.328-1.33m-3.548 6.554a.75.75 0 0 1 0 1.06l-1.219 1.22h6.878l-1.22-1.22a.75.75 0 0 1 1.061-1.06l2.5 2.501a.75.75 0 0 1 0 1.061l-2.5 2.498a.75.75 0 0 1-1.06-1.06l1.22-1.22h-6.88l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.499a.75.75 0 0 1 0-1.06l2.5-2.501a.75.75 0 0 1 1.06 0"/>`,
  'regular': `<path d="M4 6c0-.69.315-1.293.774-1.78.455-.482 1.079-.883 1.793-1.202C7.996 2.377 9.917 2 12 2s4.004.377 5.433 1.018c.714.32 1.338.72 1.793 1.202.459.487.774 1.09.774 1.78v9.522a1.75 1.75 0 0 0-1.487.494l-.013.013V8.392c-.32.22-.68.417-1.067.59C16.004 9.623 14.083 10 12 10s-4.004-.377-5.433-1.018a7 7 0 0 1-1.067-.59V18c0 .207.09.46.365.75.279.296.717.596 1.315.864.787.352 1.793.624 2.937.77.087.226.221.434.396.609l1 1c-1.894-.054-3.63-.42-4.946-1.01-.714-.32-1.338-.72-1.793-1.203C4.315 19.293 4 18.69 4 18zm1.5 0c0 .207.09.46.365.75.279.296.717.596 1.315.864 1.195.535 2.899.886 4.82.886s3.625-.35 4.82-.886c.598-.268 1.036-.568 1.315-.864.275-.29.365-.543.365-.75s-.09-.46-.365-.75c-.279-.296-.717-.596-1.315-.864-1.195-.535-2.9-.886-4.82-.886s-3.625.35-4.82.886c-.598.268-1.036.568-1.315.864-.275.29-.365.543-.365.75m9.28 10.724a.75.75 0 0 1 0 1.06l-1.219 1.22h6.878l-1.22-1.22a.75.75 0 0 1 1.061-1.06l2.5 2.501a.75.75 0 0 1 0 1.061l-2.5 2.498a.75.75 0 0 1-1.06-1.06l1.22-1.22h-6.88l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.499a.75.75 0 0 1 0-1.06l2.5-2.501a.75.75 0 0 1 1.06 0"/>`
} as const;

export default function DatabaseSwitchIcon({ 
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

  const gradientId = 'databaseswitchicon_gradient';
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