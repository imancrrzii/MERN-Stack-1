import React from "react";
import InputField from "../components/InputField";

const EmploymentType = ({ handleSelect }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of employment</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleSelect}
          />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleSelect={handleSelect}
          value="Full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleSelect={handleSelect}
          value="Temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleSelect={handleSelect}
          value="Part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
};

export default EmploymentType;
