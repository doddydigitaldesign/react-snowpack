import { Grid, GridProps, Paper } from '@material-ui/core';
import React from 'react';
import { useFormStyles } from './styles';

interface Props
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  gridContainer?: Omit<GridProps<typeof Paper>, 'container' | 'item'>;
}

export const Form: React.FC<Props> = ({
  gridContainer,
  children,
  ...restProps
}) => {
  const classes = useFormStyles();
  return (
    <form {...restProps}>
      <Grid
        container
        component={Paper}
        className={classes.internalSpacing}
        {...gridContainer}
      >
        {children}
      </Grid>
    </form>
  );
};
