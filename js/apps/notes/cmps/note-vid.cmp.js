import noteActions from './note-actions.cmp.js';
import { noteService } from '../services/notes-services.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note note-vid" >
            <div class="video-container">
                <iframe class="responsive-iframe" 
                :src="embedVidUrl">
                </iframe>
            </div>
            <note-actions :note="note" @duplicateNote="duplicateNote" @removeNote="removeNote" @togglePin="togglePin" @updateColor="updateColor"/>
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
    };
  },
  methods: {
    updateColor(color) {
      this.currNote.bgColor = color;
      noteService.update(this.currNote);
    },
    togglePin() {
      this.currNote.isPinned = !this.currNote.isPinned;
      noteService.update(this.currNote).then(res => {
        eventBus.emit('updateNotes');
      });
    },
    removeNote() {
      const id = this.currNote.id;
      noteService.remove(id).then(res => {
        eventBus.emit('updateNotes');
      });
    },
    duplicateNote() {
      noteService.save(this.currNote).then(() => eventBus.emit('updateNotes'));
    },
  },
  computed: {
    embedVidUrl() {
      return this.note.info.url.replace('watch?v=', 'embed/');
    },
  },
  unmounted() {},
};
