import React, {useState} from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {Box, Button, Collapse} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {RowProps} from "./row-types";
import {Record} from "../../data";
import CollapsibleTable from "../collapsible-table/collapsible-table";

function Row(props: RowProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const rowContent = Object.values(props.row.data);

  const recordsChildren = props.row.children;
  const childGroups = Object.keys(recordsChildren);
  const children = childGroups.reduce<Record[]>((previousValue, currentValue) => {
    return previousValue.concat(recordsChildren[currentValue].records)
  }, [])

  const [rowChildren, setRowChildren] = useState(children);

  const handleDeleteClick = (id: string) => {
    const newRows = [...rowChildren];
    const index = rowChildren.findIndex((rowItem) => rowItem.data.ID === id);
    newRows.splice(index, 1);
    setRowChildren(newRows);
  }

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          {rowChildren.length > 0 &&
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
          <TableCell component="th" scope="row" align="center" key={index}>{item}</TableCell>
        )}
        <TableCell align="center">
          <Button
            color="error"
            onClick={() => props.onRowDelete(props.row.data.ID)}
          >
            <ClearIcon
              sx={{
                color: "#c30010"
              }}/>
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={rowChildren.length > 0 && open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              {rowChildren.length > 0 ?
                <CollapsibleTable records={rowChildren} onRowDelete={handleDeleteClick}/> : null
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
