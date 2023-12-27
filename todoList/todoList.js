const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');

todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("change", filterTodo)
function addTodo(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Вы вводите пустую строку!");
        return;
    }
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn');
    todoDiv.appendChild(completedButton);
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn');
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    if (item.classList.contains("delete_btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    } else if (item.classList.contains("complete_btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem");
    }
}
function filterTodo() {
    const todos = todoList.children;

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        switch (filterOption.value) {
            case "completed":
                if (todo.classList.contains("completedItem")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completedItem")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            default:
                todo.style.display = "flex";
        }
    }
}
