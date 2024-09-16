// Select elements
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');

// Add task function
function addTask() {
    const taskText = newTaskInput.value.trim();

    // If input is not empty
    if (taskText !== "") {
        // Create a new list item
        const li = document.createElement('li');
        li.classList.add('task-item');

        // Add task text to list item
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add delete functionality to the button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear input field
        newTaskInput.value = "";
    }
}

// Add event listener to the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
