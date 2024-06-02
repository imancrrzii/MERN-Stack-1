import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleSelect }) => {
  const now = new Date();
  const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);
  const oneWeekAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const oneDayAgoDate = oneDayAgo.toISOString().slice(0, 10);
  const oneWeekAgoDate = oneWeekAgo.toISOString().slice(0, 10);
  const oneMonthAgoDate = oneMonthAgo.toISOString().slice(0, 10);
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleSelect}
          />
          <span className="checkmark"></span>All Time
        </label>

        <InputField
          handleSelect={handleSelect}
          value={oneDayAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleSelect={handleSelect}
          value={oneWeekAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleSelect={handleSelect}
          value={oneMonthAgoDate}
          title="Last month"
          name="test"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
