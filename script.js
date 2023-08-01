const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  // Add click event to mark task as completed
  newTask.addEventListener('click', () => {
    newTask.classList.toggle('completed');
  });

  taskList.appendChild(newTask);
  taskInput.value = '';
}

// Add event listener to the input field
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
