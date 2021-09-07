import React from "react";
import './_selector.scss'

const Selector = ({onChangeHandler}) => {

 
  

  return (
    <div className= "selector">
      <label className="selector__label" htmlFor="difficulty-select">Choose an education level:</label>

      <select onChange={onChangeHandler} className="selector__drop" name="difficulty" id="difficulty">
        <option value="">--Please choose an option--</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <a className="reset" href="/">RESET</a>
      
    </div>
  );
};

export default Selector;
