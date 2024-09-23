document.getElementById("add-task-btn").addEventListener("click", addTask);

function addTask() {
 const taskInput = document.getElementById("new-task");
 const taskText = taskInput.value.trim();


 if(taskText !== "") {
   const taskList = document.getElementById("task-list");

   let li = document.createElement("li");
   let taskSpan = document.createElement("span");
   taskSpan.textContent = taskText;
   li.appendChild(taskSpan);
   taskList.appendChild(li);


   // Edit Button
   let editBtn = document.createElement("button");
   editBtn.textContent = "Edit";
   editBtn.classList.add("edit");
   editBtn.addEventListener('click',()=>{
    const newTaskText = prompt("Edit Task", taskSpan.textContent);
    if(newTaskText !== "" && newTaskText !== null){
     li.firstChild.textContent = newTaskText;
    }
   })
   li.appendChild(editBtn);

   //Complete Button
   let completeBtn = document.createElement("button");
   completeBtn.textContent ="Complete";
   completeBtn.classList.add('Complete');
   completeBtn.addEventListener('click',()=>{
    li.classList.toggle('completed');
   });
   li.appendChild(completeBtn);

   // Detele Button
   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.addEventListener('click',()=>{
    taskList.removeChild(li);
   });
    li.appendChild(deleteBtn);

    taskInput.value = "";
 }
}