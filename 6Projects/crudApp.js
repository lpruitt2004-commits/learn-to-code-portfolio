
// CRUD App Project Starter
// This project demonstrates Create, Read, Update, and Delete operations.

// Example: Simple in-memory task manager
// ai: explain what this array stores
let tasks = ['Learn JavaScript', 'Build a CRUD app'];

// ai: show how to add a new task
function addTask(task) {
	tasks.push(task);
}

// ai: show how to list all tasks
function listTasks() {
	return tasks;
}

// ai: show how to update a task
function updateTask(index, newTask) {
	if (tasks[index]) {
		tasks[index] = newTask;
	}
}

// ai: show how to delete a task
function deleteTask(index) {
	if (tasks[index]) {
		tasks.splice(index, 1);
	}
}

// Example usage:
addTask('Review CRUD concepts');
console.log('All tasks:', listTasks());
updateTask(0, 'Master JavaScript');
deleteTask(1);
console.log('Updated tasks:', listTasks());

// AI Prompt Suggestions:
// - "Show an example of CRUD operations in React."
// - "How do I persist tasks to localStorage?"
// - "How can I add edit/delete buttons in my UI?"
