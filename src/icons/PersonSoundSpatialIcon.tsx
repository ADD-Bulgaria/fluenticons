import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.679 21.912c-.437.534-.443 1.322.045 1.81.489.489 1.284.492 1.73-.035A14.94 14.94 0 0 0 12.003 14a14.94 14.94 0 0 0-3.547-9.687c-.447-.527-1.242-.524-1.73-.036-.489.488-.483 1.276-.046 1.81A12.45 12.45 0 0 1 9.502 14c0 3.002-1.059 5.757-2.823 7.912m-3.49-1.725c.488.488 1.287.492 1.71-.053A9.96 9.96 0 0 0 7.002 14a9.96 9.96 0 0 0-2.103-6.135c-.423-.545-1.222-.54-1.71-.052s-.478 1.274-.077 1.836A7.47 7.47 0 0 1 4.502 14a7.47 7.47 0 0 1-1.39 4.351c-.401.562-.411 1.349.077 1.837M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.755 40 33v-.751A4.25 4.25 0 0 0 35.75 28zm27.297-4.313c.446.527 1.242.524 1.73.035.488-.488.483-1.276.046-1.81A12.45 12.45 0 0 1 38.5 14a12.45 12.45 0 0 1 2.823-7.913c.437-.534.442-1.322-.046-1.81s-1.284-.491-1.73.036A14.94 14.94 0 0 0 36 14a14.94 14.94 0 0 0 3.547 9.687m3.555-15.822c.424-.545 1.223-.54 1.71-.052.489.488.479 1.274.078 1.836A7.47 7.47 0 0 0 43.5 14c0 1.623.515 3.124 1.39 4.351.4.562.411 1.349-.077 1.837s-1.287.492-1.71-.053A9.96 9.96 0 0 1 41 14c0-2.312.785-4.441 2.102-6.135"/>`,
  'regular': `<path d="M6.679 21.912c-.437.534-.443 1.322.045 1.81.489.489 1.284.492 1.73-.035A14.94 14.94 0 0 0 12.003 14a14.94 14.94 0 0 0-3.547-9.687c-.447-.527-1.242-.524-1.73-.036-.489.488-.483 1.276-.046 1.81A12.45 12.45 0 0 1 9.502 14c0 3.002-1.059 5.757-2.823 7.912m-3.49-1.725c.488.488 1.287.492 1.71-.053A9.96 9.96 0 0 0 7.002 14a9.96 9.96 0 0 0-2.103-6.135c-.423-.545-1.222-.54-1.71-.052s-.478 1.274-.077 1.836A7.47 7.47 0 0 1 4.502 14a7.47 7.47 0 0 1-1.39 4.351c-.401.562-.411 1.349.077 1.837M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.755 40 33v-.751A4.25 4.25 0 0 0 35.75 28zm-1.75 4.249a1.75 1.75 0 0 1 1.75-1.749h23.5c.967 0 1.75.783 1.75 1.749V33c0 2.744-1.36 4.808-3.72 6.245C31.37 40.712 27.932 41.5 24 41.5s-7.37-.788-9.78-2.255c-2.36-1.437-3.72-3.5-3.72-6.245zm29.047-8.562c.446.527 1.242.524 1.73.035.488-.488.483-1.276.046-1.81A12.45 12.45 0 0 1 38.5 14a12.45 12.45 0 0 1 2.823-7.913c.437-.534.442-1.322-.046-1.81s-1.284-.491-1.73.036A14.94 14.94 0 0 0 36 14a14.94 14.94 0 0 0 3.547 9.687m3.555-15.822c.424-.545 1.223-.54 1.71-.052.489.488.479 1.274.078 1.836A7.47 7.47 0 0 0 43.5 14c0 1.623.515 3.124 1.39 4.351.4.562.411 1.349-.077 1.837s-1.287.492-1.71-.053A9.96 9.96 0 0 1 41 14c0-2.312.785-4.441 2.102-6.135"/>`
} as const;

export default function PersonSoundSpatialIcon({ 
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

  const gradientId = 'personsoundspatialicon_gradient';
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