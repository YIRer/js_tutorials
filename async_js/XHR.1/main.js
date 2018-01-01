var btn = document.querySelector('#btn');
btn.addEventListener("click",function(){
    // alert("CLICKED!!");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            console.log(XHR.responseText);
            var data = JSON.parse(XHR.responseText);
            var img = document.querySelector("#photo");
            img.src = data.message;
        }
    }
    XHR.open("GET","https://dog.ceo/api/breeds/image/random");
    XHR.send();
});