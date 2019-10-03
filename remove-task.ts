const fs = require ('fs');

export function removeTask (index:number) {
    let todoLines:string [] = fs.readFileSync('todos.txt', 'utf8').split('\n');
    if (todoLines.length >= index) {
        todoLines.splice(index-1, 1);
        fs.writeFileSync('todos.txt', todoLines.join('\n'), 'utf8');
    } 
}