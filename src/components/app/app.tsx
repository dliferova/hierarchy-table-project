import React, {useState} from 'react';
import CollapsibleTable from "../collapsible-table/collapsible-table";
import recordsDate from "../../data";
import EmptyTable from "../empty-table/empty-table";

function App(): JSX.Element {
  const [records, setRecords] = useState(recordsDate);

  const handleDeleteClick = (id: string) => {
    const newRows = [...records];
    const index = records.findIndex((rowItem) => rowItem.data.ID === id);
    newRows.splice(index, 1);
    setRecords(newRows);
  }

  return (
    <div className="App">
      {records.length > 0 ?
        <CollapsibleTable records={records} onRowDelete={handleDeleteClick} />
        : <EmptyTable/>
      }
    </div>
  );
}

export default App;
