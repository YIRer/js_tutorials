var colors = {
    "G" : "#3cff00",
    "PG" : "#f9ff00",
    "PG-13" : "#ff9000",
    "R" : "#ff0000"
};

var add = d3.select("#add");

add.on("click", function(){
    quotes = quotes.concat(newQuotes);
    var listItems = d3.select("#quotes")
        .selectAll("li")
        .data(quotes);
    
    listItems
        .enter()
        .append("li")
        .text(d => d.quote)
        .style("margin","20px")
        .style("padding","20px")
        .style("font-size",function(d){
            return d.quote.length < 25 ? "2em" : "1em";
        })
        .style("background-color",d => colors[d.rating])
        .style("border-radius","8px")
        .merge(listItems);
    

    add.remove();
})

d3.select("#quotes")
    .style("list-style","none")
    .selectAll("li")
    .data(quotes)
    .enter()
    .append("li")
    .text(function(d){
        return d.quote;
    })
    .style("margin","20px")
    .style("padding","20px")
    .style("font-size",function(d){
        return d.quote.length < 25 ? "2em" : "1em";
    })
    .style("background-color",d => colors[d.rating])
    .style("border-radius","8px");

// quotes.pop();

// d3.selectAll("li")
//     .data(quotes)
//     .exit()
//     .remove();

var removeBtn = d3.select("#remove");
removeBtn.on("click",function(){
    var nonRQoutes = quotes.filter(function(d){
        return d.rating !== "R";
    });
    d3.selectAll("li")
        .data(nonRQoutes, function(d){
            return d.quote;
        })
        .exit()
        .remove();
    removeBtn.remove();
});