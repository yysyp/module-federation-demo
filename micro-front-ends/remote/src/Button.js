import React, { useState, useContext } from "react";

import { GlobalContext } from "./App.js";

function Button(props) {
  const [result, setResult] = useState(null);

  const gContext = useContext(GlobalContext);
  return (
    <div>
      RemoteButton get data:{JSON.stringify(gContext)}
      <button onClick={(e)=>{setResult(props.value * 2)}}>Remote1Button</button>
      <span>{result}</span>
    </div>
  );
}
export default Button;