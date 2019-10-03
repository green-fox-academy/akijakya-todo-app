const fs = require ('fs');

export function addNewTask (todo:string) {
    fs.appendFileSync('todos.txt', todo +'\n', 'utf8');
}