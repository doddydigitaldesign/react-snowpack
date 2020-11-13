import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    internalSpacing: {
      padding: theme.spacing(2),
    },
  }),
);
