export function TextArea({ className = '', ...props }: TextAreaProps) {
  const styles = 'w-full placeholder-primary';
  return <textarea className={`${styles} ${className}`} rows={3} {...props} />;
}

export interface TextAreaProps {
  className?: string;
  [x: string]: any;
}
