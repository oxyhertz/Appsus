import noteTxt from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-vid.cmp.js';

export default {
  props: ['note'],
  template: `
        {{note.type}}
        <component :is="note.type" :note="note"></component>
              
              `,
  components: {
    noteTxt,
    noteImg,
    noteVideo,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {
    noteType() {
      return ``;
    },
  },
};
