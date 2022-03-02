export default {
  props: ['note'],
  template: `
        <section class="note-text" :style="{ 'background-color': note.bgColor }">
            <p>{{note.info.txt}}</p>
        </section>
    `,
  components: {},
  created() {
    console.log();
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
