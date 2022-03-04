import noteActions from './note-actions.cmp.js';
import { noteService } from '../services/notes-services.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  props: ['note'],
  template: `
        <section class="note note-vid" @mouseleave="hover = false" @mouseover="hover = true">
          <h3>{{note.title}}</h3>
            <div class="video-container">
                <iframe class="responsive-iframe" 
                :src="embedVidUrl"
                frameBorder="0"
                >
                </iframe>
            </div>
            <note-actions class="note-actions-container" :class="{'show-note-actions': hover}" :note="note" @duplicateNote="duplicateNote" @removeNote="removeNote" @togglePin="togglePin" @updateColor="updateColor"/>
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
