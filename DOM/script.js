window.console.log("hello");
//document.body.style.background = "green";
//document.body.childNodes[1].innerText = "abcd";
let heading = document.getElementById("heading");
console.log(heading)

let div = document.querySelector("div");
//div.style.backgroundColor = "green";

let id = div.getAttribute("id");
console.log(id)

let btn = document.createElement('button');
btn.innerText = "click here";
console.log(GamepadButton)

let newbtn = document.querySelector('div');
newbtn.append(btn);

let list = document.querySelector('ul');
list.remove();