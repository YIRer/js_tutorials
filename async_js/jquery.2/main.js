var img = $("img");
$("#getBtn").click(function(){
    $.get('https://random.cat/meow')
    .done(function(data){
        console.log(data);
        img.attr("src",data.file);
    }).fail(function(){
        console.log("Error!");
    });
});