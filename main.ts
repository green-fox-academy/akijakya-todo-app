'use strict';

import { listTasks } from './list-tasks';
import { addNewTask } from './add-new-task';

const args: string[] = process.argv; //for using command line arguments. Don't forget that it is a string array w/ atleast 2 elements already!!!



function printUsage () {
    if (args.length === 2) {
        console.log('Command Line Todo application');
        console.log('=============================\n');
        console.log('Command line arguments:');
        console.log('    -l    Lists all the tasks\n    -a    Adds a new task\n    -r    Removes a task\n    -c    Completes a task');
    } else if (args[2] === '-l'){
        listTasks();
    } else if (args[2] === '-a'){
        if (args[3] !== undefined) {
            addNewTask(args[3]);
        } else {
            console.log('Unable to add: no task provided');
        }
    } else if (args[2] === '-r'){
        // here comes the call for a function
    } else if (args[2] === '-l'){
        // here comes the call for a function
    } else {
        console.log('this is the error handling');
  }
}

printUsage();