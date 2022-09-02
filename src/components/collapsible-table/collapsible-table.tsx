import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import {CollapsibleTableProps} from "./collapsible-table-types";
import Row from "../row/row";

function CollapsibleTable(props: CollapsibleTableProps):JSX.Element {
  const tableHeaders = Object.keys(props.data[0].data);

  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead
          sx={{
            backgroundColor: "#45d8b2",
          }}
        >
          <TableRow>
            <TableCell />
            {tableHeaders.map((item, index) =>
              <TableCell
                align="center"
                key={index + item}>
                {item}
              </TableCell>)}
            <TableCell align="center">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((item, index) =>
            <Row row={item} key={index}/>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;
