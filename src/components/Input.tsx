import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../cn';
import { forwardRef, type InputHTMLAttributes } from 'react';

const inputVariants = cva(
  'w-full border bg-input text-fg placeholder:text-muted-fg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'h-8 px-3 text-sm rounded-sm',
        md: 'h-10 px-4 text-sm rounded-md',
        lg: 'h-12 px-4 text-base rounded-lg',
      },
      variant: {
        default: 'border-border',
        error: 'border-destructive focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
  VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size, variant }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { inputVariants };
