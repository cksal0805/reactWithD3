import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal } from 'd3';

function Line () {
  const [data, setData] = useState([20, 30, 15, 40, 25, 65, 70]);
  const svgRef = useRef();
  const onHandleSetData = () => {
    setData(data.map((v) => v + 5));
  }
  const onHandleFilterSetData = () => {
    setData(data.filter((v) => v > 35));
  }
  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 150 - value)
      .curve(curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", value => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue")
  }, [data])
  return(
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button type="button" onClick={onHandleSetData}>Update Date</button>
      <button type="button" onClick={onHandleFilterSetData}>Filter Date</button>
    </React.Fragment>
  )
}

export default Line;
