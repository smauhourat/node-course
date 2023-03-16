const fs = require('fs')

const getNotes = function () {
    return "Your notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()
    if (notDuplicate(title, notes)) {
        notes.push({ title: title, body: body })
        saveNotes(notes)
    }
    console.log(notes)
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
    addNote: addNote
}