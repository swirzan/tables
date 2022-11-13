import React, { useState } from "react";
import { AcademicTableData } from "./TableData";
const AcademicTable = () => {
  const [TableData, setTableData] = useState(AcademicTableData);
  return (
    <table>
      <tr>
        <th>SUBJECT</th>
        <th colSpan="3">FULL MARKS</th>
        <th colSpan="4">MARKS OBTAINED</th>
      </tr>
      <tr>
        <th>COMPULSORY SUBJECTS</th>
        <th>WRITTEN</th>
        <th>ORAL</th>
        <th>TOTAL</th>
        <th>WRITTEN</th>
        <th>ORAL</th>
        <th>TOTAL</th>
        <th>GRADE</th>
      </tr>
      {TableData.map((element, index) => {
        return (
          <tr id={index}>
            <td>{element.compSub}</td>
            <td>{element.fwritten}</td>
            <td>{element.fOral}</td>
            <td>{element.fTotal}</td>
            <td>{element.mWritten}</td>
            <td>{element.mOral}</td>
            <td>{element.mTotal}</td>
            <td>{element.mGrade}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default AcademicTable;
