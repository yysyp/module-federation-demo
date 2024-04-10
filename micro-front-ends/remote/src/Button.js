import React, { useState, useContext } from "react";

function Button(props) {
  const { count, setCount } = useContext(props.context);
  const { name, setName } = useContext(props.context);
  const [result, setResult] = useState(null);

  return (
    <div>
      RemoteButton get data:{JSON.stringify(name)}
      <button onClick={(e)=>{setResult(props.value * 2); setName("new-name-by-remote-button");}}>Remote1Button</button>
      <br/><span>count: {count}</span>
      <br/><span>result: {result}</span>
    </div>
  );
}
export default Button;