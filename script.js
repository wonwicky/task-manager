const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="actions">
      <button class="action-btn complete">✔</button>
      <button class="action-btn delete">✖</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".complete").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });
}
