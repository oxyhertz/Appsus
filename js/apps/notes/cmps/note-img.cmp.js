export default {
  props: ['note'],
  template: `
          <section class="note note-img" :style="{ 'background-color': note.bgColor }">
              <img :src="note.info.url" alt="">
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
