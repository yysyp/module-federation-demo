import React, { useContext } from "react";

import { GlobalContext } from "./App.js";
function HostChild() {
  const gContext = useContext(GlobalContext);
  return (
    <div>
      HostChild get data:{JSON.stringify(gContext)}
      
    </div>
  );
}
export default HostChild;
