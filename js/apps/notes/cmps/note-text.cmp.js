import noteActions from './note-actions.cmp.js';
import { noteService } from '../services/notes-services.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note note-text" @mouseleave="hover = false" @mouseover="hover = true" :style="{ 'background-color': note.bgColor }">
            <h3>{{note.title}}</h3>
            <p>{{note.info.txt}}</p>
            <note-actions  v-if="hover" :note="note" @duplicateNote="duplicateNote" @removeNote="removeNote" @togglePin="togglePin"  @updateColor="updateColor" />
        </section>
    `,
  components: {
    noteActions,
  },
  created() {
    this.currNote = this.note;
  },
  data() {
    return {
      currNote: null,
      hover: false,
    };
  },
  methods: {
    updateColor(color) {
      this.currNote.bgColor = color;
      noteService.update(this.currNote);
    },
    togglePin() {
      this.currNote.isPinned = !this.currNote.isPinned;
      noteService
        .update(this.currNote)
        .then(() => eventBus.emit('updateNotes'));
    },
    removeNote() {
      const id = this.currNote.id;
      noteService.remove(id).then(() => eventBus.emit('updateNotes'));
    },
    duplicateNote() {
      noteService.save(this.currNote).then(() => eventBus.emit('updateNotes'));
    },
  },
};
