/** @format */

import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import {
  Table,
  TableCell,
  TableHead,
  Box,
  SvgIcon,
  Container,
} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  bin: {
    cursor: "pointer",
  },
  star: {
    color: "#bdc5d1",
    verticalAlign: "super",
  },

  container: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "none",
  },
  tableTopText: {
    color: "#4a4f55",
    fontSize: ".875rem",
    fontWeight: 600,
  },

  tableText: {
    fontSize: "12px",
    color: "#6c757e",
  },
  changeIcon: { verticalAlign: "bottom" },
  tokenIcon: {
    alignSelf: "center",
  },
  sortDiv: {
    display: "flex",
    fontSize: "12px",
  },
  sortIconDiv: {
    marginTop: "-4px",
    marginLeft: "3px",
  },
  sortIcon: {
    width: "5px",
    height: "5px",
  },
}));

export const StyledTable = withStyles({
  root: {
    // maxWidth: 236,
    // maxHeight: 200,
  },
})(Table);

export const StyledTableHead = withStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: "transparent",
    borderBottom: theme.palette.secondary.light,
  },
}))(TableHead);

export const StyledTableCell = withStyles((theme) => ({
  root: {
    padding: "10px",
    backgroundColor: theme.palette.primary.main,
    borderBottom: "1px solid" + theme.palette.error.dark,
  },
  head: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    // borderBottom:  "1px solid #252930",#cccfd5
    borderBottom: "1px solid" + theme.palette.error.dark,
    background: "transparent",
    fontSize: "12px",
  },
}))(TableCell);

export const StyledSvgIcon = withStyles({
  root: {
    padding: "4px",
    color: "#00c9a7",
    "&:hover": {
      color: "black",
    },
  },
})(SvgIcon);

export const StyledTableControlBox = withStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down(768)]: {
      justifyContent: "flex-start",
      flexDirection: "column",
    },
    [theme.breakpoints.up(768)]: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
}))(Box);

export const StyledContainer = withStyles((theme) => ({
  root: {
    padding: "0 15px 50px 15px",
  },
  maxWidthLg: {
    maxWidth: "1400px",
  },
}))(Container);
