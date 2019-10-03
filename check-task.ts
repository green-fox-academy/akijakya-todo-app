const fs = require ('fs');

export function checkTask (index:number) {
    let todoLines:string [] = [];

    try {
        todoLines = fs.readFileSync('todos.txt', 'utf8').split('\n');
    }
    catch (e) {
        console.log('Error: ', e);
    }

    if (todoLines.length >= index) {
        let newTodoLine:string = todoLines[index-1].replace(/[ ]/, 'x');
        let newTodoLines:string [] = todoLines;
        newTodoLines.splice(index-1, 1);
        newTodoLines.splice(index-1, 0, newTodoLine);
        try {
            fs.writeFileSync('todos.txt', newTodoLines.join('\n'), 'utf8');
        }
        catch (e) {
            console.log('Error: ', e);
        }
    } else {
        console.log('Unable to check: index is out of bound');
    }
}