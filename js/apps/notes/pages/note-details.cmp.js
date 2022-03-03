import { noteService } from '../services/notes-services.js';
import noteActionsDetails from '../cmps/note-actions-details.cmp.js';
import noteTxt from './note-txt-details.cmp.js';
import noteImg from './note-img-details.cmp.js';
import noteVid from './note-vid-details.cmp.js';
import noteList from './note-list-details.cmp.js';

export default {
  template: `
        <section v-if="note" class="note-details" :style="{'background-color': note.bgColor}">
           <component :is="note.type" @updateNote="updateNote" :note="note"></component>
          <note-actions-details @updateColor="updateColor" @removeNote="removeNote" />
          </section>
    `,
  components: {
    noteTxt,
    noteImg,
    noteVid,
    noteList,
    noteActionsDetails,
  },
  created() {
    const id = this.$route.params.noteId;
    noteService.get(id).then(note => (this.note = note));
  },
  data() {
    return {
      note: null,
    };
  },
  methods: {
    loadNote() {
      noteService.get(this.noteId).then(note => (this.note = note));
    },
    updateNote(updatedNote) {
      this.note = updatedNote;
      noteService.update(this.note);
    },
    updateColor(color) {
      this.note.bgColor = color;
      noteService.update(this.note);
    },
    removeNote() {
      const id = this.note.id;
      noteService.remove(id).then(() => {
        this.$router.push('/notes');
      });
    },
  },
  watch: {
    noteId: {
      handler() {
        this.loadNote();
      },
      immediate: true,
    },
  },
  computed: {
    noteId() {
      return this.$route.params.noteId;
    },
  },
  unmounted() {},
};
