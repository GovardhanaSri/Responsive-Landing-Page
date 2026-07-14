let tasks =
JSON.parse(localStorage.getItem("tasks")) || [];




function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}




function addTask(){


let title =
document.getElementById("taskInput").value;



if(title==""){

alert("Please enter task");

return;

}




let newTask={


id:Date.now(),


title:title,


date:
document.getElementById("taskDate").value,


category:
document.getElementById("category").value,


priority:
document.getElementById("priority").value,


done:false


};




tasks.push(newTask);


saveTasks();


showTasks();



document.getElementById(
"taskInput"
).value="";


}





function showTasks(){


let list =
document.getElementById("taskList");


list.innerHTML="";




let search =
document.getElementById("search")
.value.toLowerCase();




let filter =
document.getElementById("filter")
.value;




tasks


.filter(task=>{


if(filter=="done")

return task.done;


if(filter=="pending")

return !task.done;


return true;


})



.filter(task=>

task.title
.toLowerCase()
.includes(search)

)




.forEach(task=>{



let li =
document.createElement("li");



if(task.done)

li.classList.add("completed");




li.innerHTML=`

<div class="task-info">


<b>${task.title}</b>


<span>
📁 ${task.category}
|
🔥 ${task.priority}
</span>


<small>
⏰ ${task.date || "No Date"}
</small>


</div>



<div class="actions">


<button onclick="completeTask(${task.id})">
✔
</button>


<button class="edit"
onclick="editTask(${task.id})">
✏
</button>


<button class="delete"
onclick="deleteTask(${task.id})">
🗑
</button>


</div>


`;



list.appendChild(li);


});



updateProgress();


}





function completeTask(id){


let task =
tasks.find(t=>t.id==id);



task.done =
!task.done;



saveTasks();

showTasks();


}




function deleteTask(id){


tasks =
tasks.filter(
t=>t.id!=id
);



saveTasks();


showTasks();


}





function editTask(id){


let task =
tasks.find(
t=>t.id==id
);



let value =
prompt(
"Edit task",
task.title
);



if(value){


task.title=value;


saveTasks();


showTasks();


}


}





function updateProgress(){



let done =
tasks.filter(
t=>t.done
).length;



let total =
tasks.length;



let percent =
total ?
(done/total)*100 :
0;



document.getElementById(
"progressBar"
)
.style.width =
percent+"%";



document.getElementById(
"count"
)
.innerHTML =
done+" / "+total+
" Completed";


}




showTasks();