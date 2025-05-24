let tasks = [];

function renderTasks(tasks) {
  const todoList = document.querySelector("#todoList");
  todoList.innerHTML = "";

  tasks.forEach(task => {
    const taskItem = document.createElement("li");
    if (task.completed) {
      taskItem.classList.add("strike");
    }

    taskItem.innerHTML = `
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    `;

    todoList.appendChild(taskItem);
  });
}

function newTask() {
  const input = document.querySelector("#todo");
  const taskDetail = input.value.trim();

  if (taskDetail !== "") {
    const task = { detail: taskDetail, completed: false };
    tasks.push(task);
    renderTasks(tasks);
    input.value = "";
  }
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector('p').innerText
  );

  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );

  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
}

function manageTasks(event) {
  const action = event.target.dataset.action;
  const taskElement = event.target.closest("li");

  if (!action || !taskElement) return;

  if (action === "delete") {
    removeTask(taskElement);
  } else if (action === "complete") {
    completeTask(taskElement);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
