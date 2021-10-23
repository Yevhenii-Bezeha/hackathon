import React, { ChangeEvent, useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './textarea.module.scss';

type TTextareaProps = {
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
};

const Textarea = ({
  className,
  onChange,
  placeholder,
  value: initalValue,
}: TTextareaProps): JSX.Element => {
  const [value, setValue] = useState(initalValue || '');

  useEffect(() => {
    if (initalValue) {
      setValue(initalValue);
    }
  }, [initalValue]);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <textarea
      className={clsx(styles.textarea, className)}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    ></textarea>
  );
};

export default Textarea;
