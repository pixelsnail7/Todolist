const addInput = document.getElementById("addInput");
const addBtn = document.getElementById("addBtn");
const taskBox = document.getElementById("taskBox");

function createTodo(todo) {
    // Check if the input is not empty
    if (!todo) return;

    const tasks = document.createElement("div");
    const endTask = document.createElement("button");
    const taskText = document.createElement("p");
    const delTask = document.createElement("button");

    tasks.classList.add("taskBoxes");
    endTask.classList.add("endTask");
    taskText.classList.add("taskText");
    delTask.classList.add("delTask");

    taskText.innerText = todo;
    endTask.innerText = "✔︎";
    delTask.innerText = "ꕤ";

    // Append elements
    tasks.appendChild(endTask);
    tasks.appendChild(taskText);
    tasks.appendChild(delTask);
    taskBox.appendChild(tasks); // Fixed this line

    // Add event listener to delete the task
    delTask.addEventListener("click", () => {
        taskBox.removeChild(tasks);
    });

    // Add event listener to mark the task as complete
    endTask.addEventListener("click", () => {
        taskText.style.textDecoration = "line-through"; // Mark as complete
        endTask.disabled = true; // Disable the End button after completion
    });

    // Clear the input field
    addInput.value = '';
}

addBtn.addEventListener("click", () => {
    let todo = addInput.value.trim(); // Trim to avoid empty spaces
    createTodo(todo);
});

// Add event listener to the input field for Enter key
addInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let todo = addInput.value.trim(); // Trim to avoid empty spaces
        if (todo) { // Check if the trimmed input is not empty
            createTodo(todo);
            addInput.value = ""; // Clear the input after adding
        }
    }
});
