import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.248 9.902c2.32-1.339 5.597-2.018 9.026-1.88 3.421.136 6.823 1.08 9.39 2.797a1.5 1.5 0 1 0 1.669-2.493c-3.127-2.091-7.097-3.149-10.939-3.302-3.834-.154-7.71.586-10.645 2.28a1.5 1.5 0 0 0 1.499 2.598m10.46.893a1.5 1.5 0 0 0-.417 2.97c5.69.8 9.07 4.03 11.104 7.346 2.058 3.355 2.701 6.751 2.838 7.624a1.5 1.5 0 0 0 2.964-.464c-.165-1.053-.891-4.892-3.245-8.729-2.378-3.876-6.456-7.794-13.244-8.747M18.83 21.298c-3.66 2.947-5.821 9.324-1.85 17.55a1.5 1.5 0 0 1-2.703 1.305c-4.446-9.214-2.293-17.194 2.671-21.191 2.456-1.978 5.562-2.926 8.71-2.474 3.16.453 6.221 2.294 8.63 5.633a1.5 1.5 0 0 1-2.432 1.756c-1.997-2.768-4.372-4.097-6.624-4.42-2.265-.324-4.547.347-6.402 1.841m4.648 19.542c-2.473-5.083-3.19-9.332-2.722-12.104.23-1.37.73-2.273 1.327-2.802.57-.505 1.373-.8 2.526-.69 1.551.147 2.239.645 2.657 1.2.501.668.783 1.626 1.105 3.072q.06.266.12.545c.588 2.709 1.381 6.364 5.098 9.193a1.5 1.5 0 0 0 1.817-2.387c-2.816-2.143-3.4-4.797-4.004-7.542l-.001-.002-.101-.46c-.308-1.38-.692-2.965-1.637-4.221-1.028-1.368-2.568-2.176-4.771-2.385-1.854-.176-3.518.297-4.798 1.432-1.254 1.11-1.988 2.72-2.297 4.548-.612 3.629.367 8.538 2.983 13.916a1.5 1.5 0 0 0 2.698-1.313m-11.87-29.88a1.5 1.5 0 0 1-.093 2.119 18 18 0 0 0-3.324 4.162 1.5 1.5 0 0 1-2.61-1.48c.43-.76 1.752-2.92 3.908-4.895a1.5 1.5 0 0 1 2.12.093m24.866 17.513a1.5 1.5 0 1 0-2.948.555c.56 2.97 1.933 5.452 4.436 6.998a1.5 1.5 0 0 0 1.576-2.552c-1.604-.991-2.616-2.625-3.064-5.001m-12.33.028a1.5 1.5 0 0 1 1.62 1.37c.452 5.391 3.142 8.797 3.879 9.635a1.5 1.5 0 1 1-2.254 1.98c-.964-1.097-4.089-5.089-4.615-11.364a1.5 1.5 0 0 1 1.37-1.62m-4.05-14.267a1.5 1.5 0 0 0-1.193-2.752C12.036 14.459 8.89 19.53 7.533 24.096c-1.343 4.512-.948 8.527-.806 9.605a1.5 1.5 0 0 0 2.974-.393c-.116-.88-.465-4.418.707-8.356 1.156-3.884 3.782-8.157 9.686-10.718"/>`,
  'regular': `<path d="M14.9 9.817c2.39-1.456 5.803-2.23 9.358-2.112 3.55.119 7.093 1.123 9.758 3.057a1.25 1.25 0 1 0 1.468-2.024c-3.16-2.292-7.22-3.4-11.142-3.531-3.915-.131-7.84.707-10.742 2.476a1.25 1.25 0 1 0 1.3 2.134m10.497 1.188a1.25 1.25 0 1 0-.294 2.483c7.829.93 12.924 6.976 14.416 15.478a1.25 1.25 0 0 0 2.462-.432c-1.624-9.255-7.355-16.433-16.584-17.529m-6.702 10.08c-3.817 3.055-6.002 9.67-1.825 18.11a1.25 1.25 0 0 1-2.24 1.11c-4.584-9.261-2.42-17.233 2.503-21.172 2.439-1.952 5.522-2.865 8.632-2.377 3.12.49 6.145 2.372 8.511 5.781a1.25 1.25 0 1 1-2.053 1.426c-2.034-2.93-4.492-4.367-6.846-4.737-2.366-.372-4.75.313-6.682 1.859m4.679 20.11c-2.56-5.17-3.34-9.54-2.876-12.433.23-1.434.75-2.413 1.403-3.001.631-.567 1.51-.882 2.731-.767 1.624.154 2.383.688 2.852 1.325.542.736.828 1.77 1.154 3.243l.098.447c.605 2.784 1.405 6.457 5.286 9.255a1.25 1.25 0 1 0 1.462-2.028c-3.09-2.228-3.71-5.048-4.326-7.854l-.08-.36c-.31-1.402-.678-2.96-1.581-4.185-.976-1.325-2.453-2.125-4.629-2.331-1.81-.172-3.413.295-4.637 1.395-1.201 1.08-1.91 2.65-2.202 4.465-.578 3.605.423 8.522 3.104 13.938a1.25 1.25 0 0 0 2.24-1.108M11.688 10.924a1.25 1.25 0 0 1-.11 1.764c-1.597 1.409-2.674 2.827-3.744 4.687a1.25 1.25 0 1 1-2.167-1.248c1.176-2.043 2.416-3.69 4.256-5.313a1.25 1.25 0 0 1 1.765.11m24.547 17.635a1.25 1.25 0 0 0-2.47.384c.51 3.277 2.205 5.347 4.255 6.823a1.25 1.25 0 1 0 1.46-2.03c-1.625-1.17-2.858-2.694-3.245-5.177m-12.078-.055a1.25 1.25 0 0 1 1.34 1.154c.305 4.075 1.797 7.527 4.194 10.27a1.25 1.25 0 1 1-1.882 1.645c-2.762-3.16-4.46-7.126-4.805-11.729a1.25 1.25 0 0 1 1.153-1.34m-3.922-14.6a1.25 1.25 0 0 0-.97-2.305C10.294 15.372 5.821 23.813 7.01 33.896a1.25 1.25 0 1 0 2.483-.292c-1.073-9.1 2.907-16.405 10.743-19.702"/>`
} as const;

export default function FingerprintIcon({ 
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

  const gradientId = 'fingerprinticon_gradient';
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