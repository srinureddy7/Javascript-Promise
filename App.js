let p = new Promise((resolve,reject) => {
let a = 1+2;
if(a == 2){
    resolve("success");
}
else{
    reject("Failure");
}
}
);
p.then((message) => {
    console.log("Task is "+message);
}).catch((message) => {
    console.log("Task is "+message);
});