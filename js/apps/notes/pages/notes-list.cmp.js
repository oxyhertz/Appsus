import notePreview from '../cmps/note-preview.cmp.js';

export default {
  props: ['notes'],
  template: `
                <section class="notes-list-container" >
  
                  <ul class="notes-list">
                    <li v-for="note in notes" :key="note.id" class="note-preview-container">
                        <note-preview :note="note"/>
                    </li>
                  </ul>
                </section>
            
            `,
  components: {
    notePreview,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {},
};
