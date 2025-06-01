import * as React from "react";

import { cn } from "@/utils/cn";

const TextImage = React.forwardRef<
  HTMLDivElement, React.HTMLAttributes<HTMLDivElement>

>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-screen",
      className
    )}
    {...props}
  />
));
TextImage.displayName = "TextImage";

const TextImageTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-white text-5xl max-sm:text-2xl font-bold", className)}
    {...props}
  />
));
TextImageTitle.displayName = "TextImageTitle";

const TextImageDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-white text-base text-center", className)}
    {...props}
  />
));
TextImageDescription.displayName = "TextImageDescription";

const TextImageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("absolute inset-0 h-full flex items-center justify-center flex-col", className)} {...props} />
));
TextImageContent.displayName = "TextImageContent";


export {
  TextImage,
  TextImageTitle,
  TextImageDescription,
  TextImageContent
};
