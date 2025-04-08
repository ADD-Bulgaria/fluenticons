// types.ts - Generated by scripts/generate-icons.ts
import { SVGProps } from 'react';

// All possible icon variants
export type IconVariant = 'color' | 'filled' | 'light' | 'regular';

export type IconProps = {
  variant?: IconVariant;
  className?: string;
  size?: number | string;
  color?: string;
  gradient?: { start: string; end: string; angle?: number; };
  title?: string;
} & Omit<SVGProps<SVGSVGElement>, 'color' | 'className'>;