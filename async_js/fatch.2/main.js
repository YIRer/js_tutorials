// https://randomuser.me/api/
var btn = document.querySelector("#btn");
var fullName = document.querySelector("#fullname");
var avatar = document.querySelector("#avatar");
var userName = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");


btn.addEventListener("click",getDatas,false);
getDatas();
function getDatas(){
  var getUrl = "https://randomuser.me/api/";
  fetch(getUrl)
  .then(catchError)
  .then(parsingData)
  .then(innerData)
  .catch(function(error){
    console.log(error);
  });
}


function catchError(request){
  if(!request.ok){
    throw Error(request.status)
  }
  return request;
}

function parsingData(res){
  return res.json().then(function(parseData){
    var data = parseData.results[0];
    return data;
  });
}

function innerData(data){
  // console.log(data);
  fullName.innerText= data.name.first + " "+ data.name.last;
  avatar.src = data.picture.thumbnail;
  userName.innerText= data.login.username;
  email.innerText= data.email;
  city.innerText= data.location.city;

}