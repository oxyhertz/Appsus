import { noteService } from '../services/notes-services.js';
import { utilService } from '../../../services/util-service.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  template: `
        <section class="notes-add-container">

                <input :placeholder="placeholder"  v-model="title" type="text" >
                <div class="note-types-add">
                    <div @click="setType('noteTxt')">
                    <i class="fa-solid fa-square-pen"></i>
                    </div>
                    <div @click="setType('noteImg')">
                    <i class="fa-solid fa-image"></i>
                    </div>
                    <div @click="setType('noteVid')">
                    <i class="fa-brands fa-youtube"></i>
                    </div>
                    <div @click="setType('noteList')">
                        <i class="fa-solid fa-list"></i>
                    </div>
                    <div @click="onSaveNote">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
        </section>
    `,
  components: {},
  created() {
    this.note = noteService.getEmptyNote();
  },
  data() {
    return {
      note: null,
      title: '',
      placeholder: `What's on your mind...`,
    };
  },
  methods: {
    onSaveNote() {
      if (this.note.type === 'noteImg' || this.note.type === 'noteVid')
        this.note.info.url = this.title;
      if (this.note.type === 'noteTxt') this.note.info.txt = this.title;
      if (this.note.type === 'noteList') {
        var todos = this.title.split(',').map(todoTxt => {
          return { id: utilService.makeId(), txt: todoTxt, doneAt: null };
        });
        this.note.info.todos = todos;
      }
      noteService.save(this.note).then(() => {
        eventBus.emit('updateNotes');
      });
    },
    setType(type) {
      this.note.type = type;
      switch (type) {
        case 'noteImg':
          this.placeholder = 'Enter image URL...';
          break;
        case 'noteVid':
          this.placeholder = 'Enter video URL...';
          break;
        case 'noteTxt':
          this.placeholder = `What's on your mind...`;
          break;
        case 'noteList':
          this.placeholder = 'Enter comma seperated list...';
      }
    },
  },
  computed: {},
  unmounted() {},
};
