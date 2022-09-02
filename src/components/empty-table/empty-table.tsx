import React from 'react';

const EmptyTable = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      color: "#45d8b2"
    }}>
      Sorry, but you`ve deleted all table rows ... refresh this page
    </div>
  );
};

export default EmptyTable;
