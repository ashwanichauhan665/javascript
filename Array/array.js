let marks = [34,87,98,86,85,93];
console.log(marks);
console.log(marks.length);

for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}
//for of loop
for(let i of marks){
    console.log(i)
}
marks.push(55)
console.log(marks)
marks.pop()
console.log(marks)
console.log(marks.toString())
// delete element from start
console.log(marks.shift())
console.log(marks)
marks.splice(2,1,"Fail")
console.log(marks)

console.log(marks.slice(2,5))
marks.unshift(22)
console.log(marks)
