let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let msg_cotainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resett_btn = document.querySelector("#new-btn");
let turn0 = true;//playerX playerO
const winning_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetgame =()=>{
   turn0 = true;
  enableboxes();
  msg_cotainer.classList.add("hide");
}

const enableboxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const disableboxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "O";
           
            box.style.color ="black";
            turn0 = false;
        } else {
            box.innerText = "X";
            
            box.style.color ="red";
            turn0 = true;
        }
        box.disabled = "true";
        checkwinner();
    })
}


)
draw_game = ()=>{
    msg.innerText ="Match Draw!!";
    msg_cotainer.classList.remove("hide");
    disableboxes();
}

show_winner = (winner) => {
   if(turn0 ===true){
    msg.innerText =`Congratulation, Winner is ${winner.innerText="Alok"}`;
   }else{
    msg.innerText =`Congratulation, Winner is ${winner.innerText="Mosi"}`;
   }
    msg_cotainer.classList.remove("hide");
    disableboxes();
}
const checkwinner = () => {
    for (let pattern of winning_pattern) {
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                show_winner(pos1val);
            } 
            else if(pos1val !== pos2val && pos2val !== pos3val){
                console.log("draw match")
            }
            }
        }
      
    }
reset_btn.addEventListener("click", resetgame);
resett_btn.addEventListener("click", resetgame);