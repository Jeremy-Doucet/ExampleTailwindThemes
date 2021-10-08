import { Label } from './Label';

export type RadioInputProps = {
  name: string;
  options: { value: any; label: string }[];
  register?: any;
  isRequired?: boolean;
};

export function RadioInput({ name, options, register, isRequired = false }: RadioInputProps) {
  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <div key={`${name}-radio-${option.value}`} className="my-1">
          <Label isRequired={isRequired}>
            <input
              type="radio"
              className="mr-2 h-6 w-6"
              value={option.value}
              name={name}
              {...register}
            />{' '}
            <div>{option.label}</div>
          </Label>
        </div>
      ))}
    </div>
  );
}
