import {createStyles, makeStyles} from "../../web_modules/@material-ui/core.js";
export const useDividerStyles = makeStyles((theme) => createStyles({
  verticalSpacing: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%"
  }
}));
