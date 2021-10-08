export type PProps = {
  children: React.ReactNode;
  variant: 'p1' | 'p2' | 'p3';
  [key: string]: any;
};

export function P({ children, variant, ...args }: PProps) {
  const { className, ...props } = args;
  return (
    <p className={`${getStyles(variant)} ${className || ''}`} {...props}>
      {children}
    </p>
  );
}

/**
 *  Originally I tried to dynamically build out the string like:
 *  > const styles = `text-${variant} md:text-${variant}-md lg:text-${variant}-lg`;
 *
 *  Tailwind was purging the classes before the page loaded, so the classes never
 *  got applied. Having the classes in raw text like this fixes that issue.
 */
function getStyles(variant: PProps['variant']) {
  switch (variant) {
    case 'p1':
      return 'text-p1 md:text-p1-md lg:text-p1-lg';
    case 'p2':
      return 'text-p2 md:text-p2-md lg:text-p2-lg';
    case 'p3':
      return 'text-p3 md:text-p3-md lg:text-p3-lg';
  }
}
