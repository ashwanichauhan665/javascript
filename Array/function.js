let arr = ["first","second","third","fourth","fifth"]
function f(arr){
    console.log(arr)
    console.log(arr.length)
}
f(arr)

arr.forEach((arr) => {
    console.log(arr)
})
let newarr = arr.map((arr) => {
    return arr
})
console.log(newarr)

let ar = [1,2,3,4,5,6];
let evnar = ar.filter((ar)=>{
    return ar%2 === 0;
})
console.log(evnar)
let marks = [95,85,75,96,97];
let ans = marks.filter((marks)=>{
    return marks > 94;
})
console.log(ans)
//problem
let n = prompt("Enter the number n: ");
let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
     console.log(i)
}
let arfiltr = array.reduce((res, curr)=>{
    return  res + curr;
})
console.log(arfiltr)
