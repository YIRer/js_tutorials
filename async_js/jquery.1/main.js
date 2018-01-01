$("#getBtn").click(function(){
    $.get('https://api.github.com/users/colt')
    .done(function(data){
        console.log(data);
    }).fail(function(){
        console.log("Error!");
    });
});

$("#postBtn").click(function(){
    var data = {
        name :"asfd",
        city :"seoul"
    }
    $.post('www.catsarecoolandsoaredogs.com',data)
    .done(function(data){
        console.log("Hi")
    }).fail(function(){
        console.log("Error!");
    });
});
$("#getJSONBtn").click(function(){
    $.getJSON('https://api.github.com/users/colt')
    .done(function(data){
        console.log(data);
    }).fail(function(){
        console.log("Error!");
    });
});