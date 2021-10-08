export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted" | "link";
  [key: string]: any;
};

export function Button({
  children,
  variant = "primary",
  ...args
}: ButtonProps) {
  const { className, ...props } = args;

  return (
    <button className={`${getStyles(variant)} ${className || ""}`} {...props}>
      {children}
    </button>
  );
}

function getStyles(variant: ButtonProps["variant"]) {
  const commonStyles =
    "text-base h-[3.125rem] rounded-[2.813rem] w-full max-w-lg";

  switch (variant) {
    case "primary":
      return `${commonStyles} text-white bg-primary hover:bg-primary-dark`;
    case "secondary":
      return `${commonStyles} text-white bg-secondary hover:bg-secondary-dark`;
    case "inverted":
      return `${commonStyles} text-primary border border-primary hover:border-primary-dark hover:text-primary-dark`;
    case "link":
      return "text-primary";
  }
}
