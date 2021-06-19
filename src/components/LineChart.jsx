import React, { useEffect, useRef } from 'react';
import {
    line,
    extent,
    scalePoint,
    scaleLinear,
    select,
    axisBottom,
    axisLeft,
} from 'd3';

const LineChart = ({ width, height, colors, data }) => {

    const svgRef = useRef(null);
    const margin = { top: 20, right: 20, bottom: 20, left: 20 },
        innerWidth = width - margin.left - margin.right,
        innerHeight = height - margin.top - margin.bottom;

    useEffect(() => {
        const svg = select(svgRef.current);
        svg.selectAll('*').remove();

        svg
            .append('g');

        const x = scalePoint()
            .domain(data.map(d => d.label))
            .range([0, innerWidth]);

        const y = scaleLinear()
            .domain(extent(data, d => d.value))
            .range([innerHeight, 0]);

        const yAxis = axisLeft(y);

        const xAxis = axisBottom(x);

        const drawLine = line()
            .x(d => x(d.label))
            .y(d => y(d.value));

        svg
            .select('g')
            .attr("class", "line-g")
            .append('path')
            .attr("class", "line")
            .datum(data)
            .attr('d', d => drawLine(d))
            .style('fill', 'none')
            .attr('stroke', colors[0])
            .attr('stroke-width', '2');

        svg
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('class', 'circle-g')
            .append("circle")
            .attr('class', 'circle')
            .attr("r", 3)
            .attr("cx", d => x(d.label))
            .attr("cy", d => y(d.value))
            .style("fill", colors[0]);

        svg
            .select('g')
            .append('g')
            .attr('class', 'y axis')
            .call(yAxis)
            .append('text')
            .attr('transform', 'translate(15, 0) rotate(-90)')
            .style('text-anchor', 'end')
            .style('padding-top', '5px');

        svg
            .select('g')
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (innerHeight) + ')')
            .call(xAxis)
            .style('color', '#e3e3e3')
            .selectAll('text')
            .style('color', '#000');

    }, []);

    return (
        <svg
            viewBox={`0 0 ${innerWidth} ${innerHeight}`}
            width={innerWidth}
            height={innerHeight}
            ref={svgRef}
            overflow='visible'>

        </svg>
    );
};

export default LineChart;
