export const Marks = ({ 
    data,
    xScale,
    xValue,
    yScale,
    yValue,
    toolTipFormat,
    circleRadius,
    colorScale,
    colorValue
 }) => data.map(d => (
    <circle 
        cx        = { xScale(xValue(d)) } //center x
        cy        = { yScale(yValue(d)) } //center y
        r         = { circleRadius }      //radius
        fill      = { colorScale(colorValue(d))}
    >
        <title>
            {toolTipFormat(xValue(d))}
        </title>
    </circle>
 ));