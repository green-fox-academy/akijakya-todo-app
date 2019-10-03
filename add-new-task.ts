const fs = require ('fs');

export function addNewTask (todo:string) {
    let todoLines:string [] = fs.readFileSync('todos.txt', 'utf8').split('\n');
    if (todoLines.length <= 1 && todoLines[0] === '') {
        fs.appendFileSync('todos.txt', '[ ] ' + todo, 'utf8');
    } else {
        fs.appendFileSync('todos.txt', '\n[ ] ' + todo, 'utf8');
    }
}