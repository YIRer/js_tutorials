var width = 500;
var height = 500;
var dotPadding = 30;

var yScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                .range([height - dotPadding, dotPadding]);
var xScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.births / d.population))
                .range([dotPadding, width-dotPadding]);
var colorScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.population / d.area))
                    .range(['lightgreen','black']);
var radiusScale = d3.scaleLinear()
                    .domain(d3.extent(
                        birthData2011, d => d.births
                    ))
                    .range([2, 40]);
var xAxis = d3.axisBottom(xScale)
                .tickSize(-height + 2 * dotPadding)
                .tickSizeOuter(0);
var yAxis = d3.axisLeft(yScale)
                .tickSize(-width + 2 * dotPadding)
                .tickSizeOuter(0);

d3.select("svg")
    .append("g")
        .attr("transform","translate(0,"+(height - dotPadding)+")")
        .call(xAxis);
d3.select("svg")
    .append("g")
        .attr("transform","translate("+dotPadding+",0)")
        .call(yAxis);

d3.select("svg")
    .attr("width",width)
    .attr("height",height)
    .selectAll("circle")
    .data(birthData2011)
    .enter()
    .append("circle")
        .attr("cx", d => xScale(d.births / d.population))
        .attr("cy", d => yScale(d.lifeExpectancy))
        .attr("r", d=> radiusScale(d.births))
        .attr("fill", d => colorScale(d.population / d.area));

d3.select("svg")
    .append("text")
    .attr("y",height - dotPadding)
    .attr("x", width / 2)
    .attr("dy", "1.5em")
    .style("text-anchor", "middle")
    .text("Births per Capita");

d3.select("svg")
    .append("text")
    .attr("transform","rotate(-90)")
    .attr("y", dotPadding)
    .attr("x", -height / 2)
    .attr("dy", "-1.1em")
    .style("text-anchor", "middle")
    .text("Life Expectancy");