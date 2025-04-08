import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12q.44 0 .86.072l.174.716a2 2 0 0 0 2.413 1.475l.098-.026.601-.179c.363.467.653.997.854 1.57l-.447.43a2 2 0 0 0-.17 2.7l.142.156.475.457c-.2.574-.49 1.103-.853 1.57l-.602-.178a2 2 0 0 0-2.485 1.351l-.026.098-.173.716a5.2 5.2 0 0 1-1.723 0l-.172-.716a2 2 0 0 0-2.413-1.475l-.098.026-.602.178a5.6 5.6 0 0 1-.853-1.57l.447-.43a2 2 0 0 0 .17-2.698l-.142-.157-.475-.457c.2-.574.49-1.103.853-1.57l.602.178a2 2 0 0 0 2.485-1.351l.026-.098.172-.716Q17.06 12 17.5 12M13.75 2A2.25 2.25 0 0 1 16 4.25v6.924A6.5 6.5 0 0 0 11.02 18H8.75a.75.75 0 0 0-.102 1.493l.102.007h2.5l.062-.003A6.5 6.5 0 0 0 12.81 22H6.25A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zm3.75 14c-.8 0-1.45.672-1.45 1.5S16.7 19 17.5 19s1.45-.672 1.45-1.5S18.3 16 17.5 16"/>`,
  'regular': `<path d="M17.5 12q.44 0 .86.072l.174.716a2 2 0 0 0 2.413 1.475l.098-.026.601-.179c.363.467.653.997.854 1.57l-.447.43a2 2 0 0 0-.17 2.7l.142.156.475.457c-.2.574-.49 1.103-.853 1.57l-.602-.178a2 2 0 0 0-2.485 1.351l-.026.098-.173.716a5.2 5.2 0 0 1-1.723 0l-.172-.716a2 2 0 0 0-2.413-1.475l-.098.026-.602.178a5.6 5.6 0 0 1-.853-1.57l.447-.43a2 2 0 0 0 .17-2.698l-.142-.157-.475-.457c.2-.574.49-1.103.853-1.57l.602.178a2 2 0 0 0 2.485-1.351l.026-.098.172-.716Q17.06 12 17.5 12M13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.5 6.5 0 0 0-1.5.558V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75l5.483.001a6.5 6.5 0 0 0 1.077 1.5L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2zM8.749 17.504 11 17.499c0 .517.06 1.02.174 1.5l-2.423.005a.75.75 0 0 1-.002-1.5M17.5 16c-.8 0-1.45.672-1.45 1.5S16.7 19 17.5 19s1.45-.672 1.45-1.5S18.3 16 17.5 16"/>`
} as const;

export default function PhoneLinkSetupIcon({ 
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

  const gradientId = 'phonelinksetupicon_gradient';
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