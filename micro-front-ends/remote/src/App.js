import React,{Component, createContext, useContext, useState} from 'react'
import Button from './Button';


export const App = (props) => {
  const Base = createContext(null);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('-');
  return (
    <Base.Provider value={{count, setCount, name, setName}}>
      <div>Hello from the other side</div>
      <span>{props.value}</span>
      <Button context={Base} />

    </Base.Provider>
  );
};
export default App;
