/** @format */

import React from "react";
import { rows, columns } from "./components/data";

import Table from "./components/Table";

export default function FundsTable(props: any) {
  return (
    <div style={{ marginTop: 0 }}>
      <Table rows={rows} columns={columns} status={props.status} />
    </div>
  );
}
