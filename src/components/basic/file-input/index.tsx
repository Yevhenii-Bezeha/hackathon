import { Button } from 'components';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './file-input.module.scss';

const FileInput = () => {
  const [value, setValue] = useState<FileList | null>(null);

  return (
    <div>
      <Button className={styles.button}>
        <label className={styles.label} htmlFor="avatar">
          {value ? value[0].name : 'Select a picture'}
        </label>
        <input
          className={styles.input}
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.files)}
        />
      </Button>
    </div>
  );
};

export default FileInput;
