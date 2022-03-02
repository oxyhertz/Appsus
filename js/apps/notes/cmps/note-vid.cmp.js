export default {
  props: ['note'],
  template: `
        <section class="note note-vid">
            <iframe width="420" height="315"
            :src="note.info.url">
            </iframe>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  unmounted() {},
};
