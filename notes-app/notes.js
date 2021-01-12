const chalk = require('chalk');
const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const selectedNoteIndex = notes.findIndex(note => note.title === title);

    if (selectedNoteIndex !== -1) {
        notes.splice(selectedNoteIndex, 1);
        saveNotes(notes);

        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const selectedNote = notes.find(note => note.title === title);

    if (selectedNote) {
        console.log(chalk.inverse(selectedNote.title));
        console.log(selectedNote.body);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes:'))
    notes.forEach(note => {
        console.log(note.title);
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes
};