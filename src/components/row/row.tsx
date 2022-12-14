import React from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {getOpenedRecord} from "../../store/records/selectors";
import {recordDeleted, recordOpened} from "../../store/actions";

function Row(props: RowProps): JSX.Element {
  const dispatch = useDispatch();
  const openedRecords = useSelector(getOpenedRecord);

  const open = openedRecords.find(id => id === props.row.data.ID) !== undefined;

  const rowContent = Object.values(props.row.data);

  const recordsChildren = props.row.children;
  const childGroups = Object.keys(recordsChildren);
  const children = childGroups.reduce<Record[]>((previousValue, currentValue) => {
    return previousValue.concat(recordsChildren[currentValue].records)
  }, [])

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          {children.length > 0 &&
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => dispatch(recordOpened(props.row.data.ID))}
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
            type="button"
            onClick={() => dispatch(recordDeleted(props.row.data.ID))}
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
          <Collapse in={children.length > 0 && open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              {children.length > 0 ?
                <CollapsibleTable records={children}/> : null
              }
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
