export type LabelProps = {
  isRequired?: boolean;
  children: React.ReactNode;
  [key: string]: any;
};

export function Label({ isRequired = false, children, ...args }: LabelProps) {
  const { className = '', ...props } = args;
  return (
    <label className={`flex flex-row items-center ${className}`} {...props}>
      {isRequired ? <div className="text-error mr-1">*</div> : <span></span>}
      {children}
    </label>
  );
}
