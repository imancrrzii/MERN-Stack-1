import React from "react";

const InputField = ({ handleSelect, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleSelect} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default InputField;
