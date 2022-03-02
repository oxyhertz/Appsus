import { noteService } from '../services/notes-services.js';
import notesList from './notes-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';

export default {
  template: `
              <section>
                  <h2 v-if="noNotes">There Are No Notes Yet</h2>
                  <h2 v-if="!pinnedNotes && !notes"></h2>
                  <h2 v-if="pinnedNotes && pinnedNotes.length">Pinned Notes</h2>
                  <notes-list :notes="pinnedNotes" />
                    <h2 v-if="pinnedNotes.length && notes.length">Other Notes</h2>
                  <notes-list :notes="notes" />
              </section>
          
          `,
  components: {
    notesList,
  },
  data() {
    return {
      notes: null,
      pinnedNotes: null,
    };
  },
  created() {
    eventBus.on('updateNotes', this.updateNotes);
    this.updateNotes();
  },
  methods: {
    updateNotes() {
      noteService.query().then(notes => {
        this.notes = notes.filter(note => !note.isPinned);
        this.pinnedNotes = notes.filter(note => note.isPinned);
      });
    },
  },
  computed: {
    noNotes() {
      return (
        (!this.notes && !this.pinnedNotes) ||
        (!this.notes.length && !this.pinnedNotes.length)
      );
    },
  },
};
