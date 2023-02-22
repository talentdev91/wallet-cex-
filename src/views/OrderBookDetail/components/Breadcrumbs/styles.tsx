import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.primary.main,
      height: "56px",
      boxShadow: "0px 2px 10px rgb(0 0 0 / 10%)",
    },
    content: {
      display: "flex",
      width: "auto",
      maxWidth: "1260px",
      margin: "0 auto",
      height: "100%",
      alignItems: "center",
      padding: "0 24px",
    },
    fontColor: {
      color: theme.palette.text.primary,
    },
    fontMargin: {
      marginRight: "20px",
    },
    hover: {
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.text.disabled,
      },
    },
  })
);
