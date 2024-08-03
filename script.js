document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const refreshButton = document.getElementById('refresh-button');
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    });

    // Refresh tasks
    refreshButton.addEventListener('click', loadTasks);

    // Add new task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
        }
        taskInput.value = '';
    });

    // Load tasks from server
    function loadTasks() {
        fetch('php/fetch_tasks.php')
            .then(response => response.json())
            .then(tasks => {
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task.task;
                    taskList.appendChild(li);
                });
            });
    }

    // Add task to server
    function addTask(task) {
        fetch('php/add_task.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task })
        }).then(loadTasks);
    }

    loadTasks();
});
