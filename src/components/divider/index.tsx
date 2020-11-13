import { Divider as MuiDivider, DividerProps } from '@material-ui/core';
import React from 'react';
import { useDividerStyles } from './styles';

interface Props extends DividerProps {}

export const Divider = (props: Props) => {
  const classes = useDividerStyles();
  return <MuiDivider className={classes.verticalSpacing} {...props} />;
};
