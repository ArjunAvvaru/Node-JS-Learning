var condition="Positive";
var promise=new Promise(function(resolve,reject){
if(condition=="Positivwe"){
    resolve("I'm Good");
}
else{
    reject("F OFF");
}
});
promise.then(function(response){
    console.log(response);
})
.catch(function(errorResponse){
    console.log(errorResponse);
});