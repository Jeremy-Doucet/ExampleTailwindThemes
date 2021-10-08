export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'custom' | 'link' | 'nav' | 'emergency';
  [key: string]: any;
};

export function Button({ children, variant = 'primary', ...args }: ButtonProps) {
  const { className, ...props } = args;

  return (
    <button className={`${getStyles(variant)} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}

function getStyles(variant: ButtonProps['variant']) {
  const commonStyles = 'text-base h-[3.125rem] rounded-[2.813rem] w-full max-w-lg';

  switch (variant) {
    case 'primary':
      return `${commonStyles} bg-button-primary hover:bg-button-primary-hover disabled:bg-button-primary-disabled text-white`;
    case 'secondary':
      return `${commonStyles} border-2 border-button-secondary text-button-secondary hover:text-button-secondary-hover hover:border-button-secondary-hover disabled:text-button-secondary-disabled text-white`;
    case 'link':
      return 'w-max border-none text-button-secondary';
    case 'nav':
      return `${commonStyles} border-2 border-white text-white hover:bg-nav-link-hover disabled:text-button-secondary-disabled`;
    case 'emergency':
      return `${commonStyles} flex flex-row items-center justify-between bg-medium-light-gray w-max px-9 self-center text-button-secondary-hover hover:bg-light-gray`;
    case 'custom':
    default:
      return '';
  }
}
