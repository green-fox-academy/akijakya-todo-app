'use strict';

import { listTasks } from './list-tasks';
import { addNewTask } from './add-new-task';
import { removeTask } from './remove-task';
import { checkTask } from './check-task';

const args: string[] = process.argv;

function printUsage () {
    if (args.length === 2) {
        console.log('Command Line Todo application');
        console.log('=============================\n');
        console.log('Command line arguments:');
        console.log('    -l    Lists all the tasks\n    -a    Adds a new task\n    -r    Removes a task\n    -c    Completes a task');
    
    } else if (args[2] === '-l') {
        listTasks();

    } else if (args[2] === '-a') {
        if (args[3] !== undefined) {
            addNewTask(args[3]);
        } else {
            console.log('Unable to add: no task provided');
        }

    } else if (args[2] === '-r') {
        if (args[3] !== undefined && isNaN(parseInt(args[3])) === false) {
            removeTask(parseInt(args[3]));
        } else if (args[3] !== undefined && isNaN(parseInt(args[3])) === true) {
            console.log('Unable to remove: index is not a number');
        } else {
            console.log('Unable to remove: no index provided');
        }
        
    } else if (args[2] === '-c') {
        if (args[3] !== undefined && isNaN(parseInt(args[3])) === false) {
            checkTask(parseInt(args[3]));
        } else if (args[3] !== undefined && isNaN(parseInt(args[3])) === true) {
            console.log('Unable to check: index is not a number');
        } else {
            console.log('Unable to check: no index provided');
        }
    
    } else {
        console.log('Unsupported argument');
  }
}

printUsage();