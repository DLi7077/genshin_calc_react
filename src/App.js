import React from "react";
import StatBox from "./StatBox";
function App() {
  const stats= ['level','attack','cd']
  return(
    <>
    <StatBox title= {'test'} statList= {stats}/>
    
    </>
  );
}

export default App;
