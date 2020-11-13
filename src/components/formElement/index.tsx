import { Grid, GridProps } from '@material-ui/core';
import React from 'react';

interface Props extends Omit<GridProps, 'container' | 'item'> {}

export const FormElement: React.FC<Props> = (props) => {
  return <Grid item {...props} />;
};
