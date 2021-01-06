// Variables
const todoInput = document.querySelector('input');
const todoList = document.querySelector('ul');

// Methods
const addTodo = (e) => {
    console.log(e);
    // if key is enter
    if(e.defaultPrevented) {
        return;
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
        todo.appendChild(deleteButton);
        // add button icon
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-minus-circle', 'fa-lg');
        deleteButton.appendChild(deleteIcon);
        // add todo to document
        todoList.appendChild(todo);
        // empty input field
        todoInput.value = '';
        e.preventDefault();
    }
}

// Event Listeners 
todoInput.addEventListener('keydown', addTodo, false);