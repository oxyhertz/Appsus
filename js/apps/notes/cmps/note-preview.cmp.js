import noteTxt from './note-text.cmp.js';

export default {
  props: ['note'],
  template: `
        {{note.type}}
        <component :is="note.type" :note="note"></component>
              
              `,
  components: {
    noteTxt,
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
