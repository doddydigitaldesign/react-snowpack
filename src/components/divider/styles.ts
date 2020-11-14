import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useDividerStyles = makeStyles((theme: Theme) =>
  createStyles({
    verticalSpacing: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  }),
);
