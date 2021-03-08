import React, { useState, useRef, useEffect} from 'react';
import { select } from 'd3';
import './App.css';

function Circle({ data }) {
  const svgRef = useRef();
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
    </React.Fragment>
  );
}

export default Circle;
