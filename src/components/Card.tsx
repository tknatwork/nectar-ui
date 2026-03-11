import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../cn';
import type { HTMLAttributes } from 'react';

const cardVariants = cva(
  'rounded-lg border border-border bg-surface transition-colors',
  {
    variants: {
      variant: {
        default: '',
        interactive: 'hover:border-primary cursor-pointer',
        elevated: 'shadow-sm hover:shadow-md',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({ className, variant, padding, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  );
}

export { cardVariants };
