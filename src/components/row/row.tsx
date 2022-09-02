import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {RowProps} from "./row-types";

function Row(props: RowProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const rowContent = Object.values(props.row.data);

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          {Object.keys(props.row.children).length !==0 &&
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
          </IconButton>
          }
        </TableCell>
        {rowContent.map((item, index) =>
          <TableCell align="center" key={index}>{item}</TableCell>
        )}
      </TableRow>
    </React.Fragment>
  )
}

export default Row;
