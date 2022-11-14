import React from "react";

const EditRowForm = (props) => {
  const editItemId = props.editItemId;
  const setEditItemId = props.setEditItemId;
  const tableData = props.tableData;
  const setTableData = props.setTableData;
  console.log(editItemId);
  const changeHandler = (e) => {
    setEditItemId((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
    console.log(setEditItemId);
  };
  return (
    <form>
      {/* {props.editItem}
      {props.message} */}
      <input
        type="text"
        placeholder="Dessert..."
        name="dessert"
        value={editItemId.dessert}
        onChange={changeHandler}
      />

      <input
        type="number"
        placeholder="calories..."
        name="calories"
        value={editItemId.calories}
        onChange={changeHandler}
      />

      <input
        type="number"
        placeholder="fat..."
        name="fat"
        value={editItemId.fat}
        onChange={changeHandler}
      />

      <input
        type="number"
        placeholder="carbs..."
        name="carbs"
        value={editItemId.carbs}
        onChange={changeHandler}
      />

      <input
        type="number"
        placeholder="protein..."
        name="protein"
        value={editItemId.protein}
        onChange={changeHandler}
      />

      <input
        type="number"
        placeholder="sodium..."
        name="sodium"
        value={editItemId.sodium}
        onChange={changeHandler}
      />

      <input
        type="text"
        placeholder="calcium..."
        name="calcium"
        value={editItemId.calcium}
        onChange={changeHandler}
      />

      <input
        type="text"
        placeholder="iron..."
        name="iron"
        value={editItemId.iron}
        onChange={changeHandler}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditRowForm;
