let board =
[
"","","",
"","","",
"","",""
];


let player="X";

let finished=false;


let mode="human";


let x=0;
let o=0;
let draws=0;


let time=0;

let clock;



const boardBox =
document.getElementById("board");





function loadBoard(){


boardBox.innerHTML="";


board.forEach((value,index)=>{


let box=document.createElement("div");


box.className="cell";


box.innerHTML=value;



box.onclick=function(){

play(index);

}



boardBox.appendChild(box);


});


}



loadBoard();






function startGame(){


mode=document.getElementById("mode").value;

restartGame();


}







function play(index){



if(board[index]!=="" || finished)
return;



board[index]=player;



loadBoard();



winner();



if(!finished){



player =
player==="X"?"O":"X";



document.getElementById("turn")
.innerHTML=
"Player "+player+" Turn";





if(mode==="computer" && player==="O"){


setTimeout(computer,600);


}



}



}







function computer(){


let empty=[];


board.forEach((v,i)=>{


if(v==="")
empty.push(i);


});



let move =
empty[Math.floor(Math.random()*empty.length)];



play(move);


}








function winner(){



let patterns=[

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];




for(let p of patterns){


if(
board[p[0]] &&
board[p[0]]===board[p[1]] &&
board[p[1]]===board[p[2]]
){



finished=true;



let cells =
document.querySelectorAll(".cell");



p.forEach(i=>{

cells[i].classList.add("win");

});




if(board[p[0]]==="X")
x++;
else
o++;




scoreUpdate();

return;


}



}



if(!board.includes("")){


draws++;

finished=true;


scoreUpdate();


}



}









function scoreUpdate(){


document.getElementById("xScore")
.innerHTML=x;


document.getElementById("oScore")
.innerHTML=o;


document.getElementById("drawScore")
.innerHTML=draws;



}







function restartGame(){


board=[
"","","",
"","","",
"","",""
];


player="X";

finished=false;


loadBoard();


document.getElementById("turn")
.innerHTML="Player X Turn";



clearInterval(clock);



time=0;


clock=setInterval(()=>{


time++;


document.getElementById("timer")
.innerHTML=time;


},1000);



}







function resetScore(){


x=0;
o=0;
draws=0;


scoreUpdate();


restartGame();


}







function toggleTheme(){


document.body.classList.toggle("dark");


}