import React, { ChangeEvent, useState } from 'react';
import { Button } from 'components';
import styles from './file-input.module.scss';
import clsx from 'clsx';
import imageToBase64 from 'image-to-base64';

type TSignInFormProps = {
  className?: string;
  addFilePath?: (event: any) => void;
};

const FileInput = ({ className, addFilePath }: TSignInFormProps): JSX.Element => {
  const [value, setValue] = useState<FileList | null>(null);
  const [path, setPath] = useState('');

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.files);
    console.log(event.target.value);
    // imageToBase64(event.target.value)
    //   .then((response) => {
    //     setPath(response);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div>
      <Button className={clsx(styles.button, className)}>
        <label className={styles.label} htmlFor="file-input">
          {value ? value[0].name : 'Select a picture'}
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
