import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25",
        variant === "secondary" &&
          "border border-border text-text-secondary hover:text-text-primary hover:border-accent/50",
        className
      )}
    >
      {children}
    </a>
  );
}
