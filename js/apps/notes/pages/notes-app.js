import { noteService } from '../services/notes-services.js';
import notesList from './notes-list.cmp.js';

export default {
  template: `
              <section>
                  <notes-list :notes="notes" />
              </section>
          
          `,
  components: {
    notesList,
  },
  data() {
    return {
      notes: null,
    };
  },
  created() {
    noteService.query().then(notes => {
      console.log(notes);
      return (this.notes = notes);
    });
  },
  methods: {},
  computed: {},
};
