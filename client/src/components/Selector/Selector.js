import React from "react";

const Selector = () => {
  return (
    <div>
      <label for="difficulty-select">Choose an education level:</label>

      <select name="difficulty" id="difficulty">
        <option value="">--Please choose an option--</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Selector;
