import { OutlinedTextFieldProps, TextField } from '@material-ui/core';
import React from 'react';
import { FormElement } from '../formElement';

interface Props extends Omit<OutlinedTextFieldProps, 'variant'> {
  id: string;
  label: string;
  helperText: string;
}

export const Input = (props: Props) => {
  const helperTextId = props.id + '-helper-text';
  return (
    <FormElement xs={12}>
      <TextField
        {...props}
        aria-describedby={helperTextId}
        variant={'outlined'}
      />
    </FormElement>
  );
};
