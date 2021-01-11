// Variables
const todoInput = document.querySelector('input');
const todoList = document.querySelector('ul');

// Methods
const addTodo = (e) => {
    console.log(e);
    if(e.target.value === '') {
        return
    }
    if(e.key === 'Enter') {
        // create todo
        const todo = document.createElement('div')
        todo.classList.add('todo');
        // add li
        const todoListElement = document.createElement('li');
        const todoText = document.createTextNode(todoInput.value);
        todoListElement.appendChild(todoText);
        todo.appendChild(todoListElement);
        // add button
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        // adding deleteTodo listener
        deleteButton.addEventListener('click', deleteTodo);
        todo.appendChild(deleteButton);
        // add button icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-minus-circle', 'fa-lg');
        deleteButton.appendChild(deleteIcon);
        // add todo to document
        todoList.insertBefore(todo, todoList.firstChild);
        todo.classList.add("todo-fade");
        // empty input field
        todoInput.value = '';
        e.preventDefault();
    }
}
const deleteTodo = (e) => {
    e.preventDefault();
    const clickedButton = e.target.parentNode;
    console.log(clickedButton);
    const toDelete = clickedButton.parentNode; // toDelete = <div class="todo"></div>
    toDelete.addEventListener("animationend", (e) => {todoList.removeChild(toDelete)}, false);
    toDelete.classList.add('todo-fadeOut');
    console.log(toDelete);
};
// Event Listeners 
todoInput.addEventListener('keydown', addTodo, false);
