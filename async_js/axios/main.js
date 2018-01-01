var url = "https://opentdb.com/api.php?amount=1";

axios.get(url)
.then(function(res){
    console.log(res);
})
.catch(function(){
    console.log("ERROR")
});