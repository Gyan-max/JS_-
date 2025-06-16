document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const allTasksBtn = document.getElementById('allTasks');
    const activeTasksBtn = document.getElementById('activeTasks');
    const completedTasksBtn = document.getElementById('completedTasks');
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    
    // Current filter
    let currentFilter = 'all';
    
    // Load tasks from localStorage
    loadTasks();
    
    // Add event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    allTasksBtn.addEventListener('click', () => {
        setFilter('all');
    });
    
    activeTasksBtn.addEventListener('click', () => {
        setFilter('active');
    });
    
    completedTasksBtn.addEventListener('click', () => {
        setFilter('completed');
    });
    
    clearCompletedBtn.addEventListener('click', clearCompletedTasks);
    
    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {
            // Create task object
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            
            // Save to localStorage
            saveTask(task);
            
            // Create DOM element
            createTaskElement(task);
            
            // Clear input and focus
            taskInput.value = '';
            taskInput.focus();
            
            // Apply current filter
            applyFilter();
        }
    }
    
    // Function to create task DOM element
    function createTaskElement(task) {
        const li = document.createElement('li');
        li.className = 'task-item';
        if (task.completed) {
            li.classList.add('completed');
        }
        li.dataset.id = task.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            toggleTaskStatus(task.id);
        });
        
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    }
    
    // Function to save task to localStorage
    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Function to load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
    
    // Function to toggle task status
    function toggleTaskStatus(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Update in array
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        // Update in DOM
        const taskElement = document.querySelector(`.task-item[data-id="${id}"]`);
        if (taskElement) {
            taskElement.classList.toggle('completed');
        }
        
        // Apply current filter
        applyFilter();
    }
    
    // Function to delete task
    function deleteTask(id) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Remove from array
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Remove from DOM
        const taskElement = document.querySelector(`.task-item[data-id="${id}"]`);
        if (taskElement) {
            taskElement.remove();
        }
    }
    
    // Function to set active filter
    function setFilter(filter) {
        currentFilter = filter;
        
        // Update active filter button
        allTasksBtn.classList.toggle('active', filter === 'all');
        activeTasksBtn.classList.toggle('active', filter === 'active');
        completedTasksBtn.classList.toggle('active', filter === 'completed');
        
        // Apply filter
        applyFilter();
    }
    
    // Function to apply current filter
    function applyFilter() {
        const tasks = document.querySelectorAll('.task-item');
        
        tasks.forEach(task => {
            const isCompleted = task.classList.contains('completed');
            
            switch (currentFilter) {
                case 'active':
                    task.style.display = isCompleted ? 'none' : 'flex';
                    break;
                case 'completed':
                    task.style.display = isCompleted ? 'flex' : 'none';
                    break;
                default: // 'all'
                    task.style.display = 'flex';
            }
        });
    }
    
    // Function to clear completed tasks
    function clearCompletedTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        
        // Filter out completed tasks
        tasks = tasks.filter(task => !task.completed);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Remove completed tasks from DOM
        const completedTasks = document.querySelectorAll('.task-item.completed');
        completedTasks.forEach(task => task.remove());
    }
});
