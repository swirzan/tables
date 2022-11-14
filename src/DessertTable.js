import React, { useState } from "react";
import { dessertTableData } from "./TableData";
import EditTableMsg from "./EditTableMsg";
import EditRowForm from "./EditRowForm";
// import EditForm from "./EditForm";

const DessertTable = () => {
  const [tableData, setTableData] = useState(dessertTableData);
  const [editing, setEditing] = useState(false);
  const [editItemId, setEditItemId] = useState("");

  const editHandler = (id) => {
    let edited = tableData.find((index) => {
      return index.id === id;
    });
    setEditItemId(edited);
    console.log(edited);
    setEditing(true);
  };

  return (
    <>
      <table>
        <tr>
          <th>Dessert(100g serving)</th>
          <th>Calories</th>
          <th>Fat(g)</th>
          <th>Cards(g)</th>
          <th>Protein(g)</th>
          <th>Sodium(mg)</th>

          <th>Calcium(%)</th>
          <th>Iron(%)</th>
          <th>Action</th>
        </tr>
        {tableData.map((item) => {
          return (
            <tr>
              <td>{item.dessert}</td>
              <td>{item.calories}</td>
              <td>{item.fat}</td>
              <td>{item.carbs}</td>
              <td>{item.protein}</td>
              <td>{item.sodium}</td>
              <td>{item.calcium}</td>
              <td>{item.iron}</td>
              <td>
                <button
                  onClick={() => {
                    editHandler(item.id);
                    setEditing(true);
                  }}
                >
                  Edit
                </button>
              </td>
              {/* <td>
              <button
                onClick={() => {
                  props.deleteHandler(item.id);
                }}
              >
                Delete
              </button>
            </td> */}
            </tr>
          );
        })}
        {editing && <EditTableMsg editMsg={editItemId.dessert} />}
      </table>
      {editing && (
        <EditRowForm
          editItemId={editItemId}
          setEditItemId={setEditItemId}
          tableData={tableData}
          setTableData={setTableData}
        />
      )}

      {/* <EditForm /> */}
    </>
  );
};

export default DessertTable;
