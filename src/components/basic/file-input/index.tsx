import React, { ChangeEvent, useState } from 'react';
import { Button } from 'components';
import styles from './file-input.module.scss';
import clsx from 'clsx';

type TSignInFormProps = {
  className?: string;
  onChange?: (files: FileList | null) => void;
};

const FileInput = ({ className, onChange }: TSignInFormProps): JSX.Element => {
  const [value, setValue] = useState<FileList | null>(null);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.files);

    if (onChange) {
      onChange(event.currentTarget.files);
    }
  };

  return (
    <div>
      <Button className={clsx(styles.button, className)}>
        <label className={styles.label} htmlFor="file-input">
          {value ? value[0].name : 'Select a file'}
        </label>
        <input
          className={styles.input}
          type="file"
          id="file-input"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={onChangeHandler}
        />
      </Button>
    </div>
  );
};

export default FileInput;
