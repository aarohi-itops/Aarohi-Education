import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", children, className = "", ...props }, ref) => {
    // Base styles
    const baseStyles =
      "rounded-xl overflow-hidden transition-all duration-200 ease-in-out";

    // Variant styles
    const variantStyles = {
      default: "bg-white border border-secondary-gray-200 shadow-sm",
      elevated: "bg-white shadow-lg border border-secondary-gray-100",
      interactive:
        "bg-white border border-secondary-gray-200 shadow-sm hover:shadow-lg hover:border-primary-300 cursor-pointer hover:scale-105",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
