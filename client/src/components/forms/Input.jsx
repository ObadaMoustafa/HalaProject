import React from "react";

function Input({ label, type = "text", value, setValue }) {
  //write code here
  return (
    <>
      <label>{label.toUpperCase()}</label>
      <input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </>
  );
}

export default Input;
