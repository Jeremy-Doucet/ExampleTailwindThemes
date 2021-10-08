import NextLink from 'next/link';

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'inverse';
  [x: string]: any;
};

export function Link({ children, href, variant = 'primary', ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a className={getStyles(variant)} {...props}>
        {children}
      </a>
    </NextLink>
  );
}

function getStyles(variant: LinkProps['variant']) {
  switch (variant) {
    case 'primary':
      return 'text-button-secondary pointer-cursor hover:text-button-secondary-hover hover:underline';
    case 'inverse':
      return 'text-white pointer-cursor hover:underline';
  }
}
