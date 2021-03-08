import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, axisRight, scaleLinear } from 'd3';

function Line ({ data }) {
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length])
      .range([0, 300])
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0])
    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1)
    ;
    const yAxis = axisRight(yScale);
    svg
      .select(".x-axis")
      .call(xAxis)
      .style("transform", "translateY(150px)");
    svg
      .select(".y-axis")
      .call(yAxis)
      .style("transform", "translateX(300px)");
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue")
  }, [data])
  return(
    <React.Fragment>
      <svg className="line-wrapper" ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
    </React.Fragment>
  )
}

export default Line;
