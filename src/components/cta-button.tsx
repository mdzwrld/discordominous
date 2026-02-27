import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

export function CtaButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      className={cn(
        "bg-gradient-to-r from-primary to-accent font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-xl hover:shadow-primary/40",
        "dark:shadow-primary/10 dark:hover:shadow-primary/20",
        className
      )}
      {...props}
    />
  )
}
