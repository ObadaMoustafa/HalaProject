import React, { useState } from "react";
function App() {
  async function getDataFn() {
    try {
      const response = await fetch("http://localhost:5000/");
      const responseData = await response.json();
      console.log("responseData", responseData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Hello from the app</h1>
      <button onClick={getDataFn}>get data</button>
    </div>
  );
}

export default App;
