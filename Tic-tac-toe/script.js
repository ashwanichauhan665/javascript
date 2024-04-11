let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let turn = true;
let h2 = document.querySelector("h2");
const winpattern = [[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8],];
boxes.forEach(element => {
        element.addEventListener("click",() => {
            if(turn){
                element.innerText = "O";
                turn = false;
            }
            else{
                element.innerText = "X";
                turn = true;
            }
            element.disabled = true;
            checkwinner();
        });
});
const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner",pos1);
                h2.innerText = "winner "+pos1;
            }else{
                h2.innerText = "Match Tie, Try again!"
            }
        }
    }
}
