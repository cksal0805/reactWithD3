import React, { useState } from 'react';
import './App.css';
import Circle from "./Circle";
import Line from "./Line";

function App() {
  const [data, setData] = useState([20, 30, 15, 40, 25, 65, 70]);
  const onHandleSetData = () => {
    setData(data.map((v) => v + 5));
  }
  const onHandleFilterSetData = () => {
    setData(data.filter((v) => v > 35));
  }
  return (
    <>
      <Circle data={data}/>
      <br />
      <br />
      <br />
      <Line data={data}/>
      <br />
      <br />
      <br />
      <button type="button" onClick={onHandleSetData}>Update Date</button>
      <button type="button" onClick={onHandleFilterSetData}>Filter Date</button>
    </>
  );
}

export default App;
