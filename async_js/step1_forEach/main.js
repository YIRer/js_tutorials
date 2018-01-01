function forEach(arr, callback){
    for( var i = 0; i < arr.length; i++){
        callback(arr[i],i,arr);
    }
}

function findIndex(arr,callback){
    for(var i =0; i< arr.length; i++){
        if(callback(arr[i],i,arr)==true){
            return i;
        }
    }
    return -1;
}
var arr=[1,2,3,4,5,6]

console.log(findIndex(arr, function(num,index,arr){
    return num == 5;
}));