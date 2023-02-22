import React from "react";
import clsx from "clsx";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "../Style";

export function Card({
  itemId,
  title,
  value,
}: {
  itemId: string;
  title: string;
  value: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  const classes = useStyles();

  return (
    <Box className={classes.tickerListItem}>
      <Typography
        variant="body1"
        className={clsx(classes.fontColor3, classes.viewTypeMargin)}
      >
        {title}
      </Typography>
      <Typography variant="body1" className={classes.fontColor1}>
        {value}
      </Typography>
    </Box>
  );
}
