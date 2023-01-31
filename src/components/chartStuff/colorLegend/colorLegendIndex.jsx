//import "../barChart/Chartindex.css";
import React, { useState } from "react";
import { AxisLeft } from "./AxisLeft";
import { AxisBottom } from "./AxisBottom";
import { Legend } from "./Legend";
import { Marks } from "./Marks";
import { useData } from "./useData";
import { format, scaleLinear, scaleOrdinal, extent } from 'd3';


const width = 960;
const height = 500;
const margin = { top: 20, right: 200, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;
const fadeOpacity = 0.2;

const ColorLegend = () => {
    const data = useData();
    // Set state for hovered values
    const [hoveredValue, setHoveredValue] = useState(null);
    // Get data if no data show Loading pre screen
    if(!data) {
        return <pre>('Loading...')</pre>;
    }

    const innerHeight   = height - margin.top  - margin.bottom;
    const innerWidth  = width  - margin.left - margin.right;
    const circleRadius = 7;
    // Declare accessor functions
    const xValue = d  => d.sepal_length;
    const yValue = d  => d.sepal_width;
    const colorValue  = d => d.species;
    const xAxisLabel  =  'Sepal Length';
    const yAxisLabel  =  'Sepal Width';
    const LegendLabel = 'Species';

    // Filter data based on hoveredValue color
    const filteredData = data.filter(d => hoveredValue === colorValue(d));

    // Declare decimal formatting & formatter
    const siFormatter = format('.2s')
    const xAxisTickFormat = (tickValue) => siFormatter(tickValue);

    // Define xScale. extent() is equivelkent to [min(data, xValue), max(data, xValue)]
    const xScale = scaleLinear()
        .domain(extent(data, xValue)) //.domain([min(data, xValue), max(data, xValue)]) scatter plots domain is min,max of data. bar chart is 0,max
        .range([0, innerWidth])
        .nice(); //round extreme values??    

    // Define yScale
    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([0, innerHeight]);
        
    // Define color scale
    const colorScale = scaleOrdinal()
        .domain(data.map(colorValue))
        .range(['#E6842A', '#137B80','#8E6C8A']);

    return(
        <div className='chartBody'>
            <svg width={ width } height={ height }>
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <AxisBottom xScale={ xScale } innerHeight={ innerHeight } tickFormat={ xAxisTickFormat } tickOffset={ 5 }/>

                    <text className="axis-label" textAnchor="middle" transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}>
                        { yAxisLabel }
                    </text>
                    <AxisLeft yScale={ yScale } innerWidth={ innerWidth } tickOffset={ 5 } />
                    
                    <text className="axis-label" textAnchor="middle" x={ innerWidth / 2 } y={ innerHeight + xAxisLabelOffset}>
                        { xAxisLabel }
                    </text>

                    <g transform={`translate(${innerWidth + 50}, 60)`}>
                        <text className="axis-label" textAnchor="middle" x={ 35 } y={ -25 }> 
                            { LegendLabel }
                        </text>
                        <Legend 
                            tickSpacing={ 22 }
                            tickSize={ circleRadius }
                            tickTextOffset={ 12 }
                            colorScale={ colorScale }
                            onHover={ setHoveredValue }
                            hoveredValue={ hoveredValue}
                            fadeOpacity={ fadeOpacity }
                        />
                    </g>


                    <g opacity={ hoveredValue ? fadeOpacity: 1 }>
                        <Marks 
                            data  ={ data }
                            xScale={ xScale }
                            yScale={ yScale }
                            xValue={ xValue }
                            yValue={ yValue }
                            colorScale = { colorScale }
                            colorValue = { colorValue }
                            toolTipFormat={ xAxisTickFormat}
                            circleRadius= { circleRadius }
                        />
                    </g>
                    
                    <Marks 
                            data  ={ filteredData }
                            xScale={ xScale }
                            yScale={ yScale }
                            xValue={ xValue }
                            yValue={ yValue }
                            colorScale = { colorScale }
                            colorValue = { colorValue }
                            toolTipFormat={ xAxisTickFormat}
                            circleRadius= { circleRadius }            
                    />
                </g>
            </svg>            
        </div>
    )    


}

export default ColorLegend;