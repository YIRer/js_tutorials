// d3.select("h1")
//     .on("click",function(){
//         console.log(this);
//         console.log("event listeners are sweet!")
//     });
// d3.select("h1").on("click",null);
d3.select(".remove")
    .on("click",function(){
        d3.selectAll(".note")
            .remove();
    });

d3.select(".lucky")
    .on("click",function(){
        d3.selectAll(".note")
            .style("font-size",function(){
                return Math.random() * 100 + "px";
            });
    });

var input = d3.select("input");
var preview = d3.select(".preview");

d3.select("#new-note").on("submit",function(){
    d3.event.preventDefault();
    var input = d3.select("input");
    d3.select("#notes")
        .append("p")
        .classed("note",true)
        .text(input.property("value"));
    input.property("value","")
    setPreview(note);
});

input.on("input",function(){
    var note = d3.event.target.value;
    preview.text(note)
    setPreview(note);
});
function setPreview(val){
    preview.text(val)
            .classed("hide",val === "");
}