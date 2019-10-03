const fs = require ('fs');

export function addNewTask (todo:string) {
    let todoLines:string [] = [];

    try {
        todoLines = fs.readFileSync('todos.txt', 'utf8').split('\n');
    }
    catch (e) {
        console.log('Error: ', e);
    }

    if (todoLines.length <= 1 && todoLines[0] === '') {
        try {
            fs.appendFileSync('todos.txt', '[ ] ' + todo, 'utf8');
        }
        catch (e) {
            console.log('Error: ', e);
        }
    } else {
        try {
            fs.appendFileSync('todos.txt', '\n[ ] ' + todo, 'utf8');
        }
        catch (e) {
            console.log('Error: ', e);
        }
    }
}