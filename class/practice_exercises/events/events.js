let tasks = [];

function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
    // get the list element from the DOM
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function newTask() {
    // get the value entered into the #todo input
    const task = document.querySelector("#todo").value;
    // add it to our arrays tasks
    tasks.push({ detail: task, completed: false });
    // render out the list
    renderTasks(tasks);
}

function removeTask(taskElement) {
    // Notice how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(e) {
    // did they click the delete or complete icon?
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.action === "delete") {
        removeTask(parent);
    }
    if (e.target.dataset.action === "complete") {
        completeTask(parent);
    }
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);