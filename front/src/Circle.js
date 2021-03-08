import React, { useState, useRef, useEffect} from 'react';
import { select } from 'd3';
import './App.css';

function Circle() {
  const svgRef = useRef();
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const onHandleSetData = () => {
    setData(data.map((v) => v + 5));
  }
  const onHandleFilterSetData = () => {
    setData(data.filter((v) => v > 35));
  }
  useEffect(() => {
    const svgLine = select(svgRef.current);
    svgLine
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value * 2)
      .attr("cy", value => value * 2)
      .attr("stroke", "red")
  }, [data]);
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button type="button" onClick={onHandleSetData}>Update Date</button>
      <button type="button" onClick={onHandleFilterSetData}>Filter Date</button>
    </React.Fragment>
  );
}

export default Circle;
