console.log("Start");
setTimeout(function(){
    console.log("Inside the setTimeout()");
}, 5000);
console.log("End");
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < (startDate+10000)){
    endDate = Date.now();
}
console.log("Blocked the main thread HAHAHAHA!!");