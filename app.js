let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let n=document.querySelector("#new");
let mzgbox=document.querySelector(".mzg-box");
let mzg=document.querySelector("#mzg");

let turnO=true;
let count = 0;

const winpatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    count = 0;
    en();
    mzgbox.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="X";
            turnO=false;
        }
        else{
            box.innerText="O";
            turnO=true;
        }
        box.disabled=true;
        count++;
        
        let iswinner=checkwin();

        if (count === 9 && !iswinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
  mzg.innerText = `Game was a Draw`;
  mzgbox.classList.remove("hide");
  dis();
};

const dis=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const en=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const show=(winner)=>{
    mzg.innerText=`Congrats, Winner is ${winner}`;
    mzgbox.classList.remove("hide");
    dis();

}

const checkwin = () => {
    for(let pattern of winpatt) {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!="" && p3!=""){
            if(p1==p2 && p2== p3){
                show(p1);
                return true;
            }
        }
    }
};

n.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);