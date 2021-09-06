import React from "react";

const Selector = () => {

  const difficultySelector = (event) => {
      event.preventDefault();
      const newPage = event.target.value;
      window.location = `http://localhost:3000/${newPage}`;
  }

  return (
    <div>
      <label className="selector__label" htmlFor="difficulty-select">Choose an education level:</label>

      <select onChange={difficultySelector} className="selector" name="difficulty" id="difficulty">
        <option value="">--Please choose an option--</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Selector;
