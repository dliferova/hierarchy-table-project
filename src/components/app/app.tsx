import React from 'react';
import CollapsibleTable from "../collapsible-table/collapsible-table";
import data from "../../data";

function App(): JSX.Element {
  return (
    <div className="App">
      <CollapsibleTable data={data} />
    </div>
  );
}

export default App;
