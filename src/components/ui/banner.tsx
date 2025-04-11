import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const bannerVariants = cva(
  "relative w-full flex items-center justify-between gap-4 rounded-lg border p-4 text-sm",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary:
          "border-primary/50 bg-primary/10 text-primary dark:border-primary/30",
        destructive:
          "border-destructive/50 bg-destructive/10 text-destructive dark:border-destructive/30",
        success:
          "border-green-500/50 bg-green-500/10 text-green-600 dark:text-green-400 dark:border-green-500/30",
        warning:
          "border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 dark:border-yellow-500/30",
        info: "border-blue-500/50 bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:border-blue-500/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      className,
      variant,
      title,
      description,
      icon,
      action,
      dismissible = true,
      onDismiss,
      ...props
    },
    ref,
  ) => {
    const [dismissed, setDismissed] = React.useState(false);

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    if (dismissed) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(bannerVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div className="flex-1">
            {title && <div className="font-medium">{title}</div>}
            {description && (
              <div className="text-sm opacity-90">{description}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {action}
          {dismissible && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full opacity-70 hover:opacity-100"
              onClick={handleDismiss}
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    );
  },
);
Banner.displayName = "Banner";

export { Banner, bannerVariants };
