//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  //prevnt form submitting
  event.preventDefault();
  console.log("Added Successfully");
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "hello";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  //delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("complete-button");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
}
