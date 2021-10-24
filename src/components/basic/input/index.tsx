import React, { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';

type TInputProps = {
  className?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
};

const Input = ({
  className,
  onChange,
  placeholder,
  value: initialValue,
}: TInputProps): JSX.Element => {
  const [value, setValue] = useState(initialValue || '');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      type="text"
      className={clsx(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
