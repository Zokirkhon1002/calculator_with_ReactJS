import React, { useState } from 'react';
import Calc from './components/Calc';
import {Button } from './components/Style'


function App() {
  const [showCalc, setShowCalc ] = useState(false);

  return (
    <>
      <Button className="btn" onClick={()=>setShowCalc(!showCalc)}>{showCalc ? "Hide" : "Show"}</Button>
      {showCalc ? <Calc /> : null}
    </>
  );
}

export default App;

