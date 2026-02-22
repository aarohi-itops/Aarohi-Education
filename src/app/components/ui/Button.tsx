import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      isLoading = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles with better touch targets for mobile
    const baseStyles =
      "font-medium rounded-2xl transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px] sm:min-h-auto";

    // Variant styles
    const variantStyles = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-md hover:shadow-lg",
      secondary:
        "bg-secondary-gray-100 text-secondary-gray-900 hover:bg-secondary-gray-200 active:bg-secondary-gray-300 shadow-sm",
      outline:
        "border-2 border-primary-500 text-primary-700 hover:bg-primary-50 active:bg-primary-100 bg-white",
      ghost: "text-primary-700 hover:bg-primary-50 active:bg-primary-100",
    };

    // Size styles with responsive breakpoints
    const sizeStyles = {
      sm: "px-3 py-2 text-xs sm:text-sm",
      md: "px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base",
      lg: "px-4 py-3 sm:px-6 sm:py-3.5 text-base sm:text-lg",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClassName}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
