// cap 9
////////////////////////////////////////////////////////////////////////////////////////////////
// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file was created by Nod.js!!');
// fs.appendFileSync('notes.txt', 'Data to append');

// cap 10
////////////////////////////////////////////////////////////////////////////////////////////////
// const { add, name } = require('./utils.js')
// //const name = "Santiago"

// console.log(add(2,3));
// console.log(name)

// chalenge
const getNotes = require('./notes.js')
const validator = require('validator')
const yargs = require('yargs')

// const chalk = require('chalk')
// console.log(getNotes())
// console.log(validator.isEmail('asdasd@asdads.com'))
// console.log(chalk.green.inverse.bold('Success'))

//console.log(process.argv)
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'        }
    },
    handler: function (argv) {
        console.log('Adding new note!', argv)
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
})

yargs.parse()
