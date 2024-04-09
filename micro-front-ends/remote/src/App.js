import React,{Component, createContext, useContext} from 'react'

export const GlobalContext = createContext({name:'scw-remote'})

export const App = () => {
  return <div>Hello from the other side</div>;
};
export default App;
