import React from 'react';
import {useSelector} from "react-redux";
import CollapsibleTable from "../collapsible-table/collapsible-table";
import EmptyTable from "../empty-table/empty-table";
import {getRecords} from "../../store/records/selectors";

function App(): JSX.Element {
  const records = useSelector(getRecords);

  return (
    <div className="App">
      {records.length > 0 ?
        <CollapsibleTable records={records} />
        : <EmptyTable/>
      }
    </div>
  );
}

export default App;
