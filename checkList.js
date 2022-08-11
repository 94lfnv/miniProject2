const inputSub = document.querySelector(".input-sub");
const inputText = document.querySelector(".input-text");
const checkList = document.querySelector(".check-list");

let toDos = [];

const saveToDo = () => {
  localStorage.setItem("toDos", JSON.stringify(toDos));
};

const deleteToDo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDo();
};

const paintToDo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.textContent = "x";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  checkList.appendChild(li);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const inputValue = inputText.value;
  inputText.value = "";
  const newTodoObj = {
    text: inputValue,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDo();
};

inputSub.addEventListener("click", handleSubmit);

const savedToDo = localStorage.getItem("toDos");

if (savedToDo !== null) {
  const parsedToDo = JSON.parse(savedToDo);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
