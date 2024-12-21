const TodoList = require(`./todo_list.js`);
const Task = require('./task.js');
const prompt = require('prompt-sync')();

function menu() {
    console.log(`1. Add new task\n2. Remove task\n3. List all tasks\n4. Exit`);
    let option = parseInt(prompt(`Choose your option: `));
    while (isNaN(option) || option < 1 || option > 4) {
        option = parseInt(prompt(`Choose your option (1 - 4): `));
    }
    if (option === 1) {
        let title = prompt(`Title: `);
        let description = prompt(`Description: `);
        todoList.addTask(title, description);
        console.log();
        return true;
    } else if (option === 2) {
        todoList.removeTask();
        console.log();

        return true;
    } else if (option === 3) {
        todoList.listTasks();
        console.log();

        return true;
    } else {
        return false;
    }

}

// Application
let todoList = new TodoList();
let run = true;
while (run) {
    run = menu();
}