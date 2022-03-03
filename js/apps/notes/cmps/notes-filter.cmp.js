export default {
  template: `
        <section class="notes-filter-container">
        <label>
                Search
                <input ref="vendorInput" 
                    @input="setFilter" 
                    type="text" 
                    v-model="filterBy.vendor" 
                    placeholder="By Title"
                />
            </label>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
      filterBy: {
        title: '',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('filtered', { ...this.filterBy });
    },
  },
  computed: {},
  unmounted() {},
};
