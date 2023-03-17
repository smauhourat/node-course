const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    if (notDuplicate(title, notes)) {
        notes.push({ title: title, body: body })
        console.log(chalk.green.inverse.bold('Note added!!!'))
        saveNotes(notes)
    } else {
        console.log(chalk.yellow.inverse.bold('Note title taken'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const result = notes.filter((e) => e.title !== title.toString())
    
    if (result.length < notes.length) {
        console.log(chalk.green.inverse.bold('Note removed!!!'))
        saveNotes(result)
    } else
        console.log(chalk.yellow.inverse.bold('Note note exist'))
    
}

const notDuplicate = function (title, notes) {
    const duplicatedNotes = notes.filter((e) => e.title === title)
    return duplicatedNotes.length == 0
}

const loadNotes = function () {
    try {
        const dataFile = fs.readFileSync('notes.json')

        return JSON.parse(dataFile)
    } catch (err) {
        return []
    }
}

const saveNotes = function (notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}