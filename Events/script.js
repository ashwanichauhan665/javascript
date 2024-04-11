let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 2;
//     a++;
//     console.log(a)
// }

// btn1.onclick = (e) => {
//     console.log(e)
// }

btn1.addEventListener('click',() => {
    console.log('button 1 was clicked')
})
let div = document.querySelector('div');
div.onmouseover = () => {
    console.log("you are inside the div")
}

let modebtn = document.querySelector('#tb');
let currmode = 'light';
modebtn.addEventListener('click', ()=>{
    //console.log('you are try to change');
    if(currmode == 'light'){
        currmode = 'dark';
        document.querySelector('body').style.backgroundColor = 'black';
    }
    else{
        currmode = 'light';
        document.querySelector('body').style.backgroundColor = 'white';
    }
    console.log(currmode);
})