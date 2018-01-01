d3.select("#page-title")
    .style("background-color","#00feab");
d3.selectAll("li")
    .style("font-size",function(){
        return Math.random() * 40 + "px";
    });
