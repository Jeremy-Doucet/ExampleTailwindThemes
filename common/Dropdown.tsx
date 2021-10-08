import { Control, Controller, FieldValues } from 'react-hook-form';
import Select, { components } from 'react-select';

export type DropdownProps = {
  control: Control<FieldValues, Record<string, unknown>>;
  name: string;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
};

export function Dropdown({ control, name, placeholder, options, ...args }: DropdownProps) {
  const styles = 'w-full border border-default h-10 rounded-[0.188rem]';

  const Option = (props) => {
    const styles = props.isSelected ? 'bg-green-400' : 'bg-white';
    return (
      <div>
        {' '}
        <components.Option {...props} className={styles}>
          {props.value}
        </components.Option>{' '}
      </div>
    );
  };

  // FIXME: Need to make sure themeing works with this component.
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          className={`react-select ${styles}`}
          placeholder={placeholder}
          hideSelectedOptions={false}
          instanceId="multi-dropdown"
          isClearable={false}
          styles={{
            option: (provided, state) => ({
              ...provided,
              /**
               *  FIXME: I hate putting in the color directly into the style like this...
               *  react-select has a theme option that we might be able to take advantage of
               */
              backgroundColor: state.isSelected ? '#D9F0CC' : '#FFFFFF',
              color: 'black',
            }),
          }}
          components={{ Option }}
          {...args}
        />
      )}
    />
  );
}
