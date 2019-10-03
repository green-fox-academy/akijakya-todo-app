const fs = require ('fs');

export function listTasks () {
    let todoLines:string [] = fs.readFileSync('todos.txt', 'utf8').split('\n');
    if (todoLines.length <= 1 && todoLines[0] === '') {
        console.log('No todos for today! :)');
    } else {
        todoLines.forEach(function (e, i) {
            console.log(i+1 + ' - ' + e);
        });
    }
}