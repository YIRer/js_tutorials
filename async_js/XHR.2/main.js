var btn = document.querySelector('#btn');
btn.addEventListener("click",function(){
    // alert("CLICKED!!");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200){
            console.log(XHR.responseText);
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi.USD.rate_float;
            var code = data.bpi.USD.code;
            var priceText = document.querySelector("#price");
            priceText.innerHTML = price + code;
        }
    }
    XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});