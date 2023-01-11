
import './Chartindex.css';
import React from "react";
import { useData } from './useData';
import { Marks } from './Marks';
import { AxisLeft } from './AxisLeft';
import { AxisBottom } from './AxisBottom';
import { format, scaleBand, scaleLinear,max } from 'd3';

// Declare height, width, margins of window
const width  = 960;
const height = 500;
const margin = {
     top: 20,
   right: 30,
  bottom: 65,
    left: 220,
}

// Define pxs for offsetting x-Axis label
const xAxisLabelOffset = 50;

const ChartIndex = () => {
  //get data
  const data = useData();

  //if no data, show loading screen
  if(!data) {
    return <pre>('Loading')</pre>
  }
  console.log(data);
  // Define height, width of visual
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // Declare accesor functions
  const yValue = (d) => d.Country;
  const xValue = (d) => d.Population;

  // Declare formatter to format #s to 2 significant digits
  const siFormatter = format(".2s")
  // User formatter to declare x-axis tick format & replace G with B for billions
  const XAxisTickFormat = tickValue => siFormatter(tickValue).replace('G', 'B');

  // Declare x(quantitative) & y(qualitative) scalres using scaleBand() from d3
  const yScale = scaleBand().domain(data.map(yValue)).range([0,innerHeight]).padding(0.15);
  const xScale = scaleLinear().domain([0, max(data, xValue)]).range([0, innerWidth]);

  return (
    <div className='chartBody'>
      <svg width={ width } height={ height }>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={ XAxisTickFormat }/>
          <AxisLeft yScale={yScale} />
          
          <text className="axis-label" x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor='middle'>
            Top 10 Countries By Population - 2019
          </text>

          <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} toolTipFormat={XAxisTickFormat}/>
        </g>
      </svg>
    </div>
  )
}

export default ChartIndex;
