document.getElementById("add-task-btn").addEventListener("click", addTask);
document.getElementById("show-complete-btn").addEventListener("click", showCompleteTasks);
document.getElementById("show-pending-btn").addEventListener("click", showPendingTasks);

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        let li = document.createElement("li");
        let taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        // Create action buttons container
        let actionButtons = document.createElement("div");
        actionButtons.classList.add("action-buttons");

        // Edit Button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit");
        editBtn.addEventListener('click', () => {
            let input = document.createElement("input");
            input.type = "text";
            input.value = taskSpan.textContent;
            li.replaceChild(input, taskSpan);
            input.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    taskSpan.textContent = input.value.trim() !== "" ? input.value : taskSpan.textContent;
                    li.replaceChild(taskSpan, input);
                }
            });
        });
        actionButtons.appendChild(editBtn);

        // Complete Button
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add('complete');
        completeBtn.addEventListener('click', () => {
            if (completeBtn.textContent === "Complete") {
                completeBtn.textContent = "Completed";  
                completeBtn.classList.add('completed-btn');
                li.classList.add('completed');
            } else {
                completeBtn.textContent = "Complete";  
                completeBtn.classList.remove('completed-btn');
                li.classList.remove('completed');
            }
        });
        actionButtons.appendChild(completeBtn);

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        actionButtons.appendChild(deleteBtn);

        li.appendChild(actionButtons);
        taskList.appendChild(li);

        taskInput.value = ""; 
    }
}

// Function to show only complete tasks
function showCompleteTasks() {
    const tasks = document.querySelectorAll("#task-list li");
    tasks.forEach(task => {
        const completeBtn = task.querySelector('.complete');
        if (completeBtn && completeBtn.textContent === "Completed") {
            task.style.display = "flex"; 
        } else {
            task.style.display = "none";  
        }
    });
}

// Function to show only pending tasks
function showPendingTasks() {
    const tasks = document.querySelectorAll("#task-list li");
    tasks.forEach(task => {
        const completeBtn = task.querySelector('.complete');
        if (completeBtn && completeBtn.textContent === "Complete") {
            task.style.display = "flex"; 
        } else {
            task.style.display = "none";  
        }
    });
}
