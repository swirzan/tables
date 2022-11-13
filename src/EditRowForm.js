import React from "react";

const EditRowForm = (props) => {
  return (
    <form name="editForm">
      {props.editItem}
      {props.message}
      <input
        type="text"
        placeholder="Dessert..."
        name="dessert"
        // value={props.editRow.dessert}
      />

      <input type="number" placeholder="calories..." name="calories" />

      <input type="number" placeholder="fat..." name="fat" />

      <input type="number" placeholder="carbs..." name="carbs" />

      <input type="number" placeholder="protein..." name="protein" />

      <input type="number" placeholder="sodium..." name="sodium" />

      <input type="text" placeholder="calcium..." name="calcium" />

      <input type="text" placeholder="iron..." name="iron" />
      <button onClick={props.editRow}>Update</button>
    </form>
  );
};

export default EditRowForm;
