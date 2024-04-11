let a = 3;
for(let i=0;i<5;i++){
    console.log("This is loop "+i)
}

//for of loop
let str = "abcde";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);
//for in loop
let student = {
    name: "Rahul Kumar",
    class: 10,
    rollNo : 1,
    status: "pass"
};
for(let i in student){
    //console.log(i)
    console.log("Key: "+i+", value: "+student[i])
}
let gamenum = 5;
let n = prompt("Enter the number: ");
while(n != gamenum){
    let n = prompt("You entered wrong number, guess Again! ");
}
console.log("Congratulations! You entered correct number")