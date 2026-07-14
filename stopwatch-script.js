let seconds = 0;
let minutes = 0;
let hours = 0;


let timer = null;

let countdown = false;


let display =
document.getElementById("display");


let laps =
document.getElementById("laps");





function updateDisplay(){


let h =
hours < 10 ? "0"+hours : hours;


let m =
minutes < 10 ? "0"+minutes : minutes;


let s =
seconds < 10 ? "0"+seconds : seconds;



display.innerHTML =
`${h}:${m}:${s}`;


}





function start(){


if(timer)
return;



timer=setInterval(()=>{


if(countdown){



if(hours==0 && minutes==0 && seconds==0){


pause();


alert("⏰ Timer Completed");


return;


}



if(seconds==0){


seconds=59;



if(minutes>0){

minutes--;

}

else{

hours--;

minutes=59;

}


}

else{

seconds--;

}


}




else{


seconds++;



if(seconds==60){

seconds=0;

minutes++;

}



if(minutes==60){

minutes=0;

hours++;

}


}



updateDisplay();



},1000);


}





function pause(){


clearInterval(timer);

timer=null;


}





function reset(){


pause();


seconds=0;

minutes=0;

hours=0;


countdown=false;


updateDisplay();


}




function setTimer(){


pause();


hours =
parseInt(document.getElementById("hour").value) || 0;


minutes =
parseInt(document.getElementById("minute").value) || 0;


seconds =
parseInt(document.getElementById("second").value) || 0;



countdown=true;


updateDisplay();


}





function lap(){


if(timer){


let li =
document.createElement("li");


li.innerHTML =
"🏁 Lap : "+display.innerHTML;


laps.appendChild(li);


}


}




function clearLaps(){


laps.innerHTML="";


}





document.addEventListener("keydown",function(e){


if(e.code==="Space"){


timer ? pause() : start();


}



if(e.key==="r"){


reset();


}


});