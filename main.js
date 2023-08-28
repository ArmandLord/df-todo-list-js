// Elmentos del DOM
const taskList = document.getElementById("task-list");
const total = document.getElementById("total");
const checked = document.getElementById("checked");
const input = document.getElementById("input");
const btnAddTask = document.getElementById("btn-add-task");

// Variables/Constantes
let tasks = [
  { id: 1, task: "Estudiar HTML", state: false },
  { id: 2, task: "Estudiar CSS", state: false },
  { id: 3, task: "Estudiar JavaScript", state: true },
];

// Funciones
//? Mostrar tareas en el DOM (render)
function renderElements() {
  let html = "";
  tasks.forEach((task) => {
    const { id, task: t, state } = task;
    html += `
        <tr>
            <td>${id}</td>
            <td>${t}</td>
            <td>
                <input type='checkbox' 
                onclick="completeTask(${id})"
                id='checkbox-${id}' ${state ? "checked" : ""}>
            </td>
            <td>
                <button onclick="delteTask(${id})">❌</button>
            </td>
        </tr>
    `;
  });

  taskList.innerHTML = html;
  // manipular total
  total.innerHTML = tasks.length;
  // manipular realizadas
  checked.innerHTML = tasks.filter((task) => task.state).length;
}

//? Eliminar tarea
function delteTask(id) {
  const newTask = tasks.filter((task) => task.id != id);
  tasks = newTask;
  renderElements();
}

//? Completar tarea
function completeTask(id) {
  const checkbox = document.getElementById(`checkbox-${id}`);
  tasks.forEach((task) => {
    if (task.id == id) {
      task.state = checkbox.checked;
    }
  });
  console.log(tasks);
  renderElements();
}

//? Agregar tarea
function addTask() {
  if (input.value.trim() === "") return alert("Tienes que escribir una tarea");
  const newTask = { id: tasks.length + 1, task: input.value, state: false };
  tasks.push(newTask);
  input.value = "";
  renderElements();
}

// Render
renderElements();

// Eventos
btnAddTask.addEventListener("click", addTask);
