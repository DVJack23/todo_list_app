const TodoList = require(`./todo_list.js`);
const prompt = require('prompt-sync')();

function menu() {
    console.log(`MAIN MENU`);
    console.log(`1. Add new task\n2. Remove task\n3. List all tasks\n4. Mark task as done\n5. Exit`);
    let options = 5;
    let option = parseInt(prompt(`Choose your option: `));
    while (isNaN(option) || option < 1 || option > options) {
        option = parseInt(prompt(`Choose your option (1 - ${options}): `));
    }
    console.log();
    if (option === 1) {
        console.log(`ADD NEW TASK`);
        let title = prompt(`Title: `);
        let description = prompt(`Description: `);
        todoList.addTask(title, description);
        console.log();
        return true;
    } else if (option === 2) {
        console.log(`REMOVE TASK`);
        todoList.removeTask();
        console.log();
        return true;
    } else if (option === 3) {
        console.log(`LIST ALL TASKS`);
        todoList.listTasks();
        console.log();
        return true;
    } else if (option === 4) {
        console.log(`MARK AS DONE`);
        todoList.markTaskDone()
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