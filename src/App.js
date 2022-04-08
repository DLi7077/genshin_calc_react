import React from "react";
import StatBox from "./StatBox";

function App() {
  const stats= ['Level','Max HP','ATK','DEF','Elemental Mastery']
  return(
    <>
      <div className="characterWrapper">
        <StatBox
          className="characterBox"
          key= "character0"
          title= {'Kaedehara Kazuha'}
          statList= {stats}/>
        <StatBox
          className="characterBox"
          key= "character1"
          title= {'Character1'}
          statList= {stats}/>
      </div>
    </>
  );
}

export default App;
