import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.01 2.25c.735.008 1.466.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.928 1.116l1.4-.615a.75.75 0 0 1 .85.174 9.8 9.8 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.38 1.38 0 0 0 .001 2.226l1.243.915a.75.75 0 0 1 .271.826 9.8 9.8 0 0 1-2.203 3.792.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.927 1.114l-.169 1.526a.75.75 0 0 1-.571.647 9.5 9.5 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.17-1.524a1.382 1.382 0 0 0-1.924-1.11l-1.407.616a.75.75 0 0 1-.849-.175 9.8 9.8 0 0 1-2.203-3.796.75.75 0 0 1 .271-.826l1.244-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826 9.8 9.8 0 0 1 2.205-3.792.75.75 0 0 1 .849-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.076-.238 2.202-.252M13.576 8h-3.272l3.105 4-2.773 3.514a.3.3 0 0 0 .236.486h2.704a.3.3 0 0 0 .237-.116l2.778-3.577a.5.5 0 0 0 0-.614l-2.778-3.577A.3.3 0 0 0 13.575 8m-3.898.803-2.264 2.889a.5.5 0 0 0-.052.535l.052.081 2.002 2.556.05.05a.3.3 0 0 0 .372 0l.049-.049 1.336-1.68a.3.3 0 0 0 .043-.301l-.042-.07-.638-.814.78-.996z"/>`,
  'regular': `<path d="M12.012 2.25c.734.008 1.465.093 2.181.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.928 1.116l1.4-.615a.75.75 0 0 1 .85.174 9.8 9.8 0 0 1 2.204 3.792.75.75 0 0 1-.271.825l-1.242.916a1.38 1.38 0 0 0 .001 2.226l1.243.915a.75.75 0 0 1 .271.826 9.8 9.8 0 0 1-2.203 3.792.75.75 0 0 1-.849.175l-1.406-.617a1.38 1.38 0 0 0-1.926 1.114l-.17 1.526a.75.75 0 0 1-.571.647 9.5 9.5 0 0 1-4.406 0 .75.75 0 0 1-.572-.647l-.17-1.524a1.382 1.382 0 0 0-1.924-1.11l-1.407.616a.75.75 0 0 1-.849-.175 9.8 9.8 0 0 1-2.203-3.796.75.75 0 0 1 .271-.826l1.244-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.272-.826 9.8 9.8 0 0 1 2.205-3.792.75.75 0 0 1 .849-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.65q1.076-.238 2.202-.252m0 1.5a9 9 0 0 0-1.355.117l-.108.977A2.886 2.886 0 0 1 6.524 7.17l-.898-.394a8.3 8.3 0 0 0-1.348 2.317l.798.587a2.88 2.88 0 0 1 0 4.643l-.798.588c.32.842.775 1.626 1.348 2.322l.905-.397a2.882 2.882 0 0 1 4.017 2.318l.108.984c.89.15 1.799.15 2.689 0l.109-.984a2.88 2.88 0 0 1 4.018-2.322l.905.396a8.3 8.3 0 0 0 1.347-2.318l-.798-.588a2.88 2.88 0 0 1 0-4.643l.796-.587a8.3 8.3 0 0 0-1.348-2.317l-.896.393a2.884 2.884 0 0 1-4.023-2.324l-.11-.976a9 9 0 0 0-1.333-.117M13.575 8a.3.3 0 0 1 .19.067l.047.049 2.778 3.577a.5.5 0 0 1 .052.532l-.052.082-2.778 3.577a.3.3 0 0 1-.168.108l-.069.008h-2.704a.3.3 0 0 1-.272-.427l.036-.059L13.408 12l-3.105-4zm-3.899.804 1.69 2.201-.781.995.638.813a.3.3 0 0 1 0 .372l-1.337 1.68a.3.3 0 0 1-.422.048l-.049-.05-2.002-2.555a.5.5 0 0 1 0-.616z"/>`
} as const;

export default function LauncherSettingsIcon({ 
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

  const gradientId = 'launchersettingsicon_gradient';
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