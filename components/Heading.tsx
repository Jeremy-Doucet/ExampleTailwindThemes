export type HeadingProps = {
  variant?: "large-h1" | "h1" | "h2" | "h3";
  children: React.ReactNode;
  [key: string]: any;
};

export function Heading({ variant = "h1", children, ...args }: HeadingProps) {
  const { className, ...props } = args;
  return (
    <h1 className={`${getStyles(variant)} ${className || ""}`} {...props}>
      {children}
    </h1>
  );
}

/**
 *  Originally I tried to dynamically build out the string like:
 *  > const styles = `text-${variant} md:text-${variant}-md lg:text-${variant}-lg`;
 *
 *  Tailwind was purging the classes before the page loaded, so the classes never
 *  got applied. Having the classes in raw text like this fixes that issue.
 */
function getStyles(variant: HeadingProps["variant"]) {
  switch (variant) {
    case "large-h1":
      return "text-large-h1 text-primary font-bold";
    case "h1":
      return "text-h1 text-primary font-bold";
    case "h2":
      return "text-h2  font-bold";
    case "h3":
      return "text-h3 font-bold";
  }
}
