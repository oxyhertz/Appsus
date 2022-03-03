import notePreview from '../cmps/note-preview.cmp.js';
import noteTxt from '../cmps/note-text.cmp.js';
import noteImg from '../cmps/note-img.cmp.js';
import noteVid from '../cmps/note-vid.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
  props: ['notes'],
  template: `
                <section class="notes-list-container" >
  
                  <ul class="notes-list">
                    <li v-for="note in notes" :key="note.id" class="note-preview-container">
                      <component :is="note.type" :note="note" :style="{ 'background-color': note.bgColor }"></component>
                    
                    </li>
                  </ul>
                </section>
            
            `,
  components: {
    notePreview,
    noteTxt,
    noteImg,
    noteVid,
    noteList,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {},
};
