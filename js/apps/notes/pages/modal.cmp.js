import { eventBus } from '../../../services/eventBus-service.js';
import { noteService } from '../services/notes-services.js';
import noteTxt from './note-txt-details.cmp.js';
import noteImg from './note-img-details.cmp.js';
import noteVid from './note-vid-details.cmp.js';
import noteList from './note-list-details.cmp.js';
import noteActionsDetails from '../cmps/note-actions-details.cmp.js';

export default {
  props: ['note'],
  template: `
        <section class="note-modal-container" :style="{'background-color': note.bgColor}">
            <component :is="note.type" :note="note"></component>
            <p>Last Edited {{lastEditTime}}</p>
            <note-actions-details @updateColor="updateColor" @sendNote="sendNote" @removeNote="removeNote" />
        </section>
    `,
  components: {
    noteTxt,
    noteImg,
    noteVid,
    noteList,
    noteActionsDetails,
  },
  created() {},
  data() {
    return {};
  },
  methods: {
    sendNote() {
      let subject = this.note.title;
      let body = this.note.info.txt;
      if (this.note.type === 'noteImg' || this.note.type === 'noteVid')
        body = this.note.info.url;
      if (this.note.type === 'noteList') {
        body = this.note.info.todos.map(todo => todo.txt).join(',');
      }
      this.$router.push(`/email?subject=${subject}&body=${body}`);
    },
    updateNote(updatedNote) {
      this.note = updatedNote;
      this.note.lastEdit = Date.now();
      noteService.update(this.note);
    },
    updateColor(color) {
      this.note.bgColor = color;
      this.note.lastEdit = Date.now();
      noteService.update(this.note);
    },
    removeNote() {
      const id = this.note.id;
      noteService.remove(id).then(() => {
        this.note.lastEdit = Date.now();
        this.$emit('removeNote');
        eventBus.emit('updateNotes');
      });
    },
  },
  computed: {
    lastEditTime() {
      var date = new Date(this.note.lastEdit);
      date = `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:${
        date.getMinutes() < 10 ? `0` + date.getMinutes() : date.getMinutes()
      }`;
      return date;
    },
  },
  unmounted() {},
};
