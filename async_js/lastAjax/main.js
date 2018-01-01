var quote = $("#quote");
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$("#xhr").click(function(){
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            // console.log(XHR.responseText);
            var jsonData = JSON.parse(XHR.responseText);
            quote.text(jsonData);   
        }
    };
    XHR.open("GET",url);
    XHR.send();
});

$("#fetch").click(function(){
   fetch(url)
   .then(function(req){
        if(!req.ok){
            throw Error;
        }
        return req;
   })
   .then(function(res){
       return res.json().then(function(parseData){
           return parseData[0];
       })
   })
   .then(function(data){
       quote.text(data);
   })
   .catch(handleError);
});

$("#jquery").click(function(){
    $.get(url)
    .done(function(data){
        // console.log(data)
        quote.text(data[0]);
    })
    .fail(handleError);
});

$("#axios").click(function(){
    axios.get(url)
    .then(function(res){
        // console.log(data)
        quote.text(res.data[0]);
    })
    .catch(handleError);
});

function handleError(err){
    if(err.requset){
        console.log("request Error!");
    }else if(err.response){
        console.log(err.response.status);
    }else{
        console.log("error!!");
    }
}