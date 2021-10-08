import { Control, Controller, FieldValues } from 'react-hook-form';
import Select, { components } from 'react-select';

import { Checkbox } from './Checkbox';

export type MultiDropdownProps = {
  control: Control<FieldValues, Record<string, unknown>>;
  name: string;
  placeholder: string;
  label: string;
  options: Array<{ value: string; label: string }>;
};

export function MultiDropdown({
  control,
  name,
  placeholder,
  label,
  options,
  ...args
}: MultiDropdownProps) {
  const styles = 'w-full border border-default h-10 rounded-[0.188rem]';

  const ValueContainer = ({ children, hasValue, getValue, ...props }) => {
    if (!hasValue) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return <components.ValueContainer {...props}>{children}</components.ValueContainer>;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_selectedValues, otherChildren] = children;
    const selectedValueCount = getValue().length;

    return (
      <>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <components.ValueContainer {...props}>
          {selectedValueCount} {label}
          {otherChildren}
        </components.ValueContainer>
      </>
    );
  };

  const Option = (props) => {
    const styles = 'bg-white hover:bg-primary-light';
    return (
      <div>
        {' '}
        <components.Option {...props} className={styles}>
          {' '}
          <Checkbox checked={props.isSelected} onChange={() => null} label={props.value} />
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
          isMulti
          options={options}
          className={`react-select ${styles}`}
          placeholder={placeholder}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          instanceId="multi-dropdown"
          isClearable={false}
          styles={{
            option: (provided) => ({
              ...provided,
              /**
               *  FIXME: I hate putting in the color directly into the style like this...
               *  react-select has a theme option that we might be able to take advantage of
               */
              backgroundColor: '#FFFFFF',
              color: 'black',
            }),
          }}
          components={{ ValueContainer, Option }}
          {...args}
        />
      )}
    />
  );
}
