import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  connectionIcon: {
    width: "16px",
    height: "12px",
  },
  span: {
    color: "#0ECB81",
    fontSize: "12px",
  },
}));
