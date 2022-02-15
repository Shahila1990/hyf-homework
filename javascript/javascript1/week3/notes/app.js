const notes = [];

function saveNote(content, id) {
  if (typeof content === 'string' && typeof id === 'number') {
    let note = {
      // creating a single note object
      content: content,
      id: id,
    };
    notes.push(note);
  } else {
    console.log(
      'Your input is invalid.Content should be a string and the Id shold be a number'
    );
  }
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
saveNote('Do cleaning', 5);

console.log(notes);

//Get note by id
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      return notes[i];
    } else {
      return `this id is not available`;
    }
  }
}
let getNoteById = getNote(6);
console.log(getNoteById);

//log out all the notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();
