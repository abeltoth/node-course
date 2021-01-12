const yargs = require('yargs');
const notes = require('./notes');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) { 
        notes.removeNote(argv.title);
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read the note items',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the note items',
    handler() { 
        notes.listNotes();
    }
});

yargs.parse();
