import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

interface ProgressBarProps {
  transformValue: number;
  status: string;
  height: number;
}

const useStyles = makeStyles<Theme, ProgressBarProps>((theme) =>
  createStyles({
    root: {
      transform: ({ transformValue }) => `translateX(${transformValue}%)`,
    },
    statusBar: {
      position: "absolute",
      width: "100%",
      left: "100%",
      right: "0px",
      height: ({ height }) => `${height}px`,
      zIndex: 1,
      opacity: 0.1,
      animation: "0.5s ease-in-out 0s 1 normal none running animation-1rywlvk",
    },
    StatusColor: {
      backgroundColor: ({ status }) =>
        status === "blue"
          ? theme.palette.success.main
          : theme.palette.success.dark,
    },
  })
);

function ProgressBar({ transformValue, status, height }: ProgressBarProps) {
  const classes = useStyles({ transformValue, status, height });

  return (
    <Box
      className={clsx(classes.statusBar, classes.StatusColor, classes.root)}
    />
  );
}

export default ProgressBar;
