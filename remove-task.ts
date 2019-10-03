const fs = require ('fs');

export function removeTask (index:number) {
    let todoLines:string [] = [];

    try {
        todoLines = fs.readFileSync('todos.txt', 'utf8').split('\n');
    }
    catch (e) {
        console.log('Error: ', e);
    }

    if (todoLines.length >= index) {
        todoLines.splice(index-1, 1);
        try {
            fs.writeFileSync('todos.txt', todoLines.join('\n'), 'utf8');
        }
        catch (e) {
            console.log('Error: ', e);
        }
    } else {
        console.log('Unable to remove: index is out of bound');
    }
}