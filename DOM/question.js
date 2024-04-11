let nbtn = document.createElement('button');
nbtn.innerText = "click me";
nbtn.style.backgroundColor = "red";
nbtn.style.textEmphasisColor = "white";
let body = document.querySelector('body');
body.before(nbtn)

let para = document.querySelector('p');
para.getAttribute('class');
//para.setAttribute('class','newcls')

para.classList.add('newcls')
para.classList.remove('newcls')
