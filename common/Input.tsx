export function Input({ className = '', ...props }: InputProps) {
  const styles = 'w-full border border-default h-10 rounded-[0.188rem]';

  return <input className={`${styles} ${className}`} {...props} />;
}

export interface InputProps {
  className?: string;
  [x: string]: any;
}
