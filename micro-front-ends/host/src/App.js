import React,{Component, createContext, useContext} from 'react'
import ErrorBoundary from "./ErrorBoundary";
import HostChild from './HostChild';
export const GlobalContext = createContext({name:'scw', count: 10000})

const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));


const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

const handleClick = (e) => {
  console.log('Clicked: ' + e);
};

export const App = () => (
  <GlobalContext.Provider value={{name:'scw1', setName:handleClick.bind(this)}}>
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <HostChild/>
    
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp value="hostnamedata" />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
   <RemoteWrapper>
      <RemoteButton value={4} context={GlobalContext} func={handleClick}/>
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
  </GlobalContext.Provider>
);
export default App;
