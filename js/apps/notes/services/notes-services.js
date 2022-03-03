import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';
import noteTextCmp from '../cmps/note-text.cmp.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
  query,
  get,
  remove,
  save,
  update,
  getEmptyNote,
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

function getEmptyNote() {
  return {
    id: _makeId(),
    type: 'noteTxt',
    title: '',
    isPinned: false,
    lastEdit: Date.now(),
    info: {
      txt: '',
    },
    bgColor: '#fff475',
  };
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);

  if (!notes || !notes.length) {
    notes = [
      {
        id: 'n101',
        title: 'Remember',
        type: 'noteTxt',
        isPinned: true,
        lastEdit: Date.now(),
        info: {
          txt: 'Fullstack Me Baby!',
        },
        bgColor: '#d7aefb',
      },
      {
        id: 'n102',
        type: 'noteImg',
        title: 'my img',
        isPinned: false,
        lastEdit: Date.now(),
        info: {
          url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--wJ0gYHgm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/d440mmj72v2vi7ad76ir.png',
          title: 'Bobi and Me',
        },
        bgColor: '#a7ffeb',
      },
      {
        id: 'n103',
        type: 'note-list',
        title: 'Get my stuff together',
        isPinned: true,
        lastEdit: Date.now(),
        info: {
          todos: [
            { txt: 'Driving liscence', doneAt: null, id: 335 },
            { txt: 'Coding power', doneAt: 187111111, id: 531 },
          ],
        },
        bgColor: '#fff475',
      },
      {
        id: 'n104',
        title: 'Good song',
        type: 'noteVid',
        isPinned: false,
        lastEdit: Date.now(),
        info: {
          url: `https://www.youtube.com/watch?v=tgbNymZ7vqY`,
        },
        bgColor: '#bdea8a',
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
  return notes;
}

function _makeId(length = 8) {
  var text = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
