import React from "react";
//material-ui components
import {
  TableBody,
  TableRow,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@material-ui/core";

//style
import { StyledTableCell, StyledTableHead, useStyles } from "./styles";
import Sort1 from "../../../../../../assets/image/sortUp.svg";
import Sort2 from "../../../../../../assets/image/sortDown.svg";

interface CustomizedTableProps {
  rows: any;
  columns: string[];
  status: any;
}

const CustomizedTable: React.FC<CustomizedTableProps> = ({
  rows,
  columns,
  status,
}) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.container}>
      <TableContainer
        component={Paper}
        style={{ maxHeight: "180px", width: "100%", boxShadow: "none" }}
      >
        <Table stickyHeader>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell>
                <div className={classes.sortDiv}>
                  coin
                  <div className={classes.sortIconDiv}>
                    <div className={classes.sortIcon}>
                      <img src={Sort1} className={classes.sortIcon} alt="alt" />
                    </div>
                    <div className={classes.sortIcon}>
                      <img src={Sort2} className={classes.sortIcon} alt="alt" />
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className={classes.sortDiv}>
                  Total Balance
                  <div className={classes.sortIconDiv}>
                    <div className={classes.sortIcon}>
                      <img src={Sort1} className={classes.sortIcon} alt="alt" />
                    </div>
                    <div className={classes.sortIcon}>
                      <img src={Sort2} className={classes.sortIcon} alt="alt" />
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className={classes.sortDiv}>
                  Available Balance
                  <div className={classes.sortIconDiv}>
                    <div className={classes.sortIcon}>
                      <img src={Sort1} className={classes.sortIcon} alt="alt" />
                    </div>
                    <div className={classes.sortIcon}>
                      <img src={Sort2} className={classes.sortIcon} alt="alt" />
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className={classes.sortDiv}>
                  In Order
                  <div className={classes.sortIconDiv}>
                    <div className={classes.sortIcon}>
                      <img src={Sort1} className={classes.sortIcon} alt="alt" />
                    </div>
                    <div className={classes.sortIcon}>
                      <img src={Sort2} className={classes.sortIcon} alt="alt" />
                    </div>
                  </div>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className={classes.sortDiv}>
                  BTC Value
                  <div className={classes.sortIconDiv}>
                    <div className={classes.sortIcon}>
                      <img src={Sort1} className={classes.sortIcon} alt="alt" />
                    </div>
                    <div className={classes.sortIcon}>
                      <img src={Sort2} className={classes.sortIcon} alt="alt" />
                    </div>
                  </div>
                </div>
              </StyledTableCell>
            </TableRow>
          </StyledTableHead>
          {!status.status ? (
            <TableBody>
              {rows.map((row: any, key: any) => (
                <TableRow key={key}>
                  <StyledTableCell>
                    <Typography style={{ fontSize: "12px" }}>
                      {row.date}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: "12px" }}>
                      {row.pair}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: "12px" }}>
                      {row.type}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: "12px" }}>
                      {row.sidePrice}
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography style={{ fontSize: "12px" }}>
                      {row.amount}
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              ))}
              {/* {emptyRows === rowsPerPage && (
              <TableRow>
                <TableCell style={{ padding: "10px" }} colSpan={12}>
                  <StyledEmptyRowBox>
                    <Typography style={{ fontSize: "14px" }}>
                      There are no matching entries
                    </Typography>
                  </StyledEmptyRowBox>
                </TableCell>
              </TableRow>
            )} */}
            </TableBody>
          ) : (
            <TableBody></TableBody>
          )}
          {/* </StyledTable> */}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CustomizedTable;
