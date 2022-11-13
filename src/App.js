import React from "react";
import "./App.css";
import AcademicTable from "./AcademicTable";
import DessertTable from "./DessertTable";
import Fotter from "./Fotter";

function App() {
  return (
    <div>
      <AcademicTable />
      <br />
      <br />
      <DessertTable />
      <Fotter currentDate={Date().toLocaleString()} />;
    </div>
  );
}

export default App;
