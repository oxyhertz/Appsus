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
                  <notes-list :notes="pinnedNotesToDisplay" />
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
    if (this.$route.query.subject || this.$route.query.body) {
      console.log(this.$route.query.subject);
      console.log(this.$route.query.body);
      // this.$router.push('/email');
    }
  },
  watch: {
    'this.$route'() {
      console.log('Hoka moka');
    },
  },
  methods: {
    hideModal() {
      this.currNote = null;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
      console.log('hi');
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
      if (!this.filterBy) return this.notes;
      const regex = new RegExp(this.filterBy.title, 'i');
      if (this.filterBy.type) {
        return this.notes.filter(note => {
          return regex.test(note.title) && note.type === this.filterBy.type;
        });
      } else {
        return this.notes.filter(note => {
          console.log(note);
          return regex.test(note.title);
        });
      }
    },

    pinnedNotesToDisplay() {
      if (!this.filterBy) return this.pinnedNotes;
      const regex = new RegExp(this.filterBy.title, 'i');
      if (this.filterBy.type) {
        return this.pinnedNotes.filter(note => {
          return regex.test(note.title) && note.type === this.filterBy.type;
        });
      } else {
        return this.pinnedNotes.filter(note => {
          console.log(note);
          return regex.test(note.title);
        });
      }
    },
  },
};
