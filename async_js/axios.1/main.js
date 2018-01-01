// var url = "";
var btn = document.querySelector("button");
var section = document.querySelector("#comments");

btn.addEventListener("click",sendRequest);

function sendRequest(){

    axios.get("https://jsonplaaskjldceholder.typicode.com/comments",{
        params:{
            postId:1
        }
    })
    .then(addComment)
    .catch(errorHandle);
}

function addComment(res){
    res.data.forEach(function(comment){
        appendComment(comment);
    });
}
function errorHandle(err){
    if(err.requset){
        console.log("request Error!");
    }else if(err.response){
        console.log(err.response.status);
    }else{
        console.log("error!!");
    }
}