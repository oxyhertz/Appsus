import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
  query,
  get,
  remove,
  save,
  update,
};

function query() {
  return storageService.query(NOTES_KEY);
}

function get(noteId) {
  return storageService.get(NOTES_KEY, noteId);
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}

function save(note) {
  return storageService.post(NOTES_KEY, note);
}

function update(note) {
  return storageService.put(NOTES_KEY, note);
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);

  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        type: 'noteTxt',
        isPinned: true,
        info: {
          txt: 'Fullstack Me Baby!',
        },
        bgColor: 'yellow',
      },
      {
        id: 'n102',
        type: 'noteImg',
        isPinned: false,
        info: {
          url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wJ0gYHgm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/d440mmj72v2vi7ad76ir.png',
          title: 'Bobi and Me',
        },
        bgColor: 'red',
      },
      {
        id: 'n103',
        type: 'note-list',
        isPinned: true,
        info: {
          label: 'Get my stuff together',
          todos: [
            { txt: 'Driving liscence', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
        bgColor: 'blue',
      },
      {
        id: 'n104',
        type: 'noteVid',
        isPinned: false,
        info: {
          url: `https://www.youtube.com/watch?v=tgbNymZ7vqY`,
        },
        bgColor: 'blue',
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
  return notes;
}
