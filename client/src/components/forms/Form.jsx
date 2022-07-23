import React from "react";

function Form({ children, onSubmit, buttonText }) {
  //write code here

  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default Form;
