import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Ellipsis } from "react-spinners-css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
      marginTop: "10px",
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    spinner: {
      "& div": {
        background: `#f0b90b !important`,
      },
    },
  })
);

export default function Spinner(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Ellipsis {...props} className={classes.spinner} />
    </div>
  );
}
