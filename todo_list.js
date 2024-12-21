const Task = require('./task.js');
const task = require("./task");
const prompt = require('prompt-sync')();

// add_task() – pridá novú úlohu do zoznamu.
// remove_task() – odstráni úlohu zo zoznamu podľa ID.
// list_tasks() – zobrazí všetky úlohy.
// mark_task_done() – označí úlohu ako dokončenú podľa ID.

class TodoList {
    constructor() {
        this.tasks = [];
        this.id = 0;
    }

    addTask(title, description) {
        let task = new Task(this.id++, title, description);
        this.tasks.push(task);
        console.log(`Added new To do:  with ID:${ this.id } `);
    }

    removeTask() {
        let x = 1;
        for (let task of this.tasks) {
            console.log(`${x}) Title:${task.title} Description:${task.description}`);
            x++;
        }
        let index = parseInt(prompt(`Choose a task to delete:`));
        this.tasks.splice(index - 1, 1);
    }

    listTasks() {
        console.log(`\nList of current tasks: `)
        for (let task of this.tasks) {
            task.__str__()
        }

    }

    markTaskDone(task) {}
}

module.exports = TodoList;