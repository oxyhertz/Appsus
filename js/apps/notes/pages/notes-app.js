import { noteService } from '../services/notes-services.js';
import notesList from './notes-list.cmp.js';
import { eventBus } from '../../../services/eventBus-service.js';
import noteAdd from './note-add.cmp.js';
import detailsModal from './modal.cmp.js';
import notesFilter from '../cmps/notes-filter.cmp.js';
export default {
  template: `
              <section class="notes-app-container">
                  <div :class="{'overlay':currNote}" @click="currNote = null"></div>
                  <note-add />
                  <notes-filter  @filtered="setFilter" />
                  <h2 v-if="noNotes">There Are No Notes Yet</h2>
                  <h2 v-if="!pinnedNotes && !notes"></h2>
                  <h2 v-if="pinnedNotes && pinnedNotes.length">Pinned Notes</h2>
                  <notes-list :notes="pinnedNotes" />
                    <h2 v-if="pinnedNotes.length && notes.length">Other Notes</h2>
                  <notes-list @openModal="openModal" :notes="notesToDisplay" />
                  <details-modal  v-if="currNote" :is="currNote.type"  :note="currNote" @removeNote="hideModal"/>
                </section>
          
          `,
  components: {
    notesList,
    noteAdd,
    detailsModal,
    notesFilter,
  },
  data() {
    return {
      notes: null,
      pinnedNotes: null,
      currNote: null,
      filterBy: null,
    };
  },
  created() {
    eventBus.on('updateNotes', this.updateNotes);
    eventBus.on('openEdit', this.openModal);
    eventBus.on('closeEdit', this.hideModal);
    this.updateNotes();
  },
  methods: {
    hideModal() {
      this.currNote = null;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    updateNotes() {
      noteService.query().then(notes => {
        this.notes = notes.filter(note => !note.isPinned);
        this.pinnedNotes = notes.filter(note => note.isPinned);
      });
    },
    openModal(note) {
      this.currNote = note;
      console.log(this.currNote);
      console.log('open modal');
    },
  },
  computed: {
    noNotes() {
      return (
        (!this.notes && !this.pinnedNotes) ||
        (!this.notes.length && !this.pinnedNotes.length)
      );
    },
    notesToDisplay() {
      var currNotes;
      noteService.query().then(notes => {
        currNotes = notes;
        console.log(currNotes);
        if (!this.filterBy) return currNotes;
        const regex = new RegExp(this.filterBy.title, 'i');
        return currNotes.filter(note => regex.test(note.title));
      });
    },
  },
};
