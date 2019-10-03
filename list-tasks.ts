const fs = require ('fs');

export function listTasks () {
    let todoLines:string [] = fs.readFileSync('todos.txt', 'utf8').split('\r\n');
    todoLines.forEach(function (e, i) {
        console.log(i+1 + ' - ' + e);
    });
}